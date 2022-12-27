import Channel from "./Channel"
import ChannelList from "./ChannelList"
import EmailVerification from "./EmailVerificationForm"
import Login from "./Login"
import Profile from "./Profile"
import Sidebar from "./Sidebar"
import ErrorNotification from "./modals/ErrorNotification"
import Tutorial from "./modals/Tutorial"
import colors from "@Colors"
import FullScreen from "@Components/layouts/FullScreen"
import Spinner from "@Components/shared/Spinner"
import { useAllGames } from "@Hooks/trpc/useAllGames"
import { useAllKitBases } from "@Hooks/trpc/useAllKitBases"
import { useUser } from "@Hooks/useUser"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { useDashboardView, useModal } from "@Redux/slices/dashboard/selectors"
import { Routes } from "@Utils/lookups/routes"
import { useRef } from "react"
import styled from "styled-components"

/** The kittr dashboard. */
const Dashboard = () => {
	const modal = useModal()
	const user = useUser()
	const { width } = useViewportDimensions()
	const { view } = useDashboardView()
	const containerRef = useRef(null)
	const { isLoading: gamesLoading } = useAllGames({ include: { _count: true } })
	const { isLoading: kitsLoading } = useAllKitBases({ include: { commandCodes: true } })

	if (width < 1075) {
		return (
			<FullScreen
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					height: "100vh",
					padding: "24px"
				}}
			>
				<img style={{ margin: "0 auto 24px" }} src="/media/logo.svg" alt="kittr logo" />
				<p>We do not currently support the dashboard on mobile.</p>
				<p>Please revisit us with a larger screen!</p>
				<a href={Routes.ROOT} style={{ color: "white", textDecoration: "underline" }}>
					Back to Home
				</a>
			</FullScreen>
		)
	}

	if (Object.keys(user || {}).length === 0) return <Login />

	if (user && !user.emailVerified) return <EmailVerification />

	if (gamesLoading || kitsLoading) return <Spinner width="100%" height="50px" />

	return (
		<FullScreen
			style={{
				display: "flex",
				flexDirection: "row",
				height: "100vh"
			}}
		>
			<Sidebar />
			<Container ref={containerRef}>
				{modal.type === "Error Notification" && <ErrorNotification />}
				{modal.type === "Tutorial" && <Tutorial />}
				{view === "Channel List" && <ChannelList />}
				{view === "Profile Settings" && <Profile />}
				{view === "Channel" && <Channel containerRef={containerRef} />}
			</Container>
		</FullScreen>
	)
}

export default Dashboard

// Styled Components

const Container = styled.main`
	position: relative;
	flex: 1;
	padding: 108px 62px;
	background: ${colors.light};
	border-top-left-radius: 60px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`
