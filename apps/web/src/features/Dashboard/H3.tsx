import colors from '@Colors';
import { paragraph } from '@Styles/typography';
import type { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
	children: ReactNode | string;
	style?: CSSProperties;
}

function H3Comp({ children, style }: Props) {
	return <H3 style={style}>{children}</H3>;
}

export default H3Comp;

const H3 = styled.h3`
  margin-top: 64px;
  color: ${colors.white};
  ${paragraph};
`;
