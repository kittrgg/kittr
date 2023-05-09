import colors from '@Colors';
import { header1, header2 } from '@Styles/typography';
import styled from 'styled-components';
import * as Styled from './style';
import CallToAction from './CallToAction';

const STEPS = [
  {
    title: 'STEP 1: CREATE YOUR KITS',
    titleHelper: '5-13 minutes',
    image: '/media/kit-editor-example.png',
    imageWidth: 1679,
    imageHeight: 977,
    border: true,
  },
  {
    title: 'STEP 2: UPDATE YOUR COMMANDS',
    titleHelper: '2-4 minutes',
    image: '/media/export-commands-example.jpg',
    imageWidth: 1440,
    imageHeight: 1022,
    border: true,
  },
  {
    title: 'STEP 3: TURN THE CHANNEL ON',
    titleHelper: '!loadouts',
    image: '/media/kit-stack.png',
    imageWidth: 1440,
    imageHeight: 1022,
    border: false,
  },
];

function HowItWorks() {
  return (
    <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Styled.H2>HOW IT WORKS</Styled.H2>
      {STEPS.map((step) => (
        <StepContainer key={step.title}>
          <StepHeaderFlex>
            <StepHeader>{step.title}</StepHeader>
            <StepHeaderHelper>{step.titleHelper}</StepHeaderHelper>
          </StepHeaderFlex>
          <StepImageContainer border={step.border}>
            <img
              alt=""
              src={step.image}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </StepImageContainer>
        </StepContainer>
      ))}
      <CallToAction
        header="start sharing today."
        marginBottom="48px"
        marginTop="60px"
      />
    </section>
  );
}

export default HowItWorks;

// Styled Components

const StepContainer = styled.div`
  margin-top: 64px;
`;

const StepHeaderFlex = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const StepHeader = styled.h4`
  ${header1};
  font-weight: initial;

  @media (max-width: 450px) {
    margin-left: 0;
    font-size: 32px;
  }
`;

const StepHeaderHelper = styled.p`
  margin-left: 32px;
  color: ${colors.lighter};
  ${header2};
  font-size: 20px;
`;

const StepImageContainer = styled.div<{ border: boolean }>`
  position: relative;
  width: 50vw;
  min-width: 320px;
  margin: 36px auto;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.border ? '0 0 0 10px rgba(255,255,255, .05)' : ''};
  border-radius: 12px;
`;
