import { InferQueryOutput } from "@Server/index"
import {
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitBaseCategory,
	WarzoneKitOption,
	WarzoneTwoKitBase,
	WarzoneTwoKitBaseCategory,
	WarzoneTwoKitOption,
	WarzoneTwoKitOptionTuning
} from "@kittr/prisma"
import { IPopularityRates } from "@kittr/types/popularity"
import { createSlice } from "@reduxjs/toolkit"

type ActiveWeaponKit = WarzoneKit & {
	options: WarzoneKitOption[] | WarzoneTwoKitOption[]
	base: (WarzoneKitBase | WarzoneTwoKitBase) & {
		category: WarzoneKitBaseCategory | WarzoneTwoKitBaseCategory
	}
	tuning?: WarzoneTwoKitOptionTuning[]
}

export const displayrSlice = createSlice({
	name: "displayr",
	initialState: {
		activeWeapon: {} as ActiveWeaponKit,
		channel: {} as NonNullable<InferQueryOutput<"channels/profile/get">>,
		isSidebarOpen: false,
		popularityRates: {} as IPopularityRates
	},
	reducers: {
		setActiveWeapon: (state, action: { payload: ActiveWeaponKit }) => {
			state.activeWeapon = action.payload
		},
		setChannel: (state, action: { payload: NonNullable<InferQueryOutput<"channels/profile/get">> }) => {
			state.channel = action.payload
		},
		setIsSidebarOpen: (state, action: { payload: boolean }) => {
			state.isSidebarOpen = action.payload
		},
		setPopularityRates: (state, action: { payload: IPopularityRates }) => {
			state.popularityRates = action.payload
		}
	}
})

export const { setActiveWeapon, setChannel, setIsSidebarOpen, setPopularityRates } = displayrSlice.actions
