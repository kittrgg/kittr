import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const main = async () => {
  await prisma.channelCustomGameCommand.deleteMany({})
  await prisma.channelCreatorCode.deleteMany({})
  await prisma.channelProfile.deleteMany({})
  await prisma.warzoneKitBase.deleteMany({})
  await prisma.warzoneKitOption.deleteMany({})
  await prisma.channel.deleteMany({})
  await prisma.game.deleteMany({})
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log(
      "Dun. You are a good person and I hope that you achieved your goal for this run."
    )
    console.timeEnd("Script Main")
  })