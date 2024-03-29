import KitOverlay from '@Features/Overlays/ActiveKit';
import { createSSGHelper } from '@kittr/trpc/server';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { trpc } from '@/lib/trpc';

export function Overlay() {
	const { query } = useRouter();
	const { channel: urlChannel } = query as { game: string; channel: string };

	const { data: channel } = trpc.channels.profile.get.useQuery(urlChannel, {
		enabled: Boolean(urlChannel),
	});

	if (channel?.plan?.type === 'PREMIUM') {
		return <KitOverlay id={channel.id} />;
	}

	return null;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const ssg = await createSSGHelper();

	// Const channel = await ssg.fetchQuery("channels/profile/get", query.channel as string)
	const channel = await ssg.channels.profile.get.fetch(query.channel as string);

	if (channel) {
		await ssg.channels.overlay.get.fetch(channel.id);
	}

	return {
		props: {
			trpcState: ssg.dehydrate(),
		},
	};
};

export default Overlay;
