import colors from "@Colors"
import { SVG } from "@Components/shared"
import { ChannelAffiliate } from "@kittr/prisma"
import { paragraph } from "@Styles/typography"
import styled from "styled-components"

import { H2, GridItem, SpecsGrid } from "./style"

interface Props {
	brandColor: string
	affiliates: ChannelAffiliate[]
}

const Affiliates = ({ affiliates, brandColor }: Props) => {
	if (Object.values(affiliates || {}).length === 0) return null

	return (
		<section id="affiliates">
			<H2>AFFILIATES</H2>
			<SpecsGrid>
				{affiliates &&
					Object.entries(affiliates).map((spec) => {
						const [company, attrs] = spec
						const { code, description, url } = attrs

						return (
							<GridItem key={company} colorHover={brandColor}>
								<Flex>
									<Company>{company}</Company>
									{description && <Description>{description}</Description>}
								</Flex>
								{code && (
									<Flex>
										<Code>CODE</Code>
										<Code>{code}</Code>
									</Flex>
								)}
								{url && (
									<Link href={url} target="_blank" rel="noopener noreferrer">
										<SVG.Link
											width="24px"
											stroke={colors.lighter}
											style={{ position: "relative", top: "6px", marginRight: "12px" }}
										/>
										Visit Link
									</Link>
								)}
							</GridItem>
						)
					})}
			</SpecsGrid>
		</section>
	)
}

export default Affiliates

// Styled Components

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const Company = styled.h3`
	${paragraph};
	margin-bottom: 10px;
	color: ${colors.white};
	mix-blend-mode: difference;
`

const Description = styled.h3`
	${paragraph};
	margin-left: 40px;
	margin-bottom: 10px;
	color: ${colors.white};
	mix-blend-mode: difference;
`

const Code = styled.p`
	${paragraph};
	color: ${colors.lighter};
	mix-blend-mode: difference;
`

const Link = styled.a`
	display: block;
	${paragraph};
	color: ${colors.lighter};
	text-decoration: none;
	text-align: center;
	transition: 0.2s;
	mix-blend-mode: difference;

	@media (hover: hover) {
		&:hover {
			color: ${colors.white};
			mix-blend-mode: difference;
		}
	}
`
