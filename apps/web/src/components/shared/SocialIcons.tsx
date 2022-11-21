import { SvgByType, SVGType } from "@Components/shared"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { ChannelLink, LinkProperty } from "@kittr/prisma"
import { CSSProperties } from "react"
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
export const SocialIcons = ({ links, iconSize = 30, colorHover, style }: Props) => {
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
						key={link.id}
						href={sanitizeLink(link.value)}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
					>
						<div style={{ margin: "0 5px" }}>
							<SvgByType
								type={linkType as SVGType}
								alt={`"Channel's ${linkType} Link"`}
								width={iconSize}
								height={iconSize}
								colorHover={colorHover}
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
