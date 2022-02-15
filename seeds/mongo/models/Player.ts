import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "player";

const schema = new Schema(
  {
    createdDate: Date,
    displayName: String,
    urlSafeName: String,
    viewCount: {
      type: Schema.Types.Number,
      default: 0,
    },
    games: [
      {
        id: Schema.Types.ObjectId,
        code: {
          type: String,
          optional: true
        }
      }
    ],
    kits: [
      {
        _id: Schema.Types.ObjectId,
        baseId: String,
        options: [Schema.Types.ObjectId],
        userData: {
          customTitle: String,
          blueprint: String,
          features: Boolean,
          youtubeURL: {
            type: String,
            optional: true,
          },
          tiktokId: {
            type: String,
            optional:true
          },
          quote: {
            type: String,
            optional:true
          },
        }
      }
    ],
    meta: {
      brandColors: {
        primary: "",
      },
      stripeId: {
        type: String,
        default: "",
        optional: true,
      },
      premiumType: {
        type: String,
        default: "",
        optional: true,
      },
      profileImage: String,
      hasProfileImage: {
        type: Schema.Types.Boolean,
        default: false,
      },
      links: {
        type: Schema.Types.Mixed,
        default: {},
      },
      youtubeAutoplay: Boolean,
    },
    managers: [
      {
        uid: String,
        role: String
      }
    ],
    overlay: {
      backgroundColorPrimary: {
        type: String,
        optional:true
      }
    },
      backgroundColorSecondary: {
        type: String,
        optional:true
      },
      textColorPrimary: {
        type: String,
        optional:true
      },
      textColorAccent: {
        type: String,
        optional:true
      },
      textColorSecondary: {
        type: String,
        optional:true
      },
  },
  { minimize: false }
);

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
