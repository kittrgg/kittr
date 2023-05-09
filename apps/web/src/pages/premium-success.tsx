import colors from '@Colors';
import FullScreen from '@Components/layouts/FullScreen';
import { SVG } from '@Components/shared';
import { header1 } from '@Styles/typography';
import { getUrl } from '@Utils/helpers/getUrl';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function PremiumSuccess() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => push(`${getUrl}/dashboard`), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FullScreen
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.premiumGradient,
      }}
    >
      <IconContainer>
        <SVG.Premium
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          width="150px"
        />
      </IconContainer>
      <H1>WELCOME TO PREMIUM.</H1>
    </FullScreen>
  );
}

export default PremiumSuccess;

// Styled Components

const fadeSlide = keyframes`
    0% {
        opacity: 0;
        position: relative;
        top: 100px;
    }

    100% {
        opacity: 1;
    position: relative;
    top: 0;
    }
`;

const H1 = styled.h1`
  ${header1};
  margin-top: 60px;
  font-size: 36px;
  animation: ${fadeSlide} 1s forwards ease;
  animation-delay: 1s;
  opacity: 0;
  position: relative;
  top: 100px;
`;

const IconContainer = styled.div`
  opacity: 0;
  position: relative;
  top: 100px;
  width: 300px;
  height: 300px;
  border: 1px solid ${colors.white};
  border-radius: 100%;
  animation: ${fadeSlide} 1s forwards ease;
`;
