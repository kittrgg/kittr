import type { Prisma } from '@kittr/prisma';
import { prismaMock } from '@kittr/prisma/mock';
import {
	randNumber,
	randVehicle,
	randBoolean,
	randDirectoryPath,
	randProductName,
	randPastDate,
	randUuid,
} from '@ngneat/falso';
import { appRouter } from '../../..';

type GameWithCount = Prisma.GameGetPayload<{
	include: {
		_count: true;
	};
}>;

// Fun fact: This was kittr's first ever test suite :)
describe('kits router', () => {
	test('list all games', async () => {
		const value: GameWithCount[] = [
			{
				active: randBoolean(),
				backgroundImageUrl: randDirectoryPath(),
				blurDataUrl: randDirectoryPath(),
				developer: randVehicle(),
				displayName: randProductName(),
				id: randUuid(),
				releaseDate: randPastDate(),
				titleImageUrl: randDirectoryPath(),
				urlSafeName: randProductName(),
				_count: {
					channelCreatorCodes: randNumber(),
					channels: randNumber(),
					customCommandStrings: randNumber(),
					genres: randNumber(),
					platforms: randNumber(),
					warzoneKitBases: randNumber(),
					warzoneKits: randNumber(),
					warzoneTwoKitBases: randNumber(),
					warzoneTwoKits: randNumber(),
				},
			},
			{
				active: randBoolean(),
				backgroundImageUrl: randDirectoryPath(),
				blurDataUrl: randDirectoryPath(),
				developer: randVehicle(),
				displayName: randProductName(),
				id: randUuid(),
				releaseDate: randPastDate(),
				titleImageUrl: randDirectoryPath(),
				urlSafeName: randProductName(),
				_count: {
					channelCreatorCodes: randNumber(),
					channels: randNumber(),
					customCommandStrings: randNumber(),
					genres: randNumber(),
					platforms: randNumber(),
					warzoneKitBases: randNumber(),
					warzoneKits: randNumber(),
					warzoneTwoKitBases: randNumber(),
					warzoneTwoKits: randNumber(),
				},
			},
		];

		prismaMock.game.findMany.mockResolvedValueOnce(value);

		const caller = appRouter.createCaller({ userToken: undefined });
		const result = await caller.games.count();

		expect(result).toEqual(value);
	});
});
