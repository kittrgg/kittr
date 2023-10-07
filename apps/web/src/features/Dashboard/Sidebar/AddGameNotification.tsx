import colors from '@Colors';
import SVG from '@Components/shared/SVG';
import styled, { keyframes } from 'styled-components';

/** If a user doesn't have a game yet,
 * they are probably a new account and
 * we want to show them where to add their first game.
 * */
function AddGameNotification({ ...props }) {
	return (
		<Wrapper>
			<SVG.Carat fill={colors.white} width="24px" />
			<TextContainer>
				<p>ADD A</p>
				<p>GAME</p>
			</TextContainer>
		</Wrapper>
	);
}

export default AddGameNotification;

// Styled Components

const Bump = keyframes`
  0% {
    transform: translate(-50%, 0);
  }

  40% {
    transform: translate(-50%, -5px);

  }

  80% {
    transform: translate(-50%, 0);

  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 102%;
  left: 50%;
  z-index: 101;
  transform: translate(-50%, -0);
  animation: ${Bump} infinite 3s ease;
  transition: 0.2s;
  opacity: 1;
  cursor: default;
`;

const TextContainer = styled.div`
  margin-top: -12px;
  padding: 8px 8px;
  border-radius: 10px;
  background: ${colors.white};
  color: ${colors.middle};
  font-size: 12px;
  font-weight: 600;
`;
