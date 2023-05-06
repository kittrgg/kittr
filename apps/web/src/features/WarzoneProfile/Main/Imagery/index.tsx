import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"
import { useChannelProfileData } from "@Hooks/trpc/useChannelProfileData"
import { useActiveChannelKit } from "@Hooks/useActiveChannelKit"
import { useState, useEffect } from "react"
import * as Styled from "./style"
import CursorSelector from "./CursorSelector"

function WeaponPicture() {
	const { data: channelData } = useChannelProfileData()
	const activeWeapon = useActiveChannelKit()

	// Const channel = useChannel()
	const youtubeAutoplay = channelData?.profile?.youtubeAutoplay
	// Const activeWeapon = useActiveWeapon()
	const { base, youtubeUrl, tiktokUrl } = activeWeapon!
	const { displayName, imageUrl } = base

	const split = youtubeUrl?.split("&t=") || ""
	const youtubeId = split[0] || youtubeUrl

	const youtubeString = new URL(`https://youtube.com/embed/${youtubeId}`)
	youtubeString.searchParams.append("autoplay", youtubeAutoplay ? "1" : "0")
	youtubeString.searchParams.append("start", split[1].slice(0, -1) || "0")
	youtubeString.searchParams.append("rel", "0")

	const imageryArray = [
		["youtube", youtubeUrl],
		["tiktok", tiktokUrl],
		["image", imageUrl]
	].filter((elem) => Boolean(elem[1]))
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
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							frameBorder="0"
							src={youtubeString.href}
						/>
					</Styled.YoutubeWrapper>
				)}

				{imageryArray[cursor]?.[0] === "tiktok" && (
					<Styled.TiktokWrapper>
						<iframe allowFullScreen src={`https://www.tiktok.com/embed/${tiktokUrl}`} />
					</Styled.TiktokWrapper>
				)}

				{imageryArray[cursor]?.[0] === "image" && (
					<Styled.ImageWrapper>
						<FirebaseStorageResolver
							noSpinner
							path={imageUrl}
							render={(data) => (
								<img
									alt="Weapon Image"
									src={data || "/media/logo.svg"}
									style={{ width: "90%", height: "100%", objectFit: "cover" }}
								/>
							)}
						/>
					</Styled.ImageWrapper>
				)}
			</Styled.ImageryContainer>
			{imageryArray.length > 1 && <CursorSelector cursor={cursor} items={imageryArray} setCursor={setCursor} />}
		</div>
	)
}

export default WeaponPicture
