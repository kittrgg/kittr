export const playerData: {
	name: string;
	imagePath: string;
	isLive: boolean;
	urlSafeName: string;
	socials: {
		twitter?: string;
		twitch?: string;
		youtube?: string;
	};
}[] = [
	{
		name: 'JoeWo',
		imagePath:
			'https://pbs.twimg.com/profile_images/1640821224178589696/EPAD62bS_400x400.jpg',
		isLive: true,
		urlSafeName: 'JoeWo',
		socials: {
			twitter: 'https://twitter.com/AverageJoeWo',
			twitch: 'twitch.tv/JoeWo',
			youtube: 'https://www.youtube.com/channel/UCYIwBCUkTJq6gomf5blbQ2g',
		},
	},
	{
		name: 'HusKerrs',
		imagePath:
			'https://pbs.twimg.com/profile_images/1537330350497464322/mCUmtN_7_400x400.jpg',
		isLive: false,
		urlSafeName: 'HusKerrs',
		socials: {
			twitter: 'https://twitter.com/HusKerrs',
			twitch: 'https://twitch.tv/HusKerrs',
			youtube: 'https://www.youtube.com/@HusKerrs',
		},
	},
	{
		name: 'Symfuhny',
		imagePath:
			'https://pbs.twimg.com/profile_images/1207086481916887040/dW0LBzUb_400x400.jpg',
		isLive: true,
		urlSafeName: 'Symfuhny',
		socials: {
			twitter: 'https://twitter.com/Symfuhny',
			twitch: 'https://twitch.tv/Symfuhny',
		},
	},
];
