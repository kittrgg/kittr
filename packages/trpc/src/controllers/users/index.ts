import { z } from 'zod';
import { publicProcedure } from '../../initTRPC';
import * as UsersService from '../../services/users';

const create = publicProcedure
  .input(
    z.object({
      displayName: z.string(),
      email: z.string(),
      password: z.string(),
    }),
  )
  .mutation(async ({ input }) => {
    const result = await UsersService.create(input);
    return result;
  });

export const UsersController = {
  create,
};
