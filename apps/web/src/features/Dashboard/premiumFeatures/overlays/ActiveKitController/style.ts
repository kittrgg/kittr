import colors from '@Colors';
import { paragraph } from '@Styles/typography';
import styled from 'styled-components';

export const Paragraph = styled.p`
  ${paragraph};
  color: ${colors.lighter};
  list-style: disc;
`;
