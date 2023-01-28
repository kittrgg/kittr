import colors from "@Colors"
import { Spinner, SVG } from "@Components/shared"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { trpc } from "@Server/createTRPCNext"
import { deleteFile, download } from "@kittr/firebase/storage"
import { uploadWithHandlers } from "@kittr/firebase/storage/uploadWithHandlers"
import { paragraph } from "@Styles/typography"
import { useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
	slot: number
}

const ImageUploader = ({ slot }: Props) => {
	const dispatch = useDispatch()
	const { data, refetch: refetchDashboard } = useDashboardChannel()
	const [image, setImage] = useState("")
	const [isUploading, setIsUploading] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const fileName = `${data?.id}-setup-photo-${slot}`

	const { mutate: uploadImage } = trpc.channels.profile["setup-photos"].update.useMutation({
		onSuccess: () => {
			download(fileName, (path) => {
				setIsUploading(false)
				setImage(path)
			})
			refetchDashboard()
		},
		onError: () => {
			setIsUploading(false)
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	const { mutate: removeImage } = trpc.channels.profile["setup-photos"].update.useMutation({
		onSuccess: () => {
			setIsUploading(false)
			setImage("")
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

		const imageFile = e.target.files[0]

		if (imageFile) {
			uploadWithHandlers({
				imageFile,
				fileName,
				maxWidthOrHeight: 500,
				onSuccess: async () => {
					uploadImage({ slot, channelId: data?.id!, bool: true, channelProfileId: data?.profile?.id! })
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
			await deleteFile({ id: fileName })

			removeImage({ slot, channelId: data?.id!, bool: false, channelProfileId: data?.profile?.id! })
		} catch (error) {
			setIsUploading(false)
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	}

	useEffect(() => {
		const photo = data?.profile?.setupPhotos?.find((photo) => photo.slot === slot)

		if (photo?.exists) {
			download(fileName, (path) => setImage(path))
		}
	}, [fileName, data?.profile?.setupPhotos, slot])

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
						<SVG.X style={{ position: "absolute", top: 4, left: 0 }} fill={colors.red} />
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
