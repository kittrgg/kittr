import { createSlice } from "@reduxjs/toolkit"

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
			initialKit: {} as IKitUpdates,
			activeKit: {} as IKitUpdates
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
		setInitialKit: (state, action: { payload: IKitUpdates }) => {
			state.kitEditor.initialKit = action.payload
		},
		createNewKit: (state) => {
			state.kitEditor.initialKit = {
				_id: undefined,
				baseId: "",
				base: {} as IKitBase,
				options: [],
				userData: {
					featured: false,
					customTitle: "",
					blueprint: "",
					youtubeURL: "",
					tiktokId: ""
				}
			}

			state.kitEditor.activeKit = {
				_id: undefined,
				baseId: "",
				base: {} as IKitBase,
				options: [],
				userData: {
					featured: false,
					customTitle: "",
					blueprint: "",
					youtubeURL: "",
					tiktokId: ""
				}
			}
		},
		resetToInitialKit: (state) => {
			state.kitEditor.activeKit = state.kitEditor.initialKit
		},
		setActiveKit: (state, action: { payload: IKitUpdates }) => {
			state.kitEditor.initialKit = action.payload
			state.kitEditor.activeKit = action.payload
		},
		clearKitEditor: (state) => {
			state.kitEditor.initialKit = {} as IKitUpdates
			state.kitEditor.activeKit = {} as IKitUpdates
		},
		updateBase: (state, action: { payload: IKitBase }) => {
			state.kitEditor.activeKit.base = action.payload
		},
		updateOptions: (state, action: { payload: any[] }) => {
			state.kitEditor.activeKit.options = action.payload
		},
		updateFeatured: (state, action: { payload: boolean }) => {
			state.kitEditor.activeKit.userData.featured = action.payload
		},
		updateCustomTitle: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.userData.customTitle = action.payload
		},
		updateBlueprint: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.userData.blueprint = action.payload
		},
		updateTiktokId: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.userData.tiktokId = action.payload
		},
		updateYoutubeURL: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.userData.youtubeURL = action.payload
		},
		updateChannelQuote: (state, action: { payload: string }) => {
			state.kitEditor.activeKit.userData.quote = action.payload
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
