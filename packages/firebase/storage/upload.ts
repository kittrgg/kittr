import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const upload = async (id: string, file: any) => {
  const storageRef = ref(storage, id);
  const bytes = await uploadBytes(storageRef, file);
  return bytes;
};
