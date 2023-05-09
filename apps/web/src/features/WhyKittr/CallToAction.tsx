import colors from '@Colors';
import { header4, paragraph } from '@Styles/typography';
import { Routes } from '@Utils/lookups/routes';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  marginTop?: string;
  marginBottom?: string;
  /** Arbitrary title text to put above the linkbutton */
  header: string;
}

/** Call to action for the mod landing page. */
function CallToAction({ marginTop, marginBottom, header }: Props) {
  return (
    <Container marginBottom={marginBottom} marginTop={marginTop}>
      <Header>{header}</Header>
      <Link href={Routes.SIGN_UP} legacyBehavior passHref>
        <LinkButton rel="noopener noreferrer" target="_blank">
          SIGN UP
        </LinkButton>
      </Link>
    </Container>
  );
}

export default CallToAction;

// Styled Components

const Container = styled.div<{ marginBottom?: string; marginTop?: string }>`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: ${(props) => props.marginTop || ''};
  margin-bottom: ${(props) => props.marginBottom || '24px'};
`;

const Header = styled.h2`
  ${header4};
  font-size: 48px;
`;

const LinkButton = styled.a<{ design?: string }>`
  display: inline-block;
  margin-top: 32px;
  padding: 20px 32px;
  color: ${(props) =>
    props.design === 'transparent' ? colors.white : colors.dark};
  border-radius: 20px;
  border: ${(props) =>
    props.design == 'transparent' ? `2px solid ${colors.white}` : ''};
  background-color: ${(props) =>
    props.design === 'transparent' ? 'transparent' : colors.white};
  text-decoration: none;
  ${paragraph};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.dark};
      color: ${colors.white};
    }
  }
`;
