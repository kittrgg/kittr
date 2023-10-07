import colors from '@Colors';
import { ColorPicker, SVG } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { setModal } from '@Redux/slices/dashboard';
import { useDispatch } from '@Redux/store';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

function ThemeColor() {
	const { data } = useDashboardChannel();
	const dispatch = useDispatch();

	const { mutate } = trpc.channels.profile['brand-color'].upsert.useMutation({
		onError: () => {
			dispatch(setModal({ type: 'Error Notification', data: '' }));
		},
	});

	const onChangeColor = (color: string | null) => {
		mutate({
			newColor: color || colors.white,
			channelId: data?.id!,
			colorId: data?.profile?.brandColors.find(
				(color) => color.type === 'PRIMARY',
			)?.id!,
		});
	};

	return (
		<div>
			<Title>
				Theme Color
				<SVG.PremiumWithCircle
					style={{ position: 'relative', top: '6px', marginLeft: '12px' }}
					width="24px"
				/>
			</Title>
			<ColorPicker
				defaultColor={
					data?.profile?.brandColors.find((color) => color.type === 'PRIMARY')
						?.value || colors.white
				}
				designVariant="Big Square"
				onChangeComplete={onChangeColor}
			/>
		</div>
	);
}

export default ThemeColor;

const Title = styled.p`
  margin-bottom: 20px;
  color: ${colors.white};
  font-size: 18px;
  letter-spacing: 2px;
`;
