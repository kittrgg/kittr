import { Dog } from "@prisma/client"

// Generate a dog for testing
// Overrides can be used for input validation or situations where you want a specific value
export const buildDog = (overrides?: Partial<Dog>): Dog => {
	return {
		id: "b747decd-f32e-4bd1-ba3a-891132ff6fa6",
		callName: "Abby",
		akcBreed: "Spanish Mastiff",
		sex: "MALE",
		birthdate: new Date("2021-10-19T11:16:15.281Z"),
		birthplace: "BM",
		akcRegisteredName: "Investor Division Developer Maia of San Bernardino",
		akcTitlePrefix: "AKC",
		akcTitleSuffix: "AKC",
		akcRegistrationType: null,
		akcHeightCard: "NONE",
		akcMeasuredHeight: 12,
		registrationNumber: "7c072230-ac3a-4d00-9e9b-b32f25637e25",
		breederName: "Ottilie Herzog",
		sireName: "Alexandrine",
		damName: "Mose",
		primaryOwnerId: "eb70c5e5-7fe0-4010-a493-d16553ff542f",
		handler: null,
		isOfficiallyMeasured: false,
		jumpHeight: 12,
		preferredClasses: false,
		...overrides
	}
}
