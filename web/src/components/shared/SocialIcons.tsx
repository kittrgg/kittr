import { SvgByType, SVGType } from "@Components/shared"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { linkLabelImages } from "@Utils/lookups/linkLabelImages"
import styled from "styled-components"

const linkOrder = ["twitch", "youtube", "facebook", "twitter", "tiktok", "instagram", "discord"]

interface Props {
	/** Channel's links from the database. */
	links: IChannelLinks
	/** The size of the icon to show  */
	iconSize?: number
	/** Optional hover color.  */
	colorHover?: string
	/** Optional container styles. */
	style?: React.CSSProperties
}

/** List the social links of the channel with icons. */
export const SocialIcons = ({ links, iconSize = 30, colorHover, style }: Props) => {
	const linkEntries = Object.entries(links)

	// LEGACY: Make sure that the link is converted to a hyperlink if it is incomplete from the database.
	const sanitizeLink = (link: string) => {
		if (!link.startsWith("https://")) return `https://${link}`
		return link
	}

	return (
		<Icons data-cy="social-icons" style={{ ...style }}>
			{customOrderArray<[keyof typeof linkLabelImages, string]>({
				sortingArray: linkOrder,
				indexToSort: 0,
				array: linkEntries
			}).map((link) => {
				const [key, value] = link

				return (
					<a
						key={link[0]}
						href={sanitizeLink(value)}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
					>
						<div style={{ margin: "0 5px" }}>
							<SvgByType
								type={(key.charAt(0).toUpperCase() + key.slice(1)) as SVGType}
								alt={`"Channel's ${key.charAt(0).toUpperCase() + key.slice(1)} Link"`}
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
