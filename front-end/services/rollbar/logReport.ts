import Rollbar from "rollbar"
import config from "./config"

export const logReport = new Rollbar(config)
