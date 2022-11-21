import { UsersController } from "@Server/controllers/users"
import { createRouter } from "@Server/createRouter"

export const usersRouter = createRouter().merge("create", UsersController.create)
