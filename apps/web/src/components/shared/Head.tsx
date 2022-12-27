import NextHead from "next/head"

interface Props {
	/** Page description to show for social media and Google(?). */
	description: string
	/** The page title for the browser, social media, and Google */
	title: string
}

/** Provide meta for this view using next/head. */
export const Head = ({ description, title }: Props) => (
	<NextHead>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta itemProp="description" content={description} />
		<meta itemProp="name" content="kittr" />

		<meta name="image" content="https://kittr.gg/media/logo-square-with-pad.png" />
		<meta itemProp="image" content="https://kittr.gg/media/logo-square-with-pad.png" />

		<meta property="twitter:card" content="summary" />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:site" content="https://kittr.gg" />
		<meta property="twitter:image" content="https://kittr.gg/media/logo-square-with-pad.png" />

		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content="https://kittr.gg/media/logo-square-with-pad.png" />
		<meta property="og:url" content="https://kittr.gg" />
		<meta property="og:site_name" content="kittr" />
		<meta property="og:type" content="website" />
	</NextHead>
)

export default Head
