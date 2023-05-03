import { Spinner , SideScroller } from "@Components/shared"
import { download } from "@kittr/firebase/storage"
import type { SetupPhoto } from "@kittr/prisma"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { H2 } from "./style"

interface Props {
	id: string
	setupPhotos: SetupPhoto[]
}

function SetupPhotos({ id, setupPhotos }: Props) {
	const [isLoading, setIsLoading] = useState(true)
	const [photoPathsArray, setPhotoPathsArray] = useState<string[]>([])

	useEffect(() => {
		// Turn the setupPhotos from the DB into an array of only the ones that exist
		const setupEntries = Object.entries(setupPhotos || {}).filter((elem) => Boolean(elem[1]))

		const fetchImages = async () => {
			// Fetch only the images that exist
			const result = await Promise.all(
				setupEntries.map(async (entry) => {
					return await download(`${id}-setup-photo-${entry[0]}`)
				})
			)

			if (result) {
				setPhotoPathsArray(result.filter((elem) => Boolean(elem)))
				setIsLoading(false)
			}
		}

		fetchImages()
	}, [id, setupPhotos])

	if (isLoading) {
		return (
			<div id="setup">
				<Spinner width="24px" />
			</div>
		)
	}

	if (Object.values(setupPhotos || {}).length === 0) return null

	return (
		<section id="setup">
			<H2>SETUP</H2>
			<SideScroller childMargin="20px" wrapperStyles={{ width: "100vw" }}>
				{photoPathsArray.map((photo, index) => {
					return <Image alt={`Setup Photo ${index + 1}`} key={photo} src={photo} />
				})}
			</SideScroller>
		</section>
	)
}

export default SetupPhotos

// Styled Components

const Image = styled.img`
	max-width: 500px;
	max-height: 300px;
	object-fit: contain;
`
