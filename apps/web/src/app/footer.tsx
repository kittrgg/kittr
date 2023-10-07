import Link from 'next/link';
import Image from 'next/image';

export function FooterImage() {
	return (
		<Link className="flex flex-row items-center justify-center" href="/">
			<Image alt="kittr logo" height={48} src="/media/logo.svg" width={89} />
		</Link>
	);
}

export const footerLinks = [
	{ href: '/', children: 'Home' },
	{ href: '/about', children: 'About' },
	{ href: '/games', children: 'Games' },
	{ href: '/channels', children: 'Channels' },
	{ href: '/faq', children: 'FAQ' },
	{ href: '/contact', children: 'Contact' },
	{ href: '/terms-of-use', children: 'Terms' },
	{ href: '/privacy-policy', children: 'Privacy' },
];
