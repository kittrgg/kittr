import { useState, useEffect } from "react"
import styled from "styled-components"

import { download } from "@Services/firebase/storage"
import { H2 } from "./style"
import { Spinner } from "@Components/shared"
import { SideScroller } from "@Components/shared"

const SetupPhotos = ({ _id, meta }: IChannel) => {
	const { setupPhotos } = meta
	const [isLoading, setIsLoading] = useState(true)
	const [photoPathsArray, setPhotoPathsArray] = useState<Array<string>>([])

	useEffect(() => {
		// Turn the setupPhotoes from the DB into an array of only the ones that exist
		const setupEntries = Object.entries(setupPhotos || {}).filter((elem) => !!elem[1])

		const fetchImages = async () => {
			// Fetch only the images that exist
			const result = await Promise.all(
				setupEntries.map(async (entry) => {
					return await download(`${_id}-setup-photo-${entry[0]}`)
				})
			)

			if (result) {
				setPhotoPathsArray(result.filter((elem) => !!elem))
				setIsLoading(false)
			}
		}

		fetchImages()
	}, [_id, setupPhotos])

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
					return <Image key={photo} src={photo} alt={`Setup Photo ${index + 1}`} />
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
