import { auth } from "../index";

export const getToken = async () => {
  const token = await auth?.currentUser?.getIdToken();

  return token;
};
