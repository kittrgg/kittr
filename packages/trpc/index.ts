import { WarzoneAdminController } from './src/controllers/admin/warzone';
import { Warzone2AdminController } from './src/controllers/admin/warzone2';
import { ChannelsController } from './src/controllers/channels';
import { ChannelsCommandStringsController } from './src/controllers/channels/commandStrings';
import { ChannelsGamesController } from './src/controllers/channels/games';
import { ChannelsKitsController } from './src/controllers/channels/kits';
import { ChannelsLinksController } from './src/controllers/channels/links';
import { ChannelsManagersController } from './src/controllers/channels/managers';
import { ChannelsManagersOwnersController } from './src/controllers/channels/managers/owners';
import { ChannelsOverlaysController } from './src/controllers/channels/overlays';
import { ChannelsPcSpecsController } from './src/controllers/channels/pcSpecs';
import { ChannelsPlanController } from './src/controllers/channels/plan';
import { ChannelsProfileController } from './src/controllers/channels/profile';
import { ChannelsProfileAffiliatesController } from './src/controllers/channels/profile/affiliates';
import { ChannelsProfileBrandColorsController } from './src/controllers/channels/profile/brandColors';
import { ChannelsProfileCoverPhotoController } from './src/controllers/channels/profile/coverPhoto';
import { ChannelsProfileCreatorCodesController } from './src/controllers/channels/profile/creatorCodes';
import { ChannelsProfileImageController } from './src/controllers/channels/profile/image';
import { ChannelsProfileSetupPhotosController } from './src/controllers/channels/profile/setupPhotos';
import { ChannelsProfileYouTubeAutoplayController } from './src/controllers/channels/profile/youtubeAutoplay';
import { GamesController } from './src/controllers/games';
import { KitsController } from './src/controllers/kits';
import { KitsBasesController } from './src/controllers/kits/bases';
import { KitsBasesOptionsController } from './src/controllers/kits/bases/options';
import { ManagersChannelsController } from './src/controllers/managers/channels';
import { StripeController } from './src/controllers/stripe';
import { TwitchController } from './src/controllers/twitch';
import { UsersController } from './src/controllers/users';
import { adminProcedure, publicProcedure, router } from './src/initTRPC';
import { gamesCount } from './src/routers/games';
import { download } from '@kittr/firebase/storage';
import { prisma } from '@kittr/prisma';
import { GameModel } from '@kittr/prisma/validator';
import { inferRouterInputs, inferRouterOutputs, TRPCError } from '@trpc/server';
import { z } from 'zod';

export const appRouter = router({
  kits: router({
    bases: router({
      options: router({
        list: KitsBasesOptionsController.listOptions,
      }),
      listByGameUrlSafeName: publicProcedure
        .input(z.object({ gameUrlSafeName: z.string() }))
        .query(async ({ input }) => {
          if (input.gameUrlSafeName === 'wz2') {
            return await prisma.warzoneTwoKitBase.findMany();
          }

          if (input.gameUrlSafeName === 'warzone') {
            return await prisma.warzoneKitBase.findMany();
          }

          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Not a valid urlSafeName.',
          });
        }),
      list: KitsBasesController.listBases,
      'game-list': KitsBasesController.listGameBases,
    }),
    count: KitsController.countKits,
  }),
  channels: router({
    games: router({
      list: ChannelsGamesController.listChannelsForGame,
      add: ChannelsGamesController.addGameToChannel,
      delete: ChannelsGamesController.deleteGameFromChannel,
    }),
    kits: router({
      upsert: ChannelsKitsController.upsertKitToChannel,
      upsertWz2Kit: ChannelsKitsController.upsertWz2KitToChannel,
      delete: ChannelsKitsController.deleteKitFromChannel,
    }),
    profile: router({
      affiliates: router({
        create: ChannelsProfileAffiliatesController.createAffiliate,
        update: ChannelsProfileAffiliatesController.updateAffiliate,
        delete: ChannelsProfileAffiliatesController.deleteAffiliate,
      }),
      'pc-specs': router({
        list: ChannelsPcSpecsController.listPcSpec,
        get: ChannelsPcSpecsController.getPcSpec,
        create: ChannelsPcSpecsController.createPcSpec,
        update: ChannelsPcSpecsController.updatePcSpec,
        delete: ChannelsPcSpecsController.deletePcSpec,
      }),
      'creator-codes': router({
        upsert: ChannelsProfileCreatorCodesController.upsertCode,
      }),
      'youtube-autoplay': router({
        upsert: ChannelsProfileYouTubeAutoplayController.toggle,
      }),
      'brand-color': router({
        upsert: ChannelsProfileBrandColorsController.upsertBrandColor,
      }),
      'setup-photos': router({
        update: ChannelsProfileSetupPhotosController.updateSetupPhotos,
      }),
      image: router({
        update: ChannelsProfileImageController.updateProfileImage,
      }),
      'cover-photo': router({
        update: ChannelsProfileCoverPhotoController.update,
      }),
      get: ChannelsProfileController.getChannelProfile,
    }),
    overlay: router({
      color: router({
        edit: ChannelsOverlaysController.editColor,
      }),
      kit: router({
        edit: ChannelsOverlaysController.editKit,
      }),
      toggle: ChannelsOverlaysController.toggle,
      get: ChannelsOverlaysController.getOverlay,
    }),
    managers: router({
      owner: router({
        edit: ChannelsManagersOwnersController.editOwner,
      }),
      list: ChannelsManagersController.listManagers,
      create: ChannelsManagersController.createManager,
      demote: ChannelsManagersController.demoteManager,
      promote: ChannelsManagersController.promoteManager,
      delete: ChannelsManagersController.deleteManager,
    }),
    'command-strings': router({
      get: ChannelsCommandStringsController.getCommandString,
      upsert: ChannelsCommandStringsController.upsertCommandString,
    }),
    links: router({
      upsert: ChannelsLinksController.upsertLinks,
    }),
    plan: router({
      get: ChannelsPlanController.getPlan,
      'subscription-end': ChannelsPlanController.getSubscriptionEnd,
      'card-last-4-digits': ChannelsPlanController.getCardLast4Digits,
    }),
    top: ChannelsController.listTopChannels,
    rising: ChannelsController.listRisingChannels,
    live: ChannelsController.listLiveChannels,
    dashboard: ChannelsController.getDashboardChannel,
    count: ChannelsController.countChannels,
    countAll: ChannelsController.countAllChannels,
    create: ChannelsController.createChannel,
    update: ChannelsController.updateChannel,
    delete: ChannelsController.deleteChannel,
  }),
  admin: router({
    warzone: router({
      kitBases: router({
        options: router({
          create: WarzoneAdminController.createOption,
          update: WarzoneAdminController.updateOption,
          delete: WarzoneAdminController.deleteOption,
        }),
        categories: WarzoneAdminController.listKitBaseCategories,
        list: WarzoneAdminController.listKitBases,
        get: WarzoneAdminController.getKitBase,
        create: WarzoneAdminController.createBase,
        update: WarzoneAdminController.updateBase,
        delete: WarzoneAdminController.deleteBase,
      }),
    }),
    warzone2: router({
      kitBases: router({
        // TODO: Missing controller
        options: router({
          create: Warzone2AdminController.createOption,
          update: Warzone2AdminController.updateOption,
          delete: Warzone2AdminController.deleteOption,
        }),
        categories: Warzone2AdminController.listKitBaseCategories,
        list: Warzone2AdminController.listKitBases,
        get: Warzone2AdminController.getKitBase,
        create: Warzone2AdminController.createBase,
        update: Warzone2AdminController.updateBase,
        delete: Warzone2AdminController.deleteBase,
      }),
    }),
  }),
  users: router({
    create: UsersController.create,
  }),
  twitch: router({
    'profile-page': TwitchController.getProfile,
  }),
  games: router({
    getByUrlSafeName: GamesController.getGameByUrlSafeName,
    getById: GamesController.getGameById,
    count: gamesCount,
    list: GamesController.listGames,
    'list-genres': publicProcedure.query(
      async () => await prisma.genre.findMany(),
    ),
    'list-platforms': publicProcedure.query(
      async () => await prisma.platform.findMany(),
    ),
    add: adminProcedure
      .input(
        GameModel.omit({ id: true }).extend({
          genres: z.array(z.string()),
          platforms: z.array(z.string()),
        }),
      )
      .mutation(async ({ input }) => {
        const { genres, platforms, ...game } = input;

        const savedGame = await prisma.game.create({
          data: {
            ...game,
            genres: { connect: genres.map((id) => ({ id })) },
            platforms: { connect: platforms.map((id) => ({ id })) },
          },
        });

        return savedGame;
      }),
  }),
  stripe: router({
    'buy-premium': StripeController.buyPremium,
    'manage-premium': StripeController.managePremium,
  }),
  managers: router({
    channels: router({
      list: ManagersChannelsController.listChannels,
    }),
  }),
  firebase: router({
    resolver: publicProcedure
      .input(z.object({ path: z.string() }))
      .query(async ({ input }) => {
        const url = await download(input.path);

        return url;
      }),
  }),
});

export type AppRouter = typeof appRouter;
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
export { createContext } from './src/context';
export { createSSGHelper } from './src/createSSGHelper';
