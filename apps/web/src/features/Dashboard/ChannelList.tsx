import styled from "styled-components"
import { MutableRefObject, useRef, useEffect } from "react"
import colors from "@Colors"
import { header1, header2, paragraph } from "@Styles/typography"
import { useManagedChannels } from "@Hooks/api/useManagedChannels"
import { useDispatch, useSelector } from "@Redux/store"
import { setActiveView, setChannelView, setModal } from "@Redux/slices/dashboard"
import { useModal } from "@Redux/slices/dashboard/selectors"
import { SVG, Spinner, Button, ProfileImage, SupportUs } from "@Components/shared"
import LogoutButton from "./ProfileButtons"
import CreateChannelModal from "./modals/CreateChannel"
import { useUser } from "@Hooks/useUser"

/** List the channels for a user */
const ChannelList = ({ ...props }) => {
	const dispatch = useDispatch()
	const modalData = useModal().data
	const ref = useRef() as MutableRefObject<HTMLButtonElement>
	const divRef = useRef() as MutableRefObject<HTMLDivElement>
	const { data, refetch, isFetching } = useManagedChannels()
	const user = useUser()
	const modal = useSelector((state) => state.dashboard.modal)

	/** set tutorial ref data */
	useEffect(() => {
		if (modal.data?.page === 2 && ref) {
			dispatch(
				setModal({
					type: "Tutorial",
					data: {
						page: modal.data.page,
						ref: ref.current?.getBoundingClientRect().top * 0.4
					}
				})
			)
		}
		if (data && modal.data?.page === 3) {
			dispatch(
				setModal({
					type: "Tutorial",
					data: {
						page: modal.data.page,
						ref: divRef.current?.getBoundingClientRect().top * 0.4
					}
				})
			)
		}
	}, [modal.data?.page, data, ref, dispatch])

	return (
		<>
			{modal.type === "Create New Channel" && <CreateChannelModal />}
			<Container>
				<SupportUs containerStyles={{ width: "100%", margin: "32px 0" }} />
				<Header data-cy="your-channels-title">
					YOUR CHANNELS{" "}
					<SVG.Renew width="24px" style={{ cursor: "pointer" }} onClick={() => refetch()} dataCy="renew-svg" />
				</Header>
				{isFetching && <Spinner width="100%" height="100px" />}
				{!isFetching &&
					data &&
					data.map((elem) => {
						return (
							<ChannelContainer
								key={elem.id}
								ref={divRef}
								style={modalData?.page === 3 ? { position: "relative", zIndex: 101 } : undefined}
								onClick={() => {
									dispatch(
										setChannelView({
											gameId: "",
											view: "Channel Settings"
										})
									)
									dispatch(
										setActiveView({
											channelId: elem.id,
											view: "Channel"
										})
									)
									modal.type === "Tutorial" &&
										dispatch(
											setModal({
												type: modal.type,
												data: {
													page: modal.data?.page + 1
												}
											})
										)
								}}
								data-cy={`${elem.displayName}-channel-button`}
							>
								<FlexRow>
									<ProfileImage size="50px" imagePath={elem.profile?.hasProfileImage ? elem.id : ""} />
									<ChannelTitle>{elem.displayName}</ChannelTitle>
								</FlexRow>
								<Role>
									Your role is {elem.managers.find((manager) => manager.firebaseId === user?.uid)?.role} for this
									channel.
								</Role>
							</ChannelContainer>
						)
					})}

				{!isFetching && data?.length === 0 && (
					<>
						<Container
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								columnGap: "20px"
							}}
						>
							<Button
								design={"default"}
								text="Need some guidance? Click here for tutorial!"
								onClick={() => {
									dispatch(setModal({ type: "Tutorial", data: { page: 1 } }))
								}}
								dataCy="start-tutorial-button"
							/>
						</Container>
					</>
				)}
				<Button
					buttonRef={ref}
					design="transparent"
					text="Create A New Channel"
					onClick={() =>
						modal.data?.page === 2
							? dispatch(
									setModal({
										type: "Create New Channel",
										data: { isTutorial: true }
									})
							  )
							: dispatch(setModal({ type: "Create New Channel", data: {} }))
					}
					style={{
						width: "100%",
						marginTop: "24px",
						position: modal.type === "Tutorial" ? "relative" : undefined,
						zIndex: modal.type === "Tutorial" && modalData?.page === 2 ? 101 : undefined,
						backgroundColor: colors.light
					}}
					dataCy="create-new-channel"
				/>
				<LogoutButton />
			</Container>
		</>
	)
}

export default ChannelList

// Styled Components

const Container = styled.div``

const Header = styled.h1`
	margin-bottom: 32px;
	${header1};
`

const ChannelContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 20px 0;
	padding: 32px 54px;
	background-color: ${colors.darker};
	border-radius: 20px;
	cursor: pointer;
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 45%;
`

const ChannelTitle = styled.h2`
	width: 85%;
	margin-left: 24px;
	${header2};
	font-size: 18px;
	word-wrap: nowrap;
	overflow: hidden;
	mask-image: linear-gradient(to right, black 40%, transparent 98%);
`

const Role = styled.h3`
	color: ${colors.white};
	${paragraph};
	text-align: right;
`
