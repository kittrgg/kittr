import { createReactQueryHooks } from "@trpc/react"
import type { AppRouter } from "../pages/api/trpc/[[...trpc]].api"

export const trpc = createReactQueryHooks<AppRouter>()
