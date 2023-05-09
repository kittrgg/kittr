import colors from '@Colors';
import { Button, SVG } from '@Components/shared';
import Toast from '@Components/shared/Toast';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';

function SetupPhotos() {
  const [copyNotification, setCopyNotification] = useState(false);
  const { data } = useDashboardChannel();

  const rootUrl = new URL(window.location.origin.toString()).host.replace(
    'www.',
    '',
  );

  const commandString = `!addcom !setup ${rootUrl}/c/${data?.urlSafeName}#setup`;

  const copyToClipboard = (string: string) => {
    navigator.clipboard.writeText(string);
    setCopyNotification(true);
  };

  return (
    <div>
      <Title>
        <span>
          Setup Photos
          <SVG.PremiumWithCircle
            style={{ position: 'relative', top: '6px', marginLeft: '12px' }}
            width="24px"
          />
        </span>
        {Object.values(data?.profile?.setupPhotos || {}).filter(
          (photo) => photo,
        ).length > 0 && (
          <Button
            design="transparent"
            onClick={() => copyToClipboard(commandString)}
            startIcon={
              <SVG.Clipboard style={{ marginRight: '16px' }} width="16px" />
            }
            style={{ fontSize: '14px', padding: '16px' }}
            text="Setup Command"
          />
        )}
      </Title>
      <Grid>
        {[...Array(4)].map((_, index) => (
          <ImageUploader key={index} slot={index + 1} />
        ))}
      </Grid>
      <Toast setVisibility={setCopyNotification} visible={copyNotification}>
        <img
          alt="Check Mark"
          height={11}
          src="/media/icons/check-mark.svg"
          width={16}
        />
        <p style={{ marginLeft: '44px' }}>!setup copied to clipboard</p>
      </Toast>
    </div>
  );
}

export default SetupPhotos;

// Styled Components

const Title = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  color: ${colors.white};
  font-size: 18px;
  letter-spacing: 2px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;
