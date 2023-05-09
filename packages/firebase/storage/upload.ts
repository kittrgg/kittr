import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '..';

export const upload = async (id: string, file: Blob | Uint8Array | ArrayBuffer) => {
  const storageRef = ref(storage, id);
  const bytes = await uploadBytes(storageRef, file);
  return bytes;
};
