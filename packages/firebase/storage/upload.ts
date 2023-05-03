import { storage } from '.';
import { ref, uploadBytes } from 'firebase/storage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const upload = async (id: string, file: any) => {
  if (!storage) {
    console.log("No storage is up. You're probably testing?");
    return;
  }

  const storageRef = ref(storage, id);
  const bytes = await uploadBytes(storageRef, file);
  return bytes;
};
