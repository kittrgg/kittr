import { useState } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { uploadWithHandlers } from "@Services/firebase/storage/uploadWithHandlers"
import { caption } from "@Styles/typography"
import { download } from "@Services/firebase/storage/download"
import { getToken } from "@Services/firebase/auth/getToken"
import ProfileImage from "@Components/shared/ProfileImage"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useProfileImage } from "@Redux/slices/dashboard/selectors"
import { Spinner } from "@Components/shared"

import fetch from "@Utils/helpers/fetch"
import { isFetchError } from "@Utils/helpers/typeGuards"

/** Change the channel's profile image */
const ImageEditor = ({ ...props }) => {
	const dispatch = useDispatch()
	const { _id } = useChannelData()
	const profileImage = useProfileImage()
	const [isUploading, setIsUploading] = useState(false)

	const handleUpload = async (e: any) => {
		e.preventDefault()
		setIsUploading(true)

		const imageFile = e.target.files[0]
		const fileName = _id

		if (imageFile) {
			uploadWithHandlers({
				fileName,
				imageFile,
				onSuccess: async () => {
					const setImage = await fetch.post({
						url: `/api/channel/meta/image`,
						body: { _id },
						headers: {
							authorization: `Bearer: ${await getToken()}`
						}
					})

					if (isFetchError(setImage)) {
						setIsUploading(false)
						dispatch(setModal({ type: "Error Notification", data: {} }))
					} else {
						download(fileName, (path) => {
							setIsUploading(false)
						})
					}
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
				<ProfileImage imagePath={profileImage} alwaysRefresh />
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
