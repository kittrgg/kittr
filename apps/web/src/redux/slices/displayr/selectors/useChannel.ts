import { useSelector } from '@Redux/store';

/** Use the channel in Kit Displayr */
export const useChannel = () => {
  return useSelector((state) => state.displayr.channel);
};
