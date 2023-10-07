import { H1 } from '@kittr/ui/new';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { BackToDashboard } from '@/app/(site)/email-changed/ButtonLink';

export const metadata = () =>
	generateKittrMetadata({
		canonicalURL: 'email-changed',
		description: 'Your email has changed!',
		title: 'Email changed',
		noIndex: true,
	});

function Page() {
	return (
		<>
			<H1>EMAIL CHANGE PENDING</H1>
			<p>
				Visit your new email address and click the link to confirm the change.
			</p>
			<p>If you change your mind about this new email address...</p>
			<p>Your previous email address still works.</p>
			<BackToDashboard />
		</>
	);
}

export default Page;
