/** Grab the login name from the end of a Twitch string. */
export const grabLoginName = (link: string): string => {
  const loginName = link.split("twitch.tv/");
  return loginName[1];
};
