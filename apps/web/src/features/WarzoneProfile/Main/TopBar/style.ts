import colors from '@Colors';
import { header4 } from '@Styles/typography';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column: span 2;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0;

  @media (max-width: 1050px) {
    grid-column: span 1;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  overflow: hidden;
  mask-image: linear-gradient(to right, black 40%, transparent 98%);
`;

export const ImageContainer = styled.div`
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

export const H1 = styled.h1`
  color: ${colors.white};
  ${header4};
  font-size: 36px;
`;

export const NameContainer = styled.div`
  margin-left: 60px;
  margin-bottom: 24px;
`;

export const Code = styled.p`
  color: ${colors.white};
  font-size: 28px;
  font-family: 'Barlow Condensed', sans-serif;
`;
