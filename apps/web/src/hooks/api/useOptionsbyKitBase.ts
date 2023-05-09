import { trpc } from '@/lib/trpc';

export const useOptionsByKitBase = (kitBaseId: string) => {
  const query = trpc.kits.bases.options.list.useQuery(
    { kitBaseId },
    { enabled: Boolean(kitBaseId) },
  );

  return query;
};
