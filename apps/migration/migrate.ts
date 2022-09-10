import { PrismaClient as MySqlPrisma } from '@kittr/prisma'
import { PrismaClient as PostgresPrisma } from '@kittr/prisma-old'

const mySql = new MySqlPrisma()
const psql = new PostgresPrisma()

const main = async () => {
  // const mySqlRes = await mySql.channel.findMany()
  const psqlRes = await psql.channel.findMany()

  // console.log({ mySqlRes })
  console.log({ psqlRes })
}

main()
  .then(async () => {
    await Promise.all([mySql.$disconnect(), psql.$disconnect()])
    console.log("Disconnected from databases! Things should have gone correctly.")
    process.exit(0)
  })
  .catch(async (error) => {
    await Promise.all([mySql.$disconnect(), psql.$disconnect()])
    console.error("Disconnected from databases!...But something bad happened.")
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await Promise.all([mySql.$disconnect(), psql.$disconnect()])
    console.error("The script has ended. How did things go?")
    process.exit(0)
  })
