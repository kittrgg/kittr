import { TwitchController } from "@Server/controllers/twitch"
import { createRouter } from "@Server/createRouter"

export const twitchRouter = createRouter().merge("profile-page", TwitchController.getProfile)
