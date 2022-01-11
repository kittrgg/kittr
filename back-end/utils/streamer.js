const { default: Player } = require("../models/Player");
const { default: Game } = require("../models/Game");
const { default: KitBase } = require("../models/KitBase");
const { default: KitOption } = require("../models/KitOption");
const { default: KitStat } = require("../models/KitStat");

const allKitBaseUsageQuery = async () => {
  const result = await Player.aggregate([
    {
      $facet: {
        count: [
          {
            $count: "playerCount",
          },
        ],
        kitCounts: [
          {
            $unwind: "$kits",
          },
          {
            $group: {
              _id: "$kits.baseId",
              matches: {
                $addToSet: {
                  base: "$kits.baseId",
                  playerId: "$_id",
                },
              },
            },
          },
          {
            $project: {
              _id: "$_id",
              baseCount: {
                $size: "$matches",
              },
            },
          },
        ],
      },
    },
    {
      $addFields: {
        count: {
          $arrayElemAt: ["$count.playerCount", 0],
        },
      },
    },
    {
      $project: {
        kitCounts: {
          $map: {
            input: "$kitCounts",
            as: "item",
            in: {
              $mergeObjects: [
                "$$item",
                {
                  playerCount: "$count",
                  ratio: {
                    $divide: ["$$item.baseCount", "$count"],
                  },
                },
              ],
            },
          },
        },
      },
    },
  ]);

  return result[0].kitCounts;
};

const allKitBaseFeaturedRateQuery = async () => {
  const result = await Player.aggregate([
    {
      $facet: {
        count: [
          {
            $count: "playerCount",
          },
        ],
        kitCounts: [
          {
            $unwind: "$kits",
          },
          {
            $match: {
              "kits.userData.featured": true,
            },
          },
          {
            $group: {
              _id: "$kits.baseId",
              matches: {
                $addToSet: {
                  base: "$kits.baseId",
                  playerId: "$_id",
                },
              },
            },
          },
          {
            $project: {
              _id: "$_id",
              baseCount: {
                $size: "$matches",
              },
            },
          },
        ],
      },
    },
    {
      $addFields: {
        count: {
          $arrayElemAt: ["$count.playerCount", 0],
        },
      },
    },
    {
      $project: {
        kitCounts: {
          $map: {
            input: "$kitCounts",
            as: "item",
            in: {
              $mergeObjects: [
                "$$item",
                {
                  playerCount: "$count",
                  ratio: {
                    $divide: ["$$item.baseCount", "$count"],
                  },
                },
              ],
            },
          },
        },
      },
    },
  ]);

  return result[0].kitCounts;
};

const allSetupsForComparisonQuery = async () => {
  const result = await Player.aggregate([
    {
      $unwind: {
        path: "$kits",
      },
    },
    {
      $group: {
        _id: null,
        kits: {
          $push: "$kits",
        },
      },
    },
    {
      $unwind: {
        path: "$kits",
      },
    },
    {
      $group: {
        _id: "$kits.baseId",
        matches: {
          $push: "$kits.options",
        },
      },
    },
  ]);

  const serialized = result.map((player) => {
    return {
      ...player,
      matches: player.matches.map((match) => {
        return match.map((option) => {
          return option.toString();
        });
      }),
    };
  });

  return { serialized };
};

const allGamesQuery = async () => {
  const result = await Game.find({}).lean();

  const serialized = result.map((elem) => ({
    ...elem,
    _id: elem._id.toString(),
    releaseDate: elem.releaseDate.toString(),
  }));

  return serialized;
};

const allBasesQuery = async () => {
  const result = await KitBase.find({}).lean();

  const serialized = result.map((elem) => ({
    ...elem,
    _id: elem._id.toString(),
    gameId: elem.gameId.toString(),
  }));

  return serialized;
};

const allOptionsQuery = async () => {
  const result = await KitOption.find({}).lean();

  const serialized = result.map((elem) => ({
    ...elem,
    _id: elem._id.toString(),
  }));

  return serialized;
};

/** Serialize an array of players from mongodb. Needed to make getStaticProps happy. */
const serializePlayers = async (playersArr) => {
  const games = await allGamesQuery();
  const kitBases = await allBasesQuery();
  const kitOptions = await allOptionsQuery();

  return playersArr.map((player) => ({
    ...player,
    _id: player._id.toString(),
    games: player.games.map((game) => ({
      ...game,
      id: game.id.toString(),
      ...games.find((rawGame) => rawGame._id.toString() === game.id.toString()),
    })),
    createdDate: player.createdDate.toString(),
    kits: player.kits.map((kit) => ({
      ...kit,
      _id: kit._id.toString(),
      base: kitBases
        .filter((base) => base._id.toString() === kit.baseId.toString())
        .map((base) => ({
          ...base,
          gameInfo: {
            ...base.gameInfo,
            availableOptions: [],
          },
        }))[0],
      options: kit.options.map((opt) =>
        kitOptions.find((option) => option._id.toString() === opt.toString())
      ),
    })),
  }));
};

const getStreamerByTwitchBroadcasterLoginId = async (req, res) => {
  const rawPlayer = await Player.find({
    "meta.links.twitch": { $regex: `.*${req.query.broadcasterLogin}.*` },
  }).lean();

  if (rawPlayer.length === 0) {
    return res.status(403).json({
      key: "twitch-not-linked",
      message: "Twitch account not linked to kittr.gg",
    });
  }

  const serialized = (await serializePlayers(rawPlayer))[0];

  const player = serialized;

  const kitStats = await KitStat.find();
  const {
    ratioOfChannelsWithBase: ratioOfPlayersWithBase,
    ratioOfChannelsWithBaseFeatured: ratioOfPlayersWithBaseFeatured,
  } = kitStats[0];
  const forSetupComparison = await allSetupsForComparisonQuery();

  return res.send({
    streamer: player,
    ratioOfPlayersWithBase,
    ratioOfPlayersWithBaseFeatured,
    forSetupComparison,
  });
};

exports.default = getStreamerByTwitchBroadcasterLoginId;
