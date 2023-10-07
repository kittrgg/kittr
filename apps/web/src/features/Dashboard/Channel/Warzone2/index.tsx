import Button from '@Components/shared/Button';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { setModal } from '@Redux/slices/dashboard';
import { useChannelView } from '@Redux/slices/dashboard/selectors';
import { useSelector, useDispatch } from '@Redux/store';
import { header1 } from '@Styles/typography';
import styled from 'styled-components';
import ExportBotCommands from '../../modals/ExportBotCommands';
import ChannelTopBar from '../../UserIdentity';
import Kits from './Kits';
import AffiliateCode from './AffiliateCode';

// Import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"

/** The Warzone screen for a channel. */
function Warzone2() {
	const { gameId } = useChannelView();
	const { data } = useDashboardChannel();
	const modal = useSelector((state) => state.dashboard.modal.type);
	const dispatch = useDispatch();
	const gameInfo = data?.games.find((game) => game.id === gameId);

	if (gameInfo) {
		return (
			<>
				{modal === 'Export Bot Commands' && <ExportBotCommands />}
				<Container>
					<ChannelTopBar />
					<HeaderWrap>
						<Header>{gameInfo.urlSafeName.toUpperCase()}</Header>
						<HeaderContent>
							<AffiliateCode />
							<Button
								design="transparent"
								onClick={() =>
									dispatch(setModal({ type: 'Export Bot Commands', data: '' }))
								}
								text="EXPORT BOT COMMANDS"
							/>
						</HeaderContent>
					</HeaderWrap>
					<Kits />
				</Container>
			</>
		);
	}

	return <p>How did you get here?</p>;
}

export default Warzone2;

// Styled Components

const Container = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  overflow-y: hidden;
`;

// Const Container = styled.div`
// 	Position: absolute;
// 	Inset: 0;
// 	Display: flex;
// 	Flex-direction: column;
// 	Align-items: flex-start;
// 	Justify-content: flex-start;
// 	Background: linear-gradient(to bottom, rgba(61, 60, 64, 0.8), ${colors.light} 250px, ${colors.light} 250px),
// 		Url(${(props: { background: string }) => props.background});
// 	Background-repeat: no-repeat;
// 	Background-position: bottom;
// 	Background-size: cover;
// 	Overflow-y: hidden;
// `

const HeaderWrap = styled.div`
  width: 100%;
  padding: 52px 70px 0;
`;

const Header = styled.h1`
  margin-bottom: 8px;
  ${header1};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
