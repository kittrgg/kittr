import { z } from "zod";
import { publicProcedure } from "../../initTRPC";
import * as TwitchService from "../../services/twitch";

const getProfile = publicProcedure
  .input(z.string())
  .query(async ({ input }) => {
    const result = await TwitchService.getProfile(input);
    return result;
  });

export const TwitchController = {
  getProfile,
};
