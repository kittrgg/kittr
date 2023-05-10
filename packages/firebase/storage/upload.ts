import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '..';

export const upload = async (
  id: string,
  file: ArrayBuffer | Blob | Uint8Array,
) => {
  const storageRef = ref(storage, id);
  const bytes = await uploadBytes(storageRef, file);
  return bytes;
};
