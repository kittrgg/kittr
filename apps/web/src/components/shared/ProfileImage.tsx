import { useIsMounted } from "@Hooks/useIsMounted"
import { download } from "@Services/firebase/storage"
import { montserrat } from "@Styles/typography"
import { useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
	/** If user has profile image. */
	hasProfileImage: boolean
	/** Path for the image. */
	imagePath?: string | null
	/** The width and height of the image. This image is always a square. */
	size?: string
	/** A border color to apply to the image. */
	border?: string
	/** Is this channel live? This information needs to come from the Twitch API. */
	isLive?: boolean
	/** Optional cache bust using Math.random on the path of the image. */
	alwaysRefresh?: boolean
}

/** The profile image to be used for channels on the platform.
 *
 * Images must first be fetched and/or computed. At that time, we will use the shimmering placeholder. Once the image has loaded, it will be rendered.
 *
 * If an image has not been provided, we will render a placeholder.
 */
export const ProfileImage = ({
	imagePath,
	hasProfileImage,
	size = "50px",
	border,
	isLive = false,
	alwaysRefresh
}: Props) => {
	const [path, setPath] = useState("")
	const [isLoading, setIsLoading] = useState(true)
	const [errored, setErrored] = useState(false)
	const isMounted = useIsMounted()

	useEffect(() => {
		// This is for dev!
		if (process.env.VERCEL_ENV === "development" && !hasProfileImage) {
			setErrored(true)
			return setIsLoading(false)
		}

		// This is for prod!
		if (!hasProfileImage) {
			setErrored(true)
			return setIsLoading(false)
		}

		if (imagePath) {
			const fetchImage = async () => {
				try {
					const uri = await download(imagePath)

					if (uri && isMounted()) {
						setPath(uri)
						setErrored(false)
						setIsLoading(false)
					}

					if (!uri) {
						setErrored(true)
						setIsLoading(false)
					}
				} catch (err) {
					setErrored(true)
					setIsLoading(false)
				}
			}

			fetchImage()
		}
	}, [imagePath, isMounted, hasProfileImage])

	if (!imagePath || errored) {
		return (
			<Wrapper imageSize={size}>
				<ImageContainer data-cy="profile-image" imageSize={size}>
					<img
						src="/media/icons/empty-avatar.svg"
						alt="Channel Profile Image"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</ImageContainer>
				{isLive && <LiveBadge>LIVE</LiveBadge>}
			</Wrapper>
		)
	}

	const cacheBuster = alwaysRefresh ? `/?${Math.random()}` : ""

	return (
		<Wrapper imageSize={size}>
			<ImageContainer data-cy="profile-image" imageSize={size}>
				{isLoading ? (
					<img src="/media/shimmer.svg" alt="" style={{ width: "100%" }} loading="lazy" />
				) : (
					<>
						<img
							src={`${path}${cacheBuster}`}
							alt="Profile image"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "100%",
								border: border ? `4px solid ${border}` : ""
							}}
							loading="lazy"
						/>
					</>
				)}
			</ImageContainer>
			{isLive && <LiveBadge>LIVE</LiveBadge>}
		</Wrapper>
	)
}

export default ProfileImage

// Styled Components

const Wrapper = styled.div<{ imageSize: string | undefined }>`
	position: relative;
	font-size: ${(props) => props.imageSize?.substring(0, props.imageSize?.length - 2)}px;
	display: flex;
	justify-content: center;
`

const ImageContainer = styled.div<{ imageSize: string | undefined }>`
	position: relative;
	min-width: ${(props) => (props.imageSize ? props.imageSize : "125px")};
	width: ${(props) => (props.imageSize ? props.imageSize : "125px")};
	height: ${(props) => (props.imageSize ? props.imageSize : "125px")};
	border-radius: 100%;
	overflow: hidden;

	& > img {
		vertical-align: baseline;
	}

	& > img:-moz-loading {
		visibility: hidden;
	}
`

const LiveBadge = styled.div`
	position: absolute;
	bottom: -5%;
	left: 50%;
	transform: translate(-50%, 0);
	padding: 0.5em 0.5em;
	border-radius: 0.5em;
	background-color: red;
	font-size: 0.125em;
	${montserrat};
	font-style: normal;
	font-weight: 600;
	letter-spacing: 2px;
`
