import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import styled from "styled-components"

/** A logo image with a link wrapper for headers */
const LogoImage = () => (
	<Link href={Routes.ROOT} passHref>
		<ImageContainer>
			<img alt="Kittr Logo" src="/media/beta-logo.svg" width={99} height={97} />
		</ImageContainer>
	</Link>
)

export default LogoImage

const ImageContainer = styled.div`
	width: 120px;
`
