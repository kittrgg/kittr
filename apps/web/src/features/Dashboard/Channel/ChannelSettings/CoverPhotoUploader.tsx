import colors from '@Colors';
import { Button, Spinner, SVG } from '@Components/shared';
import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { setModal } from '@Redux/slices/dashboard';
import {
  useChannelData,
  useCoverPhoto,
} from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import {
  uploadWithHandlers,
  download,
  deleteFile,
} from '@kittr/firebase/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

function CoverPhotoUploader() {
  const dispatch = useDispatch();
  const { refetch: refetchDashboard } = useDashboardChannel();
  const { data } = useChannelData();
  const hasCoverPhoto = useCoverPhoto();
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState('');

  const fileName = `${data?.id}-profile-cover-photo`;

  const { mutate } = trpc.channels.profile['cover-photo'].update.useMutation({
    onSuccess: (data) => {
      if (data.profile?.hasCoverPhoto) {
        download(data.id, (path) => {
          setIsUploading(false);
        });
      }
      refetchDashboard();
    },
    onError: () => {
      setIsUploading(false);
      dispatch(setModal({ type: 'Error Notification', data: {} }));
    },
  });

  const handleUpload = async (e: any) => {
    e.preventDefault();
    setIsUploading(true);

    if (!data?.id) return;

    const imageFile = e.target.files[0];

    if (imageFile) {
      uploadWithHandlers({
        fileName,
        imageFile,
        onSuccess: async () => {
          mutate({ channelId: data.id, hasCoverPhoto: true });
        },
        onError: () => {
          setIsUploading(false);
          dispatch(setModal({ type: 'Error Notification', data: {} }));
        },
      });
    }
  };

  useEffect(() => {
    if (hasCoverPhoto) {
      download(fileName, (path) => {
        setIsUploading(false);
        setImage(path);
      });
    }
  }, [isUploading, hasCoverPhoto, fileName]);

  const handleDelete = async (e: any) => {
    setIsUploading(true);
    setImage('');
    await deleteFile({
      id: fileName,
      onSuccess: () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
        mutate({ channelId: data?.id!, hasCoverPhoto: false });
      },
      onError: (error) => {
        dispatch(setModal({ type: 'Error Notification', data: {} }));
      },
    });
  };

  if (isUploading) return <Spinner width="24px" />;

  const cacheBuster = `/?${Math.random()}`;

  return (
    <div>
      <Title>
        Cover Photo
        <SVG.PremiumWithCircle
          style={{ position: 'relative', top: '6px', marginLeft: '12px' }}
          width="24px"
        />
      </Title>
      <p style={{ marginBottom: '24px', color: colors.lighter }}>
        For best results, use an image with dimensions of at least 1440px by
        300px.
      </p>

      <Grid>
        {hasCoverPhoto ? (
          <BackgroundImage backgroundImage={image + cacheBuster} />
        ) : null}

        <ButtonsWrapper>
          <Label htmlFor="coverPhotoUpload">
            {hasCoverPhoto ? 'CHANGE IMAGE' : 'ADD COVER'}
            <input
              id="coverPhotoUpload"
              name="coverPhotoUpload"
              onChange={(e: any) => handleUpload(e)}
              style={{ display: 'none' }}
              type="file"
            />
          </Label>
          {hasCoverPhoto ? (
            <Button
              design="transparent"
              onClick={handleDelete}
              text="REMOVE IMAGE"
            />
          ) : null}
        </ButtonsWrapper>
      </Grid>
    </div>
  );
}

export default CoverPhotoUploader;

// Styled Components

const Title = styled.p`
  margin-bottom: 20px;
  color: ${colors.white};
  font-size: 18px;
  letter-spacing: 2px;
`;

const Label = styled.label`
  display: inline-block;
  appearance: none;
  height: 62px;
  margin: 24px auto;
  padding: 20px 46px;
  border: none;
  border-radius: 20px;
  background-color: ${colors.dark};
  color: ${colors.white};
  font-family: 'Montserrat', serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.dark};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div<{ backgroundImage: string }>`
  width: 100%;
  padding-bottom: 25%;
  background-image: url('${(props) => props.backgroundImage}');
  background-size: cover;
  background-position: center;
`;
