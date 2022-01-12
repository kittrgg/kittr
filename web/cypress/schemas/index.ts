import { SchemaCollection, combineSchemas, versionSchemas } from "@cypress/schema-tools"
import { addManagerError } from "./addManagerError"
import { game } from "./game"
import { kitBase } from "./kitBase"
import { kitOption } from "./kitOption"
import { channel } from "./channel"
import { managerDetails } from "./managerDetails"

export const schemas: SchemaCollection = combineSchemas(
	versionSchemas(game),
	versionSchemas(kitBase),
	versionSchemas(kitOption),
	versionSchemas(channel),
	versionSchemas(addManagerError),
	versionSchemas(managerDetails)
)
