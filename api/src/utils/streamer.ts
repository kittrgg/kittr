import { IChannel } from "@Types/channelTypes"
import { IGame } from "@Types/gameTypes"
import { IKitBase, IKitOption } from "@Types/kitsTypes"
import { Request, Response } from "express"
import mongoose from "mongoose"
import Player from "../models/Player"
import Game from "../models/Game"
import KitBase from "../models/KitBase"
import KitOption from "../models/KitOption"
import KitStat from "../models/KitStat"

const allSetupsForComparisonQuery = async () => {
	const result = await Player.aggregate([
		{
			$unwind: {
				path: "$kits"
			}
		},
		{
			$group: {
				_id: null,
				kits: {
					$push: "$kits"
				}
			}
		},
		{
			$unwind: {
				path: "$kits"
			}
		},
		{
			$group: {
				_id: "$kits.baseId",
				matches: {
					$push: "$kits.options"
				}
			}
		}
	])

	const serialized = result.map((player: { _id: string; matches: Array<Array<mongoose.Types.ObjectId>> }) => {
		return {
			...player,
			matches: player.matches.map((match) => {
				return match.map((option) => {
					return option.toString()
				})
			})
		}
	})

	return { serialized }
}

const allGamesQuery = async () => {
	const result = await Game.find({})

	const serialized = result.map((elem: IGame) => ({
		...elem,
		_id: elem._id.toString(),
		releaseDate: elem!.releaseDate
	}))

	return serialized
}

const allBasesQuery = async () => {
	const result = await KitBase.find({})

	const serialized = result.map((elem: IKitBase) => ({
		...elem,
		_id: elem._id.toString(),
		gameId: elem.gameId.toString()
	}))

	return serialized
}

const allOptionsQuery = async () => {
	const result = await KitOption.find({})

	const serialized = result.map((elem: IKitOption) => ({
		...elem,
		_id: elem._id.toString()
	}))

	return serialized
}

interface IFunc {
	/**
	 * @params
	 * Array of raw channels from mongodb.
	 *
	 * @returns
	 * Promise with array of serialized channels.
	 */
	(channelsArr: IChannel[]): Promise<IChannel[]>
}

/** Serialize an array of players from mongodb. Needed to make getStaticProps happy. */
export const serializeChannels: IFunc = async (channelsArr) => {
	const [games, kitBases, kitOptions] = await Promise.all([allGamesQuery(), allBasesQuery(), allOptionsQuery()])

	return channelsArr.map((channel: IChannel) => ({
		...channel,
		_id: channel._id.toString(),
		games: channel.games.map((game: IGame) => ({
			...game,
			id: game.id.toString(),
			...games.find((rawGame: any) => rawGame._id.toString() === game.id.toString())
		})),
		createdDate: channel.createdDate.toString(),
		kits: channel.kits.map((kit) => ({
			...kit,
			_id: kit._id.toString(),
			base: kitBases
				.filter((base: IKitBase) => base._id!.toString() === kit.baseId.toString())
				.map((base: IKitBase) => ({
					...base,
					gameInfo: {
						...base.gameInfo,
						availableOptions: []
					}
				}))[0],
			options: kit.options.map(
				(opt: IKitOption) =>
					kitOptions.find((option: Partial<IKitOption>) => option?._id?.toString() === opt.toString()) as IKitOption
			)
		}))
	}))
}

export const getStreamerByTwitchBroadcasterLoginId = async (req: Request, res: Response) => {
	const rawChannel = await Player.find({
		"meta.links.twitch": { $regex: `.*${req.query.broadcasterLogin}.*` }
	})

	if (rawChannel.length === 0) {
		return res.status(403).json({
			key: "twitch-not-linked",
			message: "Twitch account not linked to kittr.gg"
		})
	}

	const serialized = (await serializeChannels(rawChannel))[0]

	const player = serialized

	const kitStats = await KitStat.find()
	const {
		ratioOfChannelsWithBase: ratioOfPlayersWithBase,
		ratioOfChannelsWithBaseFeatured: ratioOfPlayersWithBaseFeatured
	} = kitStats[0]
	const forSetupComparison = await allSetupsForComparisonQuery()

	return res.send({
		streamer: player,
		ratioOfPlayersWithBase,
		ratioOfPlayersWithBaseFeatured,
		forSetupComparison
	})
}
