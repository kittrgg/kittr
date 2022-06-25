import { createController } from "@Server/createController"
import * as KitsOptionsService from "@Server/services/kits/options"
import { z } from "zod"

const list = createController().query("", {
	async resolve() {
		const result = await KitsOptionsService.list()
		return result
	}
})

export const KitsOptionsController = {
	list
}