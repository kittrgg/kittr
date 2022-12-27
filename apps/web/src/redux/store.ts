import { dashboardSlice } from "./slices/dashboard"
import { displayrSlice } from "./slices/displayr"
import { globalSlice } from "@Redux/slices/global"
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux"

export const store = configureStore({
	reducer: {
		global: globalSlice.reducer,
		dashboard: dashboardSlice.reducer,
		displayr: displayrSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch = () => useAppDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector
