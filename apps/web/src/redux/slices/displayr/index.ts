import { createSlice } from "@reduxjs/toolkit"
import { Kit } from "@kittr/prisma"
import { IPopularityRates } from "@kittr/types/popularity"
import type { CompleteChannel } from "@Types/pages/WarzoneProfile"

export const displayrSlice = createSlice({
	name: "displayr",
	initialState: {
		activeWeapon: {} as Kit,
		channel: {} as CompleteChannel,
		isSidebarOpen: false,
		popularityRates: {} as IPopularityRates
	},
	reducers: {
		setActiveWeapon: (state, action: { payload: Kit }) => {
			state.activeWeapon = action.payload
		},
		setChannel: (state, action: { payload: CompleteChannel }) => {
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
