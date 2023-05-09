import colors from '@Colors';
import { Spinner, SVG } from '@Components/shared';
import { setModal } from '@Redux/slices/dashboard';
import { useDispatch } from '@Redux/store';
import { deleteFile, download, upload } from '@kittr/firebase/storage';
import { paragraph } from '@Styles/typography';
import compressor from 'browser-image-compression';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  fileName: string;
  label: string;
  imageWidth: number;
  imageHeight: number;
  handleChange?: (...args: any) => any;
}

function BackgroundImageUploader({
  fileName,
  label,
  imageWidth,
  imageHeight,
  handleChange,
}: Props) {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleUpload = async (e: any) => {
    e.preventDefault();

    const image = e.target.files[0];

    if (image) {
      try {
        setIsUploading(true);
        const compressedImage = await compressor(image, { maxIteration: 2 });
        const result = await upload(fileName, compressedImage);

        if (result) {
          download(fileName, (path) => {
            setIsUploading(false);
            setImage(path);
            handleChange ? handleChange() : null;
          });
        }
      } catch (error) {
        dispatch(setModal({ type: 'Error Notification', data: {} }));
      }
    }
  };

  const handleDelete = async () => {
    try {
      const result = await deleteFile({ id: fileName });

      if (result) {
        handleChange ? handleChange() : null;
        return setImage('');
      }
    } catch (error) {
      dispatch(setModal({ type: 'Error Notification', data: {} }));
    }
  };

  useEffect(() => {
    download(fileName, (path) => setImage(path));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [download]);

  if (isUploading) {
    return (
      <CenterSpinner>
        <Spinner width="32px" />
      </CenterSpinner>
    );
  }

  return (
    <div>
      <Label
        htmlFor={fileName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url("${image}")` || 'transparent',
          backgroundSize: image ? 'contain' : '',
          backgroundPosition: 'center',
          backgroundRepeat: image ? 'no-repeat' : '',
          border: `2px dashed ${colors.lighter}`,
        }}
      >
        {!image && (
          <>
            <SVG.Export
              stroke={colors.lighter}
              style={{ marginRight: '24px' }}
              width="24px"
            />
            UPLOAD
          </>
        )}
        <input
          id={fileName}
          name={fileName}
          onChange={(e: any) => {
            e.preventDefault();
            handleUpload(e);
          }}
          style={{ display: 'none' }}
          type="file"
        />
        {isHovered && image ? (
          <DeleteGameBubble
            isHovered={isHovered}
            onClick={handleDelete}
            onMouseEnter={() => setIsHovered(true)}
          >
            <SVG.X
              fill={colors.red}
              style={{ width: '100%', height: '100%' }}
            />
          </DeleteGameBubble>
        ) : null}
      </Label>
      <Caption>{label}</Caption>
      <Caption>
        {imageWidth}x{imageHeight}px
      </Caption>
    </div>
  );
}

export default BackgroundImageUploader;

// Styled Components

const CenterSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  appearance: none;
  height: 112px;
  border: 2px dashed ${colors.lighter};
  border-radius: 20px;
  background-color: transparent;
  ${paragraph};
  color: ${colors.lighter};
  cursor: pointer;
  transition: 0.2s;
`;

const Caption = styled.p`
  margin-top: 12px;
  ${paragraph};
  font-size: 14px;
  color: ${colors.lighter};
  text-align: center;
`;

const DeleteGameBubble = styled.button<{ isHovered: boolean }>`
  appearance: none;
  border: none;
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  padding: 4px;
  border-radius: 25px;
  background-color: ${colors.white};
  cursor: pointer;
  transition: 0.2s;
  transform: ${(props) => (props.isHovered ? 'scale(1)' : 'scale(0)')};
`;
