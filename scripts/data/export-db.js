const prisma = require('../../packages/prisma/dist/index').prisma;
const Prisma = require('../../packages/prisma/dist/index').Prisma;
const fs = require('fs');

const pullData = async () => {
  const models = Object.keys(Prisma.ModelName);

  const data = {};

  for (const modelName of models) {
    const modelData = await prisma[modelName].findMany();
    const modelFixedName = modelName[0].toUpperCase() + modelName.slice(1);
    data[modelFixedName] = modelData;
  }
};

const saveToJson = async () => {
  const data = await pullData();

  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync('./packages/prisma/seeds/data/dev.json', json);
};

saveToJson();
