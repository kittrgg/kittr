import { headers } from './auth';
import { fetcher } from '@kittr/utils';

interface IFunc {
  /**
   * @params
   * endpointBaseUrl: Twitch api endpoint to use as the base for the request.
   *
   * @returns
   * Promise fulfilled with data.
   *
   */
  <T>(params: {
    endpointBaseUrl: string;
    queryParams: Record<string, string>;
  }): Promise<{ data: T }>;
}

/** Pretty naive implementation for getting data from the Twitch API. */
export const getFromApi: IFunc = async ({ endpointBaseUrl, queryParams }) => {
  const params = new URLSearchParams(queryParams);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await fetcher.get<any>({
    url: `${endpointBaseUrl}?${params}`,
    headers: await headers(),
    redirect: 'follow',
  });

  return result;
};
