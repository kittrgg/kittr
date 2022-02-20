import { createStylesServer, ServerStyles } from "@mantine/next"
import Document, { DocumentContext } from "next/document"

const stylesServer = createStylesServer()

export default class _Document extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		// Add your app specific logic here

		return {
			...initialProps,
			styles: (
				<>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
						rel="stylesheet"
					/>
					{initialProps.styles}
					<ServerStyles html={initialProps.html} server={stylesServer} />
				</>
			)
		}
	}
}
