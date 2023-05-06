import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import styled from "styled-components"

/** A logo image with a link wrapper for headers */
function LogoImage() {
	return (
		<Link href={Routes.ROOT} passHref>
			<ImageContainer>
				<img alt="Kittr Logo" height={97} src="/media/beta-logo.svg" width={99} />
			</ImageContainer>
		</Link>
	)
}

export default LogoImage

const ImageContainer = styled.div`
	width: 120px;
`
