import { useState, useEffect } from "react"
import * as Styled from "./style"
import CursorSelector from "./CursorSelector"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import { useSelector } from "@Redux/store"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"

const WeaponPicture = ({ ...props }) => {
	const youtubeAutoplay = useSelector((state) => state.displayr.channel.meta.youtubeAutoplay)
	const activeWeapon = useActiveWeapon()
	const { userData, base } = activeWeapon
	const { youtubeURL, tiktokId } = userData
	const { displayName, image } = base

	const split = youtubeURL?.split("&t=") || ""
	const youtubeId = split[0] || youtubeURL

	const youtubeString = new URL(`https://youtube.com/embed/${youtubeId}`)
	youtubeString.searchParams.append("autoplay", youtubeAutoplay ? "1" : "0")
	youtubeString.searchParams.append("start", split[1]?.slice(0, -1) || "0")
	youtubeString.searchParams.append("rel", "0")

	const imageryArray = [
		["youtube", youtubeURL],
		["tiktok", tiktokId],
		["image", image]
	].filter((elem) => !!elem[1])
	const [cursor, setCursor] = useState(0)

	useEffect(() => {
		setCursor(0)
	}, [activeWeapon])

	return (
		<div
			style={{
				width: "100%",
				justifySelf: "center",
				alignSelf: "center"
			}}
		>
			<Styled.WeaponName data-cy="kit-imagery">{displayName}</Styled.WeaponName>
			<Styled.ImageryContainer>
				{imageryArray[cursor]?.[0] === "youtube" && (
					<Styled.YoutubeWrapper>
						<iframe
							src={youtubeString.href}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</Styled.YoutubeWrapper>
				)}

				{imageryArray[cursor]?.[0] === "tiktok" && (
					<Styled.TiktokWrapper>
						<iframe src={`https://www.tiktok.com/embed/${tiktokId}`} allowFullScreen />
					</Styled.TiktokWrapper>
				)}

				{imageryArray[cursor]?.[0] === "image" && (
					<Styled.ImageWrapper>
						<FirebaseStorageResolver
							path={image}
							noSpinner
							render={(data) => (
								<img
									src={data || "/media/logo.svg"}
									alt="Weapon Image"
									style={{ width: "90%", height: "100%", objectFit: "cover" }}
								/>
							)}
						/>
					</Styled.ImageWrapper>
				)}
			</Styled.ImageryContainer>
			{imageryArray.length > 1 && <CursorSelector cursor={cursor} setCursor={setCursor} items={imageryArray} />}
		</div>
	)
}

export default WeaponPicture
