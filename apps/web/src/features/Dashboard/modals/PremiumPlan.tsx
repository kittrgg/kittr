import colors from '@Colors';
import { Button, Modal, SVG } from '@Components/shared';
import { setModal } from '@Redux/slices/dashboard';
import {
	usePremiumStatus,
	useChannelData,
} from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { header2, paragraph } from '@Styles/typography';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

const CENTER_SVG = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate("-50%, -50%")',
};

function CheckMark() {
	return (
		<td>
			<SVG.CheckMark stroke={colors.lighter} style={CENTER_SVG} width="20px" />
		</td>
	);
}
function X() {
	return (
		<td>
			<SVG.X fill={colors.darkRed} style={CENTER_SVG} width="20px" />
		</td>
	);
}

function PremiumPlans() {
	const dispatch = useDispatch();
	const { data: channelData } = useChannelData();
	const { isPremium } = usePremiumStatus();

	const { mutate: buyPremium } = trpc.stripe['buy-premium'].useMutation({
		onSuccess: (result) => {
			window.open(result.url!, '_blank');
		},
		onError: () => {
			dispatch(setModal({ type: 'Error Notification', data: {} }));
		},
	});
	const { mutate: managePremium } = trpc.stripe['manage-premium'].useMutation({
		onSuccess: (result) => {
			window.open(result.url, '_blank');
		},
		onError: () => {
			dispatch(setModal({ type: 'Error Notification', data: {} }));
		},
	});

	return (
		<Modal style={{ position: 'relative' }} title="COMPARE PLANS">
			<Paragraph>Choose the plan that's right for you.</Paragraph>
			<Table>
				<colgroup style={{ zIndex: 2 }}>
					<col style={{ minWidth: '250px' }} />
					<col
						style={{ width: '100%', minWidth: '250px', maxWidth: '500px' }}
					/>
					<col
						style={{ width: '100%', minWidth: '250px', maxWidth: '500px' }}
					/>
				</colgroup>
				<thead>
					<tr>
						<Th />
						<Th>
							BASIC
							<HeaderSubline>FREE</HeaderSubline>
						</Th>
						<Th>
							<SVG.Premium style={{ width: '24px' }} /> PREMIUM
							<HeaderSubline>EARLY BIRD - $5/MO</HeaderSubline>
						</Th>
					</tr>
				</thead>
				<TBody>
					<TableRow>
						<RowHeader>Create, edit, & feature kits</RowHeader>
						<CheckMark />
						<CheckMark />
					</TableRow>
					<TableRow>
						<RowHeader>Add account managers</RowHeader>
						<CheckMark />
						<CheckMark />
					</TableRow>
					<TableRow>
						<RowHeader>Embed social media content</RowHeader>
						<CheckMark />
						<CheckMark />
					</TableRow>
					<TableRow>
						<RowHeader>Access channel overlays</RowHeader>
						<X />
						<CheckMark />
					</TableRow>
					<TableRow>
						<RowHeader>AutoBot (COMING SOON)</RowHeader>
						<X />
						<CheckMark />
					</TableRow>
					<TableRow>
						<RowHeader>Channel profile customization</RowHeader>
						<X />
						<CheckMark />
					</TableRow>
				</TBody>
			</Table>
			<ButtonsContainer>
				<Button
					design="transparent"
					onClick={() => dispatch(setModal({ type: '', data: '' }))}
					text="CLOSE"
					type="button"
				/>
				<Button
					design="premium"
					onClick={() =>
						isPremium
							? managePremium({ channelId: channelData?.id ?? '' })
							: buyPremium({
									channelId: channelData?.id ?? '',
									displayName: channelData?.displayName ?? '',
									urlSafeName: channelData?.urlSafeName ?? '',
							  })
					}
					text={isPremium ? 'MANAGE' : 'UPGRADE'}
					type="button"
				/>
			</ButtonsContainer>
		</Modal>
	);
}

export default PremiumPlans;

const Paragraph = styled.p`
  ${paragraph};
  margin-bottom: 24px;
  color: ${colors.white};
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 88px;
  letter-spacing: 2px;
  z-index: 2;
`;

const Th = styled.th`
  ${header2};
  padding-top: 64px;

  &:last-of-type {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: ${colors.premium};
  }
`;

const TableRow = styled.tr`
  & > td:last-of-type {
    background: ${colors.premium};
  }

  &:last-of-type {
    & > td:last-of-type {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;

const TBody = styled.tbody`
  td {
    position: relative;
    padding: 40px;
  }
`;

const HeaderSubline = styled.span`
  display: block;
  ${paragraph};
  margin-top: 10px;
  color: ${colors.lighter};
  font-weight: 400;
  font-size: 14px;
`;

const RowHeader = styled.td`
  ${paragraph};
  padding: 20px 0;
  color: ${colors.lighter};
  font-size: 16px;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 24px;
  background: ${colors.middle};
`;
