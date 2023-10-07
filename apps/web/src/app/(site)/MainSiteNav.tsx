import { AppShellLinkItem, SidebarSeparator } from '@kittr/ui/new';
import { LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import Link from 'next/link';
import Image from 'next/image';

export function MainSiteNav() {
	return (
		<>
			<AppShellLinkItem className="flex flex-row items-center justify-center m-0">
				<Link className="flex flex-row items-center justify-center" href="/">
					<Image
						alt="kittr logo"
						height={48}
						priority
						src="/img/logo.svg"
						width={89}
					/>
				</Link>
			</AppShellLinkItem>
			<SidebarSeparator />

			<AppShellLinkItem>
				<Link href="/dashboard">
					<LayoutGrid />
					Dashboard
				</Link>
			</AppShellLinkItem>
			<SidebarSeparator />

			<AppShellLinkItem>
				<Link href="/games">
					<Gamepad />
					Games
				</Link>
			</AppShellLinkItem>
			<AppShellLinkItem>
				<Link href="/channels">
					<Users />
					Channels
				</Link>
			</AppShellLinkItem>
		</>
	);
}
