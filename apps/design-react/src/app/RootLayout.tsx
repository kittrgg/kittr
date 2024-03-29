import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import { Nav } from '#/app/components/Nav';
import { FooterImage, footerLinks } from '#/app/footer';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	description: "kittr's React UI Kit",
	title: 'React Kit - kittr',
};

export function RootLayout({
	children,
	pathname,
}: {
	pathname: string;
	children: React.ReactNode;
}) {
	return (
		<html className={`${inter.variable} bg-zinc-900`} lang="en">
			<body className="flex flex-row flex-grow w-full m-auto font-sans antialiased">
				<AppShell
					footerImage={<FooterImage />}
					footerLinks={footerLinks}
					linkComponent={Link}
					nav={<Nav />}
					pathnameForCloseHook={pathname}
				>
					<>{children}</>
				</AppShell>
			</body>
		</html>
	);
}
