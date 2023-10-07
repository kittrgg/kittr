import '@/app/globals.css';
import { Analytics } from '@kittr/analytics';
import type { GenerateKittrMetadataArgs } from '@/app/generateKittrMetadata';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { inter } from '@/app/fonts';

export const generateMetadata = () => {
	return {
		...generateKittrMetadata({
			title: 'kittr',
			description: 'The content platform. Get kittd.',
		} as GenerateKittrMetadataArgs),
		metadataBase: process.env.VERCEL_URL
			? new URL(`https://${process.env.VERCEL_URL}`)
			: new URL(`http://localhost:${process.env.PORT || 3000}`),
	};
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html className={`${inter.variable}`} lang="en">
			<Analytics />
			<body>{children}</body>
		</html>
	);
}
