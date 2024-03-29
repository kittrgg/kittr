import colors from '@Colors';
import { MultiButton, Spinner } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { setModal } from '@Redux/slices/dashboard';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import styled from 'styled-components';
import H3 from '../../H3';
import { trpc } from '@/lib/trpc';

function YouTubeAutoplayEditor() {
	const dispatch = useDispatch();
	const { data } = useDashboardChannel();

	const { mutate, isLoading } = trpc.channels.profile[
		'youtube-autoplay'
	].upsert.useMutation({
		onError: () => {
			dispatch(setModal({ type: 'Error Notification', data: {} }));
		},
	});

	return (
		<>
			<H3>YouTube Autoplay</H3>
			<HorizFlex>
				{isLoading ? <Spinner height="50px" width="100%" /> : null}
				{!isLoading && (
					<Paragraph>
						Did you know you can embed YouTube videos into your kits pages? Let
						us know if you'd like us to autoplay them.
					</Paragraph>
				)}
				<div style={{ flex: 1 }}>
					<MultiButton
						activeValue={data?.profile?.youtubeAutoplay ? 'YUP' : 'NOPE'}
						onClick={async () =>
							mutate({
								channelId: data?.id!,
								shouldYoutubeAutoplay: !data?.profile?.youtubeAutoplay,
							})
						}
						values={[
							{
								text: 'YUP',
							},
							{
								text: 'NOPE',
							},
						]}
						wrapperBackgroundColor={colors.lightest}
					/>
				</div>
			</HorizFlex>
		</>
	);
}

export default YouTubeAutoplayEditor;

// Styled Components

const HorizFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const Paragraph = styled.p`
  width: 50%;
  margin-right: 40px;
  ${paragraph};
`;
