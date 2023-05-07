// Import { generateKitStats } from "./jobs/createKitStatsAsInterval"
import { createServer } from "node:http";
import * as Logger from "@kittr/logger/node";
import cors from "cors";
import { CronJob } from "cron";
import dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";
import { writeViewCounts } from "./jobs/writeViewCounts";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.development",
});

const app = express();
app.use(cors({ origin: "*" }));
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

Logger.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.IS_PREVIEW ? "Preview" : process.env.NODE_ENV,
});

app.use(Logger.Handlers.requestHandler());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("Server has started.");

// Just a pinger!
app.get("/", (req, res) => {
  res.send("Hello, kittr!");
});

// Throw an error to test Sentry
app.get("/error", () => {
  throw new Error("Test error");
});

// // Triggers refetches for the Stripe subscription webhook
// App.post("/stripe-webhook-reporter", (req, res) => {
// 	Const { _id } = req.body
// 	Io.emit(`dashboard=${_id}`, "Trigger refetch!")
// 	Return res.status(200).json({ success: true })
// })

if (process.env.NODE_ENV === "production") {
  const viewCounts = new CronJob(
    // Every night at 3 AM
    "0 3 * * *",
    () => {
      try {
        writeViewCounts();
      } catch (error) {
        Logger.captureException(error);
        console.error(error);
      }
    },
    null,
    true,
    "America/Los_Angeles",
  );
  viewCounts.start();
}

// Every night at 3 AM
// Const kitStats = new CronJob(
// 	"0 3 * * *",
// 	() => generateKitStats(),
// 	Null,
// 	True,
// 	"America/Los_Angeles"
// )
// KitStats.start()

let openSockets = 0;

io.on("connection", async (socket) => {
  console.log(`Socket connected from IP: ${socket.handshake.address}`);
  openSockets += 1;
  console.log("Active Socket Count:", openSockets);

  // Triggers refetches for both the dashboard and overlay
  socket.on("dashboardChangeReporter", (id: string) => {
    io.emit(`dashboard=${id}`, "Trigger refetch!");
  });

  socket.on("channelDelete", (id: string) => {
    io.emit(`channelDelete=${id}`, id);
  });

  socket.on("gameDelete", (id: string) => {
    io.emit(`gameDelete=${id}`, "Trigger refetch!");
  });

  socket.on("disconnect", () => {
    console.log(`Socket disconnected from IP: ${socket.handshake.address}`);
    openSockets -= 1;
    console.log("Active Socket Count:", openSockets);
  });
});

app.use(Logger.Handlers.errorHandler());

httpServer.listen(process.env.PORT || 3001, () =>
  console.log(`Server is running on port: ${process.env.PORT || 3001}...`),
);
