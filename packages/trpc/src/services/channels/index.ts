import type { Channel, ChannelLink, ChannelProfile } from "@kittr/prisma";
import { LinkProperty, prisma } from "@kittr/prisma";
import { headers, grabLoginName } from "@kittr/twitch";
import type { ITwitchLiveChannels } from "@kittr/types";
import { fetcher, toURL, badWordFilter } from "@kittr/utils";
import { TRPCError } from "@trpc/server";

export * from "./games";
export * from "./kits";
export * from "./links";
export * from "./profile";

export interface ChannelWithProfile extends Channel {
  profile: ChannelProfile;
}

export interface ChannelWithLinks extends Channel {
  links: ChannelLink[];
}

interface ListParams {
  skip?: number;
  take?: number;
}

const getTwitchLink = (channel: ChannelWithLinks) =>
  channel.links.find((link) => link.property === LinkProperty.TWITCH)?.value ??
  "";

export const createChannel = async ({
  displayName,
  ownerFirebaseId,
}: {
  displayName: string;
  ownerFirebaseId: string;
}) => {
  if (displayName.length > 26)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "That name is too long. 25 characters or less",
    });

  if (badWordFilter(displayName)) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Hey, no bad words!",
    });
  }

  const existingChannel = await prisma.channel.findFirst({
    where: { urlSafeName: toURL(displayName) },
  });

  if (existingChannel) {
    throw new TRPCError({
      code: "CONFLICT",
      message:
        "That name is too similar to another channel. We don't want to confuse our system...Please choose another.",
    });
  }

  const result = await prisma.channel.create({
    data: {
      displayName,
      urlSafeName: toURL(displayName),
      managers: {
        create: {
          // TODO: Use the authentication of the user in the request.
          firebaseId: ownerFirebaseId,
          // NO TOUCHY! We need to make sure that the person who creates this channel is the owner of it.
          role: "OWNER",
        },
      },
      profile: {
        create: {},
      },
      plan: {
        create: {},
      },
      overlay: {
        create: {},
      },
    },
  });

  return result;
};

export const updateChannel = async ({
  channelId,
  data,
}: {
  channelId: string;
  data: Partial<Channel>;
}) => {
  if (data.displayName) {
    data.urlSafeName = toURL(data.displayName);
  }

  try {
    const result = await prisma.channel.update({
      where: { id: channelId },
      data,
    });

    return result;
  } catch (err) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "That name is already taken. Please try another.",
    });
  }
};

export const deleteChannel = async ({ channelId }: { channelId: string }) => {
  const channel = await prisma.channel.delete({
    where: {
      id: channelId,
    },
    include: {
      plan: true,
    },
  });

  return channel;
};

export const getDashboardChannel = async ({ id }: { id: string }) => {
  const channel = await prisma.channel.findFirst({
    where: {
      id,
    },
    include: {
      customGameCommands: true,
      profile: {
        include: {
          brandColors: true,
          channelPcSpecs: true,
          affiliates: true,
          setupPhotos: true,
        },
      },
      managers: true,
      warzoneKits: {
        orderBy: {
          base: {
            displayName: "asc",
          },
        },
        include: {
          base: {
            include: {
              category: true,
              commandCodes: true,
            },
          },
          options: true,
        },
      },
      warzoneTwoKits: {
        orderBy: {
          base: {
            displayName: "asc",
          },
        },
        include: {
          base: {
            include: {
              category: true,
              commandCodes: true,
            },
          },
          options: true,
          tuning: true,
        },
      },
      links: true,
      plan: true,
      games: true,
      gameCreatorCodes: {
        include: {
          game: true,
        },
      },
      overlay: {
        include: {
          primaryWzTwoKit: true,
          secondaryWzTwoKit: true,
        },
      },
    },
  });
  return channel;
};

export const getFullChannelProfileQuery = async ({
  id,
  urlSafeName,
}: {
  id: string;
  urlSafeName: string;
}) => {
  if (!id && !urlSafeName) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Need either id or urlSafeName",
    });
  }

  const channel = await prisma.channel.findFirst({
    where: {
      id,
      urlSafeName,
    },
    include: {
      profile: {
        include: {
          brandColors: true,
          channelPcSpecs: true,
          affiliates: true,
          setupPhotos: true,
        },
      },
      warzoneKits: {
        orderBy: {
          base: {
            displayName: "asc",
          },
        },
        include: {
          base: {
            include: {
              category: true,
            },
          },
        },
      },
      links: true,
      plan: true,
      games: true,
      gameCreatorCodes: {
        include: {
          game: true,
        },
      },
    },
  });
  return channel;
};

export const getChannelProfileByUrlSafeName = async (urlSafeName: string) => {
  if (!urlSafeName) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Need either id or urlSafeName",
    });
  }

  const channel = await prisma.channel.findFirst({
    where: {
      urlSafeName,
    },
    include: {
      profile: {
        include: {
          brandColors: true,
          channelPcSpecs: true,
          affiliates: true,
          setupPhotos: true,
        },
      },
      warzoneKits: {
        orderBy: {
          base: {
            displayName: "asc",
          },
        },
        include: {
          base: {
            include: {
              category: true,
            },
          },
          options: true,
        },
      },
      warzoneTwoKits: {
        orderBy: {
          base: {
            displayName: "asc",
          },
        },
        include: {
          base: {
            include: {
              category: true,
            },
          },
          options: true,
          tuning: true,
        },
      },
      links: true,
      plan: true,
      games: true,
      gameCreatorCodes: {
        include: {
          game: true,
        },
      },
    },
  });

  return channel;
};

export const listTopChannels = async ({ skip = 0, take = 10 }: ListParams) => {
  const result = await prisma.channel.findMany({
    where: {
      profile: {
        hasProfileImage: process.env.IS_DEV ? undefined : true,
      },
    },
    orderBy: {
      viewCount: "desc",
    },
    skip,
    take,
    include: {
      profile: true,
      links: true,
    },
  });

  return result as ChannelWithProfile[];
};

export const countAllChannels = async () => {
  const total = await prisma.channel.count();
  return total;
};

/** Counts channels both for a game and on the entirety of kittr.
 *
 * Passs a game's urlSafeName to count channels for that game.
 *
 * Passing undefined results in all channels.
 */
export const countChannels = async (urlSafeName?: string) => {
  const total = await prisma.channel.count({
    where: {
      games: {
        some: {
          urlSafeName,
        },
      },
    },
  });

  return total;
};

export const listRisingChannels = async () => {
  const skip = 10;
  const take = 10;
  const where = {
    profile: {
      hasProfileImage: process.env.IS_DEV ? undefined : true,
    },
    viewCount: {
      gte: 400,
    },
  };

  const channelCount = await prisma.channel.count({
    where,
  });

  const randomSkip = Math.min(
    channelCount - skip,
    Math.max(skip, Math.floor(Math.random() * channelCount)),
  );

  const result = await prisma.channel.findMany({
    orderBy: {
      viewCount: "desc",
    },
    where,
    skip: Math.max(0, randomSkip),
    take,
    include: {
      profile: true,
    },
  });

  return result as ChannelWithProfile[];
};

export const listLiveChannels = async () => {
  const popularChannels = await prisma.channel.findMany({
    where: {
      profile: {
        hasProfileImage: process.env.IS_DEV ? undefined : true,
      },
    },
    orderBy: {
      viewCount: "desc",
    },
    take: 100,
    include: {
      links: true,
      profile: {
        select: {
          hasProfileImage: true,
        },
      },
    },
  });

  // Create the url for the Twitch API fetch
  const buildLiveStreamRequest = (channels: ChannelWithLinks[]): string => {
    try {
      const requestBase = "https://api.twitch.tv/helix/streams/?user_login=";

      // Grab the login names from the channels
      const channelNames = channels
        .map((channel) => grabLoginName(getTwitchLink(channel)))
        .filter((str: string | undefined) => str !== undefined);

      // Put together the base and the channel names
      const url = requestBase.concat(channelNames.join("&user_login="));
      return url;
    } catch (error) {
      console.error(error);
      // LogReport.error("Twitch Live Channels API ", error as any)
      return "";
    }
  };

  const getStreams = async (): Promise<ITwitchLiveChannels[]> => {
    const url = buildLiveStreamRequest(popularChannels);

    if (!url) return [];

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = await fetcher.get<{ data: any }>({
        url,
        headers: await headers(),
        redirect: "follow",
      });

      if (!data.data) {
        console.log("The Twitch API fetch did not work.", { data });
        return [];
      }

      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const currentlyLiveChannels = await getStreams();

  try {
    const data = popularChannels.filter((channel) =>
      currentlyLiveChannels
        .map((channel) => channel.user_login)
        .includes(
          getTwitchLink(channel).substring(
            getTwitchLink(channel).lastIndexOf("/") + 1,
          ),
        ),
    );

    return data as ChannelWithLinks[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
