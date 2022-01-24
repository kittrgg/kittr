const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const MODEL_NAME = "kitOption";

const schema = new Schema({
  gameId: String,
  displayName: String,
  slotKey: String,
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

exports.default = Model;
