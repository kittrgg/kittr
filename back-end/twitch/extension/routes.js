const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const config = require("./accessTokenGenerator.js").default;

module.exports = function (app) {
  /*
    Bind a JWT parsing function

    But if this server only does extension traffic then all good to global
    */
  app.use("/twitch/:route?", (req, res, next) => {
    if (req.headers["authorization"]) {
      let [type, auth] = req.headers["authorization"].split(" ");

      if (type == "Bearer") {
        jwt.verify(auth, config.secret, (err, decoded) => {
          if (err) {
            console.log("JWT Error", err);

            res
              .status("401")
              .json({ error: true, message: "Invalid authorization" });
            return;
          }

          req.extension = decoded;

          next();
        });

        return;
      }

      res
        .status("401")
        .json({ error: true, message: "Invalid authorization header" });
    } else {
      res
        .status("401")
        .json({ error: true, message: "Missing authorization header" });
    }
  });

  /*
    And lets actaully setup the API calls/endpoints
    */
  app
    .route("/twitch/")
    .get((req, res) => {
      res.status("404").json({ error: true, message: "GET Not supported" });
    })
    .post((req, res) => {
      if (req.extension.hasOwnProperty("channel_id")) {
        console.log("Looking up", req.extension.channel_id);

        fetch(
          `https://api.twitch.tv/helix/channels?broadcaster_id=${req.extension.channel_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "client-id": process.env.TWITCH_CLIENT_ID,
              authorization: "Bearer " + config.api_token,
            },
          }
        )
          .then(async (response) => response.json())
          .then((resp) => {
            // monitor our rate limit
            // console.log(
            //   "TwitchAPI Rate:",
            //   resp.headers["ratelimit-remaining"],
            //   "/",
            //   resp.headers["ratelimit-limit"]
            // );
            if (resp.data && resp.data.length === 1) {
              // only return the single channel
              // no need to dump an array to the front end
              res.json({ error: false, data: resp.data[0] });
            } else {
              res
                .status("404")
                .json({ error: true, message: "Channel not found" });
            }
          })
          .catch((err) => {
            if (err.response.statusCode) {
              console.error(
                "Twitch API streams Failed",
                err.response.statusCode,
                err.response.body
              );
            } else {
              console.error("Error", err);
            }
            res
              .status("500")
              .json({ error: true, message: "Twitch API failed" });
          });
      } else {
        res
          .status("401")
          .json({ error: true, message: "Not Logged into Extension" });
      }
    });
};
