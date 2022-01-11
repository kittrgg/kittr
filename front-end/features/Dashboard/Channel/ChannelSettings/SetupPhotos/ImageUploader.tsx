import { useState, useEffect } from "react"
import styled from "styled-components"
import "firebase/storage"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { getToken } from "@Services/firebase/auth/getToken"
import { uploadWithHandlers } from "@Services/firebase/storage/uploadWithHandlers"
import { deleteFile, download } from "@Services/firebase/storage"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { Spinner, SVG } from "@Components/shared"
import { useChannelData } from "@Redux/slices/dashboard/selectors"

interface Props {
	slot: number
}

const ImageUploader = ({ slot }: Props) => {
	const dispatch = useDispatch()
	const { _id } = useChannelData()
	const [image, setImage] = useState("")
	const [isUploading, setIsUploading] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const fileName = `${_id}-setup-photo-${slot}`

	const handleUpload = async (e: any) => {
		e.preventDefault()
		setIsUploading(true)

		const imageFile = e.target.files[0]

		if (imageFile) {
			uploadWithHandlers({
				imageFile,
				fileName,
				maxWidthOrHeight: 500,
				onSuccess: async () => {
					const response = await fetch(`/api/channel/meta/setupPhoto`, {
						method: "POST",
						headers: {
							authorization: `Bearer: ${await getToken()}`
						},
						body: JSON.stringify({
							slot,
							channelId: _id,
							boolean: true
						})
					})

					if (response) {
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

	const handleDelete = async () => {
		try {
			setIsUploading(true)
			const result = await deleteFile(fileName)

			const response = await fetch(`/api/channel/meta/setupPhoto`, {
				method: "POST",
				headers: {
					authorization: `Bearer: ${await getToken()}`
				},
				body: JSON.stringify({
					slot,
					channelId: _id,
					boolean: false
				})
			})

			if (result && response) {
				setIsUploading(false)
				return setImage("")
			}
		} catch (error) {
			setIsUploading(false)
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	}

	useEffect(() => {
		download(fileName, (path) => setImage(path))
	}, [download])

	if (isUploading) {
		return (
			<CenterSpinner>
				<Spinner width="32px" />
			</CenterSpinner>
		)
	}

	return (
		<div>
			<Label
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				htmlFor={fileName}
				style={{
					backgroundImage: `url("${image}")` || "transparent",
					backgroundSize: image ? "contain" : "",
					backgroundPosition: "center",
					backgroundRepeat: image ? "no-repeat" : "",
					border: `2px dashed ${colors.lighter}`
				}}
			>
				{!image && (
					<>
						<SVG.Export width="24px" stroke={colors.lighter} style={{ marginRight: "24px" }} />
						UPLOAD
					</>
				)}
				<input
					id={fileName}
					type="file"
					name={fileName}
					onChange={(e: any) => {
						e.preventDefault()
						handleUpload(e)
					}}
					style={{ display: "none" }}
				/>
				{isHovered && image && (
					<DeleteBubble onMouseEnter={() => setIsHovered(true)} onClick={handleDelete} isHovered={isHovered}>
						<SVG.X style={{ width: "100%", height: "100%" }} fill={colors.red} />
					</DeleteBubble>
				)}
			</Label>
			<Caption>Slot #{slot}</Caption>
		</div>
	)
}

export default ImageUploader

// Styled Components

const CenterSpinner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Label = styled.label`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	appearance: none;
	height: 112px;
	border: 2px dashed ${colors.lighter};
	border-radius: 20px;
	background-color: transparent;
	${paragraph};
	color: ${colors.lighter};
	cursor: pointer;
	transition: 0.2s;
`

const Caption = styled.p`
	margin-top: 12px;
	${paragraph};
	font-size: 14px;
	color: ${colors.lighter};
	text-align: center;
`

const DeleteBubble = styled.button<{ isHovered: boolean }>`
	appearance: none;
	border: none;
	position: absolute;
	top: -6px;
	right: -6px;
	width: 20px;
	height: 20px;
	padding: 4px;
	border-radius: 25px;
	background-color: ${colors.white};
	cursor: pointer;
	transition: 0.2s;
	transform: ${(props) => (props.isHovered ? "scale(1)" : "scale(0)")};
`
