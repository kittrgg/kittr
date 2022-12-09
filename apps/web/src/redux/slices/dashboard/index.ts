import {
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitOption,
	WarzoneTwoKit,
	WarzoneTwoKitBase,
	WarzoneTwoKitOption,
	WarzoneTwoKitOptionTuning
} from "@kittr/prisma"
import { DashboardModals, ReduxModalState } from "@kittr/types/types"
import { createSlice } from "@reduxjs/toolkit"

interface KitUpdates extends WarzoneKit {
	base: WarzoneKitBase | WarzoneTwoKitBase
	options: WarzoneKitOption[] | WarzoneTwoKitOption[]
	tuning: WarzoneTwoKitOptionTuning[]
}

export interface KitWithOptionalId extends Omit<KitUpdates, "id"> {
	id?: string
}

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: {
		activeView: {
			channelId: "",
			view: "Channel List"
		},
		modal: {
			type: "" as DashboardModals,
			data: {} as any
		},
		channelView: {
			gameId: "",
			view: ""
		},
		kitEditor: {
			initialKit: {} as Omit<WarzoneKit | WarzoneTwoKit, "id"> & {
				id?: string
				base: WarzoneKitBase | WarzoneTwoKitBase
				options: WarzoneKitOption[] | WarzoneTwoKitOption[]
				tuning: WarzoneTwoKitOptionTuning[]
			},
			activeKit: {} as Omit<WarzoneKit, "id"> & {
				id?: string
				base: WarzoneKitBase | WarzoneTwoKitBase
				options: WarzoneKitOption[] | WarzoneTwoKitOption[]
				tuning: WarzoneTwoKitOptionTuning[]
			}
		},
		overlayEditor: {
			kit: {} as any
		}
	},
	reducers: {
		setActiveView: (state, action: { payload: { channelId: string; view: string } }) => {
			state.activeView = action.payload
		},
		setModal: (state, action: { payload: ReduxModalState }) => {
			state.modal = action.payload
		},
		/** Boolean handler for helping the tutorial actions where needed */
		handleTutorialAction: (
			state,
			action: { payload: { condition: boolean; trueState: ReduxModalState; falseState: ReduxModalState } }
		) => {
			const { condition, trueState, falseState } = action.payload
			condition ? (state.modal = trueState) : (state.modal = falseState)
		},
		setChannelView: (state, action: { payload: { gameId: string; view: string } }) => {
			state.channelView = action.payload
		},
		setInitialKit: (state, action: { payload: KitWithOptionalId }) => {
			state.kitEditor.initialKit = action.payload
		},
		createNewKit: (state) => {
			state.kitEditor.initialKit = {
				id: undefined,
				base: {} as WarzoneKitBase | WarzoneTwoKitBase,
				options: [] as WarzoneKitOption[] | WarzoneTwoKitOption[],
				tuning: [] as WarzoneTwoKitOptionTuning[],
				featured: false,
				customTitle: "",
				blueprint: "",
				youtubeUrl: "",
				tiktokUrl: "",
				quote: "",
				gameId: "",
				channelId: "",
				baseId: ""
			}

			state.kitEditor.activeKit = {
				id: undefined,
				base: {} as WarzoneKitBase | WarzoneTwoKitBase,
				options: [] as WarzoneKitOption[] | WarzoneTwoKitOption[],
				tuning: [] as WarzoneTwoKitOptionTuning[],
				featured: false,
				customTitle: "",
				blueprint: "",
				youtubeUrl: "",
				tiktokUrl: "",
				quote: "",
				gameId: "",
				channelId: "",
				baseId: ""
			}
		},
		resetToInitialKit: (state) => {
			state.kitEditor.activeKit = state.kitEditor.initialKit
		},
		setActiveKit: (state, action: { payload: KitWithOptionalId }) => {
			state.kitEditor.initialKit = action.payload
			state.kitEditor.activeKit = action.payload
		},
		clearKitEditor: (state) => {
			state.kitEditor.initialKit = {} as KitWithOptionalId
			state.kitEditor.activeKit = {} as KitWithOptionalId
		},
		updateBase: (state, action: { payload: WarzoneKitBase | WarzoneTwoKitBase }) => {
			state.kitEditor.activeKit.base = action.payload
		},
		updateOptions: (state, action: { payload: any[] }) => {
			state.kitEditor.activeKit.options = action.payload
		},
		updateFeatured: (state, action: { payload: boolean }) => {
			state.kitEditor.activeKit.featured = action.payload
		},
		updateCustomTitle: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.customTitle = action.payload
		},
		updateBlueprint: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.blueprint = action.payload
		},
		updateTiktokId: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.tiktokUrl = action.payload
		},
		updateYoutubeURL: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.youtubeUrl = action.payload
		},
		updateChannelQuote: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.quote = action.payload
		},
		setOverlayEditor: (state, action: { payload: any }) => {
			state.overlayEditor = action.payload
		}
	}
})

export const {
	setActiveView,
	setModal,
	handleTutorialAction,
	setChannelView,
	setInitialKit,
	createNewKit,
	setActiveKit,
	resetToInitialKit,
	clearKitEditor,
	updateBase,
	updateOptions,
	updateFeatured,
	updateCustomTitle,
	updateBlueprint,
	updateTiktokId,
	updateYoutubeURL,
	updateChannelQuote,
	setOverlayEditor
} = dashboardSlice.actions
