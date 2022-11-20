import { createController } from "@Server/createController"
import * as KitsService from "@Server/services/kits"

const countKits = createController().query("", {
	async resolve() {
		const result = await KitsService.countKits()
		return result
	}
})

export const KitsController = {
	countKits
}
