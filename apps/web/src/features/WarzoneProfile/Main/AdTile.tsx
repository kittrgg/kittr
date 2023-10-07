import colors from '@Colors';
import { useActiveWeapon } from '@Redux/slices/displayr/selectors';
import Ad from '@Services/venatus/Ad';
import { caption } from '@Styles/typography';
import styled from 'styled-components';

function AdTile({ ...props }) {
	const activeWeapon = useActiveWeapon();

	return (
		<Container>
			{/* <Ad updateTrigger={activeWeapon} placementType="s300x250" />
			<Caption>
				Ads are annoying but keep this site running. Thank you for understanding.
				<br />- The Guy That Makes kittr
			</Caption> */}
		</Container>
	);
}

export default AdTile;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  background: ${colors.light};
  border-radius: 25px;
`;

const Caption = styled.p`
  margin: 12px 5%;
  ${caption}
  color: ${colors.lighter};
`;
