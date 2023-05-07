/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '.';

export const deleteFile = async ({
  id,
  onSuccess,
  onError,
}: {
  id: string;
  onSuccess?: (...args: any) => any;
  onError?: (...args: any) => any;
}) => {
  try {
    if (!storage) {
      console.log("No storage is up. You're probably testing?");
      return;
    }

    const storageRef = ref(storage, id);
    await deleteObject(storageRef);
    onSuccess?.();

    return true;
  } catch (error) {
    onError?.(error);
  }
};
