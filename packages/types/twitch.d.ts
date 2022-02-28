export interface IOAuthToken {
	access_token: string
	expires_in: number
	token_type: string
}

export interface IOAuthRejection {
	status: string
	message: string
}

export interface ITwitchLiveChannels {
	id: String
	user_id: String
	user_login: String
	user_name: String
	game_id: String
	game_name: String
	type: String
	title: String
	viewer_count: Number
	started_at: String
	language: String
	thumbnail_url: String
	tag_ids: [String]
	is_mature: Boolean
}

interface ITwitchDataForProfilePage {
	channelData: ITwitchChannelData
	clips: ITwitchClip[]
	recentVideos: ITwitchVideo[]
	schedule: ITwitchScheduleSegment[]
}

interface ITwitchClip {
	id: string
	url: string
	embed_url: string
	broadcaster_id: string
	broadcaster_name: string
	creator_id: string
	creator_name: string
	video_id: string
	game_id: string
	language: string
	title: string
	view_count: number
	created_at: Date
	thumbnail_url: string
	duration: number
}

interface ITwitchVideo {
	id: string
	channel_id: string
	user_id: string
	user_login: string
	user_name: string
	title: string
	description: string
	created_at: Date
	published_at: Date
	url: string
	thumbnail_url: string
	viewable: string
	view_count: number
	language: string
	type: string
	duration: string
	muted_segments: null | {}
}

export interface ITwitchScheduleSegment {
	id: string
	start_time: Date
	end_time: Date
	title: string
	canceled_until: Date | null
	category: null | {
		id: string
		name: string
	}
	is_recurring: true
}

interface ITwitchChannelData {
	id: string
	login: string
	display_name: string
	type: string
	broadcaster_type: string
	description: string
	profile_image_url: string
	offline_image_url: string
	view_count: number
	created_at: Date
}
