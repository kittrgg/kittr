import { useEffect } from "react"
import { useDispatch, useSelector } from "@Redux/store"
import { useUser } from "@Hooks/useUser"
import { useChannelView } from "@Redux/slices/dashboard/selectors"
import { setActiveView, setChannelView } from "@Redux/slices/dashboard"

import ChannelSettings from "./ChannelSettings"
import Warzone from "./Warzone"
import ChannelTopBar from "../UserIdentity"
import DeletedGameNotification from "./DeletedGameNotification"
import Spinner from "@Components/shared/Spinner"
import Head from "@Components/shared/Head"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { useSocket } from "../../../pages/dashboard.page"

interface Props {
	containerRef: any
}

/** Welcome to the channel. */
const Channel = ({ containerRef }: Props) => {
	const socket = useSocket()
	const dispatch = useDispatch()
	const _id = useSelector((state) => state.dashboard.activeView.channelId)
	const { view } = useChannelView()
	const user = useUser()
	const { data, isLoading, refetch } = useDashboardChannel()

	useEffect(() => {
		socket.on(`dashboard=${_id}`, () => refetch())

		socket.on(`gameDelete=${_id}`, () => {
			dispatch(setChannelView({ gameId: "", view: "Channel Settings" }))
			refetch()
		})

		socket.on(`channelDelete=${_id}`, () => {
			dispatch(setActiveView({ channelId: "", view: "Channel List" }))
			dispatch(setChannelView({ gameId: "", view: "Channel Settings" }))
		})
	}, [_id, dispatch, user?.uid, socket])

	if (isLoading) {
		return <Spinner width="100%" height="100px" dataCy="loading-channel" />
	}

	return (
		<>
			<Head title={`Dashboard - ${data?.displayName} | kittr`} description="" />
			<ChannelTopBar />
			{view === "Channel Settings" && <ChannelSettings containerRef={containerRef} />}
			{view === "warzone" && <Warzone />}
			{view === "Deleted Game Notification" && <DeletedGameNotification />}
		</>
	)
}

export default Channel
