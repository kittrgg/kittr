import { appRouter } from '../../../';
import { prismaMock } from '@kittr/prisma/mock';
import {
  randNumber,
  randVehicle,
  randProductName,
  randUuid,
} from '@ngneat/falso';

// Returns Warzone2 options if they're there
// Returns Warzone ones if they're not

describe('Kits router', () => {
  test('Placeholder', () => {});
  // test("List all options", async () => {
  // 	const kitBaseId = randUuid()
  // 	const value = {
  // 		displayName: randProductName(),
  // 		gameId: randUuid(),
  // 		id: randUuid(),
  // 		kitBaseId,
  // 		orderPlacement: randNumber(),
  // 		slotKey: randVehicle()
  // 	}
  // 	prismaMock.warzoneTwoKitOption.findMany.mockResolvedValueOnce([value])
  // 	const caller = appRouter.createCaller({ userToken: undefined })
  // 	const result = await caller.kits.bases.options.list({ kitBaseId })
  // 	expect(result).toEqual([value])
  // })
});
