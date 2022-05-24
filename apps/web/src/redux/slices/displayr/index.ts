import { createSlice } from "@reduxjs/toolkit"
import { IPopularityRates } from "@kittr/types/popularity"
import { DeserializeFullChannelProfileReturnType } from "@Services/orm/queries/channels/getFullChannelProfile"
import { NonNullable } from "@Types/index"
import { KitWithBaseInDisplayr } from "@Types/prisma"

export const displayrSlice = createSlice({
	name: "displayr",
	initialState: {
		activeWeapon: {} as KitWithBaseInDisplayr,
		channel: {} as NonNullable<DeserializeFullChannelProfileReturnType>,
		isSidebarOpen: false,
		popularityRates: {} as IPopularityRates
	},
	reducers: {
		setActiveWeapon: (state, action: { payload: KitWithBaseInDisplayr }) => {
			state.activeWeapon = action.payload
		},
		setChannel: (state, action: { payload: NonNullable<DeserializeFullChannelProfileReturnType> }) => {
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
