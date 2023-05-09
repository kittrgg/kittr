import { deleteObject, ref } from 'firebase/storage';
import { storage } from '..';

export const deleteFile = async ({
  id,
  onSuccess,
  onError,
}: {
  id: string;
  onSuccess?: Function;
  onError?: Function;
}) => {
  try {
    const storageRef = ref(storage, id);
    await deleteObject(storageRef);
    onSuccess?.();

    return true;
  } catch (error) {
    onError?.(error);
  }
};
