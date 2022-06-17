import {prisma, ChannelLink} from '@kittr/prisma'
import { checkRole } from '@Server/services/users'

export const updateLinks =  async ({authToken, channelId, links}: {authToken: string, channelId: string, links: ChannelLink[]}) => {
  await checkRole({authToken, channelId, roles: ["OWNER", "ADMIN"]})

  const linksUpdate = await prisma.channelLink.updateMany({
    where: {
      channelId
    },
    data: links
  })

  return linksUpdate
}