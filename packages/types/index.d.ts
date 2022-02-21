export type DogSex = "MALE" | "FEMALE"

export type AkcRegistrationType =
	| "AKCREGNUMBER"
	| "AKCPALNUMBER"
	| "FOREIGNREGNUMBER"

export type AkcHeightCard = "NONE" | "TEMP" | "PERM"

export interface Dog {
	id: string
	callName: string
	akcBreed: string
	sex: DogSex
	birthdate: Date | null
	birthplace: string | null
	akcRegisteredName: string | null
	akcTitlePrefix: string | null
	akcTitleSuffix: string | null
	akcRegistrationType: AkcRegistrationType | null
	akcHeightCard: AkcHeightCard
	akcMeasuredHeight: number | null
	registrationNumber: string | null
	breederName: string | null
	sireName: string | null
	damName: string | null
	primaryOwnerId: string
	handler: string | null
	isOfficiallyMeasured: boolean
	jumpHeight: number | null
	preferredClasses: boolean
}
