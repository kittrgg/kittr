import { useEffect, useState } from "react"
import styled from "styled-components"

import { NextClientEndpointError } from "@kittr/types"
import colors from "@Colors"
import { uploadWithHandlers } from "@Services/firebase/storage/uploadWithHandlers"
import { download } from "@Services/firebase/storage/download"
import { getToken } from "@Services/firebase/auth/getToken"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useCoverPhoto } from "@Redux/slices/dashboard/selectors"
import { Spinner, SVG, Button } from "@Components/shared"
import { deleteFile } from "@Services/firebase/storage"
import fetch from "@Fetch"
import { isFetchError } from "@Utils/helpers/typeGuards"
import { ChannelModel } from "@Services/orm/models/Channel"

const CoverPhotoUploader = ({ ...props }) => {
	const dispatch = useDispatch()
	const { _id } = useChannelData()
	const hasCoverPhoto = useCoverPhoto()
	const [isUploading, setIsUploading] = useState(false)
	const [image, setImage] = useState("")

	const fileName = `${_id}-profile-cover-photo`

	const handleUpload = async (e: any) => {
		e.preventDefault()
		setIsUploading(true)

		const imageFile = e.target.files[0]

		if (imageFile) {
			uploadWithHandlers({
				imageFile,
				fileName,
				maxWidthOrHeight: 2500,
				onSuccess: async () => {
					const response = await fetch.post<ChannelModel | NextClientEndpointError>({
						url: `/api/channel/meta/coverPhoto`,
						headers: { authorization: `Bearer: ${await getToken()}` },
						body: { hasCoverPhoto: true, channelId: _id }
					})

					if (isFetchError(response)) {
						setIsUploading(false)
						dispatch(setModal({ type: "Error Notification", data: {} }))
					} else {
						download(fileName, (path) => {
							setIsUploading(false)
							setImage(path)
						})
					}
				},
				onError: async () => {
					setIsUploading(false)
					dispatch(setModal({ type: "Error Notification", data: {} }))
				}
			})
		}
	}

	useEffect(() => {
		if (hasCoverPhoto) {
			download(fileName, (path) => {
				setIsUploading(false)
				setImage(path)
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isUploading])

	const handleDelete = async (e: any) => {
		setIsUploading(true)
		setImage("")
		const deleted = await deleteFile(fileName)

		const response = await fetch.post({
			url: `/api/channel/meta/coverPhoto`,
			headers: { authorization: `Bearer: ${await getToken()}` },
			body: { hasCoverPhoto: false, channelId: _id }
		})
		if (response && deleted) {
			setIsUploading(false)
		}
		setIsUploading(false)
	}

	if (isUploading) return <Spinner width="24px" />

	return (
		<div>
			<Title>
				Cover Photo
				<SVG.PremiumWithCircle width="24px" style={{ position: "relative", top: "6px", marginLeft: "12px" }} />
			</Title>
			<p style={{ marginBottom: "24px", color: colors.lighter }}>
				For best results, use an image with dimensions of at least 1440px by 300px.
			</p>

			<Grid>
				{hasCoverPhoto && <BackgroundImage backgroundImage={image} />}

				<ButtonsWrapper>
					<Label htmlFor="coverPhotoUpload">
						{hasCoverPhoto ? "CHANGE IMAGE" : "ADD COVER"}
						<input
							id="coverPhotoUpload"
							type="file"
							name="coverPhotoUpload"
							onChange={(e: any) => handleUpload(e)}
							style={{ display: "none" }}
						/>
					</Label>
					{hasCoverPhoto && <Button design="transparent" onClick={handleDelete} text="REMOVE IMAGE" />}
				</ButtonsWrapper>
			</Grid>
		</div>
	)
}

export default CoverPhotoUploader

// Styled Components

const Title = styled.p`
	margin-bottom: 20px;
	color: ${colors.white};
	font-size: 18px;
	letter-spacing: 2px;
`

const Label = styled.label`
	display: inline-block;
	appearance: none;
	height: 62px;
	margin: 24px auto;
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

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`

const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const BackgroundImage = styled.div<{ backgroundImage: string }>`
	width: 100%;
	padding-bottom: 25%;
	background-image: url("${(props) => props.backgroundImage}");
	background-size: cover;
	background-position: center;
`
