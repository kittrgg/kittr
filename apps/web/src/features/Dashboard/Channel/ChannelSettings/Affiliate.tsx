import colors from '@Colors';
import { Button, SVG, Toast } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { setModal } from '@Redux/slices/dashboard';
import {
	useAffiliates,
	useChannelData,
} from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { paragraph } from '@Styles/typography';
import { useState } from 'react';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

function Affiliate() {
	const [copyNotification, setCopyNotification] = useState(false);
	const { refetch: refetchDashboard } = useDashboardChannel();
	const dispatch = useDispatch();
	const affiliates = useAffiliates();
	const { data: channelData } = useChannelData();

	const { mutate } = trpc.channels.profile.affiliates.delete.useMutation({
		onSuccess: () => {
			dispatch(setModal({ type: '', data: '' }));
			refetchDashboard();
		},
	});

	const rootUrl = new URL(window.location.origin.toString()).host.replace(
		'www.',
		'',
	);

	const commandString = `!addcom !affiliates ${rootUrl}/c/${channelData?.urlSafeName}#affiliates`;

	const copyToClipboard = (string: string) => {
		navigator.clipboard.writeText(string);
		setCopyNotification(true);
	};

	return (
		<div>
			<Title>
				<span>
					Affiliate Links & Codes
					<SVG.PremiumWithCircle
						style={{ position: 'relative', top: '6px', marginLeft: '12px' }}
						width="24px"
					/>
				</span>
				{Object.keys(affiliates || {}).length > 0 && (
					<Button
						design="transparent"
						onClick={() => copyToClipboard(commandString)}
						startIcon={
							<SVG.Clipboard style={{ marginRight: '16px' }} width="16px" />
						}
						style={{ fontSize: '14px', padding: '16px' }}
						text="Affiliates Command"
					/>
				)}
			</Title>
			{Object.keys(affiliates || {}).length > 0 && (
				<Table>
					<THead>
						<tr>
							<th
								style={{
									width: '30%',
									borderBottom: `1px solid ${colors.lighter}`,
								}}
							>
								Company
							</th>
							<th
								style={{
									width: '30%',
									borderBottom: `1px solid ${colors.lighter}`,
								}}
							>
								Deal Description
							</th>
							<th
								style={{
									width: '15%',
									borderBottom: `1px solid ${colors.lighter}`,
								}}
							>
								Code
							</th>
							<th
								style={{
									width: '15%',
									borderBottom: `1px solid ${colors.lighter}`,
								}}
							>
								Link
							</th>
							<th style={{ width: '5%' }} />
							<th style={{ width: '5%' }} />
						</tr>
					</THead>
					<TBody>
						{affiliates
							? Object.values(affiliates).map((affiliate) => {
									const { description, company, code, url, id } = affiliate;

									return (
										<Spec key={company + id}>
											<Label>{company}</Label>
											<td>{description}</td>
											<td>{code}</td>
											<td>{url}</td>
											<Icon>
												<SVG.Pencil
													data-cy={`${company?.replace(
														/ /g,
														'-',
													)}-edit-affiliate`}
													onClick={() =>
														dispatch(
															setModal({
																type: 'Add Affiliate',
																data: {
																	id: affiliate.id,
																	company,
																	description,
																	code,
																	url,
																},
															}),
														)
													}
												/>
											</Icon>
											<Icon>
												<SVG.X
													data-cy={`${company?.replace(
														/ /g,
														'-',
													)}-delete-affiliate`}
													onClick={() =>
														mutate({
															affiliateId: affiliate.id,
															channelId: channelData?.id!,
														})
													}
												/>
											</Icon>
										</Spec>
									);
							  })
							: null}
					</TBody>
				</Table>
			)}
			<Button
				data-cy="add-an-affiliate"
				design="default"
				onClick={() => dispatch(setModal({ type: 'Add Affiliate', data: {} }))}
				startIcon={
					<span
						style={{
							fontWeight: 600,
							fontSize: '24px',
							marginRight: '24px',
							height: '100%',
						}}
					>
						+
					</span>
				}
				style={{ marginTop: '32px' }}
				text="Affiliate"
			/>
			<Toast setVisibility={setCopyNotification} visible={copyNotification}>
				<img
					alt="Check Mark"
					height={11}
					src="/media/icons/check-mark.svg"
					width={16}
				/>
				<p style={{ marginLeft: '44px' }}>!affiliates copied to clipboard</p>
			</Toast>
		</div>
	);
}

export default Affiliate;

// Styled Components

const Spec = styled.tr`
  padding: 24px 32px;
  border-radius: 24px;
  ${paragraph};

  &:hover {
    background-color: ${colors.light};
  }

  td {
    max-width: 100px;
    padding: 18px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:first-of-type {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    &:last-of-type {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

const Title = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  color: ${colors.white};
  font-size: 18px;
  letter-spacing: 2px;
`;

const Table = styled.table`
  width: 100%;
  ${paragraph};
  font-size: 18px;
  text-align: left;
`;

const THead = styled.thead`
  padding-bottom: 12px;
  color: ${colors.lighter};

  tr {
    th {
      padding-bottom: 24px;
    }
  }
`;

const TBody = styled.tbody`
  // Creates a padding above tbody
  // We like the space for the hover
  &:before {
    content: '@';
    display: block;
    line-height: 16px;
    text-indent: -99999px;
  }
`;

const Label = styled.td`
  width: 30%;
  mask-image: linear-gradient(to right, black 75%, transparent 90%);
  overflow: hidden;
`;

const Icon = styled.td`
  width: 5%;
  overflow: hidden;
  cursor: pointer;
`;
