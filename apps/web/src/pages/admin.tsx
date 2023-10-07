// Import Admin from "@Features/Admin"
import { Button, Title } from '@kittr/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { trpc } from '@/lib/trpc';

function Page() {
	const router = useRouter();
	const { data: games } = trpc.games.list.useQuery();

	return (
		<div style={{ margin: '1rem' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Title>Games</Title>

				{/* This is a nothing burger placeholder for now.
			Needs implementation after Warzone2 */}
				<Button
					onClick={() => {
						router.push('/admin/creategame');
					}}
				>
					Create Game
				</Button>
			</div>

			{games?.map((game) => (
				<Link
					href={`/admin/${game.urlSafeName}`}
					key={game.id}
					legacyBehavior
					passHref
				>
					<Button onClick={() => ({})}>{game.urlSafeName.toUpperCase()}</Button>
				</Link>
			))}
		</div>
	);
}
export default Page;
