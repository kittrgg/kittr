import { createSlice } from "@reduxjs/toolkit"

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
