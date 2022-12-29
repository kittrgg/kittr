import { publicProcedure } from "@Server/index"
import * as KitsService from "@Server/services/kits"

const countKits = publicProcedure.query(async () => {
	const result = await KitsService.countKits()
	return result
})

export const KitsController = {
	countKits
}
