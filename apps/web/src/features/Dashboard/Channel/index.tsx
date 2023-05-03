import Head from "@Components/shared/Head"
import Spinner from "@Components/shared/Spinner"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { useUser } from "@Hooks/useUser"
import { setActiveView, setChannelView } from "@Redux/slices/dashboard"
import { useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import { useEffect } from "react"
import ChannelTopBar from "../UserIdentity"
import { useSocket } from "../../../pages/dashboard.page"
import Warzone2 from "./Warzone2"
import Warzone from "./Warzone"
import DeletedGameNotification from "./DeletedGameNotification"
import ChannelSettings from "./ChannelSettings"

interface Props {
	containerRef: any
}

/** Welcome to the channel. */
function Channel({ containerRef }: Props) {
	const socket = useSocket()
	const dispatch = useDispatch()
	const id = useSelector((state) => state.dashboard.activeView.channelId)
	const { view } = useChannelView()
	const user = useUser()
	const { data, isLoading, refetch } = useDashboardChannel()

	useEffect(() => {
		socket?.on(`dashboard=${id}`, () => refetch())

		socket?.on(`gameDelete=${id}`, () => {
			dispatch(setChannelView({ gameId: "", view: "Channel Settings" }))
			refetch()
		})

		socket?.on(`channelDelete=${id}`, () => {
			dispatch(setActiveView({ channelId: "", view: "Channel List" }))
			dispatch(setChannelView({ gameId: "", view: "Channel Settings" }))
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, dispatch, user?.uid, socket])

	if (isLoading) {
		return <Spinner dataCy="loading-channel" height="100px" width="100%" />
	}

	return (
		<>
			<Head description="" title={`Dashboard - ${data?.displayName} | kittr`} />
			<ChannelTopBar />
			{view === "Channel Settings" && <ChannelSettings />}
			{view === "warzone" && <Warzone />}
			{view === "wz2" && <Warzone2 />}
			{view === "Deleted Game Notification" && <DeletedGameNotification />}
		</>
	)
}

export default Channel
