import { CompleteGame, RelatedGameModel } from "./index"
import * as z from "zod"

export const PlatformModel = z.object({
	id: z.string(),
	displayName: z.string()
})

export interface CompletePlatform extends z.infer<typeof PlatformModel> {
	games: CompleteGame[]
}

/**
 * RelatedPlatformModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPlatformModel: z.ZodSchema<CompletePlatform> = z.lazy(() =>
	PlatformModel.extend({
		games: RelatedGameModel.array()
	})
)
