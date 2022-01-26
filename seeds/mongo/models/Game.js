const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const MODEL_NAME = "game";

const schema = new Schema(
  {
    displayName: String,
    urlSafeName: String,
    backgroundImage: String,
    titleImage: String,
    releaseDate: Date,
    active: {
      type: Boolean,
      default: false,
    },
    meta: {
      creatorCode: String,
    },
    genres: Array,
    platforms: Array
  },
  { minimize: false }
);

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

exports.default = Model;
