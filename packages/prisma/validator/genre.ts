import { CompleteGame, RelatedGameModel } from "./index"
import * as z from "zod"

export const GenreModel = z.object({
	id: z.string(),
	displayName: z.string()
})

export interface CompleteGenre extends z.infer<typeof GenreModel> {
	games: CompleteGame[]
}

/**
 * RelatedGenreModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGenreModel: z.ZodSchema<CompleteGenre> = z.lazy(() =>
	GenreModel.extend({
		games: RelatedGameModel.array()
	})
)
