require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

require("./twitch/extension/routes.js")(app);

const { writeViewCounts } = require("./jobs/viewCountAsUseInterval");
const { createKitStatsAsInterval } = require("./jobs/createKitStatsAsInterval");

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  environment: process.env.ENVIRONMENT,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const mongoose = require("mongoose");
const getStreamerByTwitchBroadcasterLoginId =
  require("./utils/streamer").default;

if (process.env.ENVIRONMENT === "PRODUCTION") {
  app.use(rollbar.errorHandler());
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(async () => {
    console.log("Server has started.");
    setInterval(() => writeViewCounts(), 3600000); // Once an hour
    setInterval(() => createKitStatsAsInterval(), 86700000); // A little more than once a day

    let openSockets = 0;

    io.on("connection", async (socket) => {
      console.log(`Socket connected from IP: ${socket.handshake.address}`);
      openSockets = openSockets + 1;
      console.log("Active Socket Count:", openSockets);

      // Triggers refetches for both the dashboard and overlay
      socket.on(`dashboardChangeReporter`, (_id) => {
        io.emit(`dashboard=${_id}`, "Trigger refetch!");
      });

      socket.on("streamDelete", (data) => {
        io.emit(`streamDelete=${data}`, data);
      });

      socket.on("gameDelete", (_id) => {
        io.emit(`gameDelete=${_id}`, "Trigger refetch!");
      });

      socket.on("disconnect", () => {
        console.log(`Socket disconnected from IP: ${socket.handshake.address}`);
        openSockets = openSockets - 1;
        console.log("Active Socket Count:", openSockets);
      });
    });

    app.get("/", (req, res) => {
      res.send("Hello from kittr!");
    });

    /*
      /api/streamer?broadcasterLogin={broadcasterLogin}

      Returns the streamer object
    */
    app.get("/api/streamer", getStreamerByTwitchBroadcasterLoginId);

    http.listen(process.env.PORT || 5000, () =>
      console.log(`Server is running on PORT: ${process.env.PORT || 5000}...`)
    );
  });
