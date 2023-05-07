import { prismaMock } from "@kittr/prisma/mock";
import {
  randNumber,
  randVehicle,
  randProductName,
  randUuid,
} from "@ngneat/falso";
import { appRouter } from "../../..";

// Returns Warzone2 options if they're there
// Returns Warzone ones if they're not

describe("kits router", () => {
  test("placeholder", () => {});
  // Test("List all options", async () => {
  // 	Const kitBaseId = randUuid()
  // 	Const value = {
  // 		DisplayName: randProductName(),
  // 		GameId: randUuid(),
  // 		Id: randUuid(),
  // 		KitBaseId,
  // 		OrderPlacement: randNumber(),
  // 		SlotKey: randVehicle()
  // 	}
  // 	PrismaMock.warzoneTwoKitOption.findMany.mockResolvedValueOnce([value])
  // 	Const caller = appRouter.createCaller({ userToken: undefined })
  // 	Const result = await caller.kits.bases.options.list({ kitBaseId })
  // 	Expect(result).toEqual([value])
  // })
});
