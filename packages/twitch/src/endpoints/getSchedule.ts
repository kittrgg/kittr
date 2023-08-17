import type { ITwitchScheduleSegment } from '../types';
import { getFromApi } from '../utils/getFromApi';

/**
 * @params
 * broadcaster_id: Twitch broadcaster_id of the user.
 *
 * @returns
 * Promise fulfilled with data.
 *
 */
type IFunc = (broadcaster_id: string) => Promise<ITwitchScheduleSegment[]>;

/** Get the posted schedule for the user. */
export const getSchedule: IFunc = async (broadcaster_id) => {
  try {
    const { data } = await getFromApi<{ segments: ITwitchScheduleSegment[] }>({
      endpointBaseUrl: 'https://api.twitch.tv/helix/schedule',
      queryParams: { broadcaster_id },
    });

    if (!data.segments) return [];
    return data.segments.filter((segment) => segment.is_recurring);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // This user does not have a schedule.
    // Because of that, we need to provide an empty array so nothing breaks.
    // TODO: Don't throw an error if someone doesn't have a schedule posted.
    console.log({
      warning: { message: 'This user does not have a posted schedule.', error },
    });
    return [];
  }
};
