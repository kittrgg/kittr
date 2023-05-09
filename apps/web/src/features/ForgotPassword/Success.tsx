import { paragraph } from '@Styles/typography';
import styled from 'styled-components';
import BackToLogin from './BackToLogin';

/** Forgotten password successful request message */
function Success() {
  return (
    <>
      <Paragraph>
        A message was sent to your email to help you reset your password.
      </Paragraph>
      <Paragraph>
        Once you've done that, head back to the login and use your brand new
        password.
      </Paragraph>
      <BackToLogin />
    </>
  );
}

export default Success;

// Styled Components

const Paragraph = styled.p`
  ${paragraph}

  &:first-of-type {
    margin-bottom: 24px;
  }
`;
