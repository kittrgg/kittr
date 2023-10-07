import NextHead from 'next/head';

interface Props {
	/** Page description to show for social media and Google(?). */
	description: string;
	/** The page title for the browser, social media, and Google */
	title: string;
}

/** Provide meta for this view using next/head. */
export function Head({ description, title }: Props) {
	return (
		<NextHead>
			<title>{title}</title>
			<meta content={description} name="description" />
			<meta content={description} itemProp="description" />
			<meta content="kittr" itemProp="name" />

			<meta
				content="https://kittr.gg/media/logo-square-with-pad.png"
				name="image"
			/>
			<meta
				content="https://kittr.gg/media/logo-square-with-pad.png"
				itemProp="image"
			/>

			<meta content="summary" property="twitter:card" />
			<meta content={title} property="twitter:title" />
			<meta content={description} property="twitter:description" />
			<meta content="https://kittr.gg" property="twitter:site" />
			<meta
				content="https://kittr.gg/media/logo-square-with-pad.png"
				property="twitter:image"
			/>

			<meta content={title} property="og:title" />
			<meta content={description} property="og:description" />
			<meta
				content="https://kittr.gg/media/logo-square-with-pad.png"
				property="og:image"
			/>
			<meta content="https://kittr.gg" property="og:url" />
			<meta content="kittr" property="og:site_name" />
			<meta content="website" property="og:type" />
		</NextHead>
	);
}

export default Head;
