interface IForSetupComparison {
	/** Stringified ObjectId of the Kit Base for comparison */
	_id: string
	/** All of the user Kits for this Base to show to the front-end for comparison */
	matches: Array<string[]>
}

interface IRatioOfChannelsWithBase {
	/** Stringified ObjectId of the Kit Base in question */
	_id: string
	/** Count for how many bases we have found for the given Kit Base. If a channel has multiple of the same Kit Base, it is only counted once. */
	baseCount: number
	/** Amount of channels who have at least one of this Base. */
	channelCount: number
	/** Decimal computed ratio of the channels using this Base. */
	ratio: number
}

interface IRatioOfChannelsWithBaseFeatured {
	/** Stringified ObjectId of the given Kit Base */
	_id: string
	/** Count for how many bases we have found for the given Kit Base that were featured. If a channel has multiple of the same Kit Base featured, it is only counted once. */
	baseCount: number
	/** Amount of channels who have at least one of this base featured. */
	channelCount: number
	/** Decimal computed ratio of the channels who have featured this Base. */
	ratio: number
}

interface IPopularityRates {
	forSetupComparison: Array<IForSetupComparison>
	ratioOfChannelsWithBase: Array<IRatioOfChannelsWithBase>
	ratioOfChannelsWithBaseFeatured: Array<IRatioOfChannelsWithBaseFeatured>
}
