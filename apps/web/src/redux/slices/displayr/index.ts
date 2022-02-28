import { createSlice } from "@reduxjs/toolkit"
import { IKit } from "@kittr/types/kits"
import { IChannel } from "@kittr/types/channel"
import { IPopularityRates } from "@kittr/types/popularity"

export const displayrSlice = createSlice({
	name: "displayr",
	initialState: {
		activeWeapon: {} as IKit,
		channel: {} as IChannel,
		isSidebarOpen: false,
		popularityRates: {} as IPopularityRates
	},
	reducers: {
		setActiveWeapon: (state, action: { payload: IKit }) => {
			state.activeWeapon = action.payload
		},
		setChannel: (state, action: { payload: IChannel }) => {
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
