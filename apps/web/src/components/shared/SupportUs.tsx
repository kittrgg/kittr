import colors from '@Colors';
import { Button, SVG } from '@Components/shared';
import useDimensions from '@Hooks/useDimensions';
import { header1 } from '@Styles/typography';
import type { CSSProperties } from 'react';
import styled from 'styled-components';

interface Props {
	containerStyles?: CSSProperties;
}

export function SupportUs({ containerStyles }: Props) {
	const { width, observe } = useDimensions();
	const numOfColumns = width > 400 ? 2 : 0;

	return (
		<Container
			containerStyles={containerStyles as string}
			numOfColumns={numOfColumns}
			ref={observe}
		>
			<H6>SUPPORT KITTR'S CREATOR</H6>
			<Paragraph numOfColumns={numOfColumns}>
				kittr is made by one guy and supported by the community. For as little
				as $1, you can help make kittr continue to be possible. Thank you all.
			</Paragraph>
			<Button
				as="a"
				design="white"
				href="https://streamelements.com/anthonyfromkittr/tip"
				rel="noopener noreferrer"
				startIcon={
					<strong
						style={{ fontWeight: 900, fontSize: '24px', marginRight: '24px' }}
					>
						$
					</strong>
				}
				style={{ width: '100%', marginBottom: '10px' }}
				target="_blank"
				text="TIP"
			/>
			<Button
				as="a"
				design="white"
				href="https://www.patreon.com/kittrgg"
				rel="noopener noreferrer"
				startIcon={
					<SVG.Patreon
						alt="Patreon Icon"
						fill={colors.black}
						style={{
							position: 'relative',
							right: '18px',
							width: '24px',
						}}
					/>
				}
				style={{ width: '100%', marginBottom: '10px' }}
				target="_blank"
				text="PATREON"
			/>
			<Button
				as="a"
				design="transparent"
				href="https://www.twitter.com/kittrgg"
				rel="noopener noreferrer"
				startIcon={
					<SVG.Twitter
						alt="Twitter Icon"
						style={{
							position: 'relative',
							right: '24px',
							width: '24px',
						}}
					/>
				}
				style={{ width: '100%', marginBottom: '10px' }}
				target="_blank"
				text="FOLLOW"
			/>
			<Button
				as="a"
				design="transparent"
				href="https://www.twitch.com/anthonyfromkittr"
				rel="noopener noreferrer"
				startIcon={
					<SVG.Twitch
						alt="Twitch Icon"
						style={{
							position: 'relative',
							right: '24px',
							width: '24px',
						}}
					/>
				}
				style={{ width: '100%', marginBottom: '10px' }}
				target="_blank"
				text="FOLLOW"
			/>
		</Container>
	);
}

export default SupportUs;

// Styled Components

const Container = styled.div<{
	containerStyles?: string;
	numOfColumns: number;
}>`
  ${(props) =>
		!props.numOfColumns
			? ''
			: `
                display: grid;
                grid-template-columns: repeat(${props.numOfColumns}, 1fr);
            `};
  grid-column-gap: 16px;
  width: 310px;
  padding: 36px 32px;
  border-radius: 10px;
  background: ${colors.dark20};
  ${(props) => props.containerStyles};
`;

const H6 = styled.h6`
  ${header1}
  margin-bottom: 12px;
  grid-column: 1 / 3;
  font-size: 22px;
  text-align: center;
`;

const Paragraph = styled.p<{ numOfColumns: number }>`
  margin-bottom: 16px;
  grid-column: 1 / 3;
  color: ${colors.white};
`;
