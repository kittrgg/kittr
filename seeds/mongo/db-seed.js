const mongoose = require("mongoose");

const Game = require("./models/Game").default;
const { games } = require("./games.js");

const BlogPost = require("./models/BlogPost").default;
const { blogPosts } = require("./blogPosts.js");

const KitBase = require("./models/KitBase").default;
const { kitBases } = require("./kitBases.js");

const KitOption = require("./models/KitOption").default;
const { kitOptions } = require("./kitOptions.js");

const KitStat = require("./models/KitStat").default;
const { kitStats } = require("./kitStats.js");

const Player = require("./models/Player").default;
const { players } = require("./players.js");

const MONGODB_URI = process.env.DB_CONNECTION_STRING;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the DB_CONNECTION_STRING environment variable."
  );
}

const connectToDatabase = async () => {
  return mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
    })
    .then((mongoose) => {
      return mongoose;
    });
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.log(
      `
        ❌ We couldn't connect to MongoDB. ❌
        You may not have the database running at the moment.
        Refer to the README to see how to set up your development environment.
      `
    );
    console.log(err);
  }

  try {
    await Game.deleteMany({});
    await Game.insertMany(games);
  } catch (err) {
    return console.error(err);
  }

  try {
    await BlogPost.deleteMany({});
    await BlogPost.insertMany(blogPosts);
  } catch (err) {
    return console.error(err);
  }

  try {
    await KitBase.deleteMany({});
    await KitBase.insertMany(kitBases);
  } catch (err) {
    return console.error(err);
  }

  try {
    await KitOption.deleteMany({});
    await KitOption.insertMany(kitOptions);
  } catch (err) {
    return console.error(err);
  }

  try {
    await KitStat.deleteMany({});
    await KitStat.insertMany(kitStats);
  } catch (err) {
    return console.error(err);
  }

  try {
    await Player.deleteMany({});
    await Player.insertMany(players);
  } catch (err) {
    return console.error(err);
  }

  console.log(
    `
      Your local MongoDB instance has been seeded. ✅
      Let's get kittd.
  `
  );
};

main()
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    mongoose.connection.close();
    process.exit(1);
  });
