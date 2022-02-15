import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "kitBase";

const schema = new Schema({
  displayName: String,
  gameId: mongoose.Types.ObjectId,
  image: String,
  gameInfo: {
    blurb: String,
    stats: {
      accuracy: Number,
      range: Number,
      mobility: Number,
      damage: Number,
      fireRate: Number,
      control: Number
    },
    availableOptions: [
      {
        orderPlacement: String,
        optionId: mongoose.Types.ObjectId,
      }
    ],
    maxOptions: Number,
  },
  commandCodes: [String],
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
