import { header2 } from '@Styles/typography';
import styled from 'styled-components';

export const ImageryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const WeaponName = styled.div`
  width: 100%;
  margin-bottom: 12px;
  ${header2};
  text-align: center;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const YoutubeWrapper = styled.div`
  width: 100%;
  max-width: 575px;
  padding-bottom: 75%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const TiktokWrapper = styled.div`
  width: 100%;
  padding-bottom: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  iframe {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 40%;
    height: 100%;
  }
`;
