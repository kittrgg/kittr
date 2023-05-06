import type { SVGType } from "@Components/shared"
import { SvgByType } from "@Components/shared"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import type { ChannelLink, LinkProperty } from "@kittr/prisma"
import type { CSSProperties } from "react"
import styled from "styled-components"

const linkOrder: LinkProperty[] = ["TWITCH", "YOUTUBE", "FACEBOOK", "TWITTER", "TIKTOK", "INSTAGRAM", "DISCORD"]

interface Props {
	/** Channel's links from the database. */
	links: ChannelLink[]
	/** The size of the icon to show  */
	iconSize?: number
	/** Optional hover color.  */
	colorHover?: string
	/** Optional container styles. */
	style?: CSSProperties
}

/** List the social links of the channel with icons. */
export function SocialIcons({ links, iconSize = 30, colorHover, style }: Props) {
	// LEGACY: Make sure that the link is converted to a hyperlink if it is incomplete from the database.
	const sanitizeLink = (link: string) => {
		if (!link.startsWith("https://")) return `https://${link}`
		return link
	}

	return (
		<Icons data-cy="social-icons" style={{ ...style }}>
			{customOrderArray<ChannelLink>({
				sortingArray: linkOrder,
				keyToSort: "property",
				array: links
			}).map((link) => {
				const linkType = link.property.charAt(0).toUpperCase() + link.property.toLowerCase().slice(1)

				return (
					<a
						href={sanitizeLink(link.value)}
						key={link.id}
						onClick={(e) => e.stopPropagation()}
						rel="noopener noreferrer"
						target="_blank"
					>
						<div style={{ margin: "0 5px" }}>
							<SvgByType
								alt={`"Channel's ${linkType} Link"`}
								colorHover={colorHover}
								height={iconSize}
								type={linkType as SVGType}
								width={iconSize}
							/>
						</div>
					</a>
				)
			})}
		</Icons>
	)
}

export default SocialIcons

// Styled Components

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 2.5%;
		min-width: 32px;
	}
`
