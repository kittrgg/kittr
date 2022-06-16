import { IPopularityRates } from "@kittr/types/popularity"
import { createSlice } from "@reduxjs/toolkit"
import { InferQueryOutput } from "@Server/index"
import { KitWithBaseInDisplayr } from "@Types/prisma"

export const displayrSlice = createSlice({
	name: "displayr",
	initialState: {
		activeWeapon: {} as KitWithBaseInDisplayr,
		channel: {} as InferQueryOutput<"channels/profile/get">,
		isSidebarOpen: false,
		popularityRates: {} as IPopularityRates
	},
	reducers: {
		setActiveWeapon: (state, action: { payload: KitWithBaseInDisplayr }) => {
			state.activeWeapon = action.payload
		},
		setChannel: (state, action: { payload: InferQueryOutput<"channels/profile/get"> }) => {
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
