import { Success } from '@/app/(marketing)/premium-success/Success';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';

export const generateMetadata = () =>
	generateKittrMetadata({
		title: 'Welcome to Premium',
		description: 'get kittd...premiumly.',
		canonicalURL: '/premium-success',
		noIndex: true,
	});

function Page() {
	return <Success />;
}

export default Page;
