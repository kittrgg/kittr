import compressor from 'browser-image-compression';
import { upload } from './upload';

/* Utility for uploading an image and handling various states in UI */
export const uploadWithHandlers = async ({
  /* imageFile: The image file to be uploaded. */
  imageFile,
  /* fileName: Name of file to use in Firebase. */
  fileName,
  compressorIterations = 2,
  maxWidthOrHeight = 250,
  /* onSuccess: Callback to use on successful upload. */
  onSuccess,
  /* onError: Callback to use on unsuccessful upload. */
  onError,
}: {
  imageFile: File;
  fileName: string;
  maxWidthOrHeight?: number;
  compressorIterations?: number;
  onSuccess: Function;
  onError: Function;
}): Promise<void> => {
  try {
    const compressedImage = await compressor(imageFile, {
      maxWidthOrHeight,
      maxIteration: compressorIterations,
    });

    await upload(fileName, compressedImage);

    onSuccess();
  } catch (error) {
    onError();
  }
};
