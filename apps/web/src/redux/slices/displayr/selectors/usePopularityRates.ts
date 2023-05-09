import { useSelector } from '@Redux/store';

/** Use the popularity in Kit Displayr */
export const usePopularityRates = () => {
  return useSelector((state) => state.displayr.popularityRates);
};
