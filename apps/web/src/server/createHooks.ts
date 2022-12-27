import type { AppRouter } from "../pages/api/trpc/[[...trpc]].api"
import { createReactQueryHooks } from "@trpc/react"

export const trpc = createReactQueryHooks<AppRouter>()
