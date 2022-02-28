import { IChannel, IGame, IKitBase, IKitOption } from "@kittr/types"
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

	const serialized = result.map(
		(player: {
			_id: string
			matches: Array<Array<mongoose.Types.ObjectId>>
		}) => ({
			...player,
			matches: player.matches.map((match) =>
				match.map((option) => option.toString())
			)
		})
	)

	return { serialized }
}

const allGamesQuery = async () => {
	const result = await Game.find({}).lean<IGame[]>()

	const serialized = result.map((elem) => ({
		...elem,
		_id: elem._id.toString(),
		releaseDate: elem!.releaseDate
	}))

	return serialized
}

const allBasesQuery = async () => {
	const result = await KitBase.find({}).lean<IKitBase[]>()

	const serialized = result.map((elem) => ({
		...elem,
		_id: elem._id.toString(),
		gameId: elem.gameId.toString()
	}))

	return serialized
}

const allOptionsQuery = async () => {
	const result = await KitOption.find({}).lean<IKitOption[]>()

	const serialized = result.map((elem) => ({
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

/** Serialize an array of players from mongodb. */
export const serializeChannels: IFunc = async (channelsArr) => {
	const [games, kitBases, kitOptions] = await Promise.all([
		await allGamesQuery(),
		await allBasesQuery(),
		await allOptionsQuery()
	])

	return channelsArr.map((channel) => ({
		...channel,
		_id: channel._id.toString(),
		games: channel.games.map((game) => ({
			...game,
			id: game.id.toString(),
			...games.find(
				(rawGame: any) => rawGame._id.toString() === game.id.toString()
			)
		})),
		createdDate: channel.createdDate.toString(),
		kits: channel.kits.map((kit) => ({
			...kit,
			_id: kit._id.toString(),
			base: kitBases
				.filter((base) => base._id!.toString() === kit.baseId.toString())
				.map((base) => ({
					...base,
					gameInfo: {
						...base.gameInfo,
						availableOptions: []
					}
				}))[0],
			options: kit.options.map(
				(opt) =>
					kitOptions.find(
						(option) => option?._id?.toString() === opt.toString()
					) as IKitOption
			)
		}))
	}))
}

export const getStreamerByTwitchBroadcasterLoginId = async (
	req: Request,
	res: Response
) => {
	const rawChannel = await Player.find({
		"meta.links.twitch": { $regex: `.*${req.query.broadcasterLogin}.*` }
	}).lean<IChannel[]>()

	if (rawChannel.length === 0) {
		return res.status(403).json({
			key: "twitch-not-linked",
			message: "Twitch account not linked to kittr.gg"
		})
	}

	const streamer = (await serializeChannels(rawChannel))[0]

	const kitStats = await KitStat.find()
	const {
		ratioOfChannelsWithBase: ratioOfPlayersWithBase,
		ratioOfChannelsWithBaseFeatured: ratioOfPlayersWithBaseFeatured
	} = kitStats[0]
	const forSetupComparison = await allSetupsForComparisonQuery()

	return res.send({
		streamer,
		ratioOfPlayersWithBase,
		ratioOfPlayersWithBaseFeatured,
		forSetupComparison
	})
}
