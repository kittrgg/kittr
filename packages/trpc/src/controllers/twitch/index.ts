import { publicProcedure } from '../../initTRPC';
import * as TwitchService from '../../services/twitch';
import { z } from 'zod';

const getProfile = publicProcedure
  .input(z.string())
  .query(async ({ input }) => {
    const result = await TwitchService.getProfile(input);
    return result;
  });

export const TwitchController = {
  getProfile,
};
