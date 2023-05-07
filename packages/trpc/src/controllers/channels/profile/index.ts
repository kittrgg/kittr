import { z } from "zod";
import { publicProcedure } from "../../../initTRPC";
import * as ChannelsService from "../../../services/channels";

const getChannelProfile = publicProcedure
  .input(z.string())
  .query(async ({ input }) => {
    const channel = await ChannelsService.getChannelProfileByUrlSafeName(input);
    return channel;
  });

export const ChannelsProfileController = {
  getChannelProfile,
};
