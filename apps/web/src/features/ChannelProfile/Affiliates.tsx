import colors from '@Colors';
import { SVG } from '@Components/shared';
import { paragraph } from '@Styles/typography';
import type { ChannelAffiliate } from '@kittr/prisma';
import styled from 'styled-components';
import { H2, GridItem, SpecsGrid } from './style';

interface Props {
  brandColor: string;
  affiliates: ChannelAffiliate[];
}

function Affiliates({ affiliates, brandColor }: Props) {
  if (Object.values(affiliates || {}).length === 0) return null;

  return (
    <section id="affiliates">
      <H2>AFFILIATES</H2>
      <SpecsGrid>
        {affiliates
          ? affiliates.map((affiliate) => {
              return (
                <GridItem colorHover={brandColor} key={affiliate.company}>
                  <Flex>
                    <Company>{affiliate.company}</Company>
                    {affiliate.description ? (
                      <Description>{affiliate.description}</Description>
                    ) : null}
                  </Flex>
                  {affiliate.code ? (
                    <Flex>
                      <Code>CODE</Code>
                      <Code>{affiliate.code}</Code>
                    </Flex>
                  ) : null}
                  {affiliate.url ? (
                    <Link
                      href={affiliate.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <SVG.Link
                        stroke={colors.lighter}
                        style={{
                          position: 'relative',
                          top: '6px',
                          marginRight: '12px',
                        }}
                        width="24px"
                      />
                      Visit Link
                    </Link>
                  ) : null}
                </GridItem>
              );
            })
          : null}
      </SpecsGrid>
    </section>
  );
}

export default Affiliates;

// Styled Components

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Company = styled.h3`
  ${paragraph};
  margin-bottom: 10px;
  color: ${colors.white};
  mix-blend-mode: difference;
`;

const Description = styled.h3`
  ${paragraph};
  margin-left: 40px;
  margin-bottom: 10px;
  color: ${colors.white};
  mix-blend-mode: difference;
`;

const Code = styled.p`
  ${paragraph};
  color: ${colors.lighter};
  mix-blend-mode: difference;
`;

const Link = styled.a`
  display: block;
  ${paragraph};
  color: ${colors.lighter};
  text-decoration: none;
  text-align: center;
  transition: 0.2s;
  mix-blend-mode: difference;

  @media (hover: hover) {
    &:hover {
      color: ${colors.white};
      mix-blend-mode: difference;
    }
  }
`;
