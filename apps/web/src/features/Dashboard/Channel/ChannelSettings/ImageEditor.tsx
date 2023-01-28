import { trpc } from "@/lib/trpc"
import colors from "@Colors"
import { Spinner } from "@Components/shared"
import ProfileImage from "@Components/shared/ProfileImage"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useProfileImage } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { caption } from "@Styles/typography"
import { download, uploadWithHandlers } from "@kittr/firebase/storage"
import { useState } from "react"
import styled from "styled-components"

/** Change the channel's profile image */
const ImageEditor = () => {
	const dispatch = useDispatch()
	const { refetch: refetchDashboard } = useDashboardChannel()
	const { data } = useChannelData()
	const profileImage = useProfileImage()
	const [isUploading, setIsUploading] = useState(false)

	const { mutate } = trpc.channels.profile.image.update.useMutation({
		onSuccess: () => {
			// Filename is the channelId
			download(data?.id!, () => {
				setIsUploading(false)
			})
			refetchDashboard()
		},
		onError: () => {
			setIsUploading(false)
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	const handleUpload = async (e: any) => {
		e.preventDefault()
		setIsUploading(true)

		if (!data?.id) return

		const imageFile = e.target.files[0]
		const fileName = data.id

		if (imageFile) {
			uploadWithHandlers({
				fileName,
				imageFile,
				onSuccess: async () => {
					mutate({ channelId: data?.id! })
				},
				onError: () => {
					setIsUploading(false)
					dispatch(setModal({ type: "Error Notification", data: {} }))
				}
			})
		}
	}

	if (isUploading) return <Spinner width="24px" />

	return (
		<>
			<PhotoButtonFlex>
				<ProfileImage imagePath={profileImage} hasProfileImage={!!data?.profile?.hasProfileImage} alwaysRefresh />
				<Label htmlFor="file">
					CHANGE IMAGE
					<input id="file" type="file" name="file" onChange={(e: any) => handleUpload(e)} style={{ display: "none" }} />
				</Label>
			</PhotoButtonFlex>
			<RefreshNote>Note: the dashboard will refresh when you change the image.</RefreshNote>
		</>
	)
}

export default ImageEditor

// Styled Components

const PhotoButtonFlex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const Label = styled.label`
	appearance: none;
	height: 62px;
	margin: auto;
	margin-left: 24px;
	padding: 20px 46px;
	border: none;
	border-radius: 20px;
	background-color: ${colors.dark};
	color: ${colors.white};
	font-family: "Montserrat", serif;
	font-weight: 600;
	font-size: 18px;
	letter-spacing: 1px;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background-color: ${colors.white};
		color: ${colors.dark};
	}
`

const RefreshNote = styled.p`
	margin-top: 12px;
	${caption};
`
