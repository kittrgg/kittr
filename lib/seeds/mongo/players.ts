import { Types } from "mongoose"

const raw = [
	{
		_id: "611efbf690fdff000917abce",
		meta: {
			hasProfileImage: true,
			profileImage: "611efbf690fdff000917abce",
			premiumType: "premium",
			links: {
				twitch: "https://www.twitch.tv/HusKerrs",
				youtube: "https://www.youtube.com/HusKerrs",
				instagram: "https://www.instagram.com/HusKerrs",
				twitter: "https://twitter.com/HusKerrs",
				tiktok: "https://www.tiktok.com/@TheHusKerrs",
				discord: "https://discord.gg/BnaeA7R"
			},
			brandColors: { primary: "#3700ff" }
		},
		viewCount: 263637,
		games: [{ id: "60da97598821ed46dc9c008c", code: "HUSKERRS" }],
		kits: [
			{
				_id: "611efcec1c2ed50009f25603",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20c2abf84855a680f914e",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "lv5BlHSvJLg"
				}
			},
			{
				_id: "611efd221c2ed50009f2560b",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1da40bf84855a680f8f19",
					"60e353eabf84855a680f969b",
					"60e352e1bf84855a680f9687",
					"60e1de7bbf84855a680f8f89",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "fJXa2FoPZPY",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611efd491c2ed50009f25610",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1debfbf84855a680f8f93",
					"60e1de7bbf84855a680f8f89",
					"60e1e478bf84855a680f8fa1",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611efd671c2ed50009f2561d",
				baseId: "60df4977bf84855a680f88ea",
				options: [
					"60e3524fbf84855a680f9671",
					"60e360ddbf84855a680f98d1",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf",
					"60e360ffbf84855a680f98d5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611efdaa1c2ed50009f25628",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1e63dbf84855a680f8fb9",
					"60f0b5951d00452cd055422c",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "YyxbRitdxDo",
					tiktokId: ""
				}
			},
			{
				_id: "611efdc61c2ed50009f2562d",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611efdf590fdff000917ac0f",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e1d98fbf84855a680f8ef1",
					"60e3f1498a26dd1acccc61a2",
					"60e3f6bb8a26dd1acccc627e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611efe151c2ed50009f2563b",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611efe5690fdff000917ac1f",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e1d9c7bf84855a680f8eff",
					"60e1e48fbf84855a680f8fa7",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "611efe7290fdff000917ac26",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d8d9bf84855a680f8ee9",
					"60e1da62bf84855a680f8f23",
					"60e1da35bf84855a680f8f15",
					"60e1da9abf84855a680f8f31"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611efe941c2ed50009f25646",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d98fbf84855a680f8ef1",
					"60e1e4bebf84855a680f8fa9",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "611efeb490fdff000917ac32",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d997bf84855a680f8ef3",
					"60e35a20bf84855a680f97b9",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611efece1c2ed50009f25659",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e35580bf84855a680f96f7",
					"60e356a2bf84855a680f9705",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611eff0990fdff000917ac44",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e35908bf84855a680f9759",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611eff3390fdff000917ac4a",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1dac1bf84855a680f8f3b",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611eff7490fdff000917ac58",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35c3abf84855a680f981b",
					"60e1da40bf84855a680f8f19",
					"60e1da62bf84855a680f8f23",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "6SRJsN4TQFQ",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611effd11c2ed50009f25669",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1dac1bf84855a680f8f3b",
					"60e1de7bbf84855a680f8f89",
					"60f0b3671d00452cd0554206",
					"60f0b3191d00452cd0554200",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "Hypnotic",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611efff390fdff000917ac73",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20a9ebf84855a680f90f8",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e20b3fbf84855a680f9106"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "4Yr7r2jfJUI"
				}
			},
			{
				_id: "611f000b1c2ed50009f25679",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e39c15bf84855a680fa06a",
					"60e39c31bf84855a680fa06e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "oXi0nYJAawg"
				}
			},
			{
				_id: "611f002c1c2ed50009f25685",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e1da5cbf84855a680f8f21",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "duyIEwSRFlg",
					tiktokId: ""
				}
			},
			{
				_id: "611f005190fdff000917ac7d",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20d16bf84855a680f9160",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20e3ebf84855a680f91ae"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611f008590fdff000917ac8d",
				baseId: "60ded332bf84855a680f888d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e21033bf84855a680f9210",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60e21301bf84855a680f9250"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f00a690fdff000917ac95",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f00c01c2ed50009f2569a",
				baseId: "60df4a4fbf84855a680f88f2",
				options: [
					"60df7203bf84855a680f8a49",
					"60e36ac3bf84855a680f9a18",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60e37162bf84855a680f9a26"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f00f390fdff000917ac9f",
				baseId: "60df616fbf84855a680f8957",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ebf58a26dd1acccc60aa",
					"60df7280bf84855a680f8a55",
					"60e3ec098a26dd1acccc60b0",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f01391c2ed50009f256ac",
				baseId: "60df4b05bf84855a680f88f8",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37764bf84855a680f9b0a",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f01561c2ed50009f256b1",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3a54a8a26dd1acccc59a0",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f01761c2ed50009f256b9",
				baseId: "6109bb97ec0dea4e34958025",
				options: [
					"60df7203bf84855a680f8a49",
					"61099cd856bb294be45a7e26",
					"60df7279bf84855a680f8a53",
					"61099cf956bb294be45a7e30",
					"60e37d76bf84855a680f9c02"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f019c1c2ed50009f256be",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60e342b1bf84855a680f94fb",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df738dbf84855a680f8a85",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f01b71c2ed50009f256c9",
				baseId: "60ded5b6bf84855a680f88a3",
				options: [
					"60df7203bf84855a680f8a49",
					"60e349d0bf84855a680f95b5",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f01ea90fdff000917acb2",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60e37347bf84855a680f9a78",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37356bf84855a680f9a7a",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f020390fdff000917acbb",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f022390fdff000917acc0",
				baseId: "60df619dbf84855a680f8959",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3da9d8a26dd1acccc5d59",
					"60e3ed2d8a26dd1acccc60e8",
					"60e3ed588a26dd1acccc60f0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f02391c2ed50009f256d3",
				baseId: "60df4bcfbf84855a680f88fe",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37d30bf84855a680f9bf4",
					"60df7279bf84855a680f8a53",
					"60df73cbbf84855a680f8a8d",
					"60e37d76bf84855a680f9c02"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f025590fdff000917acc8",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df148a26dd1acccc5e45"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f027b90fdff000917accc",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f029e1c2ed50009f256e5",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df7280bf84855a680f8a55",
					"60df72b5bf84855a680f8a5d",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f02c01c2ed50009f256ee",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84c2bf84855a680f8c6e",
					"60df7280bf84855a680f8a55",
					"60df7471bf84855a680f8aa5",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f02dd90fdff000917acd5",
				baseId: "60df4feebf84855a680f890c",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e39680bf84855a680f9f6f",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e39325bf84855a680f9e75"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f03141c2ed50009f256f8",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60df73cbbf84855a680f8a8d",
					"60e379dfbf84855a680f9b66",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f03291c2ed50009f256fd",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df7280bf84855a680f8a55",
					"60df7471bf84855a680f8aa5",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f03541c2ed50009f25715",
				baseId: "60ded588bf84855a680f88a1",
				options: [
					"60df7e65bf84855a680f8c14",
					"60df7e79bf84855a680f8c16",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611f037d90fdff000917ace1",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e38fa4bf84855a680f9e21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f039c1c2ed50009f25722",
				baseId: "60df4ac6bf84855a680f88f6",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3757bbf84855a680f9ac3",
					"60df7280bf84855a680f8a55",
					"60e375adbf84855a680f9ac9",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "611f03b81c2ed50009f25729",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60e3c8508a26dd1acccc5af1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f03eb1c2ed50009f25732",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60df752fbf84855a680f8ac1",
					"60e39325bf84855a680f9e75"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f041790fdff000917acf7",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611f04361c2ed50009f2575b",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3e05a8a26dd1acccc5e84",
					"60df7280bf84855a680f8a55",
					"60e3e1b98a26dd1acccc5e9e",
					"60e3e13e8a26dd1acccc5e98"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6139128139ed4200087186b0",
				baseId: "60df5accbf84855a680f8918",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e39fc9bf84855a680fa114",
					"60e1d9e6bf84855a680f8f07",
					"60e1def0bf84855a680f8f97",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "ns50b6PbBsc"
				}
			},
			{
				_id: "613a619119d77a0008b55d89",
				baseId: "60df60c4bf84855a680f8951",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3e6918a26dd1acccc5fac",
					"60e1da5cbf84855a680f8f21",
					"60e1dac1bf84855a680f8f3b",
					"60e1d98fbf84855a680f8ef1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "614cd1db8aaa37000873ea1b",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"61161a8a147d3f4f203722c0",
					"61161ad2147d3f4f203722c8"
				],
				userData: {
					customTitle: "",
					blueprint: "Geomatic",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6160a52e5ea16b0009558200",
				baseId: "60df5c3ebf84855a680f8926",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3ccda8a26dd1acccc5b82",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "616cbb24e0dadb0008199ff4",
				baseId: "60df613fbf84855a680f8955",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3ea3c8a26dd1acccc6058",
					"60e3ea9c8a26dd1acccc6060",
					"60e1dac1bf84855a680f8f3b",
					"60e1d98fbf84855a680f8ef1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b27672ba6aa5000899f88b",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10816cbb40a531ccf0619",
					"61b10419cbb40a531ccf0517",
					"61b10371cbb40a531ccf04e5",
					"61b10658cbb40a531ccf0599",
					"61b1072acbb40a531ccf05cb",
					"61b26a2176830d41506780f3",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dc2cbb40a531ccf0710",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3eef3eeba470009f19e2b",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b1037dcbb40a531ccf04e9",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10708cbb40a531ccf05c1",
					"61b107f7cbb40a531ccf060d",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e49cbb40a531ccf0752",
					"61b10d90cbb40a531ccf0704",
					"61b10e27cbb40a531ccf0742",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3ef85f40f230008db89cf",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10371cbb40a531ccf04e5",
					"61b134c01ede1b55003fd164",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2739676830d4150678245",
					"61b226a976830d4150677d17",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3efd6f40f230008db89d3",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b291a176830d4150678716",
					"61b103dbcbb40a531ccf0507",
					"61b10853cbb40a531ccf0631",
					"61b1071fcbb40a531ccf05c7",
					"61b2936d76830d4150678744",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d87cbb40a531ccf0700",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "Hipfire build",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b651cbf9207400083ed5c1",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10363cbb40a531ccf04e1",
					"61b10452cbb40a531ccf052b",
					"61b10708cbb40a531ccf05c1",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2820e76830d4150678440",
					"61b2832776830d4150678464",
					"61b283c976830d4150678476",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740"
				],
				userData: {
					customTitle: "SMG Build",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6a39e5f4d640009d965b7",
				baseId: "61b114f0cbb40a531ccf077a",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b103d2cbb40a531ccf0505",
					"61b2a2fb76830d4150678a6f",
					"61b2a3ce76830d4150678a85",
					"61b10e2acbb40a531ccf0744",
					"61b10e49cbb40a531ccf0752",
					"61b1073fcbb40a531ccf05d3",
					"61b10ccacbb40a531ccf06e0",
					"61b2a4b776830d4150678aa7",
					"61b10d75cbb40a531ccf06f6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b789eb22c16300084919c3",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10cdfcbb40a531ccf06ea",
					"61b10708cbb40a531ccf05c1",
					"61b10446cbb40a531ccf0527",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b10d94cbb40a531ccf0706",
					"61b2b23b76830d4150678d1d",
					"61b2b32176830d4150678d33",
					"61b2b3ad76830d4150678d43"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b795f9f074060008a1e392",
				baseId: "61b115dbcbb40a531ccf0784",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10446cbb40a531ccf0527",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071a",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2badd76830d4150678dc8",
					"61b2bb9876830d4150678dd8",
					"61b2bc3376830d4150678dea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ba47ace1e8b30009cd76c7",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b106e1cbb40a531ccf05b5",
					"61b10371cbb40a531ccf04e5",
					"61b1088dcbb40a531ccf0643",
					"61b1072acbb40a531ccf05cb",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10df1cbb40a531ccf0728",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c0d50e1f1b570008bb4137",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b104dfcbb40a531ccf0551",
					"61b107b0cbb40a531ccf05f7",
					"61b1072acbb40a531ccf05cb",
					"61b10bd8cbb40a531ccf0688",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b",
					"61b10371cbb40a531ccf04e5",
					"61b10446cbb40a531ccf0527"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c36440f12f3300081d33a4",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10685cbb40a531ccf05a3",
					"61b1073fcbb40a531ccf05d3",
					"61b107c2cbb40a531ccf05fd",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10e49cbb40a531ccf0752",
					"61b10db7cbb40a531ccf070a",
					"61b28a6976830d415067858a",
					"61b2872a76830d4150678515"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c365562adc290008217237",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2a97676830d4150678ba8",
					"61b103dbcbb40a531ccf0507",
					"61b2aa9876830d4150678bca",
					"61b1072acbb40a531ccf05cb",
					"61b2aaf976830d4150678bd8",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ce003315d63e00080e6828",
				baseId: "61b1148acbb40a531ccf0776",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b1060fcbb40a531ccf0581",
					"61b2868d76830d4150678509",
					"61b1089dcbb40a531ccf0649",
					"61b10735cbb40a531ccf05cf",
					"61b10cb1cbb40a531ccf06d8",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d83cbb40a531ccf06fe",
					"61b10e15cbb40a531ccf0738",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ce25a6e757d30008237b2e",
				baseId: "61b116c4cbb40a531ccf078c",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b1061bcbb40a531ccf0585",
					"61b2cba076830d415067901d",
					"61b10725cbb40a531ccf05c9",
					"61b10c31cbb40a531ccf06aa",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d83cbb40a531ccf06fe",
					"61b10e10cbb40a531ccf0736",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d48a6c62afb3000874feeb",
				baseId: "61b1151acbb40a531ccf077c",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b1068acbb40a531ccf05a5",
					"61b10853cbb40a531ccf0631",
					"61b10e49cbb40a531ccf0752",
					"61b10dbbcbb40a531ccf070c",
					"61b10d87cbb40a531ccf0700",
					"61b10ccacbb40a531ccf06e0",
					"61b103dbcbb40a531ccf0507"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d8e5de24408b00096589da",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1046ecbb40a531ccf0533",
					"61b106e7cbb40a531ccf05b7",
					"61b103dbcbb40a531ccf0507",
					"61b10868cbb40a531ccf0639",
					"61b1071acbb40a531ccf05c5",
					"61b2d0ef76830d41506790b4",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d83cbb40a531ccf06fe",
					"61b10dd1cbb40a531ccf071a",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61dc9bd59b9be3000989146e",
				baseId: "61b11300cbb40a531ccf076a",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2872a76830d4150678515",
					"61b286aa76830d415067850b",
					"61b104f5cbb40a531ccf0557",
					"61b1072acbb40a531ccf05cb",
					"61b10d8bcbb40a531ccf0702",
					"61b10774cbb40a531ccf05e1",
					"61b10cdbcbb40a531ccf06e8",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ddeb181021ed0009c5a7d2",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2820e76830d4150678440",
					"61b103dbcbb40a531ccf0507",
					"61b282e476830d4150678458",
					"61b10725cbb40a531ccf05c9",
					"61b283c976830d4150678476",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "AR Build",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df34c5394ecc00135ebbaf",
				baseId: "61b1184acbb40a531ccf0796",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b10540cbb40a531ccf0567",
					"61b103d2cbb40a531ccf0505",
					"60e3f7d38a26dd1acccc62b6",
					"61b10bbfcbb40a531ccf067e",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d83cbb40a531ccf06fe",
					"61b10dfecbb40a531ccf072e",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e07002394ecc0013601683",
				baseId: "61dfd74a4656770013ed3681",
				options: [
					"61b10468cbb40a531ccf0531",
					"61dfd47c4656770013ed366d",
					"61b103d2cbb40a531ccf0505",
					"61b2a6e676830d4150678b1f",
					"61b1072acbb40a531ccf05cb",
					"61dfd58f4656770013ed367b",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d7ccbb40a531ccf06fa",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e071c9394ecc001360198c",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2712976830d4150678221",
					"61b10371cbb40a531ccf04e5",
					"61b2741576830d4150678253",
					"61b10708cbb40a531ccf05c1",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e15cbb40a531ccf0738",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e0a540394ecc0013606342",
				baseId: "61252d6022975356085a1a07",
				options: [
					"61252e4522975356085a1a0f",
					"61252ebb22975356085a1a15",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"61252f8022975356085a1a29"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e70a0cce5de20013f95b3d",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b1042fcbb40a531ccf052c",
					"61b17ac6b71116459c87f357",
					"61b292d876830d4150678734",
					"61b10735cbb40a531ccf05cf",
					"61b293f076830d415067874a",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e70e70ce5de20013f96241",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2961676830d41506787c6",
					"61b103d2cbb40a531ccf0505",
					"61b296d476830d41506787d6",
					"61b10708cbb40a531ccf05c1",
					"61b2977476830d41506787ee",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d90cbb40a531ccf0704",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "wwsT9W6qvkMzXbmsWarXu6qW0D62", role: "Owner" },
			{ uid: "UlNflPCLmHc8MVmR3XyvBg4CrFw1", role: "Editor" },
			{ uid: "fQuvBZqeMnY99uOnY8fv9MjXIRm2", role: "Administrator" },
			{ uid: "k2TOhb6hrVRVEHnTlmNNfpRpGmH2", role: "Administrator" },
			{ uid: "d6AXDegw3Qe92IHRfTPK9suAnEH3", role: "Editor" }
		],
		createdDate: "2021-08-20T00:48:54.104Z",
		displayName: "HusKerrs",
		urlSafeName: "HusKerrs",
		__v: 0,
		previousUpdater: "HusKerrs",
		overlay: {
			backgroundColorPrimary: "#636363",
			textColorPrimary: "#ffffff",
			backgroundColorSecondary: "#2F2F31",
			textColorAccent: "#9B9B9B",
			textColorSecondary: "#2F2F31"
		}
	},
	{
		_id: "610041e50d5e58000827affe",
		meta: {
			hasProfileImage: true,
			profileImage: "610041e50d5e58000827affe",
			premiumType: "premium",
			links: {
				tiktok: "https://www.tiktok.com/@averagejoewo",
				youtube: "https://www.youtube.com/channel/UCYIwBCUkTJq6gomf5blbQ2g",
				twitter: "https://twitter.com/AverageJoeWo",
				instagram: "https://www.instagram.com/JoeWoOfficial/",
				twitch: "https://www.twitch.tv/joewo"
			},
			brandColors: { primary: "#ffffff" }
		},
		viewCount: 156312,
		games: [
			{
				id: "60da97598821ed46dc9c008c",
				code: "",
				commandString: "$(touser), {{link}}"
			}
		],
		kits: [
			{
				_id: "61b569f91104450009acff8b",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2820e76830d4150678440",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b10735cbb40a531ccf05cf",
					"61b283c976830d4150678476",
					"61b2841a76830d415067847e",
					"61b10d75cbb40a531ccf06f6",
					"61b10e2acbb40a531ccf0744",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6ad902bd81600095d4409",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b103d2cbb40a531ccf0505",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10735cbb40a531ccf05cf",
					"61b107f7cbb40a531ccf060d",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10e49cbb40a531ccf0752",
					"61b10dc2cbb40a531ccf0710",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "6Ai8gMW3mAA",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6b2ec2bd81600095d4424",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10419cbb40a531ccf0517",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b",
					"61b134c01ede1b55003fd164",
					"61b10e23cbb40a531ccf0740",
					"61b226a976830d4150677d17",
					"61b2739676830d4150678245"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b84310eda79a0008290dbc",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b291a176830d4150678716",
					"61b10853cbb40a531ccf0631",
					"61b1072acbb40a531ccf05cb",
					"61b293f076830d415067874a",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d90cbb40a531ccf0704",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b8eb846454b40008888b1d",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10468cbb40a531ccf0531",
					"61b106e1cbb40a531ccf05b5",
					"61b1072acbb40a531ccf05cb",
					"61b1088dcbb40a531ccf0643",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071b",
					"61b10dd4cbb40a531ccf071c",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "37vyXU1o3VI",
					tiktokId: "",
					quote: "2.5x or 3-6x scope"
				}
			},
			{
				_id: "61ba05e6fdef140008dd4768",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b104d1cbb40a531ccf054d",
					"61b10371cbb40a531ccf04e5",
					"61b10830cbb40a531ccf0623",
					"61b1072acbb40a531ccf05cb",
					"61b10bd8cbb40a531ccf0688",
					"61b10cdbcbb40a531ccf06e8",
					"61b2442c76830d4150677da2",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf6d00975aeb0008bbb9db",
				baseId: "61b11130cbb40a531ccf075e",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b104a1cbb40a531ccf0541",
					"61b10371cbb40a531ccf04e5",
					"61b1082ccbb40a531ccf0621",
					"61b1072acbb40a531ccf05cb",
					"61b24ef976830d4150677f53",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d90cbb40a531ccf0704",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf70db63219d0008b5e533",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b10868cbb40a531ccf0639",
					"61b10cdfcbb40a531ccf06ea",
					"61b1042acbb40a531ccf051d",
					"61b1071acbb40a531ccf05c5",
					"61b106e7cbb40a531ccf05b7",
					"61b10d75cbb40a531ccf06f6",
					"61b10e05cbb40a531ccf0732",
					"61b10dd1cbb40a531ccf071b",
					"61b103efcbb40a531ccf050d",
					"61b2d10376830d41506790b6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: "Crosshair Dot reticle"
				}
			},
			{
				_id: "61bf773d90bca00008850325",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10cdfcbb40a531ccf06ea",
					"61b10446cbb40a531ccf0527",
					"61b1072acbb40a531ccf05cb",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b10d94cbb40a531ccf0706",
					"61b2b23b76830d4150678d1d",
					"61b2b32176830d4150678d33",
					"61b2b3ad76830d4150678d43"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "aYPkxqHdgoM",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf91e18d295f000987c3e1",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2820e76830d4150678440",
					"61b10371cbb40a531ccf04e5",
					"61b2832776830d4150678464",
					"61b1072acbb40a531ccf05cb",
					"61b283c976830d4150678476",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "Primary",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c166215f8ca00009f414a1",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b295f976830d41506787c2",
					"61b103d2cbb40a531ccf0505",
					"61b2971776830d41506787e2",
					"61b10735cbb40a531ccf05cf",
					"61b2977476830d41506787ee",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d90cbb40a531ccf0704",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c1664bc9dfd60009fd93cb",
				baseId: "61b1145ecbb40a531ccf0774",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b106edcbb40a531ccf05b9",
					"61b103d2cbb40a531ccf0505",
					"61b29a2976830d415067887d",
					"61b1072acbb40a531ccf05cb",
					"61b29acf76830d415067888f",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d90cbb40a531ccf0704",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c1667dc9dfd60009fd93ce",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b10658cbb40a531ccf0599",
					"61b103d2cbb40a531ccf0505",
					"61b1081bcbb40a531ccf061b",
					"61b1072acbb40a531ccf05cb",
					"61b26a2176830d41506780f3",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d8bcbb40a531ccf0702",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c166b8c9dfd60009fd93d1",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b103d2cbb40a531ccf0505",
					"61b10708cbb40a531ccf05c1",
					"61b2728f76830d4150678233",
					"61b2739676830d4150678245",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e15cbb40a531ccf0738",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "Sub or Snip Supp",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c192e5f89711000906e06c",
				baseId: "61b11684cbb40a531ccf078a",
				options: [
					"61b1044dcbb40a531ccf0529",
					"61b2c61276830d4150678f68",
					"61b10371cbb40a531ccf04e5",
					"61b2c6f276830d4150678f7c",
					"61b1072acbb40a531ccf05cb",
					"61b24ec576830d4150677f4d",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d90cbb40a531ccf0704",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c213a3e8a7260009fc9e79",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b106e1cbb40a531ccf05b5",
					"61b103d2cbb40a531ccf0505",
					"61b10806cbb40a531ccf0613",
					"61b1072acbb40a531ccf05cb",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "Rebirth",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c3996a98f5e100085e93db",
				baseId: "61b11300cbb40a531ccf076a",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10774cbb40a531ccf05e1",
					"61b10735cbb40a531ccf05cf",
					"61b2872a76830d4150678515",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b104b5cbb40a531ccf0547",
					"61b103d2cbb40a531ccf0505"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c39d2b30de8b0008cc9036",
				baseId: "61b1151acbb40a531ccf077c",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b1068acbb40a531ccf05a5",
					"61b10853cbb40a531ccf0631",
					"61b10dbbcbb40a531ccf070c",
					"61b10e49cbb40a531ccf0752",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b103dbcbb40a531ccf0507"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "rP0VgLVsyFE",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ccf0081722dd00086c9c2d",
				baseId: "61b1126ecbb40a531ccf0766",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10633cbb40a531ccf058d",
					"61b103d2cbb40a531ccf0505",
					"61b1085fcbb40a531ccf0635",
					"61b10730cbb40a531ccf05cd",
					"61b26dc076830d4150678193",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071a",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "t5kjBkgKX_g",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d158234e991600088830c4",
				baseId: "61b116c4cbb40a531ccf078c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b1061bcbb40a531ccf0585",
					"61b2cba076830d415067901d",
					"61b10735cbb40a531ccf05cf",
					"61b10c31cbb40a531ccf06aa",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10dbdcbb40a531ccf070e",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "Testing",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d4985e90dcf300087f7a43",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b1042fcbb40a531ccf051f",
					"61b291a176830d4150678716",
					"61b103efcbb40a531ccf050d",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b2936d76830d4150678744",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d87cbb40a531ccf0700",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "Hipfire",
					blueprint: "",
					featured: false,
					youtubeURL: "sI635j-J79Q",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61dc79bb9412e9000914a300",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10629cbb40a531ccf0589",
					"61b103d2cbb40a531ccf0505",
					"61b10735cbb40a531ccf05cf",
					"61b28b7476830d41506785a6",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10dc2cbb40a531ccf0710",
					"61b10e49cbb40a531ccf0752",
					"61b10853cbb40a531ccf0631"
				],
				userData: {
					customTitle: "Just testing",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ddf571aab96f000902af93",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10556cbb40a531ccf056f",
					"61b103d2cbb40a531ccf0505",
					"61b107c2cbb40a531ccf05fd",
					"61b10735cbb40a531ccf05cf",
					"61b28b7476830d41506785b7",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e3be02ce5de20013f51b98",
				baseId: "61dfd74a4656770013ed3681",
				options: [
					"61b10468cbb40a531ccf0531",
					"61dfd4904656770013ed366f",
					"61b103d2cbb40a531ccf0505",
					"61b2a6e676830d4150678b1f",
					"61b10735cbb40a531ccf05cf",
					"61dfd5a24656770013ed367d",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "testing",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61eb6e675eb3320013009d25",
				baseId: "61b115dbcbb40a531ccf0784",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2badd76830d4150678dc8",
					"61b10371cbb40a531ccf04e5",
					"61b2bb9c76830d4150678dda",
					"61b1072acbb40a531ccf05cb",
					"61b2bc5876830d4150678df0",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e15cbb40a531ccf0738",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "testing",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "yoZNfwxsOFfaCjrsnWNHeCKr78w1", role: "Owner" },
			{ uid: "j25YP5bFfcc6HeXDrILNJWisprw2", role: "Administrator" },
			{ uid: "d3YHKDclOTTXeT45qD2nnWaCjkI2", role: "Administrator" },
			{ uid: "IViGUNVVnISUEmk0W2vHydx8IlJ3", role: "Administrator" },
			{ uid: "46lnGS2Aj0MHP7dkwdpeBKaEsgK2", role: "Administrator" },
			{ uid: "U4RQQW3yAMXdqWE0JQ7pOyhxIVx2", role: "Administrator" },
			{ uid: "8kB6sIo4gfZKZSacpIY1EpJHDQh1", role: "Administrator" },
			{ uid: "7WFzwNqcyzWQXPvTeU5xvDBXxis1", role: "Administrator" }
		],
		createdDate: "2021-07-27T17:27:01.184Z",
		displayName: "JoeWo",
		urlSafeName: "JoeWo",
		__v: 0,
		previousUpdater: "LarForceOne",
		overlay: {
			backgroundColorPrimary: "#636363",
			textColorAccent: "#9B9B9B",
			backgroundColorSecondary: "#2F2F31",
			textColorSecondary: "#2F2F31",
			textColorPrimary: "#ffffff",
			primaryKit: {
				_id: "61c165f95f8ca00009f4149e",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					{
						_id: "61b10468cbb40a531ccf0531",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Muzzle",
						displayName: "Recoil Booster",
						__v: 0
					},
					{
						_id: "61b10556cbb40a531ccf056f",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Barrel",
						displayName: "Gawain 140mm Short",
						__v: 0
					},
					{
						_id: "61b107c2cbb40a531ccf05fd",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Stock",
						displayName: "Gawain Para",
						__v: 0
					},
					{
						_id: "61b10735cbb40a531ccf05cf",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Underbarrel",
						displayName: "Mark VI Skeletal",
						__v: 0
					},
					{
						_id: "61b28b7476830d41506785b7",
						displayName: "7.62 Gorenko 32 Round Mags",
						slotKey: "Magazine",
						gameId: "60da97598821ed46dc9c008c",
						__v: 0
					},
					{
						_id: "61b10cdbcbb40a531ccf06e8",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Ammo Type",
						displayName: "Incendiary",
						__v: 0
					},
					{
						_id: "61b10d75cbb40a531ccf06f6",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Rear Grip",
						displayName: "Fabric Rear Grip",
						__v: 0
					},
					{
						_id: "61b10db7cbb40a531ccf070a",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Perk 1",
						displayName: "Acrobatic",
						__v: 0
					},
					{
						_id: "61b10e49cbb40a531ccf0752",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Perk 2",
						displayName: "Quick",
						__v: 0
					},
					{
						_id: "61b103d2cbb40a531ccf0505",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Optic",
						displayName: "Slate Reflector",
						__v: 0
					}
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				},
				base: {
					commandCodes: ["sten"],
					_id: "61b11331cbb40a531ccf076c",
					displayName: "Sten",
					gameId: "60da97598821ed46dc9c008c",
					image: "/warzone/sten.png",
					gameInfo: {
						blurb:
							"High-mobility full-auto SMG ideal for flanking enemy positions.",
						stats: {
							accuracy: 56,
							range: 49,
							mobility: 74,
							damage: 50,
							fireRate: 70,
							control: 72
						},
						maxOptions: 10,
						availableOptions: [
							{ orderPlacement: "1", optionId: "61b10419cbb40a531ccf0517" },
							{ orderPlacement: "2", optionId: "61b10487cbb40a531ccf053b" },
							{ orderPlacement: "3", optionId: "61b10457cbb40a531ccf052d" },
							{ orderPlacement: "4", optionId: "61b10446cbb40a531ccf0527" },
							{ orderPlacement: "5", optionId: "61b285d176830d41506784fb" },
							{ orderPlacement: "6", optionId: "61b1042fcbb40a531ccf051f" },
							{ orderPlacement: "7", optionId: "61b10468cbb40a531ccf0531" },
							{ orderPlacement: "8", optionId: "61b10568cbb40a531ccf0575" },
							{ orderPlacement: "9", optionId: "61b10556cbb40a531ccf056f" },
							{ orderPlacement: "10", optionId: "61b1056dcbb40a531ccf0577" },
							{ orderPlacement: "11", optionId: "61b10573cbb40a531ccf0579" },
							{ orderPlacement: "12", optionId: "61b10685cbb40a531ccf05a3" },
							{ orderPlacement: "13", optionId: "61b103cbcbb40a531ccf0503" },
							{ orderPlacement: "14", optionId: "61b10371cbb40a531ccf04e5" },
							{ orderPlacement: "15", optionId: "61b103adcbb40a531ccf04f9" },
							{ orderPlacement: "16", optionId: "61b10363cbb40a531ccf04e1" },
							{ orderPlacement: "17", optionId: "61b23c8976830d4150677d3c" },
							{ orderPlacement: "18", optionId: "61b103d2cbb40a531ccf0505" },
							{ orderPlacement: "19", optionId: "61b103b3cbb40a531ccf04fb" },
							{ orderPlacement: "20", optionId: "61b103c5cbb40a531ccf0501" },
							{ orderPlacement: "21", optionId: "61b23ddc76830d4150677d50" },
							{ orderPlacement: "22", optionId: "61b23c4f76830d4150677d36" },
							{ orderPlacement: "23", optionId: "61b1039acbb40a531ccf04f3" },
							{ orderPlacement: "24", optionId: "61b103efcbb40a531ccf050d" },
							{ orderPlacement: "25", optionId: "61b103dbcbb40a531ccf0507" },
							{ orderPlacement: "26", optionId: "61b103b8cbb40a531ccf04fd" },
							{ orderPlacement: "27", optionId: "61b10345cbb40a531ccf04df" },
							{ orderPlacement: "28", optionId: "61b23d3776830d4150677d48" },
							{ orderPlacement: "29", optionId: "61b103a1cbb40a531ccf04f5" },
							{ orderPlacement: "30", optionId: "61b28a6976830d415067858a" },
							{ orderPlacement: "31", optionId: "61b103c0cbb40a531ccf04ff" },
							{ orderPlacement: "32", optionId: "61b107c2cbb40a531ccf05fd" },
							{ orderPlacement: "33", optionId: "61b1085acbb40a531ccf0633" },
							{ orderPlacement: "34", optionId: "61b28a8876830d415067858e" },
							{ orderPlacement: "35", optionId: "61b107d2cbb40a531ccf0601" },
							{ orderPlacement: "36", optionId: "61b107cccbb40a531ccf05ff" },
							{ orderPlacement: "37", optionId: "61b107b7cbb40a531ccf05f9" },
							{ orderPlacement: "38", optionId: "61b107bccbb40a531ccf05fb" },
							{ orderPlacement: "39", optionId: "61b10725cbb40a531ccf05c9" },
							{ orderPlacement: "40", optionId: "61b10708cbb40a531ccf05c1" },
							{ orderPlacement: "41", optionId: "61b1072acbb40a531ccf05cb" },
							{ orderPlacement: "42", optionId: "61b1073acbb40a531ccf05d1" },
							{ orderPlacement: "43", optionId: "61b1073fcbb40a531ccf05d3" },
							{ orderPlacement: "44", optionId: "61b10711cbb40a531ccf05c3" },
							{ orderPlacement: "45", optionId: "61b10735cbb40a531ccf05cf" },
							{ orderPlacement: "46", optionId: "61b1071fcbb40a531ccf05c7" },
							{ orderPlacement: "48", optionId: "61b28b7476830d41506785b7" },
							{ orderPlacement: "47", optionId: "61b28b5176830d41506785a2" },
							{ orderPlacement: "49", optionId: "61b10ccecbb40a531ccf06e2" },
							{ orderPlacement: "50", optionId: "61b10cf5cbb40a531ccf06f2" },
							{ orderPlacement: "52", optionId: "61b10bc4cbb40a531ccf0680" },
							{ orderPlacement: "51", optionId: "61b2872a76830d4150678515" },
							{ orderPlacement: "53", optionId: "61b10cdbcbb40a531ccf06e8" },
							{ orderPlacement: "54", optionId: "61b10cd6cbb40a531ccf06e6" },
							{ orderPlacement: "55", optionId: "61b10cd2cbb40a531ccf06e4" },
							{ orderPlacement: "56", optionId: "61b10d90cbb40a531ccf0704" },
							{ orderPlacement: "57", optionId: "61b10d87cbb40a531ccf0700" },
							{ orderPlacement: "58", optionId: "61b10cdfcbb40a531ccf06ea" },
							{ orderPlacement: "59", optionId: "61b2442c76830d4150677da2" },
							{ orderPlacement: "60", optionId: "61b10d83cbb40a531ccf06fe" },
							{ orderPlacement: "61", optionId: "61b10d94cbb40a531ccf0706" },
							{ orderPlacement: "62", optionId: "61b10d8bcbb40a531ccf0702" },
							{ orderPlacement: "63", optionId: "61b10d75cbb40a531ccf06f6" },
							{ orderPlacement: "64", optionId: "61b10d78cbb40a531ccf06f8" },
							{ orderPlacement: "65", optionId: "61b10d80cbb40a531ccf06fc" },
							{ orderPlacement: "66", optionId: "61b10d7ccbb40a531ccf06fa" },
							{ orderPlacement: "67", optionId: "61b10e15cbb40a531ccf0738" },
							{ orderPlacement: "68", optionId: "61b10db7cbb40a531ccf070a" },
							{ orderPlacement: "69", optionId: "61b10ddccbb40a531ccf0720" },
							{ orderPlacement: "70", optionId: "61b10e1ccbb40a531ccf073c" },
							{ orderPlacement: "71", optionId: "61b10deacbb40a531ccf0726" },
							{ orderPlacement: "72", optionId: "61b10dd8cbb40a531ccf071e" },
							{ orderPlacement: "73", optionId: "61b10e3ecbb40a531ccf074c" },
							{ orderPlacement: "74", optionId: "61b10e4ecbb40a531ccf0756" },
							{ orderPlacement: "75", optionId: "61b10e4ccbb40a531ccf0754" },
							{ orderPlacement: "76", optionId: "61b10e49cbb40a531ccf0752" },
							{ orderPlacement: "77", optionId: "61b10dd1cbb40a531ccf071b" },
							{ orderPlacement: "78", optionId: "61b10e3bcbb40a531ccf074a" },
							{ orderPlacement: "79", optionId: "61b10e42cbb40a531ccf074e" },
							{ orderPlacement: "80", optionId: "61b10e47cbb40a531ccf0750" }
						]
					},
					category: "SMG",
					__v: 0
				}
			}
		}
	},
	{
		_id: "610afa3995c32e0008f5dfba",
		meta: {
			hasProfileImage: true,
			profileImage: "610afa3995c32e0008f5dfba",
			premiumType: "premium",
			links: {
				twitch: "https://www.twitch.tv/Symfuhny",
				youtube: "https://www.youtube.com/channel/UCd8NFPdgSZcQth4fcQZulEQ",
				twitter: "https://twitter.com/Symfuhny",
				tiktok: "https://www.tiktok.com/@Symfuhny"
			},
			brandColors: { primary: "#ffffff" }
		},
		viewCount: 153558,
		games: [{ id: "60da97598821ed46dc9c008c", code: "SYM" }],
		kits: [
			{
				_id: "610afec995c32e0008f5e046",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3",
					"60e22060bf84855a680f9304",
					"60df7298bf84855a680f8a59"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "ipEzi5QNwTM",
					tiktokId: ""
				}
			},
			{
				_id: "610affbb85178c0008d61492",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5",
					"60df7203bf84855a680f8a49"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "7sdfJoSyWlk"
				}
			},
			{
				_id: "610b032c95c32e0008f5e0db",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "GLvLnTwn1Rc",
					tiktokId: ""
				}
			},
			{
				_id: "610b03d995c32e0008f5e106",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "E0V6HXKJ1j0"
				}
			},
			{
				_id: "610b091936f2a50008d6a5ab",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "U5rkGjW066c"
				}
			},
			{
				_id: "610b09928aab260009ea8984",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e342b1bf84855a680f94fb",
					"60df7279bf84855a680f8a53",
					"60df73cbbf84855a680f8a8d",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b0a268aab260009ea898d",
				baseId: "60ded4b0bf84855a680f8899",
				options: [
					"60df71fdbf84855a680f8a47",
					"60e33f11bf84855a680f9486",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b0bbd8aab260009ea89be",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60e2248abf84855a680f937e",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "hMJGZMYxCoY"
				}
			},
			{
				_id: "610b0c3e8aab260009ea89f5",
				baseId: "60ded332bf84855a680f888d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e21058bf84855a680f9218",
					"60df7280bf84855a680f8a55",
					"60df7298bf84855a680f8a59",
					"60e21301bf84855a680f9250"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b0cd58aab260009ea8a27",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60e34dc1bf84855a680f9619",
					"60e34d78bf84855a680f9611",
					"60df72c7bf84855a680f8a61",
					"60df7496bf84855a680f8aab"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b0d678aab260009ea8a60",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df7203bf84855a680f8a49",
					"60df73cbbf84855a680f8a8d",
					"60e379dfbf84855a680f9b66",
					"60e2248abf84855a680f937e",
					"60df7279bf84855a680f8a53"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "4G-zDhX2k3E"
				}
			},
			{
				_id: "610b0eb08aab260009ea8a8a",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df73cbbf84855a680f8a8d",
					"60df7471bf84855a680f8aa5",
					"60df7496bf84855a680f8aab"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "6SnxS-z71Qk"
				}
			},
			{
				_id: "610b0efe36f2a50008d6a69c",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60e373b8bf84855a680f9a86",
					"60e3733fbf84855a680f9a76",
					"60df73cbbf84855a680f8a8d",
					"60e37356bf84855a680f9a7a",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "PWm4aRcZ4Ng"
				}
			},
			{
				_id: "610b0f3336f2a50008d6a6a7",
				baseId: "60df4b65bf84855a680f88fc",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37babbf84855a680f9bac",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37bdcbf84855a680f9bb0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b0ff436f2a50008d6a6b7",
				baseId: "60df4a4fbf84855a680f88f2",
				options: [
					"60df7203bf84855a680f8a49",
					"60e36ab3bf84855a680f9a14",
					"60df7280bf84855a680f8a55",
					"60e3719abf84855a680f9a2c",
					"60df73cbbf84855a680f8a8d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b102336f2a50008d6a6c6",
				baseId: "60df4bcfbf84855a680f88fe",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37d76bf84855a680f9c02",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b108736f2a50008d6a6d3",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e38f8cbf84855a680f9e1d",
					"60df7279bf84855a680f8a53",
					"60e38fa4bf84855a680f9e21",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Exd3wCbDat8"
				}
			},
			{
				_id: "610b10c69bbc800008eaef27",
				baseId: "60df4f75bf84855a680f8908",
				options: [
					"60e3910fbf84855a680f9e67",
					"60e39101bf84855a680f9e65",
					"60df738dbf84855a680f8a85",
					"60e39325bf84855a680f9e75",
					"60e3934fbf84855a680f9e7f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b11429bbc800008eaef3d",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60df749dbf84855a680f8aad",
					"60e39325bf84855a680f9e75"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b117336f2a50008d6a6ff",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3a54a8a26dd1acccc59a0",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "47gzC4dbyiM"
				}
			},
			{
				_id: "610b11c38aab260009ea8af4",
				baseId: "60df5b3dbf84855a680f891c",
				options: [
					"60df71eebf84855a680f8a43",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df7496bf84855a680f8aab",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b12118aab260009ea8af8",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60e3c8508a26dd1acccc5af1",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b12a49bbc800008eaef7d",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "5QySSWTvKUE"
				}
			},
			{
				_id: "610b133f9bbc800008eaef98",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df7280bf84855a680f8a55",
					"60df7203bf84855a680f8a49",
					"60e3e05a8a26dd1acccc5e84",
					"60e3d9c98a26dd1acccc5d51",
					"60e3e1b98a26dd1acccc5e9e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b141a8aab260009ea8b34",
				baseId: "60df674bbf84855a680f8984",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fbbf8a26dd1acccc637b",
					"60df7279bf84855a680f8a53",
					"60e3f8098a26dd1acccc62c0",
					"60e3f7d38a26dd1acccc62b6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b144736f2a50008d6a717",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3f8098a26dd1acccc62c0",
					"60e3fe918a26dd1acccc6420",
					"60df7279bf84855a680f8a53",
					"60e3fedd8a26dd1acccc6430"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "YP45--87UyA"
				}
			},
			{
				_id: "610b14a59bbc800008eaefcb",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e353b4bf84855a680f9693"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "yRSNs8GRJGk"
				}
			},
			{
				_id: "610b15119bbc800008eaefdb",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e35c3abf84855a680f981b",
					"60e1da5cbf84855a680f8f21",
					"60e35bffbf84855a680f9813"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "6f3wMVvbpno",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610b15469bbc800008eaefe8",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e357f1bf84855a680f9751",
					"60e1d9c7bf84855a680f8eff",
					"60e1da66bf84855a680f8f25",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "sOzLRP9RgVE"
				}
			},
			{
				_id: "610b15f69bbc800008eaeff8",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "33JDwSPD3cQ"
				}
			},
			{
				_id: "610b16348aab260009ea8b5d",
				baseId: "60df4934bf84855a680f88e8",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35dcdbf84855a680f9861",
					"60e1da40bf84855a680f8f19",
					"60e35ef7bf84855a680f987b",
					"60e35e19bf84855a680f986b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b168a9bbc800008eaf025",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1e4d7bf84855a680f8fad",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "4mquhziAVPk",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610b16e89bbc800008eaf04a",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e35580bf84855a680f96f7",
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"6103130a84d1eb258ce0f4c2",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "ert15hdp5eA"
				}
			},
			{
				_id: "610b17259bbc800008eaf071",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Y6IeFcDjOac",
					tiktokId: ""
				}
			},
			{
				_id: "610b17728aab260009ea8bbf",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1ded1bf84855a680f8f95",
					"60e1e464bf84855a680f8f9d",
					"60e1d9edbf84855a680f8f09",
					"60e1def0bf84855a680f8f97",
					"60e1de7bbf84855a680f8f89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "wOo2TP5Lrcw",
					tiktokId: ""
				}
			},
			{
				_id: "610b18048aab260009ea8bd7",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20d16bf84855a680f9160",
					"60e1d9c7bf84855a680f8eff",
					"60e20c63bf84855a680f9156",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "7UCO43w5qys",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610b184a9bbc800008eaf0b1",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20a9ebf84855a680f90f8",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b18878aab260009ea8bfb",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e1d9c7bf84855a680f8eff",
					"60e1def4bf84855a680f8f99",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "k7Cg7Ss68Jo"
				}
			},
			{
				_id: "610b18ca9bbc800008eaf0d9",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da66bf84855a680f8f25",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "JaglYjiSvlc"
				}
			},
			{
				_id: "610b191d8aab260009ea8c29",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d8b0bf84855a680f8ee3",
					"60e1da62bf84855a680f8f23",
					"60e1da40bf84855a680f8f19",
					"60e1da77bf84855a680f8f27",
					"60e1d885bf84855a680f8edd"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "FFa6k542ApQ"
				}
			},
			{
				_id: "610b196f8aab260009ea8c3f",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e3d0ee8a26dd1acccc5c3f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "WWfMiKYvR-g"
				}
			},
			{
				_id: "610b19cb8aab260009ea8c52",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e1d877bf84855a680f8ed9",
					"60e3d5f08a26dd1acccc5c8f",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b",
					"60e3d0ee8a26dd1acccc5c3f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "iwfJJeRkHvk"
				}
			},
			{
				_id: "610b1b0b8aab260009ea8c82",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1daaebf84855a680f8f33"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "eGfcbl_ZTQ8"
				}
			},
			{
				_id: "610b1be506e6250008218681",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1dac1bf84855a680f8f3b",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "WeuhX-9JiM4"
				}
			},
			{
				_id: "610b1c6206e6250008218692",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "zDcyaJ5EMRs"
				}
			},
			{
				_id: "610b1cb09bbc800008eaf157",
				baseId: "60df6050bf84855a680f894d",
				options: [
					"60e3e29d8a26dd1acccc5eda",
					"60e3e3158a26dd1acccc5ef6",
					"60e20f2fbf84855a680f91bc",
					"60df7454bf84855a680f8aa1",
					"60e1dac7bf84855a680f8f3d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610b1ced06e62500082186b2",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e1da5cbf84855a680f8f21",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "tBNbsxk-S-g",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610b1d389bbc800008eaf176",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d98fbf84855a680f8ef1",
					"60df738dbf84855a680f8a85",
					"60e38933bf84855a680f9d60"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "HglaYKUtkLo"
				}
			},
			{
				_id: "610b1d8006e62500082186b9",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d98fbf84855a680f8ef1",
					"60df738dbf84855a680f8a85",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "PlEe1dzKL7Q"
				}
			},
			{
				_id: "610e9e0fa9846a0009d228f4",
				baseId: "6109bb97ec0dea4e34958025",
				options: [
					"61099cd256bb294be45a7e24",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37d76bf84855a680f9c02"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6116c0d1f5b86c0008e54bf6",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"61161a8a147d3f4f203722c0",
					"61161ad2147d3f4f203722c8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "ccbJdYLYh4M",
					tiktokId: ""
				}
			},
			{
				_id: "612cd04de22192000910b386",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1dac1bf84855a680f8f3b",
					"60e1de7bbf84855a680f8f89",
					"60f0b3671d00452cd0554206",
					"60f0b3191d00452cd0554200",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Y2jDEWsGMHo",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61322d1b9c2be9000968e51f",
				baseId: "60df5d75bf84855a680f8930",
				options: [
					"60e3d81e8a26dd1acccc5cff",
					"60e3d7668a26dd1acccc5ce7",
					"60e1d997bf84855a680f8ef3",
					"60e1e8c5bf84855a680f903c",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61604ffec30921000948644a",
				baseId: "60df5c3ebf84855a680f8926",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3ccda8a26dd1acccc5b82",
					"60df73b1bf84855a680f8a89",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61b1326eb1c9f20009b9d0cc",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10658cbb40a531ccf0599",
					"61b1081bcbb40a531ccf061b",
					"61b2442c76830d4150677da2",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b133be31dbb400095b948f",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10708cbb40a531ccf05c1",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d87cbb40a531ccf0700",
					"61b10e49cbb40a531ccf0752",
					"61b10e23cbb40a531ccf0740",
					"61b291a176830d4150678716",
					"61b10853cbb40a531ccf0631",
					"61b2936d76830d4150678744",
					"61b103efcbb40a531ccf050d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b137e40b13e7000863441e",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b104dfcbb40a531ccf0551",
					"61b10371cbb40a531ccf04e5",
					"61b107b0cbb40a531ccf05f7",
					"61b10708cbb40a531ccf05c1",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b",
					"61b10bddcbb40a531ccf068a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b13d6f6d57fa000899536c",
				baseId: "61b1145ecbb40a531ccf0774",
				options: [
					"61b10ddccbb40a531ccf0720",
					"61b10e49cbb40a531ccf0752",
					"61b10468cbb40a531ccf0531",
					"61b106edcbb40a531ccf05b9",
					"61b1071fcbb40a531ccf05c7",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d87cbb40a531ccf0700",
					"61b13da5878e37564483ddd8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b142a6e6f2390008fcfa89",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10383cbb40a531ccf04eb",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10735cbb40a531ccf05cf",
					"61b107f7cbb40a531ccf060d",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d94cbb40a531ccf0706",
					"61b10e49cbb40a531ccf0752",
					"61b10dc2cbb40a531ccf0710",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b1f9c8225e650008f84241",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10452cbb40a531ccf052b",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2739676830d4150678245",
					"61b226a976830d4150677d17",
					"61b2442c76830d4150677da2",
					"61b134c01ede1b55003fd164"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b37bdd6569e90009a7274f",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b106e7cbb40a531ccf05b7",
					"61b10725cbb40a531ccf05c9",
					"61b10868cbb40a531ccf0639",
					"61b10d75cbb40a531ccf06f6",
					"61b10e09cbb40a531ccf0734",
					"61b2d10376830d41506790b6",
					"61b23e0d76830d4150677d54",
					"61b10dd1cbb40a531ccf071b",
					"61b10cdfcbb40a531ccf06ea",
					"61b10419cbb40a531ccf0517"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b4a99d8e99dd000871ea21",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b2a97676830d4150678ba8",
					"61b10371cbb40a531ccf04e5",
					"61b2aa9876830d4150678bca",
					"61b10708cbb40a531ccf05c1",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b10452cbb40a531ccf052b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b4aa4bbcddd700098b65f6",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b103d2cbb40a531ccf0505",
					"61b10468cbb40a531ccf0531",
					"61b1072acbb40a531ccf05cb",
					"61b10e49cbb40a531ccf0752",
					"61b10c72cbb40a531ccf06c2",
					"61b10d75cbb40a531ccf06f6",
					"61b10db7cbb40a531ccf070a",
					"61b295f976830d41506787c2",
					"61b2971776830d41506787e2",
					"61b10cdfcbb40a531ccf06ea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b61583e69260000a098299",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b106e1cbb40a531ccf05b5",
					"61b103dbcbb40a531ccf0507",
					"61b1088dcbb40a531ccf0643",
					"61b1072acbb40a531ccf05cb",
					"61b10b81cbb40a531ccf0668",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10df1cbb40a531ccf0728",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b61aa14a6a51000824c19e",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b107c2cbb40a531ccf05fd",
					"61b10468cbb40a531ccf0531",
					"61b10685cbb40a531ccf05a3",
					"61b1072acbb40a531ccf05cb",
					"61b10e49cbb40a531ccf0752",
					"61b10d78cbb40a531ccf06f8",
					"61b10db7cbb40a531ccf070a",
					"61b2872a76830d4150678515",
					"61b103d2cbb40a531ccf0505"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b8a5f68d62660009a51ca4",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10452cbb40a531ccf052b",
					"61b10708cbb40a531ccf05c1",
					"61b2831176830d4150678460",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b2442c76830d4150677da2",
					"61b2820e76830d4150678440",
					"61b283c976830d4150678476",
					"61b10cdfcbb40a531ccf06ea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c1fd228a816f0009ef1e68",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2b23b76830d4150678d1d",
					"61b2b33576830d4150678d37",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b2b3ad76830d4150678d43",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c5d1fefde65400095614b0",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2724376830d415067822b",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b10d87cbb40a531ccf0700",
					"61b2749b76830d415067825f",
					"61b10cd6cbb40a531ccf06e6",
					"61b10ddccbb40a531ccf0720",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d08499a1d7da0008c8af2c",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b10363cbb40a531ccf04e1",
					"61b10419cbb40a531ccf0517",
					"61b1063ecbb40a531ccf0591",
					"61b1073fcbb40a531ccf05d3",
					"61b10d75cbb40a531ccf06f6",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e05cbb40a531ccf0732",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d46576a4865200081f66da",
				baseId: "61b1151acbb40a531ccf077c",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b1068acbb40a531ccf05a5",
					"61b103dbcbb40a531ccf0507",
					"61b10853cbb40a531ccf0631",
					"61b10cf0cbb40a531ccf06f0",
					"61b10d87cbb40a531ccf0700",
					"61b10dbbcbb40a531ccf070c",
					"61b10e49cbb40a531ccf0752",
					"61b2a78f76830d4150678b39"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "cp5OhFQHwSfwuQdFjEPbPleRuNu2", role: "Owner" }],
		createdDate: "2021-08-04T20:36:09.885Z",
		displayName: "Symfuhny",
		urlSafeName: "Symfuhny",
		__v: 0,
		previousUpdater: "Adam",
		overlay: {
			textColorPrimary: "#ffffff",
			textColorAccent: "#9B9B9B",
			backgroundColorSecondary: "#2F2F31",
			backgroundColorPrimary: "#636363",
			textColorSecondary: "#2F2F31"
		}
	},
	{
		_id: "6147b784e9be480008b1f000",
		meta: {
			hasProfileImage: true,
			profileImage: "6147b784e9be480008b1f000",
			links: {
				twitch: "https://www.twitch.tv/diazbiffle",
				youtube: "https://www.youtube.com/c/DiazBiffle",
				instagram: "https://www.instagram.com/diazbiffle/?hl=en",
				discord: "https://discord.gg/Fwv58GXPQd",
				twitter: "https://twitter.com/DiazBiffle",
				tiktok: "https://www.tiktok.com/@diazbiffle?"
			}
		},
		viewCount: 76789,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "6147b88e1e939c0008ebce92",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1def0bf84855a680f8f97",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff",
					"60e1deb3bf84855a680f8f91"
				],
				userData: {
					customTitle: "AR build",
					blueprint: "",
					featured: false,
					youtubeURL: "EOBMQhyvUOA",
					tiktokId: ""
				}
			},
			{
				_id: "6147bf7f1e939c0008ebd08e",
				baseId: "60df4977bf84855a680f88ea",
				options: [
					"60e3524fbf84855a680f9671",
					"60e360ddbf84855a680f98d1",
					"60e1e63dbf84855a680f8fb9",
					"60e360ffbf84855a680f98d5",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "QofiqzwNGcM",
					tiktokId: ""
				}
			},
			{
				_id: "6147c181e9be480008b1f26a",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509",
					"60df74dcbf84855a680f8abb",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147c24be9be480008b1f2b0",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e1e8ecbf84855a680f903e",
					"60e3d5f08a26dd1acccc5c8f",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "tSWM-KC24Wc",
					tiktokId: ""
				}
			},
			{
				_id: "6147c29ee9be480008b1f2c2",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df7471bf84855a680f8aa5",
					"60e3a54a8a26dd1acccc59a0",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "1GVxa8uDmnk",
					tiktokId: ""
				}
			},
			{
				_id: "6147c61ae9be480008b1f393",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1ded1bf84855a680f8f95",
					"60e1dac1bf84855a680f8f3b",
					"60e1e464bf84855a680f8f9d",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "SMG build",
					blueprint: "",
					featured: false,
					youtubeURL: "Gn-WfW76Z9Y",
					tiktokId: ""
				}
			},
			{
				_id: "6147c6d7e9be480008b1f3e1",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e1e4d7bf84855a680f8fad",
					"60e3629fbf84855a680f991f",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "U_5JdPt6YgQ",
					tiktokId: ""
				}
			},
			{
				_id: "6147c7de0d85200009afaa66",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1e8ecbf84855a680f903e",
					"60e382b9bf84855a680f9c50",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "qSDr4m92kPg",
					tiktokId: ""
				}
			},
			{
				_id: "6147c875e9be480008b1f435",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2248abf84855a680f937e",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "LIsUyV7TL00",
					tiktokId: ""
				}
			},
			{
				_id: "6147c96d0d85200009afaace",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cf768a26dd1acccc5be7",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "OjLMEgJdOUo",
					tiktokId: ""
				}
			},
			{
				_id: "6147c9c40d85200009afaae0",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e3f1338a26dd1acccc619e",
					"60e3f6a88a26dd1acccc627c",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "1bMZX06m12M",
					tiktokId: ""
				}
			},
			{
				_id: "6147cb9097d31700093211e9",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d9c7bf84855a680f8eff",
					"61161ad2147d3f4f203722c8",
					"60e1d885bf84855a680f8edd",
					"60e1da62bf84855a680f8f23",
					"61161a8a147d3f4f203722c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "w1a6DUWWpkg",
					tiktokId: ""
				}
			},
			{
				_id: "6147cc8b0d85200009afab56",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60df74dcbf84855a680f8abb",
					"60df73cbbf84855a680f8a8d",
					"60df738dbf84855a680f8a85",
					"60df7280bf84855a680f8a55",
					"60e3429cbf84855a680f94f7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147ccf50d85200009afab6e",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e20849bf84855a680f90a0",
					"60e1ee63bf84855a680f909a",
					"60e1d9c7bf84855a680f8eff",
					"60e1def4bf84855a680f8f99"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "j0mqoPNYZ2s",
					tiktokId: ""
				}
			},
			{
				_id: "6147cd52e9be480008b1f579",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1d8d9bf84855a680f8ee9",
					"60e1da40bf84855a680f8f19",
					"60e1da8bbf84855a680f8f2d",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "s0tz3hfDjJc",
					tiktokId: ""
				}
			},
			{
				_id: "6147cdc697d317000932123a",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60df74dcbf84855a680f8abb",
					"60df7279bf84855a680f8a53",
					"60e37347bf84855a680f9a78",
					"60df73cbbf84855a680f8a8d",
					"60e37356bf84855a680f9a7a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147ce290d85200009afabd6",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e1d99ebf84855a680f8ef5",
					"60df738dbf84855a680f8a85",
					"60e38ce2bf84855a680f9d9d",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147ce730d85200009afac03",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df7471bf84855a680f8aa5",
					"60e22060bf84855a680f9304",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "6VnTaDY7FGY",
					tiktokId: ""
				}
			},
			{
				_id: "6147cf1797d31700093212bc",
				baseId: "60ded203bf84855a680f8883",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e360ffbf84855a680f98d5",
					"60e1d997bf84855a680f8ef3",
					"60e1dac1bf84855a680f8f3b",
					"60e1e8c5bf84855a680f903c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "qpc0fsOxC8Q",
					tiktokId: ""
				}
			},
			{
				_id: "6147cf7c0d85200009afac66",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7280bf84855a680f8a55",
					"60e3defd8a26dd1acccc5e41",
					"60df732abf84855a680f8a73",
					"60df749dbf84855a680f8aad",
					"60e3da9d8a26dd1acccc5d59"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "P3OYLs_KJM8",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6147d00a97d31700093212f2",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7471bf84855a680f8aa5",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "C4yVvftT5Lk",
					tiktokId: ""
				}
			},
			{
				_id: "6147d0530d85200009afacb3",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20d16bf84855a680f9160",
					"60e20c2abf84855a680f914e",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "lBuX9H7cFUI",
					tiktokId: ""
				}
			},
			{
				_id: "6147d15b97d317000932135f",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e3524fbf84855a680f9671",
					"60e359eabf84855a680f97b1",
					"60e1e464bf84855a680f8f9d",
					"60e1dabbbf84855a680f8f39",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "8KWEoRspjjg",
					tiktokId: ""
				}
			},
			{
				_id: "6147d1fe4c3ce40008c17855",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7471bf84855a680f8aa5",
					"60e1cf1cbf84855a680f8d97",
					"60df73b1bf84855a680f8a89",
					"60df7298bf84855a680f8a59"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "1nLoH1EQXgw",
					tiktokId: ""
				}
			},
			{
				_id: "6147d2704c3ce40008c17884",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "70Fb8sP8dzc",
					tiktokId: ""
				}
			},
			{
				_id: "6147d325d93a8200084331f7",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df73b1bf84855a680f8a89",
					"60df84aabf84855a680f8c6a",
					"60df7471bf84855a680f8aa5",
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "kV7spbK0t60",
					tiktokId: ""
				}
			},
			{
				_id: "6147d3b30d85200009afad42",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da3bbf84855a680f8f17",
					"60e356a2bf84855a680f9705",
					"60e35580bf84855a680f96f7",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "fbNp1bFy3sg",
					tiktokId: ""
				}
			},
			{
				_id: "6147d4400d85200009afad65",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1dac1bf84855a680f8f3b",
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e4ae5ce580dd3004e5dae0",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "euOWRY5EAe4",
					tiktokId: ""
				}
			},
			{
				_id: "6147d48cd93a820008433247",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "l2cSgjwBuJw",
					tiktokId: ""
				}
			},
			{
				_id: "6147d4f30d85200009afad9d",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb",
					"60df73cbbf84855a680f8a8d",
					"60df7279bf84855a680f8a53"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "_J-bxMAxQxE",
					tiktokId: ""
				}
			},
			{
				_id: "6147d57cd93a82000843329b",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df73cbbf84855a680f8a8d",
					"60df7280bf84855a680f8a55",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "igWd_LR_zFw",
					tiktokId: ""
				}
			},
			{
				_id: "6147d5ed4c3ce40008c178e9",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e35908bf84855a680f9759",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "SMG build",
					blueprint: "",
					featured: false,
					youtubeURL: "tNy-b4g1sCc",
					tiktokId: ""
				}
			},
			{
				_id: "6147d63e4c3ce40008c17904",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e357f1bf84855a680f9751",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "AR build",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147d6f14c3ce40008c1796f",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60e1dac1bf84855a680f8f3b",
					"60f0b3671d00452cd0554206",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "nJlnUcqDLg8",
					tiktokId: ""
				}
			},
			{
				_id: "6147d753b785260009587d79",
				baseId: "60ded588bf84855a680f88a1",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7e79bf84855a680f8c16",
					"60df72b5bf84855a680f8a5d",
					"60df73b1bf84855a680f8a89",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147d79a4c3ce40008c179b3",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e38f8cbf84855a680f9e1d",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e38fa4bf84855a680f9e21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147d7d2d93a82000843331f",
				baseId: "60df4ac6bf84855a680f88f6",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37588bf84855a680f9ac5",
					"60df7280bf84855a680f8a55",
					"60df749dbf84855a680f8aad",
					"60e375adbf84855a680f9ac9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "2ql5z1lZpJs",
					tiktokId: ""
				}
			},
			{
				_id: "6147d842d93a820008433378",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60e3c8508a26dd1acccc5af1",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147d89e4c3ce40008c17a18",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e1e4d7bf84855a680f8fad",
					"60e353b4bf84855a680f9693"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "MqERtVGqcU4",
					tiktokId: ""
				}
			},
			{
				_id: "6147d919b785260009587dd8",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60df749dbf84855a680f8aad",
					"60e39325bf84855a680f9e75"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "wCfSTzUFk0s",
					tiktokId: ""
				}
			},
			{
				_id: "6147d9ef4c3ce40008c17a7f",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60e213f9bf84855a680f92a9",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3",
					"60df7203bf84855a680f8a49",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "uHeeKK3KiMw",
					tiktokId: ""
				}
			},
			{
				_id: "6147db604c3ce40008c17b12",
				baseId: "60df5accbf84855a680f8918",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e39fc9bf84855a680fa114",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "xWEUuRXOIEY",
					tiktokId: ""
				}
			},
			{
				_id: "6147dbf2b785260009587ed4",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df71f7bf84855a680f8a45",
					"60df7280bf84855a680f8a55",
					"60e3e1b98a26dd1acccc5e9e",
					"60e3e1478a26dd1acccc5e9a",
					"60e3e0938a26dd1acccc5e8c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147dc334c3ce40008c17bb3",
				baseId: "60df619dbf84855a680f8959",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ed2d8a26dd1acccc60e8",
					"60df7280bf84855a680f8a55",
					"60e3ed588a26dd1acccc60f0",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "DjcCFcswkXU",
					tiktokId: ""
				}
			},
			{
				_id: "6147dc60b785260009587f1a",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "RYY9Z2LhzqY",
					tiktokId: ""
				}
			},
			{
				_id: "6147dce54bd2e2000893d790",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60df7280bf84855a680f8a55",
					"60e3feb38a26dd1acccc6426",
					"60e3fedd8a26dd1acccc6430"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147ddc74bd2e2000893d825",
				baseId: "60df4b65bf84855a680f88fc",
				options: [
					"60e37babbf84855a680f9bac",
					"60df73cbbf84855a680f8a8d",
					"60e37bdcbf84855a680f9bb0",
					"60df738dbf84855a680f8a85",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6147de48b78526000958801a",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20df9bf84855a680f919e",
					"60e20d16bf84855a680f9160",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "fiyFXnb5k5U",
					tiktokId: ""
				}
			},
			{
				_id: "61610ecff02344000905baf0",
				baseId: "60df5c3ebf84855a680f8926",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3ccda8a26dd1acccc5b82",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "616e4cb4f23711000842f568",
				baseId: "60df5ce4bf84855a680f892a",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e4b0a1e580dd3004e5db40",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61710207cbd6d0000824193f",
				baseId: "60df6610bf84855a680f8978",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e3f3c98a26dd1acccc6206",
					"60e1d997bf84855a680f8ef3",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b51f1b1a9bac00086ed9f9",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b134c01ede1b55003fd164",
					"61b10371cbb40a531ccf04e5",
					"61b2261476830d4150677d15",
					"61b226a976830d4150677d17",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d87cbb40a531ccf0700",
					"61b10e15cbb40a531ccf0738",
					"61b10dd1cbb40a531ccf071b",
					"61b1072acbb40a531ccf05cb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b5206b35da7c00087bd60b",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b1041fcbb40a531ccf0519",
					"61b104dfcbb40a531ccf0551",
					"61b10371cbb40a531ccf04e5",
					"61b107a7cbb40a531ccf05f3",
					"61b10708cbb40a531ccf05c1",
					"61b10bd8cbb40a531ccf0688",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b5218b1e7e9e0008987082",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b106e1cbb40a531ccf05b5",
					"61b103dbcbb40a531ccf0507",
					"61b10806cbb40a531ccf0613",
					"61b10708cbb40a531ccf05c1",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b52304fdd15c00093fb3ec",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10383cbb40a531ccf04eb",
					"61b10853cbb40a531ccf0631",
					"61b1072acbb40a531ccf05cb",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d94cbb40a531ccf0706",
					"61b10e27cbb40a531ccf0742",
					"61b10dd1cbb40a531ccf071b",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6b2172bd81600095d441a",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2820e76830d4150678440",
					"61b10371cbb40a531ccf04e5",
					"61b282e476830d4150678458",
					"61b10708cbb40a531ccf05c1",
					"61b283c976830d4150678476",
					"61b2841a76830d415067847e",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c29630e70a5600086bc2ee",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2b24a76830d4150678d21",
					"61b23e0d76830d4150677d54",
					"61b2b33576830d4150678d37",
					"61b2b3ad76830d4150678d43",
					"61b10d94cbb40a531ccf0706",
					"61b10725cbb40a531ccf05c9",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071b",
					"61b10e23cbb40a531ccf0740"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61dd02e48f4d7c0009c121ea",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2927676830d415067872a",
					"61b10708cbb40a531ccf05c1",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e23cbb40a531ccf0740",
					"61b291a176830d4150678716",
					"61b10853cbb40a531ccf0631",
					"61b2936d76830d4150678744",
					"61b10d87cbb40a531ccf0700",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e24333ce5de20013f33253",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b2a97676830d4150678ba8",
					"61b1044dcbb40a531ccf0529",
					"61b103dbcbb40a531ccf0507",
					"61b2aa9876830d4150678bca",
					"61b1072acbb40a531ccf05cb",
					"61b2aaf976830d4150678bd8",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b",
					"61b10e23cbb40a531ccf0740",
					"61b10cdfcbb40a531ccf06ea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e2468dce5de20013f3368d",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b295f976830d41506787c2",
					"61b103d2cbb40a531ccf0505",
					"61b296f976830d41506787dc",
					"61b10e49cbb40a531ccf0752",
					"61b10dd1cbb40a531ccf071a",
					"61b10cdbcbb40a531ccf06e8",
					"61b1072acbb40a531ccf05cb",
					"61b10c72cbb40a531ccf06c2",
					"61b10d90cbb40a531ccf0704"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "IiTpYFhuwzOGoxTYWVLqVbiRvDG3", role: "Owner" }],
		createdDate: "2021-09-19T22:19:48.562Z",
		displayName: "DiazBiffle",
		urlSafeName: "DiazBiffle",
		__v: 0,
		previousUpdater: "ItzJoshdude"
	},
	{
		_id: "610f7ea245ca600008426c66",
		meta: {
			hasProfileImage: true,
			profileImage: "610f7ea245ca600008426c66",
			links: {
				discord: "https://discord.gg/ADISBAK",
				tiktok: "https://www.tiktok.com/@adisbakofficial",
				twitch: "https://www.twitch.tv/adisbak",
				instagram: "https://www.instagram.com/adisbakofficial",
				youtube: "https://www.youtube.com/adisbak"
			},
			youtubeAutoplay: false,
			premiumType: "premium",
			brandColors: { primary: "#ffffff" }
		},
		viewCount: 21266,
		games: [
			{
				id: "60da97598821ed46dc9c008c",
				commandString:
					"!cmd add !{{weapon name}} Jak mám postavený {{weapon name}} ➡ {{link}}"
			}
		],
		kits: [
			{
				_id: "6117a070afe4fc0008412289",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1dac1bf84855a680f8f3b",
					"60e1de7bbf84855a680f8f89",
					"60e1d98fbf84855a680f8ef1",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "Diamond",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6117fc4c1c3908000806ae6f",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd",
					"61161ad2147d3f4f203722c8",
					"61161a8a147d3f4f203722c0"
				],
				userData: {
					customTitle: "",
					blueprint: "Geomatik",
					featured: false,
					youtubeURL: "SwQt0vUdey4",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6118217cbb91f300088a70ef",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60f0b3671d00452cd0554206",
					"60f0b3191d00452cd0554200",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "Undercover Agent",
					featured: false,
					youtubeURL: "HCRQz0WyW54?t=234",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6127c168aa869900081371c9",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1dac1bf84855a680f8f3b",
					"60e1e464bf84855a680f8f9d",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "Sniper support",
					blueprint: "Cursed Angel",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61433d59bc1faa00088e5767",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e464bf84855a680f8f9d",
					"60e1deb3bf84855a680f8f91",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97"
				],
				userData: {
					customTitle: "Long Range",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6153296b8c5a890009828037",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1d885bf84855a680f8edd",
					"60e35c3abf84855a680f981b",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "Paint Blaster",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "615455f6369db200093e59c7",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e20d16bf84855a680f9160",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "White Rabbit",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b345486bda6e00082daf2d",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b103efcbb40a531ccf050d",
					"61b1072acbb40a531ccf05cb",
					"61b134c01ede1b55003fd164",
					"61b2739676830d4150678245",
					"61b226a976830d4150677d17",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b37c869e79ea000801289a",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10371cbb40a531ccf04e5",
					"61b10708cbb40a531ccf05c1",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e23cbb40a531ccf0740",
					"61b10e49cbb40a531ccf0752",
					"61b10d87cbb40a531ccf0700",
					"61b293f076830d415067874a",
					"61b10853cbb40a531ccf0631",
					"61b291a176830d4150678716"
				],
				userData: {
					customTitle: "HIPFIRE",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b38970a88be100088aac5f",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10cdfcbb40a531ccf06ea",
					"61b10708cbb40a531ccf05c1",
					"61b10452cbb40a531ccf052b",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b10371cbb40a531ccf04e5",
					"61b2b23b76830d4150678d1d",
					"61b2b33576830d4150678d37",
					"61b2b3ad76830d4150678d43"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3a6da716bf30008350af3",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b1037dcbb40a531ccf04e9",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10735cbb40a531ccf05cf",
					"61b107f7cbb40a531ccf060d",
					"61b28b7476830d41506785a6",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d94cbb40a531ccf0706",
					"61b10e49cbb40a531ccf0752",
					"61b10e27cbb40a531ccf0742"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3a7ed5e14ba000983d068",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10446cbb40a531ccf0527",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b1086fcbb40a531ccf063b",
					"61b106e1cbb40a531ccf05b5",
					"61b10e15cbb40a531ccf0738",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b4a4efda229700094ba8b1",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1071acbb40a531ccf05c5",
					"61b10cdfcbb40a531ccf06ea",
					"61b10868cbb40a531ccf0639",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071b",
					"61b10e09cbb40a531ccf0734",
					"61b106e7cbb40a531ccf05b7",
					"61b1046ecbb40a531ccf0533",
					"61b23e0d76830d4150677d54",
					"61b2d10376830d41506790b6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "59IUKnBaZbw",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b652b7c9779d00083d7e1a",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2a97676830d4150678ba8",
					"61b10345cbb40a531ccf04df",
					"61b2aa9876830d4150678bca",
					"61b1072acbb40a531ccf05cb",
					"61b2aaf976830d4150678bd8",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b",
					"61b10e23cbb40a531ccf0740",
					"61b10cdfcbb40a531ccf06ea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "ho2Gpdii4dE&t",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bcb9a439e16b0008fccd79",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b10bddcbb40a531ccf068a",
					"61b107a7cbb40a531ccf05f3",
					"61b104dfcbb40a531ccf0551"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bd9f95ee64d4000892bb21",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b2820e76830d4150678440",
					"61b10452cbb40a531ccf052b",
					"61b1072acbb40a531ccf05cb",
					"61b103efcbb40a531ccf050d",
					"61b10dd1cbb40a531ccf071b",
					"61b10d94cbb40a531ccf0706",
					"61b10de0cbb40a531ccf0722",
					"61b10cdfcbb40a531ccf06ea",
					"61b283c976830d4150678476",
					"61b282e476830d4150678458"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bda07da6ee270008cdb606",
				baseId: "61b114f0cbb40a531ccf077a",
				options: [
					"61b1040ecbb40a531ccf0513",
					"61b1068acbb40a531ccf05a5",
					"61b2a40076830d4150678a8d",
					"61b2a47e76830d4150678a9f",
					"61b10d87cbb40a531ccf0700",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b10cdbcbb40a531ccf06e8",
					"61b1073fcbb40a531ccf05d3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d589179778630007e65f70",
				baseId: "61b115dbcbb40a531ccf0784",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b103efcbb40a531ccf050d",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2bc5876830d4150678df0",
					"61b2bb9876830d4150678dd8",
					"61b2badd76830d4150678dc8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d715ceef6bf60009de24aa",
				baseId: "61b1151acbb40a531ccf077c",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b10dbbcbb40a531ccf070c",
					"61b10e49cbb40a531ccf0752",
					"61b10d87cbb40a531ccf0700",
					"61b10853cbb40a531ccf0631",
					"61b1068acbb40a531ccf05a5",
					"61b10ce6cbb40a531ccf06ec"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61dfe5bd394ecc00135f7f12",
				baseId: "61dfd74a4656770013ed3681",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1072acbb40a531ccf05cb",
					"61b10dd8cbb40a531ccf071e",
					"61b10e49cbb40a531ccf0752",
					"61b10d94cbb40a531ccf0706",
					"61dfd58f4656770013ed367b",
					"61b2a6e676830d4150678b1f",
					"61dfd47c4656770013ed366d",
					"61b10cdbcbb40a531ccf06e8"
				],
				userData: {
					customTitle: "",
					blueprint: "Heliox",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "HkEtHzIthGSSuEoBITXR83ITj1t2", role: "Owner" },
			{ uid: "nJWEYY2kSHdRXwQXracI3tTSpdm2", role: "Administrator" },
			{ uid: "Q8K2Lc1QkHZp5H0wWKn97V3KaJ52", role: "Administrator" },
			{ uid: "QAmiw7ybvbOaOB4lC6cxcUdyVTA3", role: "Administrator" }
		],
		createdDate: "2021-08-08T06:50:10.634Z",
		displayName: "adisbak",
		urlSafeName: "adisbak",
		__v: 0,
		previousUpdater: "AdisBak",
		overlay: {
			backgroundColorPrimary: "#dc2149",
			textColorPrimary: "#ffffff",
			textColorSecondary: "#2F2F31",
			textColorAccent: "#9B9B9B",
			backgroundColorSecondary: "#0c032e",
			primaryKit: {
				_id: "61b38970a88be100088aac5f",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					{
						_id: "61b10cdfcbb40a531ccf06ea",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Ammo Type",
						displayName: "Lengthened",
						__v: 0
					},
					{
						_id: "61b10708cbb40a531ccf05c1",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Underbarrel",
						displayName: "Carver Foregrip",
						__v: 0
					},
					{
						_id: "61b10452cbb40a531ccf052b",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Muzzle",
						displayName: "MX Silencer",
						__v: 0
					},
					{
						_id: "61b2442c76830d4150677da2",
						displayName: "Polymer Grip",
						slotKey: "Rear Grip",
						gameId: "60da97598821ed46dc9c008c",
						__v: 0
					},
					{
						_id: "61b10e23cbb40a531ccf0740",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Perk 1",
						displayName: "Tight Grip",
						__v: 0
					},
					{
						_id: "61b10dd1cbb40a531ccf071b",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Perk 2",
						displayName: "Fully Loaded",
						__v: 0
					},
					{
						_id: "61b10371cbb40a531ccf04e5",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Optic",
						displayName: "G16 2.5x",
						__v: 0
					},
					{
						_id: "61b2b23b76830d4150678d1d",
						displayName: "Queen's 705mm Royal",
						slotKey: "Barrel",
						gameId: "60da97598821ed46dc9c008c",
						__v: 0
					},
					{
						_id: "61b2b33576830d4150678d37",
						displayName: "Hockenson SP2B",
						slotKey: "Stock",
						gameId: "60da97598821ed46dc9c008c",
						__v: 0
					},
					{
						_id: "61b2b3ad76830d4150678d43",
						displayName: "6.5 Sakura 40 Round Mags",
						slotKey: "Magazine",
						gameId: "60da97598821ed46dc9c008c",
						__v: 0
					}
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				},
				base: {
					commandCodes: ["bren"],
					_id: "61b115adcbb40a531ccf0782",
					displayName: "Bren",
					gameId: "60da97598821ed46dc9c008c",
					image: "/warzone/bren.png",
					gameInfo: {
						blurb:
							"Full-auto LMG with accurate initial fire. Recoil becomes difficult to control with sustained fire.",
						stats: {
							accuracy: 48,
							range: 77,
							mobility: 53,
							damage: 74,
							fireRate: 64,
							control: 70
						},
						maxOptions: 10,
						availableOptions: [
							{ orderPlacement: "4", optionId: "61b10446cbb40a531ccf0527" },
							{ orderPlacement: "3", optionId: "61b1042acbb40a531ccf051d" },
							{ orderPlacement: "1", optionId: "61b1044dcbb40a531ccf0529" },
							{ orderPlacement: "2", optionId: "61b251fd76830d4150678027" },
							{ orderPlacement: "5", optionId: "61b10468cbb40a531ccf0531" },
							{ orderPlacement: "7", optionId: "61b1041fcbb40a531ccf0519" },
							{ orderPlacement: "1", optionId: "61b2b22876830d4150678d19" },
							{ orderPlacement: "6", optionId: "61b10452cbb40a531ccf052b" },
							{ orderPlacement: "2", optionId: "61b2b23b76830d4150678d1d" },
							{ orderPlacement: "4", optionId: "61b2b24a76830d4150678d21" },
							{ orderPlacement: "1", optionId: "61b103cbcbb40a531ccf0503" },
							{ orderPlacement: "3", optionId: "61b2b24276830d4150678d1f" },
							{ orderPlacement: "2", optionId: "61b10371cbb40a531ccf04e5" },
							{ orderPlacement: "3", optionId: "61b103adcbb40a531ccf04f9" },
							{ orderPlacement: "5", optionId: "61b103d2cbb40a531ccf0505" },
							{ orderPlacement: "4", optionId: "61b103e9cbb40a531ccf050b" },
							{ orderPlacement: "6", optionId: "61b23c8976830d4150677d3c" },
							{ orderPlacement: "7", optionId: "61b10363cbb40a531ccf04e1" },
							{ orderPlacement: "8", optionId: "61b103c5cbb40a531ccf0501" },
							{ orderPlacement: "11", optionId: "61b1039acbb40a531ccf04f3" },
							{ orderPlacement: "10", optionId: "61b23ddc76830d4150677d50" },
							{ orderPlacement: "9", optionId: "61b1038fcbb40a531ccf04ef" },
							{ orderPlacement: "12", optionId: "61b23c4f76830d4150677d36" },
							{ orderPlacement: "13", optionId: "61b103b8cbb40a531ccf04fd" },
							{ orderPlacement: "14", optionId: "61b103e2cbb40a531ccf0509" },
							{ orderPlacement: "15", optionId: "61b103a1cbb40a531ccf04f5" },
							{ orderPlacement: "16", optionId: "61b23e0d76830d4150677d54" },
							{ orderPlacement: "17", optionId: "61b103efcbb40a531ccf050d" },
							{ orderPlacement: "19", optionId: "61b23d3776830d4150677d48" },
							{ orderPlacement: "18", optionId: "61b103dbcbb40a531ccf0507" },
							{ orderPlacement: "20", optionId: "61b103c0cbb40a531ccf04ff" },
							{ orderPlacement: "1", optionId: "61b2b32176830d4150678d33" },
							{ orderPlacement: "3", optionId: "61b10853cbb40a531ccf0631" },
							{ orderPlacement: "22", optionId: "61b2b2f676830d4150678d2d" },
							{ orderPlacement: "2", optionId: "61b2b33576830d4150678d37" },
							{ orderPlacement: "21", optionId: "61b2b2f376830d4150678d2b" },
							{ orderPlacement: "4", optionId: "61b2b34176830d4150678d39" },
							{ orderPlacement: "5", optionId: "61b2b34976830d4150678d3b" },
							{ orderPlacement: "3", optionId: "61b1073fcbb40a531ccf05d3" },
							{ orderPlacement: "1", optionId: "61b10708cbb40a531ccf05c1" },
							{ orderPlacement: "4", optionId: "61b1071acbb40a531ccf05c5" },
							{ orderPlacement: "2", optionId: "61b10725cbb40a531ccf05c9" },
							{ orderPlacement: "5", optionId: "61b10711cbb40a531ccf05c3" },
							{ orderPlacement: "6", optionId: "60df7454bf84855a680f8aa1" },
							{ orderPlacement: "7", optionId: "61b10735cbb40a531ccf05cf" },
							{ orderPlacement: "2", optionId: "61b10bd8cbb40a531ccf0688" },
							{ orderPlacement: "1", optionId: "61b2b3ad76830d4150678d43" },
							{ orderPlacement: "8", optionId: "61b1072acbb40a531ccf05cb" },
							{ orderPlacement: "3", optionId: "61b2b3e576830d4150678d49" },
							{ orderPlacement: "4", optionId: "61b2b3f276830d4150678d4d" },
							{ orderPlacement: "1", optionId: "61b10ccecbb40a531ccf06e2" },
							{ orderPlacement: "4", optionId: "61b10cdbcbb40a531ccf06e8" },
							{ orderPlacement: "3", optionId: "61b10cc6cbb40a531ccf06de" },
							{ orderPlacement: "2", optionId: "61b10cf5cbb40a531ccf06f2" },
							{ orderPlacement: "5", optionId: "61b10cd6cbb40a531ccf06e6" },
							{ orderPlacement: "6", optionId: "61b10cd2cbb40a531ccf06e4" },
							{ orderPlacement: "2", optionId: "61b10d75cbb40a531ccf06f6" },
							{ orderPlacement: "7", optionId: "61b10cdfcbb40a531ccf06ea" },
							{ orderPlacement: "1", optionId: "61b10d78cbb40a531ccf06f8" },
							{ orderPlacement: "3", optionId: "61b10d94cbb40a531ccf0706" },
							{ orderPlacement: "4", optionId: "61b10d87cbb40a531ccf0700" },
							{ orderPlacement: "5", optionId: "61b2442c76830d4150677da2" },
							{ orderPlacement: "6", optionId: "61b10d8bcbb40a531ccf0702" },
							{ orderPlacement: "8", optionId: "61b10d7ccbb40a531ccf06fa" },
							{ orderPlacement: "7", optionId: "61b10d80cbb40a531ccf06fc" },
							{ orderPlacement: "9", optionId: "61b10d90cbb40a531ccf0704" },
							{ orderPlacement: "10", optionId: "61b10d83cbb40a531ccf06fe" },
							{ orderPlacement: "2", optionId: "61b10dcacbb40a531ccf0716" },
							{ orderPlacement: "3", optionId: "61b10e2dcbb40a531ccf0746" },
							{ orderPlacement: "4", optionId: "61b10e23cbb40a531ccf0740" },
							{ orderPlacement: "1", optionId: "61b10db3cbb40a531ccf0708" },
							{ orderPlacement: "5", optionId: "61b10e15cbb40a531ccf0738" },
							{ orderPlacement: "6", optionId: "61b10dc2cbb40a531ccf0710" },
							{ orderPlacement: "2", optionId: "61b10e4ccbb40a531ccf0754" },
							{ orderPlacement: "4", optionId: "61b10e38cbb40a531ccf0748" },
							{ orderPlacement: "6", optionId: "61b10e3bcbb40a531ccf074a" },
							{ orderPlacement: "5", optionId: "61b10dd1cbb40a531ccf071b" },
							{ orderPlacement: "3", optionId: "61b10e4ecbb40a531ccf0756" },
							{ orderPlacement: "1", optionId: "61b10e3ecbb40a531ccf074c" },
							{ orderPlacement: "7", optionId: "61b10e42cbb40a531ccf074e" },
							{ orderPlacement: "8", optionId: "61b10e47cbb40a531ccf0750" }
						]
					},
					category: "LMG",
					__v: 0
				}
			},
			secondaryKit: {
				_id: "61b3a6da716bf30008350af3",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					{
						_id: "61b1037dcbb40a531ccf04e9",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Optic",
						displayName: "Krausnick IS01M",
						__v: 0
					},
					{
						_id: "61b10468cbb40a531ccf0531",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Muzzle",
						displayName: "Recoil Booster",
						__v: 0
					},
					{
						_id: "61b1062ecbb40a531ccf058b",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Barrel",
						displayName: "Krausnick 317mm 04B",
						__v: 0
					},
					{
						_id: "61b10735cbb40a531ccf05cf",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Underbarrel",
						displayName: "Mark VI Skeletal",
						__v: 0
					},
					{
						_id: "61b107f7cbb40a531ccf060d",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Stock",
						displayName: "Krausnick 33m Folding",
						__v: 0
					},
					{
						_id: "61b28b7476830d41506785a6",
						displayName: "7.62 Gorenko 45 Round Mags",
						slotKey: "Magazine",
						gameId: "60da97598821ed46dc9c008c",
						__v: 0
					},
					{
						_id: "61b10cd6cbb40a531ccf06e6",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Ammo Type",
						displayName: "Hollow Point",
						__v: 0
					},
					{
						_id: "61b10d94cbb40a531ccf0706",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Rear Grip",
						displayName: "Taped Grip",
						__v: 0
					},
					{
						_id: "61b10e49cbb40a531ccf0752",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Perk 2",
						displayName: "Quick",
						__v: 0
					},
					{
						_id: "61b10e27cbb40a531ccf0742",
						gameId: "60da97598821ed46dc9c008c",
						slotKey: "Perk 1",
						displayName: "Unmarked",
						__v: 0
					}
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				},
				base: {
					commandCodes: ["mp40"],
					_id: "61b11376cbb40a531ccf076e",
					displayName: "MP-40",
					gameId: "60da97598821ed46dc9c008c",
					image: "/warzone/mp-40.png",
					gameInfo: {
						blurb:
							"Workhorse SMG suited to all short to medium range engagements.",
						stats: {
							accuracy: 61,
							range: 53,
							mobility: 68,
							damage: 56,
							fireRate: 71,
							control: 73
						},
						maxOptions: 10,
						availableOptions: [
							{ orderPlacement: "1", optionId: "61b10419cbb40a531ccf0517" },
							{ orderPlacement: "3", optionId: "61b10446cbb40a531ccf0527" },
							{ orderPlacement: "4", optionId: "61b10457cbb40a531ccf052d" },
							{ orderPlacement: "2", optionId: "61b10487cbb40a531ccf053b" },
							{ orderPlacement: "5", optionId: "61b285d176830d41506784fb" },
							{ orderPlacement: "7", optionId: "61b10468cbb40a531ccf0531" },
							{ orderPlacement: "1", optionId: "61b1062ecbb40a531ccf058b" },
							{ orderPlacement: "6", optionId: "61b1042fcbb40a531ccf051f" },
							{ orderPlacement: "2", optionId: "61b106aacbb40a531ccf05ab" },
							{ orderPlacement: "4", optionId: "61b10699cbb40a531ccf05a9" },
							{ orderPlacement: "3", optionId: "61b10629cbb40a531ccf0589" },
							{ orderPlacement: "1", optionId: "61b103cbcbb40a531ccf0503" },
							{ orderPlacement: "2", optionId: "61b10371cbb40a531ccf04e5" },
							{ orderPlacement: "6", optionId: "61b23c8976830d4150677d3c" },
							{ orderPlacement: "5", optionId: "61b103d2cbb40a531ccf0505" },
							{ orderPlacement: "4", optionId: "61b10363cbb40a531ccf04e1" },
							{ orderPlacement: "3", optionId: "61b103adcbb40a531ccf04f9" },
							{ orderPlacement: "7", optionId: "61b103b3cbb40a531ccf04fb" },
							{ orderPlacement: "8", optionId: "61b103c5cbb40a531ccf0501" },
							{ orderPlacement: "9", optionId: "61b23ddc76830d4150677d50" },
							{ orderPlacement: "10", optionId: "61b23c4f76830d4150677d36" },
							{ orderPlacement: "11", optionId: "61b103efcbb40a531ccf050d" },
							{ orderPlacement: "12", optionId: "61b1039acbb40a531ccf04f3" },
							{ orderPlacement: "13", optionId: "61b103dbcbb40a531ccf0507" },
							{ orderPlacement: "14", optionId: "61b103b8cbb40a531ccf04fd" },
							{ orderPlacement: "16", optionId: "61b103a1cbb40a531ccf04f5" },
							{ orderPlacement: "15", optionId: "61b23d3776830d4150677d48" },
							{ orderPlacement: "17", optionId: "61b10345cbb40a531ccf04df" },
							{ orderPlacement: "18", optionId: "61b103c0cbb40a531ccf04ff" },
							{ orderPlacement: "19", optionId: "61b10383cbb40a531ccf04eb" },
							{ orderPlacement: "1", optionId: "61b107f7cbb40a531ccf060d" },
							{ orderPlacement: "20", optionId: "61b1037dcbb40a531ccf04e9" },
							{ orderPlacement: "2", optionId: "61b10853cbb40a531ccf0631" },
							{ orderPlacement: "3", optionId: "61b10887cbb40a531ccf0641" },
							{ orderPlacement: "4", optionId: "61b1087bcbb40a531ccf063f" },
							{ orderPlacement: "2", optionId: "61b10708cbb40a531ccf05c1" },
							{ orderPlacement: "5", optionId: "61b10893cbb40a531ccf0645" },
							{ orderPlacement: "1", optionId: "61b10725cbb40a531ccf05c9" },
							{ orderPlacement: "4", optionId: "61b1071fcbb40a531ccf05c7" },
							{ orderPlacement: "5", optionId: "61b10735cbb40a531ccf05cf" },
							{ orderPlacement: "3", optionId: "61b1073acbb40a531ccf05d1" },
							{ orderPlacement: "6", optionId: "61b1072acbb40a531ccf05cb" },
							{ orderPlacement: "1", optionId: "61b28e7776830d4150678632" },
							{ orderPlacement: "8", optionId: "61b1073fcbb40a531ccf05d3" },
							{ orderPlacement: "2", optionId: "61b28b7476830d41506785a6" },
							{ orderPlacement: "7", optionId: "61b10711cbb40a531ccf05c3" },
							{ orderPlacement: "3", optionId: "61b10ca5cbb40a531ccf06d4" },
							{ orderPlacement: "4", optionId: "61b10c63cbb40a531ccf06bc" },
							{ orderPlacement: "3", optionId: "61b10cdbcbb40a531ccf06e8" },
							{ orderPlacement: "5", optionId: "61b10cd2cbb40a531ccf06e4" },
							{ orderPlacement: "1", optionId: "61b10ccecbb40a531ccf06e2" },
							{ orderPlacement: "2", optionId: "61b10cf5cbb40a531ccf06f2" },
							{ orderPlacement: "4", optionId: "61b10cd6cbb40a531ccf06e6" },
							{ orderPlacement: "6", optionId: "61b10cdfcbb40a531ccf06ea" },
							{ orderPlacement: "1", optionId: "61b10d90cbb40a531ccf0704" },
							{ orderPlacement: "5", optionId: "61b10d8bcbb40a531ccf0702" },
							{ orderPlacement: "4", optionId: "61b10d94cbb40a531ccf0706" },
							{ orderPlacement: "3", optionId: "61b10d83cbb40a531ccf06fe" },
							{ orderPlacement: "2", optionId: "61b10d87cbb40a531ccf0700" },
							{ orderPlacement: "6", optionId: "61b10d78cbb40a531ccf06f8" },
							{ orderPlacement: "7", optionId: "61b10d75cbb40a531ccf06f6" },
							{ orderPlacement: "8", optionId: "61b10d7ccbb40a531ccf06fa" },
							{ orderPlacement: "1", optionId: "61b10e1ccbb40a531ccf073c" },
							{ orderPlacement: "10", optionId: "61b2442c76830d4150677da2" },
							{ orderPlacement: "9", optionId: "61b10d80cbb40a531ccf06fc" },
							{ orderPlacement: "2", optionId: "61b10dfbcbb40a531ccf072c" },
							{ orderPlacement: "3", optionId: "61b10df1cbb40a531ccf0728" },
							{ orderPlacement: "4", optionId: "61b10deacbb40a531ccf0726" },
							{ orderPlacement: "1", optionId: "61b10e3ecbb40a531ccf074c" },
							{ orderPlacement: "6", optionId: "61b10e27cbb40a531ccf0742" },
							{ orderPlacement: "5", optionId: "61b10dc2cbb40a531ccf0710" },
							{ orderPlacement: "2", optionId: "61b10e4ccbb40a531ccf0754" },
							{ orderPlacement: "3", optionId: "61b10e4ecbb40a531ccf0756" },
							{ orderPlacement: "5", optionId: "61b10dd1cbb40a531ccf071b" },
							{ orderPlacement: "6", optionId: "61b10e3bcbb40a531ccf074a" },
							{ orderPlacement: "4", optionId: "61b10e49cbb40a531ccf0752" },
							{ orderPlacement: "7", optionId: "61b10e42cbb40a531ccf074e" },
							{ orderPlacement: "8", optionId: "61b10e47cbb40a531ccf0750" }
						]
					},
					category: "SMG",
					__v: 0
				}
			}
		}
	},
	{
		_id: "610f21273367760009fc9e16",
		meta: {
			hasProfileImage: true,
			profileImage: "610f21273367760009fc9e16",
			links: {
				twitch: "https://www.twitch.tv/IceManIsaac",
				discord: "https://discord.gg/IceManIsaac",
				youtube: "https://www.youtube.com/icemanisaac/",
				tiktok: "https://www.tiktok.com/@IceManIsaac",
				twitter: "https://twitter.com/IceManIsaac",
				instagram: "https://www.instagram.com/IceManIsaac"
			},
			youtubeAutoplay: false,
			premiumType: "premium",
			brandColors: { primary: "#ffffff" }
		},
		viewCount: 14814,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "610f22ad810d7e00092bc563",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3a54a8a26dd1acccc59a0",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "5vEwvstx-Ng"
				}
			},
			{
				_id: "610f2631810d7e00092bc5ee",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df72e9bf84855a680f8a67",
					"60e2248abf84855a680f937e",
					"60e22277bf84855a680f9368",
					"60df74d4bf84855a680f8ab9",
					"60df7203bf84855a680f8a49"
				],
				userData: {
					customTitle: "FULLY LOADED LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=959s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f29d33367760009fc9f30",
				baseId: "60ded4b0bf84855a680f8899",
				options: [
					"60df7203bf84855a680f8a49",
					"60e33f11bf84855a680f9486",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e33fedbf84855a680f949e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f2a93810d7e00092bc64e",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60df7280bf84855a680f8a55",
					"60df74dcbf84855a680f8abb",
					"60e34416bf84855a680f9509",
					"60df72b5bf84855a680f8a5d",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "dtY-d7WXTB8",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f2f4a4193ed00090fe5bb",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e342b1bf84855a680f94fb",
					"60df738dbf84855a680f8a85",
					"60e3440cbf84855a680f9505",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f36d73367760009fca023",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5",
					"60e221b9bf84855a680f9318"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f37984193ed00090fe63c",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f37ca3367760009fca059",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84c2bf84855a680f8c6e",
					"60df738dbf84855a680f8a85",
					"60df7471bf84855a680f8aa5",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f3b910b05c800099d4f2f",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Z644p5t9Ut0"
				}
			},
			{
				_id: "610f3e9405d51d0008edc572",
				baseId: "60ded51abf84855a680f889d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3450fbf84855a680f9557",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Z644p5t9Ut0"
				}
			},
			{
				_id: "610f402408df1b0009abb654",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60e379dfbf84855a680f9b66",
					"60df7448bf84855a680f8a9d",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "HIGH SKILL DMG 1",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=499s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f412a66fa9c0008de9a6a",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "LOW RECOIL HIGH DMG",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=820s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f418066fa9c0008de9a86",
				baseId: "60df619dbf84855a680f8959",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ed2d8a26dd1acccc60e8",
					"60df7280bf84855a680f8a55",
					"60e3ed588a26dd1acccc60f0",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f425d08df1b0009abb6b7",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df732abf84855a680f8a73",
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3defd8a26dd1acccc5e41"
				],
				userData: {
					customTitle: "",
					blueprint:
						"Black Diamond (for Muzzle) & Black Tie Affair (for Optic)",
					featured: false,
					youtubeURL: "Z644p5t9Ut0"
				}
			},
			{
				_id: "610f462a08df1b0009abb765",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df72b5bf84855a680f8a5d",
					"60e3e0938a26dd1acccc5e8c",
					"60e3e0528a26dd1acccc5e82",
					"60df7280bf84855a680f8a55",
					"60e3e1298a26dd1acccc5e94"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "JQlGqL43RV0",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f487508df1b0009abb79a",
				baseId: "60df5053bf84855a680f8910",
				options: [
					"60e3910fbf84855a680f9e67",
					"60e39a23bf84855a680fa00f",
					"60df7279bf84855a680f8a53",
					"60e39a57bf84855a680fa013",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f49a908df1b0009abb7d2",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1e4dcbf84855a680f8faf",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "vdICW13PhC4&t=467s",
					tiktokId: ""
				}
			},
			{
				_id: "610f4f3666fa9c0008de9c91",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e38f8cbf84855a680f9e1d",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e38fa4bf84855a680f9e21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f513a08df1b0009abb8d6",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60e39325bf84855a680f9e75",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f516490edc300098a25d5",
				baseId: "60df4f75bf84855a680f8908",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e39101bf84855a680f9e65",
					"60df7279bf84855a680f8a53",
					"60e39325bf84855a680f9e75",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f52e7c321c00008b043e5",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da8bbf84855a680f8f2d",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1da3bbf84855a680f8f17"
				],
				userData: {
					customTitle: "FULLY LOADED LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=959s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f54a7bfc5290008e14382",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c2abf84855a680f914e",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "AUFCDp3XKC4"
				}
			},
			{
				_id: "610f580c3fd2c50008062dd8",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e39c15bf84855a680fa06a",
					"60e39c31bf84855a680fa06e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "vdICW13PhC4&t=467s",
					tiktokId: ""
				}
			},
			{
				_id: "610f58ad45f8f40008d4af8d",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1e8ecbf84855a680f903e",
					"60e1d885bf84855a680f8edd"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f591a3fd2c50008062dfb",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "FAVORITE AR LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=302s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f5a0cc1e07000087cf8e4",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1ded1bf84855a680f8f95",
					"60e1def0bf84855a680f8f97",
					"60e1de7bbf84855a680f8f89",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "HIGH SKILL DMG 2",
					blueprint: "",
					featured: false,
					youtubeURL: "Gfb6P_F_E8g",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f5ed5c1e07000087cf928",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "HIGH SKILL DMG 1",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=499s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f60e2c1e07000087cf988",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35a20bf84855a680f97b9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Z644p5t9Ut0"
				}
			},
			{
				_id: "610f610cc1e07000087cf99c",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e356a2bf84855a680f9705",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "FAV SNIPER LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=416s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f615445f8f40008d4b08e",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1da5cbf84855a680f8f21",
					"60e1d997bf84855a680f8ef3",
					"60e1d885bf84855a680f8edd",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "SPNR_EkuPQY",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f618545f8f40008d4b09b",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e1d9d8bf84855a680f8f03",
					"60e1da40bf84855a680f8f19",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Z644p5t9Ut0"
				}
			},
			{
				_id: "610f61a7c1e07000087cf9d8",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d986bf84855a680f8eef",
					"60df738dbf84855a680f8a85",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f61e345f8f40008d4b0bc",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e3891abf84855a680f9d5a",
					"60e1d98fbf84855a680f8ef1",
					"60e1da2bbf84855a680f8f11",
					"60e38950bf84855a680f9d64"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610f6223c1e07000087cfa0d",
				baseId: "60df613fbf84855a680f8955",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3ea3c8a26dd1acccc6058",
					"60e1d98fbf84855a680f8ef1",
					"60e3ea9c8a26dd1acccc6060",
					"60e1dac7bf84855a680f8f3d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Z644p5t9Ut0"
				}
			},
			{
				_id: "610f6251c1e07000087cfa1f",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1dac7bf84855a680f8f3d",
					"60e1d98fbf84855a680f8ef1",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d9e6bf84855a680f8f07"
				],
				userData: {
					customTitle: "FAV SNIPER LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "C0sjs1OD4aU",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610f6274c1e07000087cfa35",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e1d9afbf84855a680f8ef7",
					"60e1da5cbf84855a680f8f21",
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "lR4Kl76eBao",
					tiktokId: ""
				}
			},
			{
				_id: "610f629745f8f40008d4b100",
				baseId: "60df60c4bf84855a680f8951",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3e6918a26dd1acccc5fac",
					"60e1d98fbf84855a680f8ef1",
					"60e1da23bf84855a680f8f0f",
					"60e1dac7bf84855a680f8f3d"
				],
				userData: {
					customTitle: "",
					blueprint: "Mothership",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fe1b10e338900083d22eb",
				baseId: "60df5c3ebf84855a680f8926",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ccda8a26dd1acccc5b82",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "SOLO DUOS LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=892s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610fe2cd60ee7900088b4153",
				baseId: "60ded332bf84855a680f888d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e21040bf84855a680f9214",
					"60e2131bbf84855a680f9254",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fe3e80e338900083d2325",
				baseId: "60df4977bf84855a680f88ea",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e360ddbf84855a680f98d1",
					"60e35c1bbf84855a680f9817",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "sfXmGL9Kmgk",
					tiktokId: ""
				}
			},
			{
				_id: "610fe44360ee7900088b4187",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5f08a26dd1acccc5c8f",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fe4d40e338900083d2350",
				baseId: "60df4fabbf84855a680f890a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3946fbf84855a680f9f12",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60e39516bf84855a680f9f22"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fe7fa761c660009de28ca",
				baseId: "60df4bcfbf84855a680f88fe",
				options: [
					"60e37d3ebf84855a680f9bf8",
					"60df7279bf84855a680f8a53",
					"60e37d95bf84855a680f9c08",
					"60e37d76bf84855a680f9c02",
					"60df73cbbf84855a680f8a8d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fe8e0761c660009de28fb",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fe91bd233030008151d11",
				baseId: "60df674bbf84855a680f8984",
				options: [
					"60e3fbbf8a26dd1acccc637b",
					"60e3f7d38a26dd1acccc62b6",
					"60df7279bf84855a680f8a53",
					"60e37148bf84855a680f9a22",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fe9d6d233030008151d32",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60e3c8508a26dd1acccc5af1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610fea23761c660009de292f",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e353b4bf84855a680f9693",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "HAPPY MEDIUM LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=736s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6111eff982e6bf00088371fc",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60f0b3671d00452cd0554206"
				],
				userData: {
					customTitle: "FAVORITE AR LOADOUT",
					blueprint: "Undercover Agent",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=302s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6111f6f0a1dc9a0009dac39c",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e20b1fbf84855a680f9102",
					"60e20a9ebf84855a680f90f8",
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd"
				],
				userData: {
					customTitle: "LOW RECOIL HIGH DMG",
					blueprint: "Phoenix Inferno",
					featured: false,
					youtubeURL: "xUS4tPuHNV0",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "613cd6b31de18300096b5193",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60e37356bf84855a680f9a7a",
					"60df74dcbf84855a680f8abb",
					"60df749dbf84855a680f8aad",
					"60e373b8bf84855a680f9a86",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "SOLO DUOS LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=892S",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6146088b5ad9ad0008af288e",
				baseId: "611620ae147d3f4f203722f6",
				options: [
					"61161b2b147d3f4f203722d6",
					"60e1d997bf84855a680f8ef3",
					"61161b75147d3f4f203722e4",
					"60e1da5cbf84855a680f8f21",
					"60e35e40bf84855a680f9871"
				],
				userData: {
					customTitle: "HIGH SKILL DMG 2",
					blueprint: "",
					featured: false,
					youtubeURL: "4LgfzYTfWm8&t=578s",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "614609685ad9ad0008af292b",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da8bbf84855a680f8f2d",
					"61161a8a147d3f4f203722c0"
				],
				userData: {
					customTitle: "HAPPY MEDIUM LOADOUT",
					blueprint: "",
					featured: false,
					youtubeURL: "FN0omKcB5uM",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b15a16988a7f00081bcebf",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b276c376830d41506782e4",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b103dbcbb40a531ccf0507",
					"61b10452cbb40a531ccf052b",
					"61b10d8bcbb40a531ccf0702",
					"61b10e47cbb40a531ccf0750",
					"61b10e23cbb40a531ccf0740",
					"61b2261476830d4150677d15",
					"61b26a2176830d41506780f5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "1deEtyjyVI0",
					tiktokId: "",
					quote:
						"Stock is the Anastasia Padded and the Ammunition is the 6.5MM Sakura 75 Round Drums"
				}
			},
			{
				_id: "61b588243f62b10008677a7e",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b10868cbb40a531ccf0639",
					"61b10cdfcbb40a531ccf06ea",
					"61b1046ecbb40a531ccf0533",
					"61b1073fcbb40a531ccf05d3",
					"61b106e7cbb40a531ccf05b7",
					"61b10e38cbb40a531ccf0748",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071a",
					"61b23e0d76830d4150677d54"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "uNf7zutzWTE",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b59295e6bd05000888ecb7",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b291e676830d415067871c",
					"61b103d2cbb40a531ccf0505",
					"61b292f476830d4150678738",
					"61b1073fcbb40a531ccf05d3",
					"61b293f076830d415067874a",
					"61b10cd6cbb40a531ccf06e6",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6d1ad25c0eb0008345a65",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b103d2cbb40a531ccf0505",
					"61b10468cbb40a531ccf0531",
					"61b10730cbb40a531ccf05cd",
					"61b10cd6cbb40a531ccf06e6",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b2442c76830d4150677da2",
					"61b2825876830d415067844c",
					"61b282fb76830d415067845c",
					"61b283c976830d4150678476"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf4ba54009cc0008bd764d",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b104dfcbb40a531ccf0551",
					"61b103dbcbb40a531ccf0507",
					"61b107a7cbb40a531ccf05f3",
					"61b10708cbb40a531ccf05c1",
					"61b10bd8cbb40a531ccf0688",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "MSxxacH9xC8",
					tiktokId: "",
					quote:
						"The SVT is currently bugged, but is still the best choice for this loadout. If you are ok with the recoil, you can use the MX Silencer Muzzle as opposed to the Mercury Silencer."
				}
			},
			{
				_id: "61c2622943eed800095e2fbc",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10383cbb40a531ccf04eb",
					"61b107f7cbb40a531ccf060d",
					"61b1073fcbb40a531ccf05d3",
					"61b28b7476830d41506785a6",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d75cbb40a531ccf06f6",
					"61b10dc2cbb40a531ccf0710",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "LaMs9WhV308",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c61f7363ebcf000874951d",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10cdfcbb40a531ccf06ea",
					"61b103dbcbb40a531ccf0507",
					"61b10446cbb40a531ccf0527",
					"61b10708cbb40a531ccf05c1",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2b23b76830d4150678d1d",
					"61b2b32176830d4150678d33",
					"61b2b3ad76830d4150678d43"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "zOPVuy2llSg",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c67bd6a2c73a0009f83ccf",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b1042fcbb40a531ccf051f",
					"61b10568cbb40a531ccf0575",
					"61b1071fcbb40a531ccf05c7",
					"61b10bc4cbb40a531ccf0680",
					"61b10d75cbb40a531ccf06f6",
					"61b1085acbb40a531ccf0633",
					"61b10ddccbb40a531ccf0720",
					"61b10e49cbb40a531ccf0752",
					"61b10cdbcbb40a531ccf06e8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "wWJPGPao-io",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61cbc9301919b100095b57f9",
				baseId: "61b1151acbb40a531ccf077c",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b1068acbb40a531ccf05a5",
					"61b10853cbb40a531ccf0631",
					"61b10ce6cbb40a531ccf06ec",
					"61b10d87cbb40a531ccf0700",
					"61b10dbbcbb40a531ccf070c",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "7-qbLpA9RvE",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d3513d859b0b0008ba31d1",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2724376830d415067822b",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b2749b76830d415067825f",
					"61b10d87cbb40a531ccf0700",
					"61b10cd6cbb40a531ccf06e6",
					"61b10ddccbb40a531ccf0720",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "HIPFIRE BUILD",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d7753f8556120008de6291",
				baseId: "61b116c4cbb40a531ccf078c",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b1061bcbb40a531ccf0585",
					"61b2cba076830d415067901d",
					"61b1073fcbb40a531ccf05d3",
					"61b10b9bcbb40a531ccf0672",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10e09cbb40a531ccf0734",
					"61b10e38cbb40a531ccf0748"
				],
				userData: {
					customTitle: "HIT SCAN BUILD",
					blueprint: "",
					featured: true,
					youtubeURL: "IRd-cMyExAM",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d8fcefec26a200091ecbff",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b291a176830d4150678716",
					"61b103efcbb40a531ccf050d",
					"61b10853cbb40a531ccf0631",
					"61b1071fcbb40a531ccf05c7",
					"61b2936d76830d4150678744",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d87cbb40a531ccf0700",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b1042fcbb40a531ccf052c"
				],
				userData: {
					customTitle: "HIPFIRE",
					blueprint: "",
					featured: true,
					youtubeURL: "o49G9zwSMIU",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d903a7c5265400090b9042",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1046ecbb40a531ccf0533",
					"61b103dbcbb40a531ccf0507",
					"61b106e7cbb40a531ccf05b7",
					"61b1071acbb40a531ccf05c5",
					"61b2d10376830d41506790b6",
					"61b10d83cbb40a531ccf06fe",
					"61b10868cbb40a531ccf0639",
					"61b10dd1cbb40a531ccf071a",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "2nd Build",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: "NOTE! The Mag is supposed to say 5 Round Fast Mags not 3"
				}
			},
			{
				_id: "61e0fabe394ecc001360d80d",
				baseId: "61dfd74a4656770013ed3681",
				options: [
					"61b10468cbb40a531ccf0531",
					"61dfd4904656770013ed366f",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b10735cbb40a531ccf05cf",
					"61dfd5a24656770013ed367d",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "X-N_XMPIeUQ",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e0fbd8394ecc001360d978",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b106e1cbb40a531ccf05b5",
					"61b103dbcbb40a531ccf0507",
					"61b1086fcbb40a531ccf063b",
					"61b10708cbb40a531ccf05c1",
					"61b10c67cbb40a531ccf06be",
					"61b2442c76830d4150677da2",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e15cbb40a531ccf0738",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "7ifrsxaTKzU",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e37b7cce5de20013f4c260",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b106e1cbb40a531ccf05b5",
					"61b103dbcbb40a531ccf0507",
					"61b1088dcbb40a531ccf0643",
					"61b10708cbb40a531ccf05c1",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "SNIPER BUILD TEST",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e4ef37ce5de20013f6bec0",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2962576830d41506787c8",
					"61b103d2cbb40a531ccf0505",
					"61b1072acbb40a531ccf05cb",
					"61b10c72cbb40a531ccf06c2",
					"61b2971776830d41506787e2",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "RChUlxAGRlWPasRtLPTYC93kQSD2", role: "Administrator" },
			{ uid: "Nxu1UHXqjJWWLkKLlactXzOHIqn1", role: "Owner" }
		],
		createdDate: "2021-08-08T00:11:19.314Z",
		displayName: "IceManIsaac",
		urlSafeName: "IceManIsaac",
		__v: 0,
		previousUpdater: "Chortle",
		overlay: {
			backgroundColorSecondary: "#2F2F31",
			textColorSecondary: "#2F2F31",
			textColorPrimary: "#ffffff",
			backgroundColorPrimary: "#636363",
			textColorAccent: "#9B9B9B"
		}
	},
	{
		_id: "60f4680e52d0ef0008f46d12",
		meta: {
			hasProfileImage: true,
			profileImage: "60f4680e52d0ef0008f46d12",
			links: {
				twitch: "twitch.tv/exzachtt",
				twitter: "twitter.com/exzachtt",
				youtube: "youtube.com/exzachtt",
				instagram: "instagram.com/exzachtt_/",
				tiktok: "Tiktok.com/@exzachtt",
				discord: "https://discord.gg/5bUQyfE"
			}
		},
		games: [
			{
				id: "60da97598821ed46dc9c008c",
				commandString: " $(touser), {{link}}"
			}
		],
		kits: [
			{
				_id: "60f473eae9ba3600082bc627",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1e4dcbf84855a680f8faf",
					"60e1daaebf84855a680f8f33",
					"60e1e464bf84855a680f8f9d",
					"60e1ded1bf84855a680f8f95",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f474322997ee000997284f",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1deb3bf84855a680f8f91",
					"60e1e464bf84855a680f8f9d",
					"60e1def0bf84855a680f8f97",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "Primary",
					blueprint: "",
					featured: false,
					youtubeURL: "Io9d0sXSai0",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "60f475272997ee000997285a",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60e2248abf84855a680f937e",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "m6i41sU9Si8"
				}
			},
			{
				_id: "60f47579e9ba3600082bc631",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e1d9c7bf84855a680f8eff",
					"60e1e8ecbf84855a680f903e",
					"60e35ef7bf84855a680f987b",
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5f08a26dd1acccc5c8f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "GPFmUgOIseE"
				}
			},
			{
				_id: "60f47647e9ba3600082bc638",
				baseId: "60df4b05bf84855a680f88f8",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3775fbf84855a680f9b08",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f476832997ee000997286b",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3a54a8a26dd1acccc59a0",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "vtBCC1R1xzA"
				}
			},
			{
				_id: "60f476cdfdacce000957625e",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1e4d7bf84855a680f8fad",
					"60e1da5cbf84855a680f8f21",
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e3629fbf84855a680f991f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "xNIDhaxySbs",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "60f47707e9ba3600082bc641",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1dab5bf84855a680f8f37",
					"60e1e8ecbf84855a680f903e",
					"60e382b9bf84855a680f9c50"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "cLNK5odSub0"
				}
			},
			{
				_id: "60f4772d2997ee0009972878",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e35c3abf84855a680f981b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Zqn0HRiii7M"
				}
			},
			{
				_id: "60f47772fdacce000957626b",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3ceac8a26dd1acccc5bd3",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "ACoN38Z8J7Q"
				}
			},
			{
				_id: "60f47797fdacce0009576272",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df738dbf84855a680f8a85",
					"60df749dbf84855a680f8aad",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f477cd2997ee000997287f",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1d9c7bf84855a680f8eff",
					"60e1dac1bf84855a680f8f3b",
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "0cu3s-sRMMo"
				}
			},
			{
				_id: "60f47815e9ba3600082bc645",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1da3bbf84855a680f8f17",
					"60e1d997bf84855a680f8ef3",
					"60e1da85bf84855a680f8f2b",
					"60e1d86abf84855a680f8ed7",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f4783afdacce000957627a",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d986bf84855a680f8eef",
					"60df738dbf84855a680f8a85",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47862e9ba3600082bc654",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "4qqO4edODmA"
				}
			},
			{
				_id: "60f479c42997ee00099728ab",
				baseId: "60df4f10bf84855a680f8904",
				options: [
					"60df738dbf84855a680f8a85",
					"60e1d99ebf84855a680f8ef5",
					"60e38859bf84855a680f9d48",
					"60e38e61bf84855a680f9dda",
					"60e38ee4bf84855a680f9dea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "919z3cTNHCs",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "60f47aa52997ee00099728b6",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3defd8a26dd1acccc5e41",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "EUp__PI_lEQ"
				}
			},
			{
				_id: "60f47ac72997ee00099728bc",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47af62997ee00099728c2",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e20c2abf84855a680f914e",
					"60e20d16bf84855a680f9160",
					"60e1dac7bf84855a680f8f3d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "OJKWzvtBIa4"
				}
			},
			{
				_id: "60f47b2ae9ba3600082bc662",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d997bf84855a680f8ef3",
					"60e35a20bf84855a680f97b9",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47b53e9ba3600082bc669",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df7471bf84855a680f8aa5",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47b8ce9ba3600082bc673",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47bbdfdacce000957629f",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e35580bf84855a680f96f7",
					"60e1da62bf84855a680f8f23",
					"60e356a2bf84855a680f9705",
					"60df738dbf84855a680f8a85",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "Normal",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47ce6e9ba3600082bc67d",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e356a2bf84855a680f9705",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "Speed",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47d602997ee00099728d9",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df73cbbf84855a680f8a8d",
					"60e2248abf84855a680f937e",
					"60e379dfbf84855a680f9b66",
					"60e37949bf84855a680f9b54",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47d7ee9ba3600082bc68a",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df7270bf84855a680f8a51",
					"60df744fbf84855a680f8a9f",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47e182997ee00099728e2",
				baseId: "60ded588bf84855a680f88a1",
				options: [
					"60df7e65bf84855a680f8c14",
					"60df7e79bf84855a680f8c16",
					"60df73cbbf84855a680f8a8d",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47e68e9ba3600082bc69e",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e38f8cbf84855a680f9e1d",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e38fa4bf84855a680f9e21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47e902997ee00099728ee",
				baseId: "60df4ac6bf84855a680f88f6",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3757bbf84855a680f9ac3",
					"60e375adbf84855a680f9ac9",
					"60df749dbf84855a680f8aad",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47ec1e9ba3600082bc6a6",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1da40bf84855a680f8f19",
					"60e352e1bf84855a680f9687",
					"60e353b4bf84855a680f9693",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47ef22997ee00099728f5",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60e39325bf84855a680f9e75",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47f3c2997ee00099728fc",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60e3e0638a26dd1acccc5e86",
					"60df7280bf84855a680f8a55",
					"60e3e1b98a26dd1acccc5e9e",
					"60e3e0938a26dd1acccc5e8c",
					"60e3e13e8a26dd1acccc5e98"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "1okduCWJHX4"
				}
			},
			{
				_id: "60f47f7be9ba3600082bc6b6",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d98fbf84855a680f8ef1",
					"60e38950bf84855a680f9d64",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47f952997ee0009972906",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1da5cbf84855a680f8f21",
					"60e1dac1bf84855a680f8f3b",
					"60e1d98fbf84855a680f8ef1",
					"60e3e2a98a26dd1acccc5ede",
					"60e3e4cc8a26dd1acccc5f54"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "DrNCeu1Es9E",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "60f47faee9ba3600082bc6be",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60df7280bf84855a680f8a55",
					"60e3fedd8a26dd1acccc6430",
					"60e3feeb8a26dd1acccc6434"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f47fc5e9ba3600082bc6c4",
				baseId: "60df4b65bf84855a680f88fc",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37b91bf84855a680f9ba8",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f4809393bfa30008939811",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1e464bf84855a680f8f9d",
					"60e1da62bf84855a680f8f23",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60f73af7828e4a00083b0b63",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e1d99ebf84855a680f8ef5",
					"60e35908bf84855a680f9759",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60fc9afe36187d0008423fe6",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e39c15bf84855a680fa06a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "60ff8064356b5600085db4a0",
				baseId: "60df4b65bf84855a680f88fc",
				options: [
					"60e37b81bf84855a680f9ba6",
					"60e37bdcbf84855a680f9bb0",
					"60df73cbbf84855a680f8a8d",
					"60df738dbf84855a680f8a85",
					"60df7279bf84855a680f8a53"
				],
				userData: {
					customTitle: "Joes Build",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61037aeb146beb0008c859b2",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e35804bf84855a680f9755",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "Speed",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6109d96a0d2b1200083c3adc",
				baseId: "6109bb97ec0dea4e34958025",
				options: [
					"60df74dcbf84855a680f8abb",
					"60e37d76bf84855a680f9c02",
					"60df7203bf84855a680f8a49",
					"61099cf956bb294be45a7e30",
					"61099cd856bb294be45a7e26"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "ndHgJhNHkhA"
				}
			},
			{
				_id: "61102a6ec2fac700099148a6",
				baseId: "60df49e3bf84855a680f88ee",
				options: [
					"60e36431bf84855a680f996f",
					"60df7279bf84855a680f8a53",
					"60e36685bf84855a680f9991",
					"60e2248abf84855a680f937e",
					"60e36445bf84855a680f9973"
				],
				userData: {
					customTitle: "Rebirth",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61102b0a1b57a700091c678f",
				baseId: "60df49e3bf84855a680f88ee",
				options: [
					"60e36431bf84855a680f996f",
					"60df7279bf84855a680f8a53",
					"60e2248abf84855a680f937e",
					"60e36445bf84855a680f9973",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "Normal",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611039054e35e600092787dc",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60df7280bf84855a680f8a55",
					"60e34416bf84855a680f9509",
					"60df73b1bf84855a680f8a89",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611b46613763940008c1f91e",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e37356bf84855a680f9a7a",
					"60df74dcbf84855a680f8abb",
					"60df8519bf84855a680f8c78"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6123326a72c11500089531fc",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e20a9ebf84855a680f90f8",
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1e8ecbf84855a680f903e",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6123329cef088c0009d6ac89",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60f0b3671d00452cd0554206",
					"60e1e4dcbf84855a680f8faf",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "YpyRpy4KWGY",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6125c5b7c97f72000816306f",
				baseId: "60df5fa3bf84855a680f8947",
				options: [
					"60e3dd3a8a26dd1acccc5dfc",
					"60df7280bf84855a680f8a55",
					"60e3dd4e8a26dd1acccc5e00",
					"60df74dcbf84855a680f8abb",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "3ullQyHstzA",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6126b33ba6de6a00098e91e8",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d977bf84855a680f8eeb",
					"60e1dac1bf84855a680f8f3b",
					"60e1d885bf84855a680f8edd",
					"60e3f6bb8a26dd1acccc627e",
					"60e3f1338a26dd1acccc619e"
				],
				userData: {
					customTitle: "Single",
					blueprint: "Deciding Factor",
					featured: false,
					youtubeURL: "HKo7tMNUQs8",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61381f4a30dc51000936365c",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7471bf84855a680f8aa5",
					"60df73b1bf84855a680f8a89",
					"60df749dbf84855a680f8aad",
					"60df84c2bf84855a680f8c6e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "HiBYoz05Exo",
					tiktokId: ""
				}
			},
			{
				_id: "6138208830dc51000936367d",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "Throwback",
					blueprint: "",
					featured: false,
					youtubeURL: "kK2mhsypV2g"
				}
			},
			{
				_id: "613d696715f8060009d72479",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e1da8bbf84855a680f8f2d",
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd",
					"61161a8a147d3f4f203722c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "tL6nB8KpdlI",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6147dd0c4bd2e2000893d7b4",
				baseId: "611620ae147d3f4f203722f6",
				options: [
					"61161b2b147d3f4f203722d6",
					"60e1d997bf84855a680f8ef3",
					"60e35e33bf84855a680f986f",
					"61161b75147d3f4f203722e4",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6150c22d4d03cb00086a7491",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6150d0ef01486e000862ed0c",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1da5cbf84855a680f8f21",
					"60e1da40bf84855a680f8f19",
					"60e1d997bf84855a680f8ef3",
					"60e1d885bf84855a680f8edd",
					"60e4ae32e580dd3004e5dad8"
				],
				userData: {
					customTitle: "SMG or Rebirth",
					blueprint: "",
					featured: false,
					youtubeURL: "rZV3xpOBsKY",
					tiktokId: ""
				}
			},
			{
				_id: "6192e4e043d35b0008951346",
				baseId: "6160a8b54af6fb76f45409a0",
				options: [
					"6160aa3e4af6fb76f45409c4",
					"60e1d99ebf84855a680f8ef5",
					"60e1da3bbf84855a680f8f17",
					"60e1dac7bf84855a680f8f3d",
					"6160aaf54af6fb76f45409ce"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "3ullQyHstzA",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "619f22f2ba760600080a724c",
				baseId: "60df60c4bf84855a680f8951",
				options: [
					"60e1da5cbf84855a680f8f21",
					"60e1dac1bf84855a680f8f3b",
					"60e1d98fbf84855a680f8ef1",
					"60e3e6918a26dd1acccc5fac",
					"60e3e2c38a26dd1acccc5ee6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "qGpNGN2U75Y",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b262e0bf9a7b000aedbbd1",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b10658cbb40a531ccf0599",
					"61b10371cbb40a531ccf04e5",
					"61b1081bcbb40a531ccf061b",
					"61b10708cbb40a531ccf05c1",
					"61b10c0ccbb40a531ccf069c",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d8bcbb40a531ccf0702",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b2639f621fc50008fef189",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b291a176830d4150678716",
					"61b103efcbb40a531ccf050d",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b2936d76830d4150678744",
					"61b10d87cbb40a531ccf0700",
					"61b10cdbcbb40a531ccf06e8",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b2918091de480008cd0f93",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10419cbb40a531ccf0517",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10d90cbb40a531ccf0704",
					"61b10e47cbb40a531ccf0750",
					"61b134c01ede1b55003fd164",
					"61b10e23cbb40a531ccf0740",
					"61b226a976830d4150677d17",
					"61b2739676830d4150678245"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3ddb7aeed9f00087f33eb",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b103d2cbb40a531ccf0505",
					"61b107f7cbb40a531ccf060d",
					"61b1073fcbb40a531ccf05d3",
					"61b28b7476830d41506785a6",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10dc2cbb40a531ccf0710",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b55dcca485ec0008542c4d",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10446cbb40a531ccf0527",
					"61b106e1cbb40a531ccf05b5",
					"61b1072acbb40a531ccf05cb",
					"61b1088dcbb40a531ccf0643",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b2418b76830d4150677d80",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "tR_Fdo_0oZM",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b7c7b8ed378c0008994baf",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b103d2cbb40a531ccf0505",
					"61b107c2cbb40a531ccf05fd",
					"61b10cd6cbb40a531ccf06e6",
					"61b10468cbb40a531ccf0531",
					"61b10685cbb40a531ccf05a3",
					"61b1072acbb40a531ccf05cb",
					"61b10e49cbb40a531ccf0752",
					"61b10d7ccbb40a531ccf06fa",
					"61b10db7cbb40a531ccf070a",
					"61b2872a76830d4150678515"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "IrJ-FsJXVOE",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b7c97bcfdd360008d6f8a0",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1042acbb40a531ccf051d",
					"61b106e7cbb40a531ccf05b7",
					"61b10868cbb40a531ccf0639",
					"61b1071acbb40a531ccf05c5",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10e05cbb40a531ccf0732",
					"61b10dd1cbb40a531ccf071b",
					"61b2d10376830d41506790b6",
					"61b103efcbb40a531ccf050d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ba76519e64ec00094c6f8f",
				baseId: "61b1126ecbb40a531ccf0766",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10633cbb40a531ccf058d",
					"61b103d2cbb40a531ccf0505",
					"61b1085fcbb40a531ccf0635",
					"61b10730cbb40a531ccf05cd",
					"61b26dc076830d4150678193",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071a",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "SMG Build",
					blueprint: "",
					featured: false,
					youtubeURL: "MvTSFsTpzOA",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bccdadd0e185000831e32c",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2825876830d415067844c",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b1072acbb40a531ccf05cb",
					"61b283c976830d4150678476",
					"61b2841a76830d415067847e",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "SMG Build",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf6e87d8a7e600098bae7d",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10468cbb40a531ccf0531",
					"61b104dfcbb40a531ccf0551",
					"61b1072acbb40a531ccf05cb",
					"61b107a7cbb40a531ccf05f3",
					"61b10bd8cbb40a531ccf0688",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071b",
					"61b10de0cbb40a531ccf0722",
					"61b10d90cbb40a531ccf0704"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "Ft4LqFFzTeI",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c2641cf221710009e6b83c",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2b23b76830d4150678d1d",
					"61b103dbcbb40a531ccf0507",
					"61b2b32176830d4150678d33",
					"61b1072acbb40a531ccf05cb",
					"61b2b3ad76830d4150678d43",
					"61b10cdbcbb40a531ccf06e8",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ca1d8f5e0e32000941b902",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2727276830d415067822f",
					"61b10371cbb40a531ccf04e5",
					"61b2740376830d415067824f",
					"61b1072acbb40a531ccf05cb",
					"61b2749b76830d415067825f",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10db3cbb40a531ccf0708",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "Burst",
					blueprint: "",
					featured: true,
					youtubeURL: "4RsXbD1SN1k",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d5f83bcbca69000901ee6a",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2961676830d41506787c6",
					"61b103cbcbb40a531ccf0503",
					"61b10853cbb40a531ccf0631",
					"61b1072acbb40a531ccf05cb",
					"61b2977476830d41506787ee",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d94cbb40a531ccf0706",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "BWp3nv9LYtk",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e0eaaa394ecc001360c1f6",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2724376830d415067822b",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b2418b76830d4150677d80",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d87cbb40a531ccf0700",
					"61b10ddccbb40a531ccf0720",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "Gung Ho SMG Build",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e4eef8ce5de20013f6be63",
				baseId: "61b11300cbb40a531ccf076a",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b104b5cbb40a531ccf0547",
					"61b10774cbb40a531ccf05e1",
					"61b1072acbb40a531ccf05cb",
					"61b2872a76830d4150678515",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d94cbb40a531ccf0706",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		createdDate: "2021-07-18T17:42:38.566Z",
		displayName: "Exzachtt",
		urlSafeName: "Exzachtt",
		authId: "j25YP5bFfcc6HeXDrILNJWisprw2",
		__v: 0,
		managers: [
			{ uid: "j25YP5bFfcc6HeXDrILNJWisprw2", role: "Owner" },
			{ uid: "SUFMWtR5XAO1ivDLH8YyFp2STVv1", role: "Administrator" },
			{ uid: "N4OJM6hYV5fekcJdcgQgQTSizuo2", role: "Administrator" }
		],
		viewCount: 6216,
		previousUpdater: "Wampus"
	},
	{
		_id: "61c5a41f3ea4cf00095883af",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: true,
			profileImage: "61c5a41f3ea4cf00095883af",
			links: {
				twitch: "https://www.twitch.tv/louisselags",
				twitter: "https://twitter.com/louisselags",
				youtube: "https://www.youtube.com/louisselags",
				tiktok: "https://www.tiktok.com/@louisselags"
			}
		},
		viewCount: 5513,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "61c5a5d83ea4cf00095883bc",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b1037dcbb40a531ccf04e9",
					"61b107f7cbb40a531ccf060d",
					"61b10708cbb40a531ccf05c1",
					"61b28b7476830d41506785a6",
					"61b10d75cbb40a531ccf06f6",
					"61b10e49cbb40a531ccf0752",
					"61b10dc2cbb40a531ccf0710",
					"61b10cdbcbb40a531ccf06e8"
				],
				userData: {
					customTitle: "FROM THE TIKTOK VID",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Swap out the Sight for whatever you prefer to use\nI'm live everyday at twitch.tv/louisselags and we'd be happy to have you join the fam"
				}
			},
			{
				_id: "61cc8d2723cbcb0009d57af3",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2b23b76830d4150678d1d",
					"61b1039acbb40a531ccf04f3",
					"61b2b32176830d4150678d33",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b2b3ad76830d4150678d43",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "FROM THE TIKTOK VID",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d368d5a2422e0009efea63",
				baseId: "61b1151acbb40a531ccf077c",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b10371cbb40a531ccf04e5",
					"61b1068acbb40a531ccf05a5",
					"61b10853cbb40a531ccf0631",
					"61b10dbbcbb40a531ccf070c",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b10ccacbb40a531ccf06e0"
				],
				userData: {
					customTitle: "FROM THE TIKTOK VID",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"The sight helps with accuracy/hip fire, even though it seems pointless.\nI tried various ammo types, the buck and slug seems to be the best for it's range."
				}
			},
			{
				_id: "61d6845ba62adb00087aa7fe",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d68492a62adb00087aa803",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d684bda62adb00087aa807",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df732abf84855a680f8a73",
					"60df7280bf84855a680f8a55",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d684f5a62adb00087aa80b",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60df7279bf84855a680f8a53",
					"60df74dcbf84855a680f8abb",
					"60e2248abf84855a680f937e",
					"60e379dfbf84855a680f9b66"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6851aa62adb00087aa80f",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6855aa62adb00087aa813",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da40bf84855a680f8f19",
					"60e1d885bf84855a680f8edd",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d685d7a62adb00087aa817",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6870ff7bc1900082368d7",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e3524fbf84855a680f9671",
					"60f0b3191d00452cd0554200",
					"60e1d997bf84855a680f8ef3",
					"60f0b3671d00452cd0554206",
					"60e1daaebf84855a680f8f33"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d687ccf7bc1900082368dc",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ded1bf84855a680f8f95",
					"60e1d9c7bf84855a680f8eff",
					"60e1def4bf84855a680f8f99",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d687f6f7bc1900082368e0",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6884a9c5105000942aca5",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"61161a8a147d3f4f203722c0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"61161ad2147d3f4f203722c8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d688aa9c5105000942aca9",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e1d9c7bf84855a680f8eff",
					"60e20849bf84855a680f90a0",
					"60e1def0bf84855a680f8f97"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d688e99c5105000942acad",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1e464bf84855a680f8f9d",
					"60e20c63bf84855a680f9156",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d68990cbff7800082f7b2c",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35c3abf84855a680f981b",
					"60e1da40bf84855a680f8f19",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "Pit Viper Blueprint",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d689accbff7800082f7b31",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e3629fbf84855a680f991f",
					"60e1da5cbf84855a680f8f21",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d68a07cbff7800082f7b36",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e20d16bf84855a680f9160",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d68a45cbff7800082f7b3a",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3e05a8a26dd1acccc5e84",
					"60e3e1b98a26dd1acccc5e9e",
					"60e3e13e8a26dd1acccc5e98",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d69a99154d5300086e0c89",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5f08a26dd1acccc5c8f",
					"60e35ef7bf84855a680f987b",
					"60e1d9c7bf84855a680f8eff",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6a17c53c4180008340e85",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d98fbf84855a680f8ef1",
					"60e38d5abf84855a680f9da7",
					"60e1e4bebf84855a680f8fa9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6a1f653c4180008340e8a",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d997bf84855a680f8ef3",
					"60e1e464bf84855a680f8f9d",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6a227126fe500082cbc70",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6a2922381b900082a7732",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a",
					"60e1d9c7bf84855a680f8eff",
					"60e353c5bf84855a680f9695",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6a2fbb885ae0009ad0466",
				baseId: "60ded332bf84855a680f888d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e21058bf84855a680f9218",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e21301bf84855a680f9250"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e870e5ce5de20013fb0ffa",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1073fcbb40a531ccf05d3",
					"61b10cdbcbb40a531ccf06e8",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b291a176830d4150678716",
					"61b10853cbb40a531ccf0631",
					"61b2936d76830d4150678744"
				],
				userData: {
					customTitle: "HIP FIRE BUILD",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "GggnRqTgZeewHgC6pmuhyMx3Vet2", role: "Owner" }],
		createdDate: "2021-12-24T10:42:39.949Z",
		displayName: "LouisseLags",
		urlSafeName: "LouisseLags",
		__v: 0,
		previousUpdater: "louisselags"
	},
	{
		_id: "61180fa747b4fa0009c4e09c",
		meta: {
			hasProfileImage: true,
			profileImage: "61180fa747b4fa0009c4e09c",
			links: {
				twitch: "https://www.twitch.tv/kalei",
				tiktok: "https://www.tiktok.com/@kaleirenay",
				youtube: "https://www.youtube.com/kaleirenay",
				twitter: "https://twitter.com/kaleirenay",
				instagram: "https://www.instagram.com/kaleirenay"
			}
		},
		viewCount: 5145,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "6118199358e17900083a1679",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df733ebf84855a680f8a77",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/tP4lVXN",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181a3558e17900083a16ca",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/a/nf4wCL6",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181b9258e17900083a17b9",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/7R8WNVO",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181be00e00b80008df7b59",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d8b0bf84855a680f8ee3",
					"60e1da3bbf84855a680f8f17",
					"60e1dac7bf84855a680f8f3d",
					"60e1da8bbf84855a680f8f2d"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/2fB89Av",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181c4d58e17900083a17f9",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df744fbf84855a680f8a9f",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/tXBaIgH",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181c920e00b80008df7bd9",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/CWCJrG1",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181cc158e17900083a181f",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e342b1bf84855a680f94fb",
					"60df72b5bf84855a680f8a5d",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509"
				],
				userData: {
					customTitle: "",
					blueprint: "https://prnt.sc/tclyp6",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181da6bb91f300088a6f88",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e1d9c7bf84855a680f8eff",
					"60e1e534bf84855a680f8fb3",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "",
					blueprint: "https://prnt.sc/125qmgk",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181e320e00b80008df7c77",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df733ebf84855a680f8a77",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/x3NSRxg",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181e7a0e00b80008df7cb6",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "https://prnt.sc/11c5f7s",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181ef50e00b80008df7ce0",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/a/vJxRz5h",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181f23bb91f300088a703e",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c63bf84855a680f9156",
					"60e1d9c7bf84855a680f8eff",
					"60e1da66bf84855a680f8f25",
					"60e20b3fbf84855a680f9106"
				],
				userData: {
					customTitle: "",
					blueprint: "https://i.gyazo.com/2513a550a0a22095348a39f129556571.png",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181f4d0e00b80008df7d12",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20a9ebf84855a680f90f8",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20b1fbf84855a680f9102"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/a/uckMCin",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181f7f58e17900083a1875",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ded1bf84855a680f8f95",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e1e480bf84855a680f8fa3"
				],
				userData: {
					customTitle: "Long Range",
					blueprint: "https://gyazo.com/59a3e4de34c1847b92c03221b6f2a91e",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61181faf0e00b80008df7d39",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d9d8bf84855a680f8f03",
					"61161ad2147d3f4f203722c8",
					"60e1da40bf84855a680f8f19",
					"60e1dac1bf84855a680f8f3b",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "Sniper Support",
					blueprint: "https://gyazo.com/cfc9d0e7d846bbd7c75dd99185017f0d",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61181fe00e00b80008df7d4f",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da3bbf84855a680f8f17",
					"60e1da5cbf84855a680f8f21",
					"60e35c3abf84855a680f981b"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/a/18LCNvh",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61182020bb91f300088a70b2",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df7203bf84855a680f8a49",
					"60df749dbf84855a680f8aad",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/RIpLmo9",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118204458e17900083a1893",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/a/OrThhaN",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61182075bb91f300088a70d5",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35551bf84855a680f96f1",
					"60e1da40bf84855a680f8f19",
					"60e1da62bf84855a680f8f23",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/rX5j31e  ",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118209d58e17900083a18c9",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "https://gyazo.com/0ce7fc154a39334386e85375f224b3fc",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611820f10e00b80008df7dbc",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d99ebf84855a680f8ef5",
					"60e1da3bbf84855a680f8f17",
					"60e35a20bf84855a680f97b9"
				],
				userData: {
					customTitle: "",
					blueprint: "https://gyazo.com/e119823c6767d0a9d0668ff884cb82f1",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118211e58e17900083a18fa",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e357f1bf84855a680f9751",
					"60e1d9d8bf84855a680f8f03",
					"60e1da3bbf84855a680f8f17",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "",
					blueprint: "https://gyazo.com/31f1ec4e31a327ac691ca3677d8f3a58",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118214c0e00b80008df7ddd",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e1e4d7bf84855a680f8fad",
					"60e353b4bf84855a680f9693"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/a/5I6du8P",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118216f58e17900083a193c",
				baseId: "611620ae147d3f4f203722f6",
				options: [
					"61161b2b147d3f4f203722d6",
					"61161b75147d3f4f203722e4",
					"60e1d997bf84855a680f8ef3",
					"60e1da3bbf84855a680f8f17",
					"60e35e33bf84855a680f986f"
				],
				userData: {
					customTitle: "",
					blueprint: "https://gyazo.com/0fc0d459a95e84f270d46288651fd348",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611821ee58e17900083a1986",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3e05a8a26dd1acccc5e84",
					"60df7280bf84855a680f8a55",
					"60e3e1b98a26dd1acccc5e9e",
					"60e3e13e8a26dd1acccc5e98"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/YKbCk61",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61182227bb91f300088a7133",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/btGiVdI ",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118227358e17900083a19d1",
				baseId: "60df60c4bf84855a680f8951",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3e6918a26dd1acccc5fac",
					"60e1d9c7bf84855a680f8eff",
					"60e1dac1bf84855a680f8f3b",
					"60e3e3508a26dd1acccc5f04"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/dcOcEWT ",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118234b58e17900083a1a08",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e3e2a98a26dd1acccc5ede",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e1dac1bf84855a680f8f3b",
					"60e3e3508a26dd1acccc5f04"
				],
				userData: {
					customTitle: "",
					blueprint: "https://prnt.sc/137q9c1",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118238358e17900083a1a2a",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e3cfae8a26dd1acccc5bf3"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/CBUqI0G ",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611823b658e17900083a1a46",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e1d977bf84855a680f8eeb",
					"60e3f1498a26dd1acccc61a2",
					"60e3f6bb8a26dd1acccc627e"
				],
				userData: {
					customTitle: "",
					blueprint: "https://imgur.com/SzqYvAQ",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118242458e17900083a1a76",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e39c15bf84855a680fa06a",
					"60e353c5bf84855a680f9695"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6118244158e17900083a1a8e",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d997bf84855a680f8ef3",
					"60e38950bf84855a680f9d64"
				],
				userData: {
					customTitle: "",
					blueprint: "https://gyazo.com/c11e82d88eb87378b21eba7d4405bef8",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6128c9371ff40c0008abe0d2",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60df74dcbf84855a680f8abb",
					"60e37356bf84855a680f9a7a",
					"60df73cbbf84855a680f8a8d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6128d9a72723f1000978933e",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60e1da5cbf84855a680f8f21",
					"60e1d997bf84855a680f8ef3",
					"60f0b3671d00452cd0554206"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612a67dd11c9cc00091be525",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da66bf84855a680f8f25",
					"60e3591cbf84855a680f975d",
					"60e382cfbf84855a680f9c58"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612b84aa200ba40009e8a9e9",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e4dcbf84855a680f8faf",
					"60e1ded1bf84855a680f8f95",
					"60e1d997bf84855a680f8ef3",
					"60e1e478bf84855a680f8fa1"
				],
				userData: {
					customTitle: "Sniper Support",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6130ca2c469be30008ef7b77",
				baseId: "60df5d75bf84855a680f8930",
				options: [
					"60e3d81e8a26dd1acccc5cff",
					"60e3d7668a26dd1acccc5ce7",
					"60e1d997bf84855a680f8ef3",
					"60e1e8c5bf84855a680f903c",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61719c15abba0b0008175411",
				baseId: "60df4977bf84855a680f88ea",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e360ddbf84855a680f98d1",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e35c1bbf84855a680f9817"
				],
				userData: {
					customTitle: "",
					blueprint: "Tracker 3 Paintball blueprint",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61719ccef69dca0009e960ec",
				baseId: "6170e3a69655ec26143f1060",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1d9d8bf84855a680f8f03",
					"6170e62c9655ec26143f1087",
					"60e1da8bbf84855a680f8f2d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6182a19c6e858f0009f0c856",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"61161a8a147d3f4f203722c0",
					"61161ad2147d3f4f203722c8",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "Long Range",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "619e81818f1cbc0009999dea",
				baseId: "60df4ac6bf84855a680f88f6",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3757bbf84855a680f9ac3",
					"60df7280bf84855a680f8a55",
					"60df749dbf84855a680f8aad",
					"60e375adbf84855a680f9ac9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b4d2ffefda2d0008c12020",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b134c01ede1b55003fd164",
					"61b2739676830d4150678245",
					"61b103dbcbb40a531ccf0507",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b226a976830d4150677d17",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6020560988a0008956722",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b10c72cbb40a531ccf06c2",
					"61b2971776830d41506787e2",
					"61b2962576830d41506787c8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b795d7f074060008a1e38f",
				baseId: "61b11300cbb40a531ccf076a",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103cbcbb40a531ccf0503",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b10774cbb40a531ccf05e1",
					"61b104b5cbb40a531ccf0547"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c4a21176dfe3000826b381",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10383cbb40a531ccf04eb",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b1073fcbb40a531ccf05d3",
					"61b10853cbb40a531ccf0631",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d75cbb40a531ccf06f6",
					"61b10e27cbb40a531ccf0742",
					"61b10dd1cbb40a531ccf071b",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c5c6ccbd6147000883cf46",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b106e7cbb40a531ccf05b7",
					"61b1084ecbb40a531ccf062f",
					"61b1073fcbb40a531ccf05d3",
					"61b2d10376830d41506790b6",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071a",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c9e67eb3f0f700084f049c",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2b23b76830d4150678d1d",
					"61b10371cbb40a531ccf04e5",
					"61b2b33576830d4150678d37",
					"61b10708cbb40a531ccf05c1",
					"61b2b3ad76830d4150678d43",
					"61b2442c76830d4150677da2",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d493e2e658a30008f3ad6c",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b106e1cbb40a531ccf05b5",
					"61b1088dcbb40a531ccf0643",
					"61b103dbcbb40a531ccf0507",
					"61b2418b76830d4150677d80",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d891bffbd8440009f392f3",
				baseId: "61b116c4cbb40a531ccf078c",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b1061bcbb40a531ccf0585",
					"61b2cba076830d415067901d",
					"61b10b9bcbb40a531ccf0672",
					"61b1073fcbb40a531ccf05d3",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e09cbb40a531ccf0734",
					"61b10e38cbb40a531ccf0748",
					"61b10d75cbb40a531ccf06f6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "pB88jzh74xQqkeYqrO8IAtxSTpu1", role: "Owner" },
			{ uid: "ypn932ItUycM25cwFsUbRHjdeeO2", role: "Administrator" }
		],
		createdDate: "2021-08-14T18:47:03.778Z",
		displayName: "Kalei",
		urlSafeName: "Kalei",
		__v: 0,
		previousUpdater: "Elzaphan"
	},
	{
		_id: "613515432a0c54000921bcad",
		meta: {
			hasProfileImage: true,
			profileImage: "613515432a0c54000921bcad",
			links: {
				facebook: "https://www.facebook.com/NurVes",
				discord: "https://discord.gg/CC6H6d44QA",
				instagram: "https://www.instagram.com/NurVesOfficial",
				youtube: "https://www.youtube.com/NurVes",
				twitter: "https://twitter.com/NurVesOfficial",
				tiktok: "https://www.tiktok.com/@NurVesOfficial"
			}
		},
		viewCount: 4736,
		games: [{ id: "60da97598821ed46dc9c008c", code: 'GFUEL Code "NurVes"' }],
		kits: [
			{
				_id: "613516311af03f00085a4926",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1da5cbf84855a680f8f21",
					"60e1e4dcbf84855a680f8faf",
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e3629fbf84855a680f991f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "613516995e34350008842bf1",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1e8ecbf84855a680f903e",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613516b832dd5a00083348c9",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2248abf84855a680f937e",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613516ec5e34350008842c01",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d986bf84855a680f8eef",
					"60e3f1338a26dd1acccc619e",
					"60e3f6a88a26dd1acccc627c",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "613517285e34350008842c0f",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60e3df148a26dd1acccc5e45",
					"60df732abf84855a680f8a73"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613517495e34350008842c1b",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20d16bf84855a680f9160",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20c63bf84855a680f9156"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6135177b32dd5a00083348db",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613517b232dd5a00083348f2",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "613517d21af03f00085a49ae",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60df7279bf84855a680f8a53",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb",
					"60df73cbbf84855a680f8a8d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613517fb32dd5a000833490d",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35908bf84855a680f9759",
					"60e35804bf84855a680f9755"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613518181af03f00085a49ba",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e4dcbf84855a680f8faf",
					"60e1dac1bf84855a680f8f3b",
					"60f0b3191d00452cd0554200",
					"60f0b3671d00452cd0554206"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6135183d1af03f00085a49c4",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6135186c1af03f00085a49d0",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1da40bf84855a680f8f19",
					"60e1dac1bf84855a680f8f3b",
					"60e1d98fbf84855a680f8ef1",
					"60e1de7bbf84855a680f8f89",
					"60e3e4cc8a26dd1acccc5f54"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6137bc4e19494200085a6cce",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1def0bf84855a680f8f97",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff",
					"60e1ded1bf84855a680f8f95"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "614b807202968a00080e5780",
				baseId: "60df6610bf84855a680f8978",
				options: [
					"60e1dac1bf84855a680f8f3b",
					"60e1d997bf84855a680f8ef3",
					"60e1d885bf84855a680f8edd",
					"60e3f3d18a26dd1acccc6208",
					"60e3f1338a26dd1acccc619e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61508ea2eddd930009c331bf",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160",
					"60e1d9c7bf84855a680f8eff",
					"60e20e3ebf84855a680f91ae",
					"60e1d885bf84855a680f8edd"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6159c85a9b0610000927b87e",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"61161ad2147d3f4f203722c8",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"61161a8a147d3f4f203722c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b35dc86bda6e00082daf85",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10345cbb40a531ccf04df",
					"61b10cdfcbb40a531ccf06ea",
					"61b10452cbb40a531ccf052b",
					"61b10708cbb40a531ccf05c1",
					"61b134c01ede1b55003fd164",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b226a976830d4150677d17",
					"61b2442c76830d4150677da2",
					"61b2739676830d4150678245"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b35fd443249f0008c0b263",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b103d2cbb40a531ccf0505",
					"61b10446cbb40a531ccf0527",
					"61b1072acbb40a531ccf05cb",
					"61b10cd6cbb40a531ccf06e6",
					"61b10e49cbb40a531ccf0752",
					"61b10e23cbb40a531ccf0740",
					"61b17ac6b71116459c87f357",
					"61b2442c76830d4150677da2",
					"61b10853cbb40a531ccf0631",
					"61b293f076830d415067874a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b8e70ae0653300096f0e20",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10452cbb40a531ccf052b",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071b",
					"61b10e23cbb40a531ccf0740",
					"61b2442c76830d4150677da2",
					"61b2820e76830d4150678440",
					"61b2832776830d4150678464",
					"61b283c976830d4150678476"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ba80ddcd5a92000822e008",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10452cbb40a531ccf052b",
					"61b106e1cbb40a531ccf05b5",
					"61b1072acbb40a531ccf05cb",
					"61b1088dcbb40a531ccf0643",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ba8114cd5a92000822e00c",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b1037dcbb40a531ccf04e9",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b1072acbb40a531ccf05cb",
					"61b107f7cbb40a531ccf060d",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d90cbb40a531ccf0704",
					"61b10e49cbb40a531ccf0752",
					"61b10e27cbb40a531ccf0742",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bcb23af3a56f0009e44ae2",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10708cbb40a531ccf05c1",
					"61b10853cbb40a531ccf0631",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d87cbb40a531ccf0700",
					"61b10e49cbb40a531ccf0752",
					"61b10e23cbb40a531ccf0740",
					"61b291a176830d4150678716",
					"61b2927676830d415067872a",
					"61b293f076830d415067874a"
				],
				userData: {
					customTitle: "HIPFIRE",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61be569f970c9000089df72e",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b103dbcbb40a531ccf0507",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b2b23b76830d4150678d1d",
					"61b2b33576830d4150678d37",
					"61b2b3ad76830d4150678d43",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61cf29e2e1883c0009b2ec0c",
				baseId: "61b1148acbb40a531ccf0776",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b103d2cbb40a531ccf0505",
					"61b10725cbb40a531ccf05c9",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e15cbb40a531ccf0738",
					"61b1060fcbb40a531ccf0581",
					"61b1089dcbb40a531ccf0649",
					"61b10be7cbb40a531ccf068e",
					"61b10d75cbb40a531ccf06f6",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "s7hkf8XDpRRbrKlGvfvk0jLEMp02", role: "Owner" }],
		createdDate: "2021-09-05T19:06:43.266Z",
		displayName: "NurVes",
		urlSafeName: "NurVes",
		__v: 0,
		previousUpdater: "NurVes"
	},
	{
		_id: "619c07b044a4050007dbb526",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: true,
			profileImage: "619c07b044a4050007dbb526",
			links: {
				discord: "https://discord.gg/WJp32trwCD",
				twitter: "https://twitter.com/GoatClamp",
				facebook: "https://www.facebook.com/GoatClamp",
				tiktok: "https://www.tiktok.com/@goaatclamp",
				instagram: "https://www.instagram.com/goatclamp",
				twitch: "https://www.twitch.tv/goatclamp"
			}
		},
		viewCount: 3415,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "619c0b1ff114480008c2e062",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd",
					"61161ad2147d3f4f203722c8",
					"61161a8a147d3f4f203722c0",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Fuerza Operativa, Mira x3, Vendaje de Serpiente, Cargador de 40 balas."
				}
			},
			{
				_id: "619c0b8b3f543b0009cf056f",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60e1e4dcbf84855a680f8faf",
					"60f0b3671d00452cd0554206",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador GRU, Fuerza Operativa, Culata Skeletal KGB, Vendaje de Serpiente, 40 VDV rápido."
				}
			},
			{
				_id: "619c0c1c3f543b0009cf05a9",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1deb3bf84855a680f8f91",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador GRU, Cañón Liberador, Mira x3, Empuñadura Spetsnaz, Munición de 45."
				}
			},
			{
				_id: "619c0c9a3f543b0009cf05c0",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Fuerza operativa 40.6, Foco equipo de tigre, Empuñadura matón, Munición 45 balas tambor."
				}
			},
			{
				_id: "619c0cde3f543b0009cf05c9",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1e4d7bf84855a680f8fad",
					"60e1dac1bf84855a680f8f3b",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador GRU, Fuerza Operativa, Vendaje de Serpiente, Culata PKM, Empuñadura Matón."
				}
			},
			{
				_id: "619c0d233f543b0009cf05e4",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e382b9bf84855a680f9c50",
					"60e1da62bf84855a680f8f23",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Cañón Ranger, Mira x3, Empuñadura de campo, Munición de 45 tambor."
				}
			},
			{
				_id: "619c0d8e3f543b0009cf05fb",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1def0bf84855a680f8f97",
					"60e20849bf84855a680f90a0",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador GRU, Cañón Liberador 49.5, Mira Axial Arms x3, Empuñadura Spetsnaz, Munición Spetsnaz de 60."
				}
			},
			{
				_id: "619c148b3f543b0009cf06cf",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20df9bf84855a680f919e",
					"60e1d9c7bf84855a680f8eff",
					"60e20d16bf84855a680f9160",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "AR",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Cañón Ranger, Mira SUSAT Multizoom/Axial Arms x3, Empuñadura Agente de Campo, Munición 60 balas STANAG.\n"
				}
			},
			{
				_id: "619c1504cd6a8f0009b72c9b",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e20e3ebf84855a680f91ae",
					"60e20f2fbf84855a680f91bc",
					"60e1e464bf84855a680f8f9d",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "smg",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Normal, Fuerza Operativa, Culata Raider, Vendaje de Serpiente, Munición 45 balas.\n"
				}
			},
			{
				_id: "619c584820afb80009c81292",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df732abf84855a680f8a73",
					"60df749dbf84855a680f8aad",
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3defd8a26dd1acccc5e41"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Monolítico, Cañón Singuard 70.1, Láser táctico, Mira de francotirador, Empuñadura adhesivo punteado."
				}
			},
			{
				_id: "619c58f020afb80009c812b8",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c2abf84855a680f914e",
					"60e1d9edbf84855a680f8f09",
					"60e1da62bf84855a680f8f23",
					"60e1e478bf84855a680f8fa1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Cañón Ranger 50, Mira SUSAT Multizoom, Empuñadura Agente de Campo, Munición de 45."
				}
			},
			{
				_id: "619c598220afb80009c812c5",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1d8d9bf84855a680f8ee9",
					"60e1da40bf84855a680f8f19",
					"60e1dac1bf84855a680f8f3b",
					"60e1da8bbf84855a680f8f2d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador, Cañón Fuerza Operativa 49.5, Culata Raider, Vendaje de Serpiente, STANAG de 50."
				}
			},
			{
				_id: "619c5d875e1817000898970b",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e356a2bf84855a680f9705",
					"60e1dac1bf84855a680f8f3b",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Fuerza Operativa, Láser Foco de Tigre, Culata Raider, 53 balas tambor."
				}
			},
			{
				_id: "619c5f0b20afb80009c81333",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Fuerza Operativa, Mira x4, Empuñadura Agente de Campo, Vendaje de Serpiente."
				}
			},
			{
				_id: "619c5fa020afb80009c8135e",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da9abf84855a680f8f31",
					"60e1dac1bf84855a680f8f3b",
					"60e1da5cbf84855a680f8f21",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Empuñadura Matón, Vendaje de Serpiente, Culata Raider, Munición 50 normal. "
				}
			},
			{
				_id: "619c61025e18170008989779",
				baseId: "60df4b35bf84855a680f88fa",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Mp5mw: Silenciador Monolítico integrado, Culata Plegable FTAC, Empuñadura Frontal de Mercenario, Prestidigitación, Munición de 45 balas."
				}
			},
			{
				_id: "619c62075e1817000898978e",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae3fe580dd3004e5dada",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador Agency, Cañón de Competencia, Mira x3, Empuñadura de campo, Empuñadura Trasera de Serpiente."
				}
			},
			{
				_id: "619c62695e1817000898979d",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e1e4d7bf84855a680f8fad",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Silenciador GRU, Fuerza Operativa, Láser Foco de Tigre, Culata PKM Spetsnaz, Vendaje de Serpiente."
				}
			},
			{
				_id: "61b50059532f3b00082164cb",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b134c01ede1b55003fd164",
					"61b10371cbb40a531ccf04e5",
					"61b2739676830d4150678245",
					"61b1072acbb40a531ccf05cb",
					"61b226a976830d4150677d17",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d90cbb40a531ccf0704",
					"61b10e23cbb40a531ccf0740",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Boca de cañón: Estabilizador FB | Cañón: Anastasia de Francotirador | Mira: G16 x 2,5 | Culata: Armazón ZAC | Acople: Tope de Mano para M1941 | Cargador: Tambores de 6,5mm Sakura | Munición: Alargada | Empuñadura Trasera: Empuñadura Punteada | Ventaja: Empuñadura Segura | Ventaja2: Disponible."
				}
			},
			{
				_id: "61b5064dc72ddb0009db40ed",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b291e676830d415067871c",
					"61b10853cbb40a531ccf0631",
					"61b103d2cbb40a531ccf0505",
					"61b10708cbb40a531ccf05c1",
					"61b293f076830d415067874a",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d90cbb40a531ccf0704",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Boca de cañón: Estabilizador FB | Cañón: Empress de 140mm Rápido | Mira: Reflector Slate | Culata: Culata Eliminada | Acople: Empuñadura Delantera para Carver | Cargador: 7.62mm Gorenko 71 Proyectiles | Munición: Punta Hueca | Empuñadura Trasera: Empuñadura Punteada | Ventaja: Rápido | Ventaja2: Rapidez."
				}
			},
			{
				_id: "61c40f2265be8600097a31f5",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b103dbcbb40a531ccf0507",
					"61b2b23b76830d4150678d1d",
					"61b2b32176830d4150678d33",
					"61b1072acbb40a531ccf05cb",
					"61b2b3ad76830d4150678d43",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Boca de cañón: Silenciador Mercury | Cañón: Queen's de 705mm Royal | Mira: SVT 40 PU | Culata: Queen's Modal 11 BH | Acople: Tope de  Mano para M1941| Cargador: Cargadores de 6,5mm Sakura con 40 proyectiles | Munición: Alargada | Empuñadura Trasera: Empuñadura de Polímero | Ventaja: Empuñadura Segura | Ventaja2: Totalmente Recargado."
				}
			},
			{
				_id: "61c4142865be8600097a3246",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10383cbb40a531ccf04eb",
					"61b107f7cbb40a531ccf060d",
					"61b10735cbb40a531ccf05cf",
					"61b28b7476830d41506785a6",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d90cbb40a531ccf0704",
					"61b10e49cbb40a531ccf0752",
					"61b10dc2cbb40a531ccf0710"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Boca de cañón: Amplificador de Retroceso | Cañón: Krausnick 317mm 04B | Mira: Krausnick IS02M | Culata: Krausnick 33M Plegable | Acople: Para Mark 6 | Cargador: Cargadores de 7,2mm Gorenko con 32 proyectiles | Munición: Punta Hueca | Empuñadura Trasera: Empuñadura Punteada | Ventaja: Refuerzo | Ventaja2: Rapidez."
				}
			}
		],
		managers: [{ uid: "yJdxfgtDkWR5ElsbER5eT50fL3y2", role: "Owner" }],
		createdDate: "2021-11-22T21:12:16.746Z",
		displayName: "Clamp",
		urlSafeName: "Clamp",
		__v: 0,
		previousUpdater: "Verop"
	},
	{
		_id: "610623e8e9dfe2000830cc98",
		meta: {
			hasProfileImage: true,
			profileImage: "610623e8e9dfe2000830cc98",
			links: {
				twitter: "https://twitter.com/QRlSSY",
				youtube: "https://www.youtube.com/c/Qrissy",
				tiktok: "https://www.tiktok.com/@qrlssy",
				twitch: "https://www.twitch.tv/Qrissy",
				instagram: "https://www.instagram.com/qrlssy",
				discord: "https://discord.gg/invite/qanq"
			},
			youtubeAutoplay: true
		},
		viewCount: 2839,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "610714c22aee0f0008cddde7",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e22277bf84855a680f9368",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610715a143aa6c0008535587",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c2abf84855a680f914e",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e478bf84855a680f8fa1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "weIjr72GNh0",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6107163043aa6c000853559a",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e35c3abf84855a680f981b"
				],
				userData: {
					customTitle: "",
					blueprint: "Candy Cone",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6107168743aa6c00085355ac",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e4d7bf84855a680f8fad",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6107170143aa6c00085355bf",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1d9c7bf84855a680f8eff",
					"60e1e534bf84855a680f8fb3",
					"60e1e48fbf84855a680f8fa7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61071746a4c78200083226eb",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610717c243aa6c00085355df",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df148a26dd1acccc5e45"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61071813a4c7820008322713",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e359eabf84855a680f97b1",
					"60e3524fbf84855a680f9671",
					"60e1d997bf84855a680f8ef3",
					"60e35a20bf84855a680f97b9",
					"60e1da3bbf84855a680f8f17"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Tab6SEF8vUM",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "610718c6a4c7820008322732",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1da62bf84855a680f8f23",
					"60e356a2bf84855a680f9705",
					"60e1da3bbf84855a680f8f17"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61071902a4c7820008322741",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e357f1bf84855a680f9751",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "",
					blueprint: "Love Lust",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6107195ca4c7820008322760",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60e379dfbf84855a680f9b66",
					"60df7279bf84855a680f8a53",
					"60df73cbbf84855a680f8a8d",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "fSOzQFSg78g"
				}
			},
			{
				_id: "610719cd43aa6c0008535629",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1da40bf84855a680f8f19",
					"60e352e1bf84855a680f9687",
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e353b4bf84855a680f9693"
				],
				userData: {
					customTitle: "",
					blueprint: "Loud Pipe",
					featured: false,
					youtubeURL: "vsNnSKHjYNA",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61071a28a4c7820008322797",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e20e3ebf84855a680f91ae",
					"60e1d997bf84855a680f8ef3",
					"60e20f2fbf84855a680f91bc",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610c2b461b5e6400082f4092",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3d5f08a26dd1acccc5c8f",
					"60e3ceff8a26dd1acccc5be3",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610c2bb8a0a6e60009837534",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610c2c2ba0a6e60009837578",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df7471bf84855a680f8aa5",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610c2c6dfd32e30009828868",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610c2c8f1b5e6400082f40f4",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df72e9bf84855a680f8a67",
					"60df84aabf84855a680f8c6a",
					"60df7471bf84855a680f8aa5",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610c2cbc1b5e6400082f411a",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae3fe580dd3004e5dada",
					"60e1d9c7bf84855a680f8eff",
					"60e1da53bf84855a680f8f1d",
					"60e1daaebf84855a680f8f33"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "610c2d02fd32e300098288a6",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60e3f8098a26dd1acccc62c0",
					"60e3fedd8a26dd1acccc6430",
					"60df7279bf84855a680f8a53"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6148711c4fc97500084f0c32",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "AR",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "617266ff120b9000080335f3",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1def0bf84855a680f8f97",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff",
					"60e1ded1bf84855a680f8f95"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61726806120b900008033631",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"61161a74147d3f4f203722bc",
					"61161ad2147d3f4f203722c8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617268c0693d7b0009886e91",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e4dcbf84855a680f8faf",
					"60f0b3191d00452cd0554200",
					"60e1dac1bf84855a680f8f3b",
					"60f0b3671d00452cd0554206"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617bf7d849b72e0008583b54",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20b1fbf84855a680f9102",
					"60e1d9c7bf84855a680f8eff",
					"60e20a9ebf84855a680f90f8",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b5d2981f33b200088883cf",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10446cbb40a531ccf0527",
					"61b10d90cbb40a531ccf0704",
					"61b134c01ede1b55003fd164",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b226a976830d4150677d17",
					"61b27d1476830d415067839c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b5d848e521e2000995fcfc",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b28b7476830d41506785a6",
					"61b10cdbcbb40a531ccf06e8",
					"61b10383cbb40a531ccf04eb",
					"61b10468cbb40a531ccf0531",
					"61b10735cbb40a531ccf05cf",
					"61b1062ecbb40a531ccf058b",
					"61b107f7cbb40a531ccf060d",
					"61b10d90cbb40a531ccf0704",
					"61b10e49cbb40a531ccf0752",
					"61b10e1ccbb40a531ccf073c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b66721d4df2d00089d3ba2",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10cdfcbb40a531ccf06ea",
					"61b10446cbb40a531ccf0527",
					"61b10708cbb40a531ccf05c1",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2820e76830d4150678440",
					"61b2831176830d4150678460",
					"61b283c976830d4150678476"
				],
				userData: {
					customTitle: "AR",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b872d7232413000866fb08",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b103d2cbb40a531ccf0505",
					"61b10468cbb40a531ccf0531",
					"61b10735cbb40a531ccf05cf",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2825876830d415067844c",
					"61b10853cbb40a531ccf0631",
					"61b283c976830d4150678476",
					"61b2841a76830d415067847e"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b8c57fd425550008139562",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10cdbcbb40a531ccf06e8",
					"61b10468cbb40a531ccf0531",
					"61b10708cbb40a531ccf05c1",
					"61b10853cbb40a531ccf0631",
					"61b10d87cbb40a531ccf0700",
					"61b10e23cbb40a531ccf0740",
					"61b10e49cbb40a531ccf0752",
					"61b291a176830d4150678716",
					"61b2927676830d415067872a",
					"61b2936d76830d4150678744"
				],
				userData: {
					customTitle: "Hipfire",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c5a4ea77737000098da06e",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b103dbcbb40a531ccf0507",
					"61b10725cbb40a531ccf05c9",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2b3ad76830d4150678d43",
					"61b2b32176830d4150678d33",
					"61b2b23b76830d4150678d1d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c5a5e0ab1b0b0009ffc04b",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10df1cbb40a531ccf0728",
					"61b10dd1cbb40a531ccf071b",
					"61b106e1cbb40a531ccf05b5",
					"61b1088dcbb40a531ccf0643"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61dc0317e6797d0009799045",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b103dbcbb40a531ccf0507",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2aaf976830d4150678bd8",
					"61b2aa9876830d4150678bca",
					"61b2a97676830d4150678ba8",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "XAQQDg2zoDhAiVkLPJ9KQRB4MYS2", role: "Owner" },
			{ uid: "68BLS9f8G5SlY9Op52h2jATQc8m1", role: "Administrator" },
			{ uid: "7mE7egFWceRAYtbPISrIjdefN673", role: "Administrator" },
			{ uid: "pYcBuFXmVcRyJw31uvvDtiHdhvA3", role: "Administrator" }
		],
		createdDate: "2021-08-01T04:32:40.909Z",
		displayName: "Qrissy",
		urlSafeName: "Qrissy",
		__v: 0,
		previousUpdater: "Genx"
	},
	{
		_id: "61191f326893470008adc61e",
		meta: {
			hasProfileImage: true,
			profileImage: "61191f326893470008adc61e",
			links: {
				twitch: "https://www.twitch.tv/Jukeyz",
				youtube: "https://www.youtube.com/Jukeyz",
				instagram: "https://www.instagram.com/Jukeyz",
				facebook: "https://www.facebook.com/Jukeyz",
				twitter: "https://twitter.com/Jukeyz",
				tiktok: "https://www.tiktok.com/@Jukeyz",
				discord: "https://discord.gg/jfVVKgv"
			},
			youtubeAutoplay: true
		},
		viewCount: 2648,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "6119216da29d5f00099a6881",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1e4d7bf84855a680f8fad",
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "rhX9nxy8jx4",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6119222ba29d5f00099a6908",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1e4dcbf84855a680f8faf",
					"60e1e464bf84855a680f8f9d",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "j9u6p_fA4Jk&t=61s"
				}
			},
			{
				_id: "6119226b6893470008adc81e",
				baseId: "60df4977bf84855a680f88ea",
				options: [
					"60e3524fbf84855a680f9671",
					"60e1d997bf84855a680f8ef3",
					"60e35405bf84855a680f96a1",
					"60e1dac1bf84855a680f8f3b",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611922b8cbc4a10009190a84",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7471bf84855a680f8aa5",
					"60e3a54a8a26dd1acccc59a0",
					"60df72e9bf84855a680f8a67",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611923bba29d5f00099a69af",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "nSOH7lGkzh0"
				}
			},
			{
				_id: "611924106893470008adc8b5",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e1e8ecbf84855a680f903e",
					"60e3d6158a26dd1acccc5c9b",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6119242fa29d5f00099a69fb",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1e8ecbf84855a680f903e",
					"60e382cfbf84855a680f9c58",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "D2AWMX9rhz8",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6119244d6893470008adc8c0",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2248abf84855a680f937e",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "pb8Tc0mCSY0"
				}
			},
			{
				_id: "611924c0a29d5f00099a6a1e",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60e342b1bf84855a680f94fb",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611924ffa29d5f00099a6a34",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6119252e6893470008adc8e7",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1da8bbf84855a680f8f2d",
					"60e1dac7bf84855a680f8f3d",
					"60e1da40bf84855a680f8f19",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "m76IvMU-46U"
				}
			},
			{
				_id: "61192589a29d5f00099a6a54",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7463bf84855a680f8aa3",
					"60df73b1bf84855a680f8a89",
					"60e22060bf84855a680f9304",
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "gTz6vBw3i0g"
				}
			},
			{
				_id: "611925db6893470008adc921",
				baseId: "60ded203bf84855a680f8883",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1d997bf84855a680f8ef3",
					"60e1e8c5bf84855a680f903c",
					"60e35c1bbf84855a680f9817",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611926066893470008adc934",
				baseId: "60ded4b0bf84855a680f8899",
				options: [
					"60df7203bf84855a680f8a49",
					"60e33f11bf84855a680f9486",
					"60df72e9bf84855a680f8a67",
					"60e33fedbf84855a680f949e",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6119264c6893470008adc954",
				baseId: "60df6610bf84855a680f8978",
				options: [
					"60e3524fbf84855a680f9671",
					"60e3f1338a26dd1acccc619e",
					"60e3f3bd8a26dd1acccc6202",
					"60e1dac7bf84855a680f8f3d",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6119269d6893470008adc968",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60e34da5bf84855a680f9617",
					"60df73cbbf84855a680f8a8d",
					"60e34416bf84855a680f9509",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611926e0a29d5f00099a6a8f",
				baseId: "60df4a4fbf84855a680f88f2",
				options: [
					"60df7203bf84855a680f8a49",
					"60e36ac3bf84855a680f9a18",
					"60df73b1bf84855a680f8a89",
					"60e37162bf84855a680f9a26",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611927136893470008adc97a",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d87ebf84855a680f8edb",
					"60e3f1338a26dd1acccc619e",
					"60e1d98fbf84855a680f8ef1",
					"60e3f6bb8a26dd1acccc627e",
					"60e3f1498a26dd1acccc61a2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192749a29d5f00099a6aa8",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d877bf84855a680f8ed9",
					"61161a74147d3f4f203722bc",
					"60e1da5cbf84855a680f8f21",
					"61161ad2147d3f4f203722c8",
					"60e1dabbbf84855a680f8f39"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192a80a8e7460008efea5c",
				baseId: "60df5c3ebf84855a680f8926",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3ccda8a26dd1acccc5b82",
					"60df72e9bf84855a680f8a67",
					"60e3ccfb8a26dd1acccc5b88"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192ab96893470008adca85",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d99ebf84855a680f8ef5",
					"60e38d5abf84855a680f9da7",
					"60e1dac7bf84855a680f8f3d"
				],
				userData: {
					customTitle: "RAT",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192b096893470008adcae2",
				baseId: "60df619dbf84855a680f8959",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ed2d8a26dd1acccc60e8",
					"60df7280bf84855a680f8a55",
					"60e3ed588a26dd1acccc60f0",
					"60e3ec1f8a26dd1acccc60b4"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "rQFoIrKB_yA"
				}
			},
			{
				_id: "61192b34a8e7460008efeaad",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "oVIn8-OKd38",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61192b4b6893470008adcb3c",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Q0lTZRjRUN0"
				}
			},
			{
				_id: "61192b61a8e7460008efeac7",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160",
					"60e20c63bf84855a680f9156"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61192bc96893470008adcb81",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d",
					"60e1da3bbf84855a680f8f17"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192bf6a8e7460008efeae7",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df7298bf84855a680f8a59",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192c35a8e7460008efeb01",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e3ceff8a26dd1acccc5be3",
					"60e1e464bf84855a680f8f9d",
					"60e3d0a78a26dd1acccc5c31"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61192c56a8e7460008efeb12",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192caaa8e7460008efeb30",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e4af44e580dd3004e5dae6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192cc26893470008adcbb2",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "NXZJLsTx5aU",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61192cdf6893470008adcbc1",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60df7280bf84855a680f8a55",
					"60e379dfbf84855a680f9b66",
					"60df73cbbf84855a680f8a8d",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "In1nYZpjamI"
				}
			},
			{
				_id: "61192d1b6893470008adcbe8",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df73b1bf84855a680f8a89",
					"60df749dbf84855a680f8aad",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192d5ca8e7460008efeb6a",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e35804bf84855a680f9755",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e35908bf84855a680f9759",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "MgtP4K3ZOmo",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61192d8a6893470008adcbfc",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e38f8cbf84855a680f9e1d",
					"60df7279bf84855a680f8a53",
					"60e38fa4bf84855a680f9e21",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "RAT",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192dbaa8e7460008efeb8a",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e353b4bf84855a680f9693",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192df6a8e7460008efeba4",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df73b1bf84855a680f8a89",
					"60df72e9bf84855a680f8a67",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192e296893470008adcc21",
				baseId: "60df5accbf84855a680f8918",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e39fc9bf84855a680fa114",
					"60e1def0bf84855a680f8f97",
					"60e1e542bf84855a680f8fb5",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192e54477af80008be7e3a",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b",
					"60e39c15bf84855a680fa06a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "a6jUhH94qn4",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61192e9d477af80008be7e9f",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e3891abf84855a680f9d5a",
					"60e1d98fbf84855a680f8ef1",
					"60e1da2bbf84855a680f8f11",
					"60e38950bf84855a680f9d64"
				],
				userData: {
					customTitle: "RAT",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192ecc80b8090008d13e19",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1dac1bf84855a680f8f3b",
					"60e3e33e8a26dd1acccc5efe",
					"60e1d9e6bf84855a680f8f07"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192ee880b8090008d13e47",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60df7279bf84855a680f8a53",
					"60e3fedd8a26dd1acccc6430",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192f0e756bc80008eb31a5",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9d8bf84855a680f8f03",
					"60e20f2fbf84855a680f91bc",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192f24756bc80008eb31b8",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "AR",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61192f6880b8090008d13e71",
				baseId: "60df616fbf84855a680f8957",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ebf58a26dd1acccc60aa",
					"60df7280bf84855a680f8a55",
					"60e3ec1f8a26dd1acccc60b4",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61193021756bc80008eb321e",
				baseId: "6109bb97ec0dea4e34958025",
				options: [
					"61099cdf56bb294be45a7e2a",
					"60df7280bf84855a680f8a55",
					"60e37d76bf84855a680f9c02",
					"60df73cbbf84855a680f8a8d",
					"60df72b5bf84855a680f8a5d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61193059477af80008be7f05",
				baseId: "60df5b3dbf84855a680f891c",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3b5238a26dd1acccc59ea",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611930a3477af80008be7f20",
				baseId: "60df4bcfbf84855a680f88fe",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37d76bf84855a680f9c02",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611930e9477af80008be7f76",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60e3c8508a26dd1acccc5af1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61193114756bc80008eb3285",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "iARqcURxlFw"
				}
			},
			{
				_id: "6119314d477af80008be7fa7",
				baseId: "60df674bbf84855a680f8984",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fbbf8a26dd1acccc637b",
					"60df7279bf84855a680f8a53",
					"60e3f7d38a26dd1acccc62b6",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6119317c477af80008be7fd5",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20a9ebf84855a680f90f8",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611931a5756bc80008eb32c8",
				baseId: "60df4b65bf84855a680f88fc",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37babbf84855a680f9bac",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e21301bf84855a680f9250"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611931d6477af80008be7ff6",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60e39325bf84855a680f9e75",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "RAT",
					blueprint: "",
					featured: false,
					youtubeURL: "Q0lTZRjRUN0"
				}
			},
			{
				_id: "61193b090302b700083d4681",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1ded1bf84855a680f8f95",
					"60e1def0bf84855a680f8f97",
					"60e1dd86bf84855a680f8f81",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611aba847a839a00097384e8",
				baseId: "60df67a3bf84855a680f8988",
				options: [
					"60df7279bf84855a680f8a53",
					"60e3f7db8a26dd1acccc62ba",
					"60e3fe068a26dd1acccc63ed",
					"60e3f8098a26dd1acccc62c0",
					"60e3fd4e8a26dd1acccc63dd"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abb651a2387000822c802",
				baseId: "60df665ebf84855a680f897a",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f5848a26dd1acccc6242",
					"60e1d98fbf84855a680f8ef1",
					"60e3f59c8a26dd1acccc6248",
					"60e3f1498a26dd1acccc61a2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abbac1a2387000822c813",
				baseId: "60df6779bf84855a680f8986",
				options: [
					"60e3fc8a8a26dd1acccc63a9",
					"60df71eebf84855a680f8a43",
					"60df749dbf84855a680f8aad",
					"60e3f7d38a26dd1acccc62b6",
					"60e3db4b8a26dd1acccc5d9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abbf12eca960008972d6b",
				baseId: "60df4fabbf84855a680f890a",
				options: [
					"60e3946fbf84855a680f9f12",
					"60e38f62bf84855a680f9e17",
					"60df74dcbf84855a680f8abb",
					"60df7279bf84855a680f8a53",
					"60e39531bf84855a680f9f2a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abc721a2387000822c82b",
				baseId: "60df5ce4bf84855a680f892a",
				options: [
					"60e4b092e580dd3004e5db3c",
					"60e3ceff8a26dd1acccc5be3",
					"60e1d9c7bf84855a680f8eff",
					"60e3d6b98a26dd1acccc5c9f",
					"60e35ef7bf84855a680f987b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abcb72eca960008972d82",
				baseId: "60df6206bf84855a680f895d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3efc98a26dd1acccc6167",
					"60df7280bf84855a680f8a55",
					"60e3db598a26dd1acccc5da1",
					"60e3ed588a26dd1acccc60f0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abd2a1a2387000822c84c",
				baseId: "60df5f71bf84855a680f8945",
				options: [
					"60df7361bf84855a680f8a7d",
					"60e3db308a26dd1acccc5d97",
					"60df71fdbf84855a680f8a47",
					"60e3db878a26dd1acccc5da9",
					"60e3db598a26dd1acccc5da1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abd6707ab8d000850e8e6",
				baseId: "60ded51abf84855a680f889d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3450fbf84855a680f9557",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abdc62eca960008972d99",
				baseId: "60ded5b6bf84855a680f88a3",
				options: [
					"60df7203bf84855a680f8a49",
					"60df72e9bf84855a680f8a67",
					"60df7280bf84855a680f8a55",
					"60e349afbf84855a680f95b1",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abdf81a2387000822c86b",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37347bf84855a680f9a78",
					"60df7280bf84855a680f8a55",
					"60e37356bf84855a680f9a7a",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abe5907ab8d000850e900",
				baseId: "60df4f10bf84855a680f8904",
				options: [
					"60e38e61bf84855a680f9dda",
					"60e1d99ebf84855a680f8ef5",
					"60e38859bf84855a680f9d48",
					"60df738dbf84855a680f8a85",
					"60e38ee4bf84855a680f9dea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abedf07ab8d000850e91b",
				baseId: "60df5053bf84855a680f8910",
				options: [
					"60e39a23bf84855a680fa00f",
					"60df7279bf84855a680f8a53",
					"60df749dbf84855a680f8aad",
					"60df7203bf84855a680f8a49",
					"60e39a57bf84855a680fa013"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abf2d1a2387000822c89f",
				baseId: "60df4934bf84855a680f88e8",
				options: [
					"60e35ef7bf84855a680f987b",
					"60e1d98fbf84855a680f8ef1",
					"60e1daaebf84855a680f8f33",
					"60e1d9f6bf84855a680f8f0b",
					"60e35e33bf84855a680f986f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abfb307ab8d000850e94c",
				baseId: "60df60c4bf84855a680f8951",
				options: [
					"60e3e6918a26dd1acccc5fac",
					"60e353f0bf84855a680f969d",
					"60e1da57bf84855a680f8f1f",
					"60e1d99ebf84855a680f8ef5",
					"60e3e3308a26dd1acccc5efc"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611abff51a2387000822c8cf",
				baseId: "60df5a9dbf84855a680f8916",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39de7bf84855a680fa0c2",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e39c46bf84855a680fa072"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac0291a2387000822c8df",
				baseId: "60df610bbf84855a680f8953",
				options: [
					"60e3e81a8a26dd1acccc600e",
					"60e3e2b78a26dd1acccc5ee2",
					"60e1dac7bf84855a680f8f3d",
					"60e1da23bf84855a680f8f0f",
					"60e3e3578a26dd1acccc5f06"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac0672eca960008972dcd",
				baseId: "60df5ba4bf84855a680f8920",
				options: [
					"60df7203bf84855a680f8a49",
					"60df72e9bf84855a680f8a67",
					"60e3c60c8a26dd1acccc5a9a",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac0d22eca960008972dd9",
				baseId: "60df5b77bf84855a680f891e",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3b9a98a26dd1acccc5a40",
					"60df72e9bf84855a680f8a67",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac1361a2387000822c913",
				baseId: "60df5fa3bf84855a680f8947",
				options: [
					"60e3dd3a8a26dd1acccc5dfc",
					"60df7203bf84855a680f8a49",
					"60df732abf84855a680f8a73",
					"60df7280bf84855a680f8a55",
					"60e3dd548a26dd1acccc5e02"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac1b325b5770009d4fcaf",
				baseId: "60df65dabf84855a680f8976",
				options: [
					"60e3f1068a26dd1acccc6194",
					"60e1d997bf84855a680f8ef3",
					"60e1dabbbf84855a680f8f39",
					"60e1d9c0bf84855a680f8efd",
					"60e3f1618a26dd1acccc61a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac24525b5770009d4fcca",
				baseId: "60df4feebf84855a680f890c",
				options: [
					"60e39680bf84855a680f9f6f",
					"60e39325bf84855a680f9e75",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e3974abf84855a680f9f89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac2a8133e7e000882c0bb",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1d997bf84855a680f8ef3",
					"60e1dac1bf84855a680f8f3b",
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60f0b3671d00452cd0554206"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "a6jUhH94qn4",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611ac3071a2387000822c967",
				baseId: "60ded588bf84855a680f88a1",
				options: [
					"60df7e65bf84855a680f8c14",
					"60df7e79bf84855a680f8c16",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac35f133e7e000882c0dd",
				baseId: "60df4ac6bf84855a680f88f6",
				options: [
					"60e3757bbf84855a680f9ac3",
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df749dbf84855a680f8aad",
					"60e375adbf84855a680f9ac9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac4822eca960008972dfb",
				baseId: "60df4b05bf84855a680f88f8",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37764bf84855a680f9b0a",
					"60df7279bf84855a680f8a53",
					"60df749dbf84855a680f8aad",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac5b81a2387000822c9ad",
				baseId: "60df6050bf84855a680f894d",
				options: [
					"60e3e2cf8a26dd1acccc5ee8",
					"60e353f0bf84855a680f969d",
					"60e3e2a18a26dd1acccc5edc",
					"60e1dab5bf84855a680f8f37",
					"60e1da2fbf84855a680f8f13"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac60f133e7e000882c175",
				baseId: "60df66efbf84855a680f8980",
				options: [
					"60e3f92a8a26dd1acccc62f6",
					"60e3f90f8a26dd1acccc62f0",
					"60e3f9828a26dd1acccc6302",
					"60e3f7d38a26dd1acccc62b6",
					"60e3f9588a26dd1acccc62fc"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac6792eca960008972e4e",
				baseId: "60df61dabf84855a680f895b",
				options: [
					"60e3ee828a26dd1acccc6128",
					"60df7454bf84855a680f8aa1",
					"60e3eecf8a26dd1acccc6138",
					"60e3eebe8a26dd1acccc6136",
					"60df7368bf84855a680f8a7f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac6c62eca960008972e6c",
				baseId: "60df5c07bf84855a680f8924",
				options: [
					"60df7203bf84855a680f8a49",
					"60df72e9bf84855a680f8a67",
					"60e3ca228a26dd1acccc5b31",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac79fa6ceeb000900c206",
				baseId: "60df5f46bf84855a680f8943",
				options: [
					"60df72e9bf84855a680f8a67",
					"60e3d98b8a26dd1acccc5d45",
					"60df744fbf84855a680f8a9f",
					"60df7203bf84855a680f8a49",
					"60e34416bf84855a680f9509"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac8278afc51000956ccf8",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60e3e05a8a26dd1acccc5e84",
					"60e3e13e8a26dd1acccc5e98",
					"60df7280bf84855a680f8a55",
					"60df7203bf84855a680f8a49",
					"60e3e0938a26dd1acccc5e8c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac87e1a2387000822c9e0",
				baseId: "60df49e3bf84855a680f88ee",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3642abf84855a680f996d",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac8c61a2387000822c9f4",
				baseId: "611620ae147d3f4f203722f6",
				options: [
					"61161b75147d3f4f203722e4",
					"60e1d997bf84855a680f8ef3",
					"61161b2b147d3f4f203722d6",
					"60e1da40bf84855a680f8f19",
					"60e35e33bf84855a680f986f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac8fc8afc51000956cd2f",
				baseId: "60df5d75bf84855a680f8930",
				options: [
					"60e3d77e8a26dd1acccc5ced",
					"60e3d8938a26dd1acccc5d03",
					"60e1daaebf84855a680f8f33",
					"60e1e8c5bf84855a680f903c",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac92ba6ceeb000900c236",
				baseId: "60df4f75bf84855a680f8908",
				options: [
					"60e39101bf84855a680f9e65",
					"60e39325bf84855a680f9e75",
					"60df7279bf84855a680f8a53",
					"60df7203bf84855a680f8a49",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac9552eca960008972ef4",
				baseId: "60df66bfbf84855a680f897e",
				options: [
					"60e3f8098a26dd1acccc62c0",
					"60df7279bf84855a680f8a53",
					"60df7203bf84855a680f8a49",
					"60e3f7d38a26dd1acccc62b6",
					"60e3f7c48a26dd1acccc62b4"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611ac9a8a6ceeb000900c255",
				baseId: "60df613fbf84855a680f8955",
				options: [
					"60e3ea3c8a26dd1acccc6058",
					"60e1d98fbf84855a680f8ef1",
					"60e1dac1bf84855a680f8f3b",
					"60e3e2c38a26dd1acccc5ee6",
					"60e3ea9c8a26dd1acccc6060"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611aca328afc51000956cd77",
				baseId: "60df671dbf84855a680f8982",
				options: [
					"60df71eebf84855a680f8a43",
					"60df7279bf84855a680f8a53",
					"60df728fbf84855a680f8a57",
					"60e3f7d38a26dd1acccc62b6",
					"60e3d9c98a26dd1acccc5d51"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61b2103367059c00083fdbc2",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10487cbb40a531ccf053b",
					"61b106e1cbb40a531ccf05b5",
					"61b10371cbb40a531ccf04e5",
					"61b1088dcbb40a531ccf0643",
					"61b1072acbb40a531ccf05cb",
					"61b10b81cbb40a531ccf0668",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d8bcbb40a531ccf0702",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b2110c67059c00083fdbd9",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b1062ecbb40a531ccf058b",
					"61b10383cbb40a531ccf04eb",
					"61b107f7cbb40a531ccf060d",
					"61b10708cbb40a531ccf05c1",
					"61b10c63cbb40a531ccf06bc",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d87cbb40a531ccf0700",
					"61b10dfbcbb40a531ccf072c",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ba5a26b077030008686dff",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b134c01ede1b55003fd164",
					"61b10371cbb40a531ccf04e5",
					"61b2261476830d4150677d15",
					"61b1072acbb40a531ccf05cb",
					"61b226a976830d4150677d17",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ba5aecb077030008686e04",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b291a176830d4150678716",
					"61b10708cbb40a531ccf05c1",
					"61b292d876830d4150678734",
					"61b293f076830d415067874a",
					"61b10ccecbb40a531ccf06e2",
					"61b10d90cbb40a531ccf0704",
					"61b10e1ccbb40a531ccf073c",
					"61b10e3ecbb40a531ccf074c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "buDt2AWKTad7CfFVVZceHGSGFkU2", role: "Owner" },
			{ uid: "V9Ll0uhYtNSg9dbK1v4n0L6MBp23", role: "Administrator" }
		],
		createdDate: "2021-08-15T14:05:38.705Z",
		displayName: "Jukeyz",
		urlSafeName: "Jukeyz",
		__v: 0,
		previousUpdater: "KBovvy99"
	},
	{
		_id: "611d1983c672bc0009ed9c14",
		meta: { hasProfileImage: false, profileImage: "", links: {} },
		viewCount: 2096,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "611d19d534d2be00095a558f",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60df7279bf84855a680f8a53",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1a0ac672bc0009ed9c29",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1a311d69ac0009ae0c72",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5f08a26dd1acccc5c8f",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1a5d764c6200094958b6",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e3524fbf84855a680f9671",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1a841d69ac0009ae0c7b",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1aa2764c6200094958c5",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1ac6764c6200094958cc",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1afb764c6200094958d9",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1b1f764c6200094958e0",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1b57764c6200094958ee",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1b7b1d69ac0009ae0c88",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c2abf84855a680f914e",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1b9227ab120009d4fe23",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e3524fbf84855a680f9671",
					"60e359eabf84855a680f97b1",
					"60e1d98fbf84855a680f8ef1",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1bc627ab120009d4fe28",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df72b5bf84855a680f8a5d",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1bf21d69ac0009ae0c8f",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1d9c7bf84855a680f8eff",
					"60e1da5cbf84855a680f8f21",
					"60e3d0e18a26dd1acccc5c3b"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1c101d69ac0009ae0c94",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df728fbf84855a680f8a57",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1c271d69ac0009ae0c99",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e3524fbf84855a680f9671",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"6103130a84d1eb258ce0f4c2",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1c491d69ac0009ae0ca1",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e1d9c7bf84855a680f8eff",
					"60e35908bf84855a680f9759",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1c781d69ac0009ae0cab",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "611d1ca8764c6200094958fd",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e3524fbf84855a680f9671",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e35c3abf84855a680f981b",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1cc91d69ac0009ae0cba",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df7203bf84855a680f8a49",
					"60df73cbbf84855a680f8a8d",
					"60e379dfbf84855a680f9b66",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1ce427ab120009d4fe38",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "611d1d021d69ac0009ae0cc8",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60df73cbbf84855a680f8a8d",
					"60e39325bf84855a680f9e75"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6130d10c62e1c100089ec504",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e3524fbf84855a680f9671",
					"60f0b3671d00452cd0554206",
					"60e1e4dcbf84855a680f8faf",
					"60f0b3191d00452cd0554200",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6130d12a469be30008ef7d20",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1da62bf84855a680f8f23",
					"60e1d9e6bf84855a680f8f07",
					"60e39c15bf84855a680fa06a"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61927ac4383be50008d5f886",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"61161a8a147d3f4f203722c0",
					"60e1da62bf84855a680f8f23",
					"61161ad2147d3f4f203722c8",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61927afd383be50008d5f895",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ded1bf84855a680f8f95",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6192a0eca552620008780a7a",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d98fbf84855a680f8ef1",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1da5cbf84855a680f8f21",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6192a1ea54ac8c00082341c8",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20a9ebf84855a680f90f8",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6192a21e54ac8c00082341ce",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60df7279bf84855a680f8a53",
					"60e3fedd8a26dd1acccc6430",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6192a25454ac8c00082341da",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61a9fb1244052500088e74b0",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e3f69a8a26dd1acccc6278",
					"60e1d997bf84855a680f8ef3",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "NATARSHA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b74d3d23875400091d8300",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b28b7476830d41506785a6",
					"61b10cd6cbb40a531ccf06e6",
					"61b10383cbb40a531ccf04eb",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b1073fcbb40a531ccf05d3",
					"61b107f7cbb40a531ccf060d",
					"61b10d75cbb40a531ccf06f6",
					"61b10e49cbb40a531ccf0752",
					"61b10dc2cbb40a531ccf0710"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b74dae23875400091d8304",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b134c01ede1b55003fd164",
					"61b10371cbb40a531ccf04e5",
					"61b2739676830d4150678245",
					"61b10708cbb40a531ccf05c1",
					"61b226a976830d4150677d17",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bb42349549680009ec2866",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b291a176830d4150678716",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b2936d76830d4150678744",
					"61b10d75cbb40a531ccf06f6",
					"61b10ccecbb40a531ccf06e2",
					"61b10e1ccbb40a531ccf073c",
					"61b10e4ecbb40a531ccf0756"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bb428d9549680009ec286a",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e3524fbf84855a680f9671",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e353b4bf84855a680f9693",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bb79d4cd32520008d37fc1",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b106e1cbb40a531ccf05b5",
					"61b10371cbb40a531ccf04e5",
					"61b1088dcbb40a531ccf0643",
					"61b1072acbb40a531ccf05cb",
					"61b10c67cbb40a531ccf06be",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bd93261aabe50008335663",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2820e76830d4150678440",
					"61b2831176830d4150678460",
					"61b283c976830d4150678476",
					"61b1072acbb40a531ccf05cb",
					"61b10371cbb40a531ccf04e5",
					"61b10e23cbb40a531ccf0740",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c3002eadcb9d0009055ba6",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2b23b76830d4150678d1d",
					"61b103dbcbb40a531ccf0507",
					"61b2b32176830d4150678d33",
					"61b10725cbb40a531ccf05c9",
					"61b2b3ad76830d4150678d43",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c6fbc348cb0500094381b7",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2724376830d415067822b",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b2749b76830d415067825f",
					"61b10cd2cbb40a531ccf06e4",
					"61b10d75cbb40a531ccf06f6",
					"61b10ddccbb40a531ccf0720",
					"61b10e4ecbb40a531ccf0756"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "ourBB5aO1yehRyLxizChfcPVxS23", role: "Owner" }],
		createdDate: "2021-08-18T14:30:27.099Z",
		displayName: "Natarsha",
		urlSafeName: "Natarsha",
		__v: 0,
		previousUpdater: "CaoDung"
	},
	{
		_id: "61807a4c9d7a840008dbdcb6",
		meta: {
			hasProfileImage: true,
			profileImage: "61807a4c9d7a840008dbdcb6",
			links: {
				twitch: "https://www.twitch.tv/vierolii",
				youtube: "https://www.youtube.com/channel/UCpIXWJ0A4322JDCBx35klJw",
				tiktok: "https://www.tiktok.com/@vierolii?lang=it-IT"
			},
			youtubeAutoplay: true
		},
		viewCount: 2065,
		games: [{ id: "60da97598821ed46dc9c008c", code: "VieroLII" }],
		kits: [
			{
				_id: "618082961c37ba00087c726e",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df749dbf84855a680f8aad",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "REBIRTH",
					blueprint: "",
					featured: false,
					youtubeURL: "W2dQXp0XPKA",
					tiktokId: "",
					quote: "Build strana da psico"
				}
			},
			{
				_id: "618082c71c37ba00087c7287",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"61161a8a147d3f4f203722c0",
					"60e1d9c7bf84855a680f8eff",
					"61161ad2147d3f4f203722c8",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "LONG RANGE",
					blueprint: "",
					featured: false,
					youtubeURL: "MSLxdTceigI",
					tiktokId: "",
					quote:
						"Build Long Range attualmente l'assalto migliore in gioco, rinculo verticale gestibile ma comunque presente! 19/11/21"
				}
			},
			{
				_id: "6180830b1c37ba00087c728e",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60f0b3501d00452cd0554204",
					"60e1dac1bf84855a680f8f3b",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "mLvi6Z5vIlE&t=52s",
					tiktokId: "",
					quote:
						"Migliore mitraglietta in gioco, poco caricatore ma danno allucinante! 19/11/21"
				}
			},
			{
				_id: "6180835d1c37ba00087c72b9",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "Qj-Rbk6oAKc&t=19s",
					tiktokId: "",
					quote: "Ottima smg da sniper supp 19/11/21"
				}
			},
			{
				_id: "618083d49d7a840008dbdf08",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e3e2a98a26dd1acccc5ede",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60df738dbf84855a680f8a85",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "MAimHuSdumA&t=19s",
					tiktokId: "",
					quote:
						"Swiss del Viero, il cecchino più veloce e forte in assoluto. Richiede tanta abilità"
				}
			},
			{
				_id: "6180841e9d7a840008dbdf34",
				baseId: "60df6610bf84855a680f8978",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e1d997bf84855a680f8ef3",
					"60e3f3c98a26dd1acccc6206",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"La pistola più utile in gioco, statistiche simili a una mitraglietta automatica 19/11"
				}
			},
			{
				_id: "6180846e9d7a840008dbdf7b",
				baseId: "61609fec4af6fb76f45408df",
				options: [
					"60e1d885bf84855a680f8edd",
					"6160a5744af6fb76f454090d",
					"6160a6994af6fb76f4540925",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "qnWO0ayGwKE&t=125s",
					tiktokId: "",
					quote: "Ottimo assalto long range 19/11/21"
				}
			},
			{
				_id: "618084ca1c37ba00087c72fa",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "p2ko6PabOUc&t=15s",
					tiktokId: "",
					quote: "Ottima smg per qualsiasi ruolo 19/11/21"
				}
			},
			{
				_id: "6180852a1c37ba00087c730b",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "6cyUmfnz9CA&t=395s",
					tiktokId: "",
					quote:
						"Ottima smg per qualsiasi ruolo, pecca in quantità di danno per caricatore, mobilità pazzesca e super facile da usare 19/11/21"
				}
			},
			{
				_id: "618085749d7a840008dbdfa1",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213e1bf84855a680f92a3",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3",
					"60df7496bf84855a680f8aab"
				],
				userData: {
					customTitle: "CLOSE",
					blueprint: "",
					featured: false,
					youtubeURL: "Mawn70k4_Os",
					tiktokId: "",
					quote: "Build carina da corta distanza ma niente di speciale"
				}
			},
			{
				_id: "618087971c37ba00087c7393",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e1d997bf84855a680f8ef3",
					"60e3f6a88a26dd1acccc627c",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: "Pistola devastante in close 19/11/21"
				}
			},
			{
				_id: "618087e41c37ba00087c73a8",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3defd8a26dd1acccc5e41",
					"60df732abf84855a680f8a73",
					"60df7496bf84855a680f8aab"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "7tzdGcVNSHg&t=389s",
					tiktokId: "",
					quote:
						"Cecchino più aggressivo, piuttosto facile da usare molto veloce"
				}
			},
			{
				_id: "6180880b1c37ba00087c73b8",
				baseId: "6170e3a69655ec26143f1060",
				options: [
					"60e1d885bf84855a680f8edd",
					"6170e62c9655ec26143f1087",
					"60e1d997bf84855a680f8ef3",
					"61161ad2147d3f4f203722c8",
					"6103130a84d1eb258ce0f4c2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "JlZsbd68r5A",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "618088ac9d7a840008dbe099",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1deb3bf84855a680f8f91",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "SS",
					blueprint: "",
					featured: false,
					youtubeURL: "4XAkyyb1HQc&t=28s",
					tiktokId: "",
					quote: "Attualmente la migliore soluzione AR da sniper support 19/11"
				}
			},
			{
				_id: "618088ff9d7a840008dbe0c9",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "l3H-Q98A28Q&t=415s",
					tiktokId: "",
					quote:
						"Arma più dominante dalle lunghe distanze! Rinculo verticale bello pesante! 19/11/21"
				}
			},
			{
				_id: "618089459d7a840008dbe0da",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60e3a54a8a26dd1acccc59a0",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "bCP9Io1itDI",
					tiktokId: "",
					quote:
						"Fuori meta per il suo rinculo e il mirino vlk poco visibile. 19/11/21"
				}
			},
			{
				_id: "618089dd9d7a840008dbe11b",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "ccci-GIv3os&t=54s",
					tiktokId:
						"7046200874300935429?lang=it-IT&is_copy_url=1&is_from_webapp=v1",
					quote:
						"Fuori dalle armi migliori, ottima scelta in long range, ha ancora un moltiplicatore in testa devastante 19/11/21"
				}
			},
			{
				_id: "61808a299d7a840008dbe143",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1da40bf84855a680f8f19",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e353b4bf84855a680f9693"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "FyW_QUDUrWo&t=48s",
					tiktokId: "",
					quote: "Migliore SMG da sniper support 19/11/21"
				}
			},
			{
				_id: "61808a8c1c37ba00087c744d",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df738dbf84855a680f8a85",
					"60e367dabf84855a680f99d1",
					"60df7471bf84855a680f8aa5",
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "4c_QfFoGPa4&t=279s",
					tiktokId: "",
					quote: "Fuori meta, Smg equilibrata 19/11/21"
				}
			},
			{
				_id: "61808b4b1c37ba00087c74c0",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20e3ebf84855a680f91ae"
				],
				userData: {
					customTitle: "LONG",
					blueprint: "",
					featured: false,
					youtubeURL: "QEikDtUjRPQ&t=544s",
					tiktokId: "",
					quote:
						"Questa build è da lunga distanza. Ottimo assalto, versatile, buon danno, rinculo gestibile, buon caricatore 19/11"
				}
			},
			{
				_id: "61808b911c37ba00087c74d6",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1dac1bf84855a680f8f3b",
					"60e1e464bf84855a680f8f9d",
					"60e20f2fbf84855a680f91bc"
				],
				userData: {
					customTitle: "SHORT",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: "Ottima come supporto a un cecchino"
				}
			},
			{
				_id: "61808c691c37ba00087c7540",
				baseId: "6109bb97ec0dea4e34958025",
				options: [
					"61099cdf56bb294be45a7e2a",
					"60e37d76bf84855a680f9c02",
					"60df73cbbf84855a680f8a8d",
					"61099cf956bb294be45a7e30",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "DOc8Y6R4wgY&t=81s",
					tiktokId: "",
					quote: "Arma lenta, decente supporto a un cecchino"
				}
			},
			{
				_id: "61808d289d7a840008dbe192",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60e2248abf84855a680f937e",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "lYSKk48LbL0&t=294s",
					tiktokId: "",
					quote: "Fuori meta, ottimo long range 19/11/21"
				}
			},
			{
				_id: "61808d631c37ba00087c755a",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5ff8a26dd1acccc5c93",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "dgihdYPca-I&t=165s",
					tiktokId: "",
					quote:
						"Utilizzabile se si prende il nemico con tutti i colpi distrugge soprattutto in testa 19/11/21"
				}
			},
			{
				_id: "61808df31c37ba00087c758f",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d997bf84855a680f8ef3",
					"60e3cf768a26dd1acccc5be7",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "close",
					blueprint: "",
					featured: false,
					youtubeURL: "RO_-XvAlJR4&t=1s",
					tiktokId: "",
					quote: "Build strana ma funzionante da close range"
				}
			},
			{
				_id: "61808e281c37ba00087c759e",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e1d9c7bf84855a680f8eff",
					"60e3ceff8a26dd1acccc5be3",
					"60e3cf768a26dd1acccc5be7",
					"60e1da62bf84855a680f8f23",
					"60e3cebb8a26dd1acccc5bd5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: "Difficile da usare ma in testa distrugge i nemici 19/11/21"
				}
			},
			{
				_id: "61808e9f1c37ba00087c75b6",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3e0528a26dd1acccc5e82",
					"60e3e0938a26dd1acccc5e8c",
					"60e3e1b98a26dd1acccc5e9e"
				],
				userData: {
					customTitle: "CLOSE",
					blueprint: "",
					featured: true,
					youtubeURL: "a9QZhP27gK8&t=25s",
					tiktokId:
						"7004831016552647942?lang=it-IT&is_copy_url=1&is_from_webapp=v1",
					quote: "Arma da psicopatici, sconsiglio l'uso"
				}
			},
			{
				_id: "61808ef99d7a840008dbe1d2",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3e05a8a26dd1acccc5e84",
					"60df7280bf84855a680f8a55",
					"60e3e1b98a26dd1acccc5e9e",
					"60e3e13e8a26dd1acccc5e98"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "1jLfvk6ecVc&t=1s",
					tiktokId: "",
					quote: "Cecchino facile da usare "
				}
			},
			{
				_id: "61808fa21c37ba00087c75f1",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "NHh_YAi6tVg&t=12s",
					tiktokId: "",
					quote: "Fuori meta ma picchia sempre da lunga distanza 19/11/21"
				}
			},
			{
				_id: "61808fdc9d7a840008dbe236",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df7463bf84855a680f8aa3",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "f4ewab72RDw&t=21s",
					tiktokId: "",
					quote: "Fuori meta ma sempre valido da lunga distanza"
				}
			},
			{
				_id: "6185310e04f04b00099b5ffb",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e1da5cbf84855a680f8f21",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "LONG",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: "Cecchino più forte e preciso in gioco 19/11/21"
				}
			},
			{
				_id: "6185550efa080900093222d2",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ded1bf84855a680f8f95",
					"60e1def0bf84855a680f8f97",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "long",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote:
						"Buon rinculo verticale, buon danno, arma classica da lunga distanza 19/11/21"
				}
			},
			{
				_id: "6196f4d9bb71320008407f0b",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1e4d7bf84855a680f8fad",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "zEU6O5Afa98",
					tiktokId: "",
					quote: "Ottimo supporto a un cecchino"
				}
			},
			{
				_id: "6196f89689bbd9000962952c",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d98fbf84855a680f8ef1",
					"60e38950bf84855a680f9d64",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "twPF6mQOjVA&t=494s",
					tiktokId: "",
					quote:
						"Fucile a pompa toxico ultra facile da usare, un po' eclissato dal gallo 19/11/21"
				}
			},
			{
				_id: "6196f8c8bb71320008407fa1",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e38d5abf84855a680f9da7",
					"60e1d997bf84855a680f8ef3",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6196f961bb71320008407fc9",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e1d9c7bf84855a680f8eff",
					"60e20849bf84855a680f90a0",
					"60e1def0bf84855a680f8f97"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "https://www.youtube.com/watch?v=VeBesRhNaxM&t=94s",
					quote:
						"Fuori dai migliori assalti, resta ottima in long range con un rinculo minimo 19/11/21"
				}
			},
			{
				_id: "6196f9b889bbd9000962953b",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2248abf84855a680f937e",
					"60df7280bf84855a680f8a55",
					"60df7359bf84855a680f8a7b",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "ESOTICO",
					blueprint: "",
					featured: false,
					youtubeURL: "WWA7sxu46p0&t=16s",
					tiktokId: "",
					quote: "Qualcosa di diverso e esotico"
				}
			},
			{
				_id: "6196fa1b89bbd90009629553",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d87ebf84855a680f8edb",
					"60e4ae5ce580dd3004e5dae0",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "POCO RINCULO",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6196fa8589bbd90009629564",
				baseId: "60df5d75bf84855a680f8930",
				options: [
					"60e3d81e8a26dd1acccc5cff",
					"60e3d7668a26dd1acccc5ce7",
					"60e1d997bf84855a680f8ef3",
					"60e3cf768a26dd1acccc5be7",
					"60e1e8c5bf84855a680f903c"
				],
				userData: {
					customTitle: "CLOSE NERFATA",
					blueprint: "",
					featured: false,
					youtubeURL: "HBmjsBXsIF0&t=17s",
					tiktokId: "",
					quote: "BUILD NERFATA"
				}
			},
			{
				_id: "6196fac889bbd9000962956f",
				baseId: "60df6050bf84855a680f894d",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3e2ff8a26dd1acccc5ef0",
					"60e1d98fbf84855a680f8ef1",
					"60e1dac1bf84855a680f8f3b",
					"60e20f2fbf84855a680f91bc"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "-7xBLQ3nQ_0&t=21s",
					tiktokId: "https://www.youtube.com/watch?v=-7xBLQ3nQ_0&t=21s",
					quote: "Funziona ma meglio gli altri sniper"
				}
			},
			{
				_id: "6196fb6689bbd9000962958a",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da8bbf84855a680f8f2d",
					"60e1dac1bf84855a680f8f3b",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "L7PkTBCgWX8&t=54s",
					tiktokId: "",
					quote: "Buon support a un cecchino 19/11/21"
				}
			},
			{
				_id: "61b17c8f7e25f30009dede30",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b106e1cbb40a531ccf05b5",
					"61b1088dcbb40a531ccf0643",
					"61b103dbcbb40a531ccf0507",
					"61b10d87cbb40a531ccf0700",
					"61b10cdfcbb40a531ccf06ea",
					"61b10446cbb40a531ccf0527",
					"61b10725cbb40a531ccf05c9",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "CALDERA",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c9d333ea2067000988b2e3",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b1037dcbb40a531ccf04e9",
					"61b10735cbb40a531ccf05cf",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e27cbb40a531ccf0742",
					"61b10e49cbb40a531ccf0752",
					"61b2442c76830d4150677da2",
					"61b28b7476830d41506785a6",
					"61b107f7cbb40a531ccf060d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "9dlzWR7LIlI",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c9d442ea2067000988b2e7",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b1044dcbb40a531ccf0529",
					"61b2a97676830d4150678ba8",
					"61b103dbcbb40a531ccf0507",
					"61b2aa9876830d4150678bca",
					"61b2aaf976830d4150678bd8",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10e1ccbb40a531ccf073c",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "sMw1NhuzJ1s",
					tiktokId:
						"7043554547066834181?lang=it-IT&is_copy_url=1&is_from_webapp=v1",
					quote: ""
				}
			},
			{
				_id: "61c9d5e9c0db4800088ecdef",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2b23b76830d4150678d1d",
					"61b10371cbb40a531ccf04e5",
					"61b2b33576830d4150678d37",
					"61b1072acbb40a531ccf05cb",
					"61b10cdbcbb40a531ccf06e8",
					"61b10dd1cbb40a531ccf071b",
					"61b10e23cbb40a531ccf0740",
					"61b2442c76830d4150677da2",
					"61b2b3ad76830d4150678d43"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c9d7e5784c25000898c8ec",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b1042fcbb40a531ccf051f",
					"61b23c4f76830d4150677d36",
					"61b291a176830d4150678716",
					"61b292d876830d4150678734",
					"61b293f076830d415067874a",
					"61b1072acbb40a531ccf05cb",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e1ccbb40a531ccf073c",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "4rVVdRHlknc",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "ZsitXKFUElWFJEWTvDIjwkUOSze2", role: "Owner" }],
		createdDate: "2021-11-01T23:37:48.095Z",
		displayName: "VieroLII",
		urlSafeName: "VieroLII",
		__v: 0,
		previousUpdater: "VieroLII"
	},
	{
		_id: "612e4b2847b214000701a51d",
		meta: {
			hasProfileImage: true,
			profileImage: "612e4b2847b214000701a51d",
			links: { twitch: "https://www.twitch.tv/sAwsik" }
		},
		viewCount: 2044,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "612e56b8ac910b000804642a",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dabbbf84855a680f8f39",
					"60e1d9c7bf84855a680f8eff",
					"60e20b3fbf84855a680f9106",
					"60e20c63bf84855a680f9156"
				],
				userData: {
					customTitle: "",
					blueprint: "Dark Matter",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e576221f67600089e4c74",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1dac1bf84855a680f8f3b",
					"60e1ded1bf84855a680f8f95",
					"60e1e464bf84855a680f8f9d",
					"60e1e4dcbf84855a680f8faf",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "Dark Matter",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "612e5b20ac910b00080464c7",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1da5cbf84855a680f8f21",
					"60e1e4dcbf84855a680f8faf",
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e3629fbf84855a680f991f"
				],
				userData: {
					customTitle: "",
					blueprint: "Dark Matter",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "612e8ae29f8810000856889c",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da66bf84855a680f8f25",
					"60e35a20bf84855a680f97b9"
				],
				userData: {
					customTitle: "",
					blueprint: "Dark Matter",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e8b10f3877d0009b36097",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd",
					"60e1da8bbf84855a680f8f2d",
					"61161a74147d3f4f203722bc"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "612e8b42c89f3100092b8163",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e8b7e1d501e000860b272",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df7203bf84855a680f8a49",
					"60e379dfbf84855a680f9b66",
					"60df74dcbf84855a680f8abb",
					"60e2248abf84855a680f937e",
					"60df73cbbf84855a680f8a8d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e8c046431630009b8f514",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1dac1bf84855a680f8f3b",
					"60df738dbf84855a680f8a85",
					"60e1d98fbf84855a680f8ef1",
					"60e3e2a98a26dd1acccc5ede",
					"60e3e4cc8a26dd1acccc5f54"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "612e8c816431630009b8f51c",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60df7280bf84855a680f8a55",
					"60e3feee8a26dd1acccc6436",
					"60e3fedd8a26dd1acccc6430"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e8ef8f3877d0009b360c9",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1d8b0bf84855a680f8ee3",
					"60e1da40bf84855a680f8f19",
					"60e1dac1bf84855a680f8f3b",
					"60e1da8bbf84855a680f8f2d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e8f466431630009b8f5bc",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60df738dbf84855a680f8a85",
					"60e1da5cbf84855a680f8f21",
					"60e35a33bf84855a680f97bd"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e8fa91d501e000860b2ce",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60df738dbf84855a680f8a85",
					"60e1d885bf84855a680f8edd",
					"60e356b3bf84855a680f9709",
					"60e35580bf84855a680f96f7",
					"60e1dabbbf84855a680f8f39"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "612e90306431630009b8f5cf",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e35908bf84855a680f9759",
					"60e1d9c7bf84855a680f8eff",
					"60e3524fbf84855a680f9671",
					"60e35804bf84855a680f9755",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "LONG RANGE",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e905c1d501e000860b2ee",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e1e478bf84855a680f8fa1",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e90a21d501e000860b2f7",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9d8bf84855a680f8f03",
					"60e20f2fbf84855a680f91bc",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e90e66431630009b8f5e5",
				baseId: "611620ae147d3f4f203722f6",
				options: [
					"61161b2b147d3f4f203722d6",
					"61161b75147d3f4f203722e4",
					"60e1da40bf84855a680f8f19",
					"60e1dac1bf84855a680f8f3b",
					"60e35e40bf84855a680f9871"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612e91751d501e000860b30d",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60e2248abf84855a680f937e",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "612f7dc5fa4dee00086d3ea7",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e353c5bf84855a680f9695",
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61349477e10e92000827d59e",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60e1dac1bf84855a680f8f3b",
					"60f0b3671d00452cd0554206",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6135dcd9dbc1c800090c361e",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1d99ebf84855a680f8ef5",
					"60e1e534bf84855a680f8fb3",
					"60e362c0bf84855a680f9929",
					"60e1e4dcbf84855a680f8faf",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "NO SCOPE",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61371bdac799ae0008edd926",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38d07bf84855a680f9da3",
					"60e1d98fbf84855a680f8ef1",
					"60df738dbf84855a680f8a85",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "Dark Matter",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613888904650b10009dcd6d9",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e1d9d8bf84855a680f8f03",
					"60e35908bf84855a680f9759",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "MICROFLEX",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6139c50f4e3df400085d28d6",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3cebb8a26dd1acccc5bd5",
					"60e3ceff8a26dd1acccc5be3",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6139c5884e3df400085d2911",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613a4e8e98e9fe00091671a4",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e1e8ecbf84855a680f903e",
					"60e1d9c7bf84855a680f8eff",
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5ff8a26dd1acccc5c93",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613c83545e57e400083aa258",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d9d8bf84855a680f8f03",
					"60e353b4bf84855a680f9693",
					"60e1da40bf84855a680f8f19"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613cfdc6149eee00092794ff",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60df738dbf84855a680f8a85",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "Rebirth",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613d087ab041c90009fc2acf",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1d9d8bf84855a680f8f03",
					"60e20b3fbf84855a680f9106",
					"60e20c2abf84855a680f914e"
				],
				userData: {
					customTitle: "Rebirth",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613f1244805aca00089d039c",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e20e27bf84855a680f91a8",
					"60e1da62bf84855a680f8f23",
					"60e20b3fbf84855a680f9106",
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd"
				],
				userData: {
					customTitle: "LONG RANGE",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "614300615c494100095253d4",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1def0bf84855a680f8f97",
					"60e1deb3bf84855a680f8f91",
					"60e1de7bbf84855a680f8f89",
					"60e1e48fbf84855a680f8fa7",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "LONG RANGE",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61430a1a4574910009a737c6",
				baseId: "60df6610bf84855a680f8978",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e3f1338a26dd1acccc619e",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61522b864bb41f0009c1248f",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e4af44e580dd3004e5dae6",
					"60e4ae5ce580dd3004e5dae0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61522bb74bb41f0009c1249d",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1da9abf84855a680f8f31",
					"60df738dbf84855a680f8a85",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "615b5aecfba190000892670d",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38926bf84855a680f9d5e",
					"60e1d98fbf84855a680f8ef1",
					"60df738dbf84855a680f8a85",
					"60e38933bf84855a680f9d60"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6165bcea558e510008b5e3ec",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1e464bf84855a680f8f9d",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61747db3460c220009cd64e6",
				baseId: "60df4b05bf84855a680f88f8",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37764bf84855a680f9b0a",
					"60df749dbf84855a680f8aad",
					"60df7280bf84855a680f8a55",
					"60df738dbf84855a680f8a85"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61747ebdc1e15e00082d8614",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20a9ebf84855a680f90f8",
					"60e1e8ecbf84855a680f903e",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "Long Range",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b24e12af7017000908761c",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b134c01ede1b55003fd164",
					"61b103dbcbb40a531ccf0507",
					"61b2261476830d4150677d15",
					"61b1072acbb40a531ccf05cb",
					"61b226a976830d4150677d17",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d87cbb40a531ccf0700",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b24f23af7017000908762c",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b17ac6b71116459c87f357",
					"61b21d9ca453845fe0b671fe",
					"61b1072acbb40a531ccf05cb",
					"61b10cd6cbb40a531ccf06e6",
					"61b10d8bcbb40a531ccf0702",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b179c5b71116459c87f355"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b24f7eaf70170009087643",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10446cbb40a531ccf0527",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b10725cbb40a531ccf05c9",
					"61b1088dcbb40a531ccf0643",
					"61b2442c76830d4150677da2",
					"61b106e1cbb40a531ccf05b5",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "VG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b25026f73d5c00084263d3",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10383cbb40a531ccf04eb",
					"61b107f7cbb40a531ccf060d",
					"61b10708cbb40a531ccf05c1",
					"61b28b7476830d41506785a6",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10e1ccbb40a531ccf073c",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "VG",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b2508df73d5c00084263d8",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1042acbb40a531ccf051d",
					"61b10638cbb40a531ccf058f",
					"61b107fccbb40a531ccf060f",
					"61b1073fcbb40a531ccf05d3",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10e05cbb40a531ccf0732",
					"61b10e38cbb40a531ccf0748"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b25147a05d750009e31651",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b10658cbb40a531ccf0599",
					"61b103d2cbb40a531ccf0505",
					"61b1081bcbb40a531ccf061b",
					"61b1072acbb40a531ccf05cb",
					"61b10c0ccbb40a531ccf069c",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d75cbb40a531ccf06f6",
					"61b10db7cbb40a531ccf070a",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ce0a10fa0cac00093d31f9",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "VANGUARD ERA",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d440cc0b5f570008f05267",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2820e76830d4150678440",
					"61b10371cbb40a531ccf04e5",
					"61b282e476830d4150678458",
					"61b1072acbb40a531ccf05cb",
					"61b283c976830d4150678476",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d6d0943694380009b0a095",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2b23b76830d4150678d1d",
					"61b10371cbb40a531ccf04e5",
					"61b2b32176830d4150678d33",
					"61b1071acbb40a531ccf05c5",
					"61b2b3ad76830d4150678d43",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61deba79394ecc00135e461f",
				baseId: "61b1126ecbb40a531ccf0766",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b10633cbb40a531ccf058d",
					"61b10708cbb40a531ccf05c1",
					"61b10371cbb40a531ccf04e5",
					"61b1080ccbb40a531ccf0615",
					"61b26dc076830d4150678193",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10dfbcbb40a531ccf072c",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "LONG RANGE",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61debac3394ecc00135e463c",
				baseId: "61b1126ecbb40a531ccf0766",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10633cbb40a531ccf058d",
					"61b103d2cbb40a531ccf0505",
					"61b1085fcbb40a531ccf0635",
					"61b10730cbb40a531ccf05cd",
					"61b26dc076830d4150678193",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d8bcbb40a531ccf0702",
					"61b10e15cbb40a531ccf0738",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "SHORT RANGE",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61dfffb7394ecc00135f9c05",
				baseId: "61dfd74a4656770013ed3681",
				options: [
					"61b10468cbb40a531ccf0531",
					"61dfd4634656770013ed366b",
					"61b103d2cbb40a531ccf0505",
					"61dfd5574656770013ed3677",
					"61b10708cbb40a531ccf05c1",
					"61dfd5a24656770013ed367d",
					"61b10d80cbb40a531ccf06fc",
					"61b10cdfcbb40a531ccf06ea",
					"61b10deacbb40a531ccf0726",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "M78HD67r7TP7X5xSXFLeYeDcenm2", role: "Owner" },
			{ uid: "agPLkLkbh7OerpOlxzF713F8gFn1", role: "Editor" }
		],
		createdDate: "2021-08-31T15:30:48.894Z",
		displayName: "sAwsik",
		urlSafeName: "sAwsik",
		__v: 0,
		previousUpdater: "Sawsik"
	},
	{
		_id: "61cb1457d0c33b000946e4db",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: false,
			profileImage: "",
			links: { twitch: "https://www.twitch.tv/slxsh" }
		},
		viewCount: 1851,
		games: [{ id: "60da97598821ed46dc9c008c", code: "Armas do Slxsh" }],
		kits: [
			{
				_id: "61cb1532d0c33b000946e4e9",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1e8ecbf84855a680f903e",
					"60e382cfbf84855a680f9c58",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "Dark Aether",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61cb16bfd0c33b000946e4ef",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1037dcbb40a531ccf04e9",
					"61b10735cbb40a531ccf05cf",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e27cbb40a531ccf0742",
					"61b1062ecbb40a531ccf058b",
					"61b107f7cbb40a531ccf060d",
					"61b28b7476830d41506785a6",
					"61b2442c76830d4150677da2",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61cc818c02a94f0008ac41a1",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2248abf84855a680f937e",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "Obsidian",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61cc9a120c202200086c9730",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b103dbcbb40a531ccf0507",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2b3ad76830d4150678d43",
					"61b2b33576830d4150678d37",
					"61b2b23b76830d4150678d1d"
				],
				userData: {
					customTitle: "Mira 3x",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61cca5223d82120009a73e7a",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e3defd8a26dd1acccc5e41",
					"60df732abf84855a680f8a73",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ccc0102461a50008e497b1",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b103dbcbb40a531ccf0507",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b10b81cbb40a531ccf0668",
					"61b1086fcbb40a531ccf063b",
					"61b106e1cbb40a531ccf05b5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},

			{
				_id: "61d5cbf1cfad3000089b9cbf",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b23e0d76830d4150677d54",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2b3ad76830d4150678d43",
					"61b2b33576830d4150678d37",
					"61b2b23b76830d4150678d1d"
				],
				userData: {
					customTitle: "Mira termica",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61e0da2f394ecc001360aa4d",
				baseId: "61dfd74a4656770013ed3681",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1072acbb40a531ccf05cb",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e27cbb40a531ccf0742",
					"61b10e49cbb40a531ccf0752",
					"61b2442c76830d4150677da2",
					"61dfd58f4656770013ed367b",
					"61b10853cbb40a531ccf0631",
					"61dfd47c4656770013ed366d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "ilv0UxY8HyeOQbzPb99ejOVE2Ns1", role: "Owner" }],
		createdDate: "2021-12-28T13:42:47.310Z",
		displayName: "Slxsh",
		urlSafeName: "Slxsh",
		__v: 0,
		previousUpdater: "Slxsh"
	},
	{
		_id: "61c12eca040fda0008880b6e",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: true,
			profileImage: "61c12eca040fda0008880b6e",
			links: {
				twitch: "https://www.twitch.tv/aydan",
				twitter: "https://twitter.com/aydan",
				youtube: "https://www.youtube.com/c/AydanC"
			}
		},
		viewCount: 1771,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "61c130e98648ff0009c5a6ed",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2825876830d415067844c",
					"61b103d2cbb40a531ccf0505",
					"61b282fb76830d415067845c",
					"61b2442c76830d4150677da2",
					"61b10730cbb40a531ccf05cd",
					"61b283c976830d4150678476",
					"61b10e2acbb40a531ccf0744",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "As SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c13196d2fb050009114d89",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b134c01ede1b55003fd164",
					"61b103dbcbb40a531ccf0507",
					"61b2739676830d4150678245",
					"61b2442c76830d4150677da2",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10e23cbb40a531ccf0740",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "Long Range",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c131eed2fb050009114d8f",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10452cbb40a531ccf052b",
					"61b10d83cbb40a531ccf06fe",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2b23b76830d4150678d1d",
					"61b2b32176830d4150678d33",
					"61b2b3ad76830d4150678d43"
				],
				userData: {
					customTitle: "Long Range",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c13291d2fb050009114d98",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b291e676830d415067871c",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b10d90cbb40a531ccf0704",
					"61b10cd6cbb40a531ccf06e6",
					"61b10708cbb40a531ccf05c1",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c132fdd2fb050009114d9b",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10383cbb40a531ccf04eb",
					"61b107f7cbb40a531ccf060d",
					"61b2442c76830d4150677da2",
					"61b28b7476830d41506785a6",
					"61b10cdbcbb40a531ccf06e8",
					"61b10735cbb40a531ccf05cf",
					"61b10e27cbb40a531ccf0742",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "5dnUEyXIlvXUOs9ybSbW3DE3PYF2", role: "Owner" }],
		createdDate: "2021-12-21T01:32:58.064Z",
		displayName: "AYDAN",
		urlSafeName: "AYDAN",
		__v: 0,
		previousUpdater: "Max"
	},
	{
		_id: "617c5b5574fd400008ecb454",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: true,
			profileImage: "617c5b5574fd400008ecb454",
			links: {
				twitch: "https://www.twitch.tv/petr01_cz",
				youtube: "https://www.youtube.com/channel/UCfbdzJYR8EJPc2vmhZGStEg",
				instagram: "https://www.instagram.com/petr01_cz_/",
				discord: "https://discord.gg/KRRQ7Z5f",
				tiktok:
					"https://www.tiktok.com/@@petr01_cz?lang=en&is_copy_url=1&is_from_webapp=v1",
				twitter: "https://twitter.com/Petr01_cz"
			}
		},
		viewCount: 1621,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "617c5cc474fd400008ecb4c1",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60e34da5bf84855a680f9617",
					"60e34416bf84855a680f9509",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c5d3774fd400008ecb4fb",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf",
					"60e362a9bf84855a680f9921",
					"60e3629fbf84855a680f991f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c5e5674fd400008ecb553",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e20f2fbf84855a680f91bc",
					"60e1d9d8bf84855a680f8f03",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c5ec374fd400008ecb573",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c5ef774fd400008ecb57d",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e3e2a98a26dd1acccc5ede",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e353c5bf84855a680f9695",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c81bbf93e1d00092665c0",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49",
					"60df7280bf84855a680f8a55"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c81e231b202000899dca0",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1d894bf84855a680f8edf",
					"60e1da40bf84855a680f8f19",
					"60e1da8bbf84855a680f8f2d",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c8207f93e1d00092665c7",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1deb3bf84855a680f8f91",
					"60e1d9c7bf84855a680f8eff",
					"60e1e464bf84855a680f8f9d",
					"60e1def0bf84855a680f8f97"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c823731b202000899dcde",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c826731b202000899dcf3",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1da40bf84855a680f8f19",
					"60e35a33bf84855a680f97bd",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c82c731b202000899dcfb",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c82f1f93e1d00092665e8",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d98fbf84855a680f8ef1",
					"60e1e4bebf84855a680f8fa9",
					"60e38950bf84855a680f9d64"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c831df93e1d00092665ec",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e35a20bf84855a680f97b9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c835bf93e1d00092665f7",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df7203bf84855a680f8a49",
					"60e379dfbf84855a680f9b66",
					"60df73cbbf84855a680f8a8d",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c838ef93e1d00092665fc",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e35c3abf84855a680f981b",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c83b6f93e1d0009266607",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c83dcf93e1d000926660d",
				baseId: "60ded332bf84855a680f888d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e21058bf84855a680f9218",
					"60df7280bf84855a680f8a55",
					"60df738dbf84855a680f8a85",
					"60e2131bbf84855a680f9254"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c8408f93e1d000926661d",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c63bf84855a680f9156",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c846131b202000899dd1a",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60df738dbf84855a680f8a85",
					"60e356a2bf84855a680f9705",
					"6103130a84d1eb258ce0f4c2"
				],
				userData: {
					customTitle: "no stock",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c851df93e1d000926665a",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c854d31b202000899dd26",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e3524fbf84855a680f9671",
					"60e35804bf84855a680f9755",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c857331b202000899dd36",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a",
					"60e1d9e6bf84855a680f8f07",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c859331b202000899dd40",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60df738dbf84855a680f8a85",
					"60e1d997bf84855a680f8ef3",
					"60f0b3191d00452cd0554200",
					"60f0b3671d00452cd0554206"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c85ca31b202000899dd6d",
				baseId: "60ded290bf84855a680f8887",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20a9ebf84855a680f90f8",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20b3fbf84855a680f9106"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c85e631b202000899dd7c",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceee8a26dd1acccc5bdf",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c860331b202000899dd82",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d98fbf84855a680f8ef1",
					"60e1e4bebf84855a680f8fa9",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c862f31b202000899dd8f",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"61161a8a147d3f4f203722c0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"61161ad2147d3f4f203722c8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c866cf93e1d0009266684",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "617c8e39c6452e0008dc675f",
				baseId: "6170e3a69655ec26143f1060",
				options: [
					"60e1d885bf84855a680f8edd",
					"6170e6259655ec26143f1085",
					"60e1d997bf84855a680f8ef3",
					"61161aff147d3f4f203722d0",
					"60e1d9d8bf84855a680f8f03"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61994647d2d477000930cb7e",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e353b4bf84855a680f9693",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ae33393320850009ebb52a",
				baseId: "60df4a4fbf84855a680f88f2",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60e37153bf84855a680f9a24",
					"60df74dcbf84855a680f8abb",
					"60e36ab3bf84855a680f9a14"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ae396f4d147f0009fb1275",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60e3c8508a26dd1acccc5af1",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b2099793c70a000924bcf2",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b106e1cbb40a531ccf05b5",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e2acbb40a531ccf0744",
					"61b1088dcbb40a531ccf0643",
					"61b2418b76830d4150677d80",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b20c8893c70a000924bd02",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10383cbb40a531ccf04eb",
					"61b1072acbb40a531ccf05cb",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e1ccbb40a531ccf073c",
					"61b10e49cbb40a531ccf0752",
					"61b2442c76830d4150677da2",
					"61b28b7476830d41506785a6",
					"61b107f7cbb40a531ccf060d",
					"61b1062ecbb40a531ccf058b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b20ddf93c70a000924bd0e",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1071acbb40a531ccf05c5",
					"61b10cdfcbb40a531ccf06ea",
					"61b1046ecbb40a531ccf0533",
					"61b10868cbb40a531ccf0639",
					"61b10d83cbb40a531ccf06fe",
					"61b10dd1cbb40a531ccf071a",
					"61b10dd1cbb40a531ccf071b",
					"61b106e7cbb40a531ccf05b7",
					"61b2d10376830d41506790b6",
					"61b103dbcbb40a531ccf0507"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},

			{
				_id: "61b33acee098f60008293d33",
				baseId: "61b114f0cbb40a531ccf077a",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b10371cbb40a531ccf04e5",
					"61b1071fcbb40a531ccf05c7",
					"61b10cd2cbb40a531ccf06e4",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b",
					"61b10d80cbb40a531ccf06fc",
					"61b2a49b76830d4150678aa3",
					"61b2a3ce76830d4150678a85",
					"61b2a33b76830d4150678a77"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b33b21e098f60008293d36",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b226a976830d4150677d17",
					"61b2739676830d4150678245",
					"61b276c376830d41506782e4"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b33b9ee098f60008293d39",
				baseId: "61b1179bcbb40a531ccf0792",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b10363cbb40a531ccf04e1",
					"61b2e02b76830d4150679262",
					"61b10d87cbb40a531ccf0700",
					"61b10dd1cbb40a531ccf071b",
					"61b10dbbcbb40a531ccf070c",
					"61b10cdbcbb40a531ccf06e8",
					"61b2dfd276830d415067925a",
					"61b10694cbb40a531ccf05a7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b33be0e098f60008293d3c",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b103b8cbb40a531ccf04fd",
					"61b2841a76830d415067847e",
					"61b10730cbb40a531ccf05cd",
					"61b10468cbb40a531ccf0531",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b",
					"61b2825876830d415067844c",
					"61b282fb76830d415067845c",
					"61b283c976830d4150678476"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b33c84e098f60008293d41",
				baseId: "61b11620cbb40a531ccf0786",
				options: [
					"61b1052ccbb40a531ccf0563",
					"61b10793cbb40a531ccf05ed",
					"61b10b96cbb40a531ccf0670",
					"61b10d78cbb40a531ccf06f8",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb",
					"61b10371cbb40a531ccf04e5",
					"61b10452cbb40a531ccf052b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b4b998e10ec200090d4274",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b10708cbb40a531ccf05c1",
					"61b10cd6cbb40a531ccf06e6",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b",
					"61b10d75cbb40a531ccf06f6",
					"61b10bddcbb40a531ccf068a",
					"61b10830cbb40a531ccf0623",
					"61b104dfcbb40a531ccf0551"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b4b9d6e10ec200090d427a",
				baseId: "61b1145ecbb40a531ccf0774",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b103adcbb40a531ccf04f9",
					"61b2997f76830d4150678867",
					"61b1072acbb40a531ccf05cb",
					"61b29a5876830d4150678883",
					"61b29acf76830d415067888f",
					"61b10d75cbb40a531ccf06f6",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b10cdfcbb40a531ccf06ea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b63ff4fc86130009f8ea46",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b1044dcbb40a531ccf0529",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b10d90cbb40a531ccf0704",
					"61b2aaf976830d4150678bd8",
					"61b2aa9876830d4150678bca",
					"61b2a97676830d4150678ba8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b8e330388c4b0008d23235",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b10371cbb40a531ccf04e5",
					"61b2b23b76830d4150678d1d",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2b3ad76830d4150678d43",
					"61b2b33576830d4150678d37"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bcc26efd9d610009688fb7",
				baseId: "61b115dbcbb40a531ccf0784",
				options: [
					"61b1044dcbb40a531ccf0529",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d90cbb40a531ccf0704",
					"61b10dd1cbb40a531ccf071b",
					"61b10dc2cbb40a531ccf0710",
					"61b2bc3376830d4150678dea",
					"61b2bb9876830d4150678dd8",
					"61b2badd76830d4150678dc8"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bcc30839e16b0008fccd90",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b10725cbb40a531ccf05c9",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b10d83cbb40a531ccf06fe",
					"61b2936d76830d4150678744",
					"61b21d9ca453845fe0b671fe",
					"61b291a176830d4150678716"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c8b70dbcd19d00090889de",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2724376830d415067822b",
					"61b103d2cbb40a531ccf0505",
					"61b1073fcbb40a531ccf05d3",
					"61b10cdbcbb40a531ccf06e8",
					"61b10ddccbb40a531ccf0720",
					"61b10dd1cbb40a531ccf071b",
					"61b10d75cbb40a531ccf06f6",
					"61b2749b76830d415067825f",
					"61b10853cbb40a531ccf0631"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61ddba9b868769000836f297",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e2acbb40a531ccf0744",
					"61b2820e76830d4150678440",
					"61b2831176830d4150678460",
					"61b283c976830d4150678476",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "Mid",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61eabc7b5eb3320013ffd626",
				baseId: "61dfd74a4656770013ed3681",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1072acbb40a531ccf05cb",
					"61b10cdbcbb40a531ccf06e8",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752",
					"61b2442c76830d4150677da2",
					"61dfd5a24656770013ed367d",
					"61b2a6e676830d4150678b1f",
					"61dfd4904656770013ed366f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61eabd635eb3320013ffd6b7",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e15cbb40a531ccf0738",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2418b76830d4150677d80",
					"61b273c676830d4150678249",
					"61b2712976830d4150678221"
				],
				userData: {
					customTitle: "Mid",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61eabdbf5eb3320013ffd6fe",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10735cbb40a531ccf05cf",
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b10cdbcbb40a531ccf06e8",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b2977476830d41506787ee",
					"61b10853cbb40a531ccf0631",
					"61b2961676830d41506787c6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61eabe4d5eb3320013ffd7a6",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2",
					"61b2542576830d4150678043",
					"61b1081bcbb40a531ccf061b",
					"61b10653cbb40a531ccf0597"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61eabe925eb3320013ffd7f0",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1072acbb40a531ccf05cb",
					"61b10cdbcbb40a531ccf06e8",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752",
					"61b2442c76830d4150677da2",
					"61b28b7476830d41506785b7",
					"61b107c2cbb40a531ccf05fd",
					"61b10685cbb40a531ccf05a3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "Q8K2Lc1QkHZp5H0wWKn97V3KaJ52", role: "Administrator" },
			{ uid: "eNCpVuQPz0bI4JECD0zbk58oz582", role: "Owner" }
		],
		createdDate: "2021-10-29T20:36:37.989Z",
		displayName: "Peet3rz",
		urlSafeName: "Peet3rz",
		__v: 0,
		previousUpdater: "Dexiinka"
	},
	{
		_id: "614a1ab2860ae700098417ab",
		meta: {
			hasProfileImage: true,
			profileImage: "614a1ab2860ae700098417ab",
			links: {
				twitch: "https://www.twitch.tv/Euren_",
				tiktok: "https://www.tiktok.com/@_euren",
				instagram: "https://www.instagram.com/eurenn_",
				discord: "https://discord.gg/BcJHUwDD"
			},
			youtubeAutoplay: true
		},
		viewCount: 1559,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "61bf8bb64fe07700089aa38d",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10371cbb40a531ccf04e5",
					"61b10cdfcbb40a531ccf06ea",
					"61b10452cbb40a531ccf052b",
					"61b1072acbb40a531ccf05cb",
					"61b2442c76830d4150677da2",
					"61b134c01ede1b55003fd164",
					"61b10dd1cbb40a531ccf071b",
					"61b10e23cbb40a531ccf0740",
					"61b2739676830d4150678245",
					"61b226a976830d4150677d17"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf8c2e4fe07700089aa396",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b1041fcbb40a531ccf0519",
					"61b104dfcbb40a531ccf0551",
					"61b10371cbb40a531ccf04e5",
					"61b10830cbb40a531ccf0623",
					"61b1072acbb40a531ccf05cb",
					"61b10bddcbb40a531ccf068a",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d83cbb40a531ccf06fe",
					"61b10de0cbb40a531ccf0722",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf8c724fe07700089aa399",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2825876830d415067844c",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b1072acbb40a531ccf05cb",
					"61b283c976830d4150678476",
					"61b2841a76830d415067847e",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10e42cbb40a531ccf074e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf8cb44fe07700089aa39c",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b106e1cbb40a531ccf05b5",
					"61b10371cbb40a531ccf04e5",
					"61b1088dcbb40a531ccf0643",
					"61b10708cbb40a531ccf05c1",
					"61b2418b76830d4150677d80",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d87cbb40a531ccf0700",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf8d394fe07700089aa3a4",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b10853cbb40a531ccf0631",
					"61b10735cbb40a531ccf05cf",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d90cbb40a531ccf0704",
					"61b10dc2cbb40a531ccf0710",
					"61b10e49cbb40a531ccf0752",
					"61b1037dcbb40a531ccf04e9",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf8e7466f56e000861abfd",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10658cbb40a531ccf0599",
					"61b1081bcbb40a531ccf061b",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf8f4c66f56e000861ac10",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10db7cbb40a531ccf070a",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b10c72cbb40a531ccf06c2",
					"61b295f976830d41506787c2",
					"61b2971776830d41506787e2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf8fc766f56e000861ac22",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b291a176830d4150678716",
					"61b10853cbb40a531ccf0631",
					"61b2924276830d4150678724",
					"61b293f076830d415067874a",
					"61b10cdbcbb40a531ccf06e8",
					"61b10708cbb40a531ccf05c1",
					"61b10d75cbb40a531ccf06f6",
					"61b10e23cbb40a531ccf0740",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf904966f56e000861ac2d",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10685cbb40a531ccf05a3",
					"61b103d2cbb40a531ccf0505",
					"61b107c2cbb40a531ccf05fd",
					"61b1072acbb40a531ccf05cb",
					"61b10e49cbb40a531ccf0752",
					"61b10db7cbb40a531ccf070a",
					"61b10d78cbb40a531ccf06f8",
					"61b2872a76830d4150678515",
					"61b10cdfcbb40a531ccf06ea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf90b866f56e000861ac3d",
				baseId: "61b1145ecbb40a531ccf0774",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b106edcbb40a531ccf05b9",
					"61b13da5878e37564483ddd8",
					"61b1071fcbb40a531ccf05c7",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d87cbb40a531ccf0700",
					"61b10ddccbb40a531ccf0720",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf910866f56e000861ac49",
				baseId: "61b11559cbb40a531ccf077e",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2a97676830d4150678ba8",
					"61b10371cbb40a531ccf04e5",
					"61b2aa9876830d4150678bca",
					"61b10708cbb40a531ccf05c1",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "Bkiow52QgrM9BFtwFvXJs24Fswo1", role: "Owner" }],
		createdDate: "2021-09-21T17:47:30.663Z",
		displayName: "Euren_",
		urlSafeName: "Euren_",
		__v: 0,
		previousUpdater: "Euren"
	},
	{
		_id: "6131364246027d0009cb6ad1",
		meta: {
			hasProfileImage: true,
			profileImage: "6131364246027d0009cb6ad1",
			links: {
				twitch: "https://www.twitch.tv/pieman",
				twitter: "https://twitter.com/piemxn",
				youtube: "https://www.youtube.com/piemanTV",
				tiktok: "https://www.tiktok.com/@piemxn",
				discord: "https://discord.gg/fbYE4mz"
			},
			youtubeAutoplay: true
		},
		viewCount: 1542,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "6131395398c3e400089bb152",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1ded1bf84855a680f8f95",
					"60e1d997bf84855a680f8ef3",
					"60e1e464bf84855a680f8f9d",
					"60e1dac1bf84855a680f8f3b",
					"60e1e4dcbf84855a680f8faf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6131493cb5a5990009e65e1f",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1de7bbf84855a680f8f89",
					"60e1e4d7bf84855a680f8fad",
					"60e3629fbf84855a680f991f"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: ""
				}
			},
			{
				_id: "6131496bb7dc2800098a3b9e",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d9d0bf84855a680f8f01",
					"60e1d86abf84855a680f8ed7",
					"60e382cfbf84855a680f9c58",
					"60e1da62bf84855a680f8f23",
					"60e35a20bf84855a680f97b9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314af7b5a5990009e65e58",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df733ebf84855a680f8a77",
					"60df73b1bf84855a680f8a89",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314b35b5a5990009e65e68",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e3cf8f8a26dd1acccc5bef"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314b76b5a5990009e65e7e",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee8bbf84855a680f909e",
					"60e1d9c7bf84855a680f8eff",
					"60e1def4bf84855a680f8f99",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314bc5b5a5990009e65e8a",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da66bf84855a680f8f25",
					"60e1da8bbf84855a680f8f2d",
					"60e1dac7bf84855a680f8f3d",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314e36b5a5990009e65edb",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d98fbf84855a680f8ef1",
					"60e38d5abf84855a680f9da7",
					"60e1e4bebf84855a680f8fa9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61314e5cb5a5990009e65ee3",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df7280bf84855a680f8a55",
					"60df7471bf84855a680f8aa5",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314e90e917e20008320975",
				baseId: "60df4f10bf84855a680f8904",
				options: [
					"60e38e61bf84855a680f9dda",
					"60e38ee4bf84855a680f9dea",
					"60e38859bf84855a680f9d48",
					"60e38f1bbf84855a680f9dee",
					"60e1d98fbf84855a680f8ef1"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61314ec5e917e20008320986",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: ""
				}
			},
			{
				_id: "61314ef3b5a5990009e65efd",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df733ebf84855a680f8a77",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314f2d13ed5c0008f358d3",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c63bf84855a680f9156",
					"60e1d9c7bf84855a680f8eff",
					"60e1da66bf84855a680f8f25",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "Kilowhopper",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61314f8be917e200083209a4",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d997bf84855a680f8ef3",
					"60e35a20bf84855a680f97b9",
					"60e1da3bbf84855a680f8f17"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "61322420fa62190009ed9b2d",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e356a2bf84855a680f9705",
					"60e1da3bbf84855a680f8f17"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613224519c2be9000968e3a1",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60e1d997bf84855a680f8ef3",
					"60f0b3671d00452cd0554206",
					"60f0b4fb1d00452cd0554224"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6132247667d9530008afe899",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df733ebf84855a680f8a77",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613224a09c2be9000968e3af",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d997bf84855a680f8ef3",
					"60e38950bf84855a680f9d64",
					"60e1e4bebf84855a680f8fa9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "613224cb9c2be9000968e3bc",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e1da5cbf84855a680f8f21",
					"60e1dac7bf84855a680f8f3d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "613224f39c2be9000968e3c8",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d997bf84855a680f8ef3",
					"60e1da66bf84855a680f8f25",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: ""
				}
			},
			{
				_id: "6148c4f82bdf9c0008a1e3ee",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e4ae5ce580dd3004e5dae0",
					"60e1da66bf84855a680f8f25",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: ""
				}
			}
		],
		managers: [
			{ uid: "xhPtb5q9wCasVv85Ivoa3GblBVh1", role: "Owner" },
			{ uid: "Lp9TyEgMJQV2HAuU4qGCRl0XjFs2", role: "Editor" },
			{ uid: "dYPPSLJtUsMBema1jf8IfH3Sgsn1", role: "Editor" }
		],
		createdDate: "2021-09-02T20:38:26.894Z",
		displayName: "Pieman",
		urlSafeName: "Pieman",
		__v: 0,
		previousUpdater: "TheDuckManX"
	},
	{
		_id: "6144846047ba7700092f1883",
		meta: {
			hasProfileImage: true,
			profileImage: "6144846047ba7700092f1883",
			links: {
				twitch: "https://www.twitch.tv/PieroCOD",
				twitter: "https://twitter.com/PieroCOD",
				instagram: "https://www.instagram.com/piero.cod"
			}
		},
		viewCount: 1448,
		games: [{ id: "60da97598821ed46dc9c008c", code: "" }],
		kits: [
			{
				_id: "614484bb47ba7700092f1893",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e464bf84855a680f8f9d",
					"60e1def0bf84855a680f8f97",
					"60e1ded1bf84855a680f8f95",
					"60e1d9c7bf84855a680f8eff"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "614485004c96560008fddbb9",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "614487a54c96560008fddc1f",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e39c08bf84855a680fa066"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "614487de4c96560008fddc3c",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1e4dcbf84855a680f8faf",
					"60e1de7bbf84855a680f8f89",
					"60f0b3671d00452cd0554206",
					"60f0b3191d00452cd0554200",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "614488134c96560008fddc42",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60df74dcbf84855a680f8abb",
					"60e2248abf84855a680f937e",
					"60e379dfbf84855a680f9b66",
					"60e37949bf84855a680f9b54",
					"60df73cbbf84855a680f8a8d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6144884a47ba7700092f190c",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1e8ecbf84855a680f903e",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6145c86a0530990009440f1c",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf",
					"60e3629fbf84855a680f991f",
					"60f0b5951d00452cd055422c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6145c8a00530990009440f25",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3defd8a26dd1acccc5e41",
					"60e3df148a26dd1acccc5e45"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6145c8c6f8c4870008f2654c",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20d16bf84855a680f9160",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6145c8e1f8c4870008f26553",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705",
					"60e35580bf84855a680f96f7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61460fc85ad9ad0008af2c35",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "615ae547a6dd700008a2bf8c",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1d885bf84855a680f8edd",
					"61161ad2147d3f4f203722c8",
					"60e1d9c7bf84855a680f8eff",
					"61161a8a147d3f4f203722c0",
					"60e1da62bf84855a680f8f23"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61813122b27e4c00092e7bf8",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1da40bf84855a680f8f19",
					"60e353b4bf84855a680f9693",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3af5d9be29100093e728e",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b134c01ede1b55003fd164",
					"61b10371cbb40a531ccf04e5",
					"61b2739676830d4150678245",
					"61b10e23cbb40a531ccf0740",
					"61b10e47cbb40a531ccf0750",
					"61b10d90cbb40a531ccf0704",
					"61b226a976830d4150677d17",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b3afb6bb85bc000982d880",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b17ac6b71116459c87f357",
					"61b103d2cbb40a531ccf0505",
					"61b292d876830d4150678734",
					"61b10e23cbb40a531ccf0740",
					"61b10e49cbb40a531ccf0752",
					"61b10d90cbb40a531ccf0704",
					"61b293f076830d415067874a",
					"61b10cd2cbb40a531ccf06e4",
					"61b10725cbb40a531ccf05c9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf38a82d4f3300092eb779",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10735cbb40a531ccf05cf",
					"61b10cdbcbb40a531ccf06e8",
					"61b10383cbb40a531ccf04eb",
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b107f7cbb40a531ccf060d",
					"61b10d90cbb40a531ccf0704",
					"61b10e49cbb40a531ccf0752",
					"61b10deacbb40a531ccf0726",
					"61b28b7476830d41506785a6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf39482d4f3300092eb77f",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b106e1cbb40a531ccf05b5",
					"61b103dbcbb40a531ccf0507",
					"61b1088dcbb40a531ccf0643",
					"61b2418b76830d4150677d80",
					"61b1072acbb40a531ccf05cb",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d8bcbb40a531ccf0702"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61bf40aa2d4f3300092eb78f",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2820e76830d4150678440",
					"61b103dbcbb40a531ccf0507",
					"61b2832776830d4150678464",
					"61b10dd1cbb40a531ccf071b",
					"61b10e2acbb40a531ccf0744",
					"61b10cdfcbb40a531ccf06ea",
					"61b283c976830d4150678476",
					"61b10d90cbb40a531ccf0704",
					"61b1072acbb40a531ccf05cb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61c4a72e77914f00098d1a95",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2b23b76830d4150678d1d",
					"61b103dbcbb40a531ccf0507",
					"61b2b32176830d4150678d33",
					"61b10dd1cbb40a531ccf071b",
					"61b10e23cbb40a531ccf0740",
					"61b2b3ad76830d4150678d43",
					"61b2442c76830d4150677da2",
					"61b10cdfcbb40a531ccf06ea",
					"61b1072acbb40a531ccf05cb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "kkv7Ce5p5IUaHXJFyQhNXces0Bs1", role: "Owner" },
			{ uid: "e1HhXRdtkfPMr8dta6UEfp2q03H3", role: "Administrator" }
		],
		createdDate: "2021-09-17T12:04:48.643Z",
		displayName: "PieroCOD",
		urlSafeName: "PieroCOD",
		__v: 0,
		previousUpdater: "PieroCOD"
	},
	{
		_id: "61d0db665b53ca0008c947ff",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: true,
			profileImage: "61d0db665b53ca0008c947ff",
			links: {
				twitter: "https://twitter.com/TrulyEviLL",
				tiktok: "https://www.tiktok.com/@TrulyEviLL",
				facebook: "https://www.facebook.com/TrulyEviLL"
			}
		},
		viewCount: 1244,
		games: [{ id: "60da97598821ed46dc9c008c", code: "EviL" }],
		kits: [
			{
				_id: "61d0dc4eac20e90008400a2e",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b103dbcbb40a531ccf0507",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e23cbb40a531ccf0740",
					"61b2b23b76830d4150678d1d",
					"61b2b32176830d4150678d33",
					"61b2b3ad76830d4150678d43",
					"61b10d94cbb40a531ccf0706",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: "This is my updated Bren build"
				}
			},
			{
				_id: "61d0dd235b53ca0008c9480a",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b1073fcbb40a531ccf05d3",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e27cbb40a531ccf0742",
					"61b107f7cbb40a531ccf060d",
					"61b28b7476830d41506785a6",
					"61b10d75cbb40a531ccf06f6",
					"61b10e49cbb40a531ccf0752",
					"61b1062ecbb40a531ccf058b"
				],
				userData: {
					customTitle: "with reddot",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: "This is my MP40 Build"
				}
			},
			{
				_id: "61d0dd6b5b53ca0008c94810",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10de0cbb40a531ccf0722",
					"61b104dfcbb40a531ccf0551",
					"61b107b0cbb40a531ccf05f7",
					"61b10bd8cbb40a531ccf0688",
					"61b10d90cbb40a531ccf0704",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: "Updated BAR Build"
				}
			},
			{
				_id: "61d0ddbd5b53ca0008c94814",
				baseId: "61b111abcbb40a531ccf0762",
				options: [
					"61b10419cbb40a531ccf0517",
					"61b103d2cbb40a531ccf0505",
					"61b10708cbb40a531ccf05c1",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e15cbb40a531ccf0738",
					"61b2728f76830d4150678233",
					"61b2739676830d4150678245",
					"61b2418b76830d4150677d80",
					"61b2442c76830d4150677da2",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "Sub or Snip Support",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d0de065b53ca0008c94818",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10371cbb40a531ccf04e5",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b",
					"61b10d87cbb40a531ccf0700",
					"61b283c976830d4150678476",
					"61b2831176830d4150678460",
					"61b2820e76830d4150678440"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d0de365b53ca0008c9481c",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b1073fcbb40a531ccf05d3",
					"61b10cdfcbb40a531ccf06ea",
					"61b10dd4cbb40a531ccf071c",
					"61b106e1cbb40a531ccf05b5",
					"61b1086fcbb40a531ccf063b",
					"61b2418b76830d4150677d80",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d0de6d5b53ca0008c94820",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1047acbb40a531ccf0537",
					"61b10363cbb40a531ccf04e1",
					"61b1071acbb40a531ccf05c5",
					"61b10cdfcbb40a531ccf06ea",
					"61b10e05cbb40a531ccf0732",
					"61b106e7cbb40a531ccf05b7",
					"61b108a2cbb40a531ccf064b",
					"61b2d11c76830d41506790b8",
					"61b10d90cbb40a531ccf0704",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d0deaa5b53ca0008c94824",
				baseId: "61b1126ecbb40a531ccf0766",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b10730cbb40a531ccf05cd",
					"61b10cdbcbb40a531ccf06e8",
					"61b10dd1cbb40a531ccf071a",
					"61b10e47cbb40a531ccf0750",
					"61b10d75cbb40a531ccf06f6",
					"61b26dc076830d4150678193",
					"61b1085fcbb40a531ccf0635",
					"61b10633cbb40a531ccf058d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61dee734394ecc00135e65a4",
				baseId: "61b11331cbb40a531ccf076c",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b10735cbb40a531ccf05cf",
					"61b10cdbcbb40a531ccf06e8",
					"61b10db7cbb40a531ccf070a",
					"61b107c2cbb40a531ccf05fd",
					"61b28b7476830d41506785b7",
					"61b10556cbb40a531ccf056f",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df7194394ecc00135f063b",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b1042fcbb40a531ccf052c",
					"61b103efcbb40a531ccf050d",
					"61b10708cbb40a531ccf05c1",
					"61b10cdbcbb40a531ccf06e8",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752",
					"61b10d87cbb40a531ccf0700",
					"61b2936d76830d4150678744",
					"61b10853cbb40a531ccf0631",
					"61b291a176830d4150678716"
				],
				userData: {
					customTitle: "HIP FIRE BUILD",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61eb44935eb3320013006b1c",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1073fcbb40a531ccf05d3",
					"61b10cdbcbb40a531ccf06e8",
					"61b10e27cbb40a531ccf0742",
					"61b10e49cbb40a531ccf0752",
					"61b2442c76830d4150677da2",
					"61b28b7476830d41506785a6",
					"61b107f7cbb40a531ccf060d",
					"61b1062ecbb40a531ccf058b"
				],
				userData: {
					customTitle: "with iron sights",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "IPn82rZikyLbA21pnImue4KdZYn2", role: "Owner" }],
		createdDate: "2022-01-01T22:53:26.629Z",
		displayName: "TrulyEviLL",
		urlSafeName: "TrulyEviLL",
		__v: 0,
		previousUpdater: "TrulyEviLL"
	},
	{
		_id: "61c12cc8db079400091103bd",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: true,
			profileImage: "61c12cc8db079400091103bd",
			links: {
				twitch: "https://www.twitch.tv/shotzzy",
				twitter: "https://twitter.com/shotzzy",
				youtube: "https://www.youtube.com/shotzzy"
			}
		},
		viewCount: 1136,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [],
		managers: [
			{ uid: "ONjQbgSkFKW7YhYyODe0PrmPu042", role: "Owner" },
			{ uid: "wdSOqSlPdgemYLOqU8hf0bMJzr83", role: "Administrator" },
			{ uid: "R7dWCI8Ln0WVald6PGaQjFbcTql2", role: "Administrator" }
		],
		createdDate: "2021-12-21T01:24:24.229Z",
		displayName: "Shotzzy",
		urlSafeName: "Shotzzy",
		__v: 0,
		previousUpdater: "Synn"
	},
	{
		_id: "61dd00966b502200099d41a4",
		meta: {
			brandColors: { primary: "#030303" },
			premiumType: "premium",
			hasProfileImage: true,
			profileImage: "61dd00966b502200099d41a4",
			links: {
				twitch: "https://www.twitch.tv/kartalib",
				twitter: "https://twitter.com/kartalibot",
				youtube: "https://www.youtube.com/channel/UCo8Heko0kCAafvgVtaGTbXw",
				instagram: "https://www.instagram.com/kartalib",
				tiktok: "https://www.tiktok.com/@kartalib",
				discord: "https://discord.gg/AVYAUmz"
			},
			youtubeAutoplay: true
		},
		viewCount: 967,
		games: [
			{
				id: "60da97598821ed46dc9c008c",
				code: "Kartalib",
				commandString: ""
			}
		],
		kits: [
			{
				_id: "61dd056f5afeb10009eb1c14",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b295f976830d41506787c2",
					"61b103d2cbb40a531ccf0505",
					"61b296f976830d41506787dc",
					"61b1072acbb40a531ccf05cb",
					"61b10c72cbb40a531ccf06c2",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d90cbb40a531ccf0704",
					"61b10dd1cbb40a531ccf071a",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df0cd9c9b8e00009279cdc",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b291a176830d4150678716",
					"61b2927676830d415067872a",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b2936d76830d4150678744",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d87cbb40a531ccf0700",
					"61b10e23cbb40a531ccf0740",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "HIPFIRE",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2327394ecc00135ea4ab",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df24d9394ecc00135ea69a",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df73b1bf84855a680f8a89",
					"60df72e9bf84855a680f8a67",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2573394ecc00135ea73b",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2600394ecc00135ea7cb",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df73b1bf84855a680f8a89",
					"60df7298bf84855a680f8a59",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2691394ecc00135ea880",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213f9bf84855a680f92a9",
					"60df7298bf84855a680f8a59",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df26c4394ecc00135ea8df",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df73b1bf84855a680f8a89",
					"60df72e9bf84855a680f8a67",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df270f394ecc00135ea94f",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60df7280bf84855a680f8a55",
					"60e34d78bf84855a680f9611",
					"60df7496bf84855a680f8aab",
					"60e34416bf84855a680f9509"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df276a394ecc00135ea9ae",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60df7279bf84855a680f8a53",
					"60df73cbbf84855a680f8a8d",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df27c2394ecc00135eaa1b",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2809394ecc00135eaa67",
				baseId: "60df4b65bf84855a680f88fc",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37babbf84855a680f9bac",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37bdcbf84855a680f9bb0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df284a394ecc00135eaac3",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60e37347bf84855a680f9a78",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37356bf84855a680f9a7a",
					"60df74dcbf84855a680f8abb"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2917394ecc00135eabf3",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e38f8cbf84855a680f9e1d",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e38fa4bf84855a680f9e21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2960394ecc00135eac64",
				baseId: "60df4f75bf84855a680f8908",
				options: [
					"60e3910fbf84855a680f9e67",
					"60e39101bf84855a680f9e65",
					"60e3934bbf84855a680f9e7d",
					"60df738dbf84855a680f8a85",
					"60e39325bf84855a680f9e75"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df29ca394ecc00135ead00",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60e39325bf84855a680f9e75",
					"60df74c7bf84855a680f8ab5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2a1b394ecc00135ead74",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3a54a8a26dd1acccc59a0",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df7471bf84855a680f8aa5"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2a50394ecc00135eadc3",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df72e9bf84855a680f8a67"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2aa2394ecc00135eae2a",
				baseId: "60df616fbf84855a680f8957",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ebf58a26dd1acccc60aa",
					"60df7280bf84855a680f8a55",
					"60e3ec098a26dd1acccc60b0",
					"60df749dbf84855a680f8aad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2ae8394ecc00135eae9f",
				baseId: "60df619dbf84855a680f8959",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ed2d8a26dd1acccc60e8",
					"60df7280bf84855a680f8a55",
					"60e3ed588a26dd1acccc60f0",
					"60e3da9d8a26dd1acccc5d59"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2b1c394ecc00135eaecd",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2b67394ecc00135eaf23",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3e05a8a26dd1acccc5e84",
					"60df7280bf84855a680f8a55",
					"60e3e1b98a26dd1acccc5e9e",
					"60e3e13e8a26dd1acccc5e98"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2b96394ecc00135eaf5c",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60df7279bf84855a680f8a53",
					"60e3fedd8a26dd1acccc6430",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2bc7394ecc00135eaf9c",
				baseId: "60df674bbf84855a680f8984",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7279bf84855a680f8a53",
					"60e3f7d38a26dd1acccc62b6",
					"60e37148bf84855a680f9a22",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2cc8394ecc00135eb0f2",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60f0b3191d00452cd0554200",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf",
					"60f0b3671d00452cd0554206"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2d8a394ecc00135eb1f9",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2ecc394ecc00135eb375",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1da62bf84855a680f8f23",
					"60e1da40bf84855a680f8f19",
					"60e35a33bf84855a680f97bd"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2f09394ecc00135eb3f1",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1da5cbf84855a680f8f21",
					"60e1e4d7bf84855a680f8fad"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2f56394ecc00135eb466",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e3524fbf84855a680f9671",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df2f9c394ecc00135eb4c0",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e3524fbf84855a680f9671",
					"60e35804bf84855a680f9755",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3003394ecc00135eb51f",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3059394ecc00135eb5a8",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e3524fbf84855a680f9671",
					"60e357f1bf84855a680f9751",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e35908bf84855a680f9759"
				],
				userData: {
					customTitle: "AR",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df309a394ecc00135eb622",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1d997bf84855a680f8ef3",
					"60e1d9d8bf84855a680f8f03",
					"60e20f2fbf84855a680f91bc",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3106394ecc00135eb6d2",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1ded1bf84855a680f8f95",
					"60e1d9d8bf84855a680f8f03",
					"60e1e4dcbf84855a680f8faf",
					"60e1dac1bf84855a680f8f3b",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3168394ecc00135eb77e",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c2abf84855a680f914e",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df31cf394ecc00135eb7e9",
				baseId: "60ded203bf84855a680f8883",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e1e8c5bf84855a680f903c",
					"60e1dac1bf84855a680f8f3b",
					"60e1e48fbf84855a680f8fa7"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df322f394ecc00135eb87a",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1def0bf84855a680f8f97",
					"60e1d9c7bf84855a680f8eff",
					"60e20849bf84855a680f90a0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3288394ecc00135eb8ba",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d8b0bf84855a680f8ee3",
					"60e1da62bf84855a680f8f23",
					"60e1da40bf84855a680f8f19",
					"60e1dac1bf84855a680f8f3b",
					"60e1da8bbf84855a680f8f2d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df363c394ecc00135ebd31",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e35a20bf84855a680f97b9"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df36cc394ecc00135ebde3",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e1e464bf84855a680f8f9d"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3700394ecc00135ebe16",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5f08a26dd1acccc5c8f",
					"60e35ef7bf84855a680f987b",
					"60e1d9c7bf84855a680f8eff",
					"60e1e8ecbf84855a680f903e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3753394ecc00135ebe81",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3785394ecc00135ebece",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c08bf84855a680fa066",
					"60e1da62bf84855a680f8f23",
					"60e1d9b7bf84855a680f8ef9",
					"60e39c31bf84855a680fa06e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df37b0394ecc00135ebf03",
				baseId: "60df6050bf84855a680f894d",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3e2ff8a26dd1acccc5ef0",
					"60e1d9e6bf84855a680f8f07",
					"60e1dac1bf84855a680f8f3b",
					"60e3e33e8a26dd1acccc5efe"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df37f8394ecc00135ebf49",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e3e2a98a26dd1acccc5ede",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e1da5cbf84855a680f8f21",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df381f394ecc00135ebf78",
				baseId: "60df60c4bf84855a680f8951",
				options: [
					"60e3e2c38a26dd1acccc5ee6",
					"60e3e6918a26dd1acccc5fac",
					"60e1d9e6bf84855a680f8f07",
					"60e1dac1bf84855a680f8f3b",
					"60e3e33e8a26dd1acccc5efe"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df38a7394ecc00135ec03f",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e1d98fbf84855a680f8ef1",
					"60e3f1498a26dd1acccc61a2",
					"60e3f6bb8a26dd1acccc627e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df38f1394ecc00135ec0da",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d997bf84855a680f8ef3",
					"60df738dbf84855a680f8a85",
					"60e38d5abf84855a680f9da7"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3913394ecc00135ec101",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d99ebf84855a680f8ef5",
					"60df738dbf84855a680f8a85",
					"60e38950bf84855a680f9d64"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3982394ecc00135ec18d",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10658cbb40a531ccf0599",
					"61b10371cbb40a531ccf04e5",
					"61b1081bcbb40a531ccf061b",
					"61b1072acbb40a531ccf05cb",
					"61b26a2176830d41506780f3",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10dc2cbb40a531ccf0710",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df39cc394ecc00135ec1e6",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b134c01ede1b55003fd164",
					"61b10371cbb40a531ccf04e5",
					"61b2261476830d4150677d15",
					"61b1072acbb40a531ccf05cb",
					"61b226a976830d4150677d17",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3a1e394ecc00135ec270",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b106e1cbb40a531ccf05b5",
					"61b10371cbb40a531ccf04e5",
					"61b1088dcbb40a531ccf0643",
					"61b1072acbb40a531ccf05cb",
					"61b10c67cbb40a531ccf06be",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3a91394ecc00135ec303",
				baseId: "61b11584cbb40a531ccf0780",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b2ad8076830d4150678c57",
					"61b10371cbb40a531ccf04e5",
					"61b2aeff76830d4150678c8b",
					"61b1072acbb40a531ccf05cb",
					"61b2afb976830d4150678c9b",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10dd1cbb40a531ccf071b",
					"61b10e19cbb40a531ccf073a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3ae9394ecc00135ec389",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b291a176830d4150678716",
					"61b103d2cbb40a531ccf0505",
					"61b10853cbb40a531ccf0631",
					"61b10708cbb40a531ccf05c1",
					"61b293f076830d415067874a",
					"61b10cdbcbb40a531ccf06e8",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3b8c394ecc00135ec466",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b1062ecbb40a531ccf058b",
					"61b1037dcbb40a531ccf04e9",
					"61b107f7cbb40a531ccf060d",
					"61b1073fcbb40a531ccf05d3",
					"61b28b7476830d41506785a6",
					"61b10cdbcbb40a531ccf06e8",
					"61b10d75cbb40a531ccf06f6",
					"61b10dc2cbb40a531ccf0710",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3cee394ecc00135ec66e",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b2825876830d415067844c",
					"61b103b8cbb40a531ccf04fd",
					"61b282fb76830d415067845c",
					"61b10730cbb40a531ccf05cd",
					"61b283c976830d4150678476",
					"61b2841a76830d415067847e",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "SMG",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3d31394ecc00135ec6d5",
				baseId: "61b11130cbb40a531ccf075e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b10665cbb40a531ccf059d",
					"61b103d2cbb40a531ccf0505",
					"61b1075ecbb40a531ccf05d9",
					"61b1072acbb40a531ccf05cb",
					"61b10ba7cbb40a531ccf0676",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e2acbb40a531ccf0744",
					"61b10e47cbb40a531ccf0750"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3dab394ecc00135ec7a5",
				baseId: "61b1151acbb40a531ccf077c",
				options: [
					"61b1043acbb40a531ccf0523",
					"61b2a66176830d4150678b11",
					"61b10363cbb40a531ccf04e1",
					"61b10853cbb40a531ccf0631",
					"61b2a78f76830d4150678b39",
					"61b10ccacbb40a531ccf06e0",
					"61b10d87cbb40a531ccf0700",
					"61b10dbbcbb40a531ccf070c",
					"61b10e49cbb40a531ccf0752"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3e12394ecc00135ec806",
				baseId: "61b115adcbb40a531ccf0782",
				options: [
					"61b10446cbb40a531ccf0527",
					"61b2b23b76830d4150678d1d",
					"61b103dbcbb40a531ccf0507",
					"61b2b32176830d4150678d33",
					"61b1072acbb40a531ccf05cb",
					"61b2b3ad76830d4150678d43",
					"61b10cdfcbb40a531ccf06ea",
					"61b2442c76830d4150677da2",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61df3e60394ecc00135ec850",
				baseId: "61b11712cbb40a531ccf078e",
				options: [
					"61b1044dcbb40a531ccf0529",
					"61b106e7cbb40a531ccf05b7",
					"61b10725cbb40a531ccf05c9",
					"61b10868cbb40a531ccf0639",
					"61b10cdfcbb40a531ccf06ea",
					"61b10d83cbb40a531ccf06fe",
					"61b10e09cbb40a531ccf0734",
					"61b10dd1cbb40a531ccf071b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "z11zrD6ghvQG5V6mpXRY4VqywzS2", role: "Owner" },
			{ uid: "bIiCdjzjHydpMpNVdOcZTA8CMHy1", role: "Editor" }
		],
		createdDate: "2022-01-11T03:59:18.947Z",
		displayName: "Kartalib",
		urlSafeName: "Kartalib",
		__v: 0,
		previousUpdater: "Kartalib",
		overlay: {
			textColorPrimary: "#ffffff",
			backgroundColorSecondary: "#2F2F31",
			textColorAccent: "#9B9B9B",
			backgroundColorPrimary: "#636363",
			textColorSecondary: "#2F2F31"
		}
	},
	{
		_id: "6159785bb90e360008b7d299",
		meta: {
			hasProfileImage: true,
			profileImage: "6159785bb90e360008b7d299",
			links: {},
			youtubeAutoplay: true
		},
		viewCount: 923,
		games: [{ id: "60da97598821ed46dc9c008c", code: "SEBAS" }],
		kits: [
			{
				_id: "61597901b90e360008b7d2b6",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1deb3bf84855a680f8f91",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e1e464bf84855a680f8f9d",
					"60e1de7bbf84855a680f8f89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6159795cb90e360008b7d2cf",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c2abf84855a680f914e",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "615979bab90e360008b7d2ef",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e35c3abf84855a680f981b",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61597a0c6bc5130009fa67f4",
				baseId: "61161f48147d3f4f203722f2",
				options: [
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e1d885bf84855a680f8edd",
					"61161ad2147d3f4f203722c8",
					"61161a8a147d3f4f203722c0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61597a466bc5130009fa6804",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705",
					"60e1dac1bf84855a680f8f3b",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61597cda6bc5130009fa686c",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2248abf84855a680f937e",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61597d1f6bc5130009fa687e",
				baseId: "60f0735f1d00452cd0554157",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e4dcbf84855a680f8faf",
					"60f0b3671d00452cd0554206",
					"60f0b3191d00452cd0554200",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "6159825ab90e360008b7d3b2",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e39c15bf84855a680fa06a"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6159827318739d0008c5fba2",
				baseId: "60df6610bf84855a680f8978",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d986bf84855a680f8eef",
					"60e1dac1bf84855a680f8f3b",
					"60e3f3d18a26dd1acccc6208",
					"60e3f1338a26dd1acccc619e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6159829918739d0008c5fbab",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d98fbf84855a680f8ef1",
					"60e1dac1bf84855a680f8f3b",
					"60e3f1338a26dd1acccc619e",
					"60e3f6a88a26dd1acccc627c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "615982cc18739d0008c5fbb4",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1da40bf84855a680f8f19",
					"60e353b4bf84855a680f9693",
					"60e352e1bf84855a680f9687",
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "6159859fb90e360008b7d3d6",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60df73cbbf84855a680f8a8d",
					"60df74dcbf84855a680f8abb",
					"60df7279bf84855a680f8a53",
					"60e2248abf84855a680f937e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "61598658b90e360008b7d416",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1d997bf84855a680f8ef3",
					"60e3629fbf84855a680f991f",
					"60e1e4d7bf84855a680f8fad",
					"60e1da5cbf84855a680f8f21"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "615ca9b38892ef00085bb265",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20d16bf84855a680f9160",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e20df9bf84855a680f919e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: ""
				}
			},
			{
				_id: "615cf67591ac5c000869fd74",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1dac1bf84855a680f8f3b",
					"60e1da62bf84855a680f8f23",
					"60e1d9c7bf84855a680f8eff",
					"60e4ae5ce580dd3004e5dae0"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6c05f4ebf290009c95e3e",
				baseId: "61b11105cbb40a531ccf075c",
				options: [
					"61b10452cbb40a531ccf052b",
					"61b10371cbb40a531ccf04e5",
					"61b2739676830d4150678245",
					"61b134c01ede1b55003fd164",
					"61b10708cbb40a531ccf05c1",
					"61b10cdfcbb40a531ccf06ea",
					"61b226a976830d4150677d17",
					"61b10e23cbb40a531ccf0740",
					"61b10dd1cbb40a531ccf071b",
					"61b2442c76830d4150677da2"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6c1f14ebf290009c95e59",
				baseId: "61b11376cbb40a531ccf076e",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b103d2cbb40a531ccf0505",
					"61b10dc2cbb40a531ccf0710",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b10c63cbb40a531ccf06bc",
					"61b10853cbb40a531ccf0631",
					"61b1062ecbb40a531ccf058b",
					"61b1072acbb40a531ccf05cb",
					"61b10cdfcbb40a531ccf06ea"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61b6c2954ebf290009c95e60",
				baseId: "61b11405cbb40a531ccf0770",
				options: [
					"61b10468cbb40a531ccf0531",
					"61b17ac6b71116459c87f357",
					"61b103d2cbb40a531ccf0505",
					"61b292d876830d4150678734",
					"61b10e23cbb40a531ccf0740",
					"61b10e49cbb40a531ccf0752",
					"61b10d75cbb40a531ccf06f6",
					"61b2936d76830d4150678744",
					"61b10cdfcbb40a531ccf06ea",
					"61b10735cbb40a531ccf05cf"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "dWdIe0Rj8wR2rfTMaB8r8oUmsIB3", role: "Owner" }],
		createdDate: "2021-10-03T09:31:07.642Z",
		displayName: "SEBASBERON",
		urlSafeName: "SEBASBERON",
		__v: 0,
		previousUpdater: "SEBASBERON"
	},
	{
		_id: "60ea54361f6bd40007fa186e",
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "60ea56069bd2f80008087905",
				baseId: "60ded425bf84855a680f8893",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22277bf84855a680f9368",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60e2248abf84855a680f937e"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea56239bd2f80008087912",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49"
				],
				userData: { customTitle: "Cover Shot", blueprint: "", featured: true }
			},
			{
				_id: "60ea5658d6d8ed0008d5c281",
				baseId: "60df4b35bf84855a680f88fa",
				options: [
					"60e37949bf84855a680f9b54",
					"60df7279bf84855a680f8a53",
					"60e379dfbf84855a680f9b66",
					"60e2248abf84855a680f937e",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea5674d6d8ed0008d5c28b",
				baseId: "60df5b0ebf84855a680f891a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3a54a8a26dd1acccc59a0",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea56979bd2f80008087927",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e2207abf84855a680f9308",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "Boomer", blueprint: "" }
			},
			{
				_id: "60ea56ad9bd2f80008087931",
				baseId: "60ded45bbf84855a680f8895",
				options: [
					"60df7203bf84855a680f8a49",
					"60df725cbf84855a680f8a4d",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea571d1f6bd40007fa1929",
				baseId: "60ded1bbbf84855a680f8881",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ded1bf84855a680f8f95",
					"60e1d9c7bf84855a680f8eff",
					"60e1e464bf84855a680f8f9d",
					"60e1e534bf84855a680f8fb3"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea58039bd2f8000808796f",
				baseId: "60df49abbf84855a680f88ec",
				options: [
					"60e3524fbf84855a680f9671",
					"60e3629fbf84855a680f991f",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf",
					"60e362a9bf84855a680f9921"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea58809bd2f800080879b3",
				baseId: "60ded254bf84855a680f8885",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1ee63bf84855a680f909a",
					"60e1d9c7bf84855a680f8eff",
					"60e1def0bf84855a680f8f97",
					"60e20849bf84855a680f90a0"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea59441f6bd40007fa1a2c",
				baseId: "60ded2cdbf84855a680f8889",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20c63bf84855a680f9156",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea59b29bd2f80008087a49",
				baseId: "60df48b8bf84855a680f88e4",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e359eabf84855a680f97b1",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35a20bf84855a680f97b9"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea59f79bd2f80008087a5d",
				baseId: "60df4822bf84855a680f88e0",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35580bf84855a680f96f7",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e356a2bf84855a680f9705"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea5a1a3e86540008b049be",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e353f0bf84855a680f969d"
				],
				userData: { customTitle: "Secondary", blueprint: "", featured: true }
			},
			{
				_id: "60ea5a3a3e86540008b049c8",
				baseId: "60df486abf84855a680f88e2",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35804bf84855a680f9755",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e35908bf84855a680f9759"
				],
				userData: { customTitle: "Range", blueprint: "", featured: true }
			},
			{
				_id: "60ea5a5a3e86540008b049d7",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e1da5cbf84855a680f8f21",
					"60e35c3abf84855a680f981b"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea5a783e86540008b049e5",
				baseId: "60df608ebf84855a680f894f",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e3e4cc8a26dd1acccc5f54",
					"60e1d98fbf84855a680f8ef1",
					"60e1da40bf84855a680f8f19",
					"60e1dac7bf84855a680f8f3d"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea5adf9bd2f80008087a91",
				baseId: "60df47dcbf84855a680f88de",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e352e1bf84855a680f9687",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e353b4bf84855a680f9693"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea5afc3e86540008b049fd",
				baseId: "60df5a32bf84855a680f8912",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e39c15bf84855a680fa06a",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea5c395a5a2c0008e5d228",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1d9d8bf84855a680f8f03",
					"60e20f2fbf84855a680f91bc",
					"60e20d16bf84855a680f9160"
				],
				userData: { customTitle: "Secondary", blueprint: "", featured: true }
			},
			{
				_id: "60ea5c5a9bd2f80008087b2b",
				baseId: "60ded302bf84855a680f888b",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e20e3ebf84855a680f91ae",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e20d16bf84855a680f9160"
				],
				userData: { customTitle: "Range", blueprint: "", featured: true }
			},
			{
				_id: "60ea5caf9bd2f80008087b40",
				baseId: "60ded332bf84855a680f888d",
				options: [
					"60df7203bf84855a680f8a49",
					"60e21033bf84855a680f9210",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60e21301bf84855a680f9250"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea5d015a5a2c0008e5d25a",
				baseId: "60ded4b0bf84855a680f8899",
				options: [
					"60df7203bf84855a680f8a49",
					"60e33f11bf84855a680f9486",
					"60df7280bf84855a680f8a55",
					"60df7298bf84855a680f8a59",
					"60df73b1bf84855a680f8a89"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea5d245a5a2c0008e5d264",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [
					"60e34d69bf84855a680f960f",
					"60df7280bf84855a680f8a55",
					"60e34da5bf84855a680f9617",
					"60df73b1bf84855a680f8a89",
					"60e34416bf84855a680f9509"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea5e675a5a2c0008e5d27c",
				baseId: "60df616fbf84855a680f8957",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ebf58a26dd1acccc60aa",
					"60df7280bf84855a680f8a55",
					"60e3ec078a26dd1acccc60ae",
					"60df749dbf84855a680f8aad"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea5e829bd2f80008087b65",
				baseId: "60df4b05bf84855a680f88f8",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3775fbf84855a680f9b08",
					"60df7280bf84855a680f8a55",
					"60df738dbf84855a680f8a85",
					"60df749dbf84855a680f8aad"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea5eae5a5a2c0008e5d29f",
				baseId: "60ded4dcbf84855a680f889b",
				options: [
					"60e3429cbf84855a680f94f7",
					"60df738dbf84855a680f8a85",
					"60df73cbbf84855a680f8a8d",
					"60df749dbf84855a680f8aad",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea5ece9bd2f80008087b8b",
				baseId: "60df4a92bf84855a680f88f4",
				options: [
					"60e37347bf84855a680f9a78",
					"60df7279bf84855a680f8a53",
					"60df73cbbf84855a680f8a8d",
					"60e37356bf84855a680f9a7a",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea5eef9bd2f80008087b99",
				baseId: "60df5c3ebf84855a680f8926",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ccbe8a26dd1acccc5b7c",
					"60df7298bf84855a680f8a59",
					"60df73b1bf84855a680f8a89",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "AR", blueprint: "" }
			},
			{
				_id: "60ea5f0b1f6bd40007fa1bbb",
				baseId: "60df5c3ebf84855a680f8926",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ccbe8a26dd1acccc5b7c",
					"60df7280bf84855a680f8a55",
					"60df738dbf84855a680f8a85",
					"60df73cbbf84855a680f8a8d"
				],
				userData: { customTitle: "SMG", blueprint: "" }
			},
			{
				_id: "60ea5fe85a5a2c0008e5d2df",
				baseId: "60ded5b6bf84855a680f88a3",
				options: [
					"60df7203bf84855a680f8a49",
					"60e349d0bf84855a680f95b5",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea60019bd2f80008087baa",
				baseId: "60ded3d0bf84855a680f8891",
				options: [
					"60df7203bf84855a680f8a49",
					"60e22060bf84855a680f9304",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea60361f6bd40007fa1bdf",
				baseId: "60df619dbf84855a680f8959",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3ed2d8a26dd1acccc60e8",
					"60df7280bf84855a680f8a55",
					"60df7368bf84855a680f8a7f",
					"60e3ed588a26dd1acccc60f0"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea60505a5a2c0008e5d2f1",
				baseId: "60df5b3dbf84855a680f891c",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89",
					"60df7496bf84855a680f8aab"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea60785a5a2c0008e5d302",
				baseId: "60df4bcfbf84855a680f88fe",
				options: [
					"60df7203bf84855a680f8a49",
					"60df7280bf84855a680f8a55",
					"60df73cbbf84855a680f8a8d",
					"60e37d76bf84855a680f9c02",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea612b9bd2f80008087bd7",
				baseId: "60df5053bf84855a680f8910",
				options: [
					"60e3910fbf84855a680f9e67",
					"60e39a23bf84855a680fa00f",
					"60df7279bf84855a680f8a53",
					"60e39a71bf84855a680fa015",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea61535a5a2c0008e5d31a",
				baseId: "60ded488bf84855a680f8897",
				options: [
					"60df7203bf84855a680f8a49",
					"60e1cf1cbf84855a680f8d97",
					"60df7298bf84855a680f8a59",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea61715a5a2c0008e5d329",
				baseId: "60ded54fbf84855a680f889f",
				options: [
					"60df7203bf84855a680f8a49",
					"60df84aabf84855a680f8c6a",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea61919bd2f80008087bf6",
				baseId: "60df4a12bf84855a680f88f0",
				options: [
					"60df7203bf84855a680f8a49",
					"60e367dabf84855a680f99d1",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7471bf84855a680f8aa5"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea61a95a5a2c0008e5d33a",
				baseId: "60df5ba4bf84855a680f8920",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c60c8a26dd1acccc5a9a",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60df73b1bf84855a680f8a89"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea61c59bd2f80008087c05",
				baseId: "60ded588bf84855a680f88a1",
				options: [
					"60df7e65bf84855a680f8c14",
					"60df7e79bf84855a680f8c16",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea61d89bd2f80008087c0f",
				baseId: "60df4f48bf84855a680f8906",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e38f8cbf84855a680f9e1d",
					"60df7279bf84855a680f8a53",
					"60e38fa4bf84855a680f9e21",
					"60df749dbf84855a680f8aad"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea61fc5a5a2c0008e5d35a",
				baseId: "60df4ac6bf84855a680f88f6",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3757bbf84855a680f9ac3",
					"60df7280bf84855a680f8a55",
					"60df749dbf84855a680f8aad",
					"60df74dcbf84855a680f8abb"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea62169bd2f80008087c28",
				baseId: "60df5bd4bf84855a680f8922",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3c77e8a26dd1acccc5ae5",
					"60df7280bf84855a680f8a55",
					"60df72e9bf84855a680f8a67",
					"60e3c8508a26dd1acccc5af1"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea623a5a5a2c0008e5d377",
				baseId: "60ded377bf84855a680f888f",
				options: [
					"60df7203bf84855a680f8a49",
					"60e213e1bf84855a680f92a3",
					"60df72e9bf84855a680f8a67",
					"60e21f30bf84855a680f92b5",
					"60df7463bf84855a680f8aa3"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea625d5a5a2c0008e5d387",
				baseId: "60df66efbf84855a680f8980",
				options: [
					"60e3f92a8a26dd1acccc62f6",
					"60df7279bf84855a680f8a53",
					"60e3f7d38a26dd1acccc62b6",
					"60e3f9588a26dd1acccc62fc",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: { customTitle: "DO NOT USE", blueprint: "" }
			},
			{
				_id: "60ea63061f6bd40007fa1c01",
				baseId: "60df5025bf84855a680f890e",
				options: [
					"60e38f62bf84855a680f9e17",
					"60e398bbbf84855a680f9fc8",
					"60df7279bf84855a680f8a53",
					"60e39325bf84855a680f9e75",
					"60df749dbf84855a680f8aad"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea63319bd2f80008087c7f",
				baseId: "60df6017bf84855a680f894b",
				options: [
					"60e3e0638a26dd1acccc5e86",
					"60df7280bf84855a680f8a55",
					"60df7319bf84855a680f8a6f",
					"60e3e0938a26dd1acccc5e8c",
					"60e3e13e8a26dd1acccc5e98"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea633d1f6bd40007fa1c10",
				baseId: "60df5c07bf84855a680f8924",
				options: [],
				userData: { customTitle: "Leveling", blueprint: "" }
			},
			{
				_id: "60ea63585a5a2c0008e5d395",
				baseId: "60df67d2bf84855a680f898a",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3fe918a26dd1acccc6420",
					"60df7280bf84855a680f8a55",
					"60e3fedd8a26dd1acccc6430",
					"60e3feeb8a26dd1acccc6434"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea636f1f6bd40007fa1c26",
				baseId: "60df4b65bf84855a680f88fc",
				options: [
					"60df7203bf84855a680f8a49",
					"60e37b91bf84855a680f9ba8",
					"60df7280bf84855a680f8a55",
					"60df73b1bf84855a680f8a89",
					"60df7463bf84855a680f8aa3"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea63869bd2f80008087c9c",
				baseId: "60df4f75bf84855a680f8908",
				options: [
					"60e3910fbf84855a680f9e67",
					"60e39101bf84855a680f9e65",
					"60df7279bf84855a680f8a53",
					"60df738dbf84855a680f8a85",
					"60e39325bf84855a680f9e75"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea639d1f6bd40007fa1c37",
				baseId: "60df6779bf84855a680f8986",
				options: [
					"60df7279bf84855a680f8a53",
					"60e3f7d38a26dd1acccc62b6",
					"60e3db4b8a26dd1acccc5d9d",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea63b81f6bd40007fa1c42",
				baseId: "60df67a3bf84855a680f8988",
				options: [
					"60e3fd4e8a26dd1acccc63dd",
					"60df7279bf84855a680f8a53",
					"60e3f7d38a26dd1acccc62b6",
					"60e3fe068a26dd1acccc63ed",
					"60e3f8098a26dd1acccc62c0"
				],
				userData: { customTitle: "DO NOT USE", blueprint: "" }
			},
			{
				_id: "60ea63db5a5a2c0008e5d3a1",
				baseId: "60df4977bf84855a680f88ea",
				options: [
					"60e3524fbf84855a680f9671",
					"60e360ddbf84855a680f98d1",
					"60e1d997bf84855a680f8ef3",
					"60e1e4dcbf84855a680f8faf",
					"60e360ffbf84855a680f98d5"
				],
				userData: { customTitle: "Leveling", blueprint: "" }
			},
			{
				_id: "60ea646a9bd2f80008087cc7",
				baseId: "60df5d45bf84855a680f892e",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d5f08a26dd1acccc5c8f",
					"60e1d9c7bf84855a680f8eff",
					"60e35ef7bf84855a680f987b",
					"60e1e8ecbf84855a680f903e"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea649e9bd2f80008087cd6",
				baseId: "60ded078bf84855a680f885f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e382cfbf84855a680f9c58",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e8ecbf84855a680f903e"
				],
				userData: { customTitle: "", blueprint: "", featured: true }
			},
			{
				_id: "60ea64b21f6bd40007fa1c5d",
				baseId: "60df5ce4bf84855a680f892a",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e4b0a1e580dd3004e5db40",
					"60e1d9c7bf84855a680f8eff",
					"60e1e8ecbf84855a680f903e",
					"60e1daaebf84855a680f8f33"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea653d5a5a2c0008e5d3b9",
				baseId: "60df6694bf84855a680f897c",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e3f1338a26dd1acccc619e",
					"60e1d977bf84855a680f8eeb",
					"60e3f1498a26dd1acccc61a2",
					"60e3f6bb8a26dd1acccc627e"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea65551f6bd40007fa1ceb",
				baseId: "60df5cafbf84855a680f8928",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3cebb8a26dd1acccc5bd5",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e3cf768a26dd1acccc5be7"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea65771f6bd40007fa1cfc",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d86abf84855a680f8ed7",
					"60e1d8d9bf84855a680f8ee9",
					"60e1da40bf84855a680f8f19",
					"60e1da8bbf84855a680f8f2d",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: { customTitle: "Main", blueprint: "", featured: true }
			},
			{
				_id: "60ea658b1f6bd40007fa1d09",
				baseId: "60ded125bf84855a680f887f",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1da40bf84855a680f8f19",
					"60e1da62bf84855a680f8f23",
					"60e1da8bbf84855a680f8f2d",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: { customTitle: "Alternate", blueprint: "" }
			},
			{
				_id: "60ea65a39bd2f80008087cef",
				baseId: "60df4eddbf84855a680f8902",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38ce2bf84855a680f9d9d",
					"60e1d98fbf84855a680f8ef1",
					"60e1e4bebf84855a680f8fa9",
					"60e38d5abf84855a680f9da7"
				],
				userData: { customTitle: "Leveling", blueprint: "" }
			},
			{
				_id: "60ea65be1f6bd40007fa1d18",
				baseId: "60ded203bf84855a680f8883",
				options: [
					"60e1de7bbf84855a680f8f89",
					"60e1e848bf84855a680f9030",
					"60e1d997bf84855a680f8ef3",
					"60e1e8c5bf84855a680f903c",
					"60e1e478bf84855a680f8fa1"
				],
				userData: { customTitle: "Leveling", blueprint: "" }
			},
			{
				_id: "60ea65de9bd2f80008087cfe",
				baseId: "60df4934bf84855a680f88e8",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e35be6bf84855a680f980b",
					"60e35ef7bf84855a680f987b",
					"60e35a11bf84855a680f97b5",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea662b9bd2f80008087d20",
				baseId: "60df5d0bbf84855a680f892c",
				options: [
					"60e3ceff8a26dd1acccc5be3",
					"60e3d0a78a26dd1acccc5c31",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1e464bf84855a680f8f9d"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea66401f6bd40007fa1d2f",
				baseId: "60df5a67bf84855a680f8914",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e4ae5ce580dd3004e5dae0",
					"60e1d9c7bf84855a680f8eff",
					"60e1da62bf84855a680f8f23",
					"60e1dac1bf84855a680f8f3b"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea667d1f6bd40007fa1d41",
				baseId: "60df4ea8bf84855a680f8900",
				options: [
					"60e38859bf84855a680f9d48",
					"60e38905bf84855a680f9d54",
					"60e1d99ebf84855a680f8ef5",
					"60e1da3bbf84855a680f8f17",
					"60e38950bf84855a680f9d64"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60ea66a35a5a2c0008e5d3ca",
				baseId: "60df5d75bf84855a680f8930",
				options: [
					"60e1dd79bf84855a680f8f7f",
					"60e3d7578a26dd1acccc5ce3",
					"60e1d9c7bf84855a680f8eff",
					"60e3d8938a26dd1acccc5d03",
					"60e1e46ebf84855a680f8f9f"
				],
				userData: { customTitle: "", blueprint: "" }
			},
			{
				_id: "60edb848af700f00083b2b6e",
				baseId: "60df48fbbf84855a680f88e6",
				options: [
					"60e1d885bf84855a680f8edd",
					"60e1d997bf84855a680f8ef3",
					"60e1da40bf84855a680f8f19",
					"60e35c3abf84855a680f981b",
					"60e1da5cbf84855a680f8f21"
				],
				userData: { customTitle: "Fav Guns ", blueprint: "", featured: true }
			}
		],
		createdDate: "2021-07-11T02:15:18.680Z",
		displayName: "TeePee",
		urlSafeName: "TeePee",
		authId: "ulqkxaNOsuhrOZaQONAKBmMCpKQ2",
		meta: {
			profileImage: "ulqkxaNOsuhrOZaQONAKBmMCpKQ2",
			links: {
				twitch: "https://twitch.tv/teepee",
				youtube: "https://www.youtube.com/user/TeePeeCoD",
				instagram: "https://www.instagram.com/tylerteep/?hl=en",
				discord: "https://discord.com/invite/CjTU2Sq",
				twitter: "https://twitter.com/TylerTeeP"
			},
			hasProfileImage: true
		},
		__v: 0,
		managers: [{ uid: "ulqkxaNOsuhrOZaQONAKBmMCpKQ2", role: "Owner" }],
		viewCount: 919
	},
	{
		_id: "61d23447b7b6a90008d1190a",
		meta: {
			brandColors: { primary: "" },
			premiumType: "",
			hasProfileImage: false,
			profileImage: "",
			links: {}
		},
		viewCount: 0,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "61d234554d87bf0008fef81d",
				baseId: "60df67a3bf84855a680f8988",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234594d87bf0008fef821",
				baseId: "6160a8b54af6fb76f45409a0",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2345d4d87bf0008fef825",
				baseId: "60df671dbf84855a680f8982",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234614d87bf0008fef829",
				baseId: "60df665ebf84855a680f897a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234644d87bf0008fef82d",
				baseId: "60df6779bf84855a680f8986",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234684d87bf0008fef831",
				baseId: "61b1184acbb40a531ccf0796",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2346c4d87bf0008fef835",
				baseId: "61b116c4cbb40a531ccf078c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234704d87bf0008fef839",
				baseId: "60df4fabbf84855a680f890a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234744d87bf0008fef83d",
				baseId: "60ded1bbbf84855a680f8881",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234784d87bf0008fef841",
				baseId: "60ded332bf84855a680f888d",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2347f4d87bf0008fef845",
				baseId: "60df4977bf84855a680f88ea",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234844d87bf0008fef849",
				baseId: "60df6610bf84855a680f8978",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234884d87bf0008fef84d",
				baseId: "60ded4b0bf84855a680f8899",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2348d4d87bf0008fef851",
				baseId: "60ded5e6bf84855a680f88a5",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234914d87bf0008fef855",
				baseId: "61b111abcbb40a531ccf0762",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2349b4d87bf0008fef859",
				baseId: "60df5d45bf84855a680f892e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234a14d87bf0008fef85d",
				baseId: "60df4a4fbf84855a680f88f2",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234a54d87bf0008fef861",
				baseId: "61b11105cbb40a531ccf075c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234ab4d87bf0008fef865",
				baseId: "60df616fbf84855a680f8957",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234b54d87bf0008fef869",
				baseId: "61b1116ecbb40a531ccf0760",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234bf4d87bf0008fef86d",
				baseId: "61b115adcbb40a531ccf0782",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234c74d87bf0008fef871",
				baseId: "60df5b0ebf84855a680f891a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234cc4d87bf0008fef875",
				baseId: "60df49abbf84855a680f88ec",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234d44d87bf0008fef879",
				baseId: "60ded078bf84855a680f885f",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234d84d87bf0008fef87d",
				baseId: "60df5ce4bf84855a680f892a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d234fe4d87bf0008fef881",
				baseId: "61b114f0cbb40a531ccf077a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235034d87bf0008fef885",
				baseId: "61b112a7cbb40a531ccf0768",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235094d87bf0008fef889",
				baseId: "60ded425bf84855a680f8893",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2350e4d87bf0008fef88d",
				baseId: "614e12c655d8b2253cc0554f",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235164d87bf0008fef891",
				baseId: "6109bb97ec0dea4e34958025",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2351c4d87bf0008fef895",
				baseId: "60df6694bf84855a680f897c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235604d87bf0008fef89a",
				baseId: "60df5cafbf84855a680f8928",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235644d87bf0008fef89e",
				baseId: "61b1151acbb40a531ccf077c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235694d87bf0008fef8a2",
				baseId: "61b11584cbb40a531ccf0780",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2356e4d87bf0008fef8a6",
				baseId: "60df6206bf84855a680f895d",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235744d87bf0008fef8aa",
				baseId: "60df5f71bf84855a680f8945",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235ac4d87bf0008fef8ae",
				baseId: "61b1148acbb40a531ccf0776",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235b34d87bf0008fef8b2",
				baseId: "61161f48147d3f4f203722f2",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235b94d87bf0008fef8b6",
				baseId: "60ded4dcbf84855a680f889b",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235c24d87bf0008fef8ba",
				baseId: "60ded254bf84855a680f8885",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235c64d87bf0008fef8be",
				baseId: "60df4a92bf84855a680f88f4",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235ce4d87bf0008fef8c2",
				baseId: "60ded125bf84855a680f887f",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235d44d87bf0008fef8c6",
				baseId: "60df5c3ebf84855a680f8926",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235d94d87bf0008fef8ca",
				baseId: "60ded51abf84855a680f889d",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235de4d87bf0008fef8ce",
				baseId: "60ded5b6bf84855a680f88a3",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235e34d87bf0008fef8d2",
				baseId: "61b11684cbb40a531ccf078a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235ec4d87bf0008fef8d6",
				baseId: "60df4eddbf84855a680f8902",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235f34d87bf0008fef8da",
				baseId: "61b1265ce413884abcc513bc",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d235f94d87bf0008fef8de",
				baseId: "61b114c2cbb40a531ccf0778",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236004d87bf0008fef8e2",
				baseId: "60ded3d0bf84855a680f8891",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236064d87bf0008fef8e6",
				baseId: "61609fec4af6fb76f45408df",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2360e4d87bf0008fef8ea",
				baseId: "60ded203bf84855a680f8883",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236144d87bf0008fef8ee",
				baseId: "60df4f10bf84855a680f8904",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2361d4d87bf0008fef8f2",
				baseId: "60df619dbf84855a680f8959",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236234d87bf0008fef8f6",
				baseId: "60df5b3dbf84855a680f891c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2362a4d87bf0008fef8fa",
				baseId: "60df4bcfbf84855a680f88fe",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236354d87bf0008fef8fe",
				baseId: "61b11130cbb40a531ccf075e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236414d87bf0008fef902",
				baseId: "60df5053bf84855a680f8910",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2364a4d87bf0008fef906",
				baseId: "60df5fcbbf84855a680f8949",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2364f4d87bf0008fef90a",
				baseId: "61b11712cbb40a531ccf078e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236554d87bf0008fef90e",
				baseId: "60ded45bbf84855a680f8895",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2365a4d87bf0008fef912",
				baseId: "61b1189dcbb40a531ccf079a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236624d87bf0008fef916",
				baseId: "60ded2cdbf84855a680f8889",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2366a4d87bf0008fef91a",
				baseId: "60df4934bf84855a680f88e8",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236b9b7b6a90008d11912",
				baseId: "6170e3a69655ec26143f1060",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236c2b7b6a90008d11917",
				baseId: "60df48b8bf84855a680f88e4",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236cbb7b6a90008d1191b",
				baseId: "60df60c4bf84855a680f8951",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236d3b7b6a90008d1191f",
				baseId: "61b11620cbb40a531ccf0786",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236d9b7b6a90008d11923",
				baseId: "60ded488bf84855a680f8897",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236dfb7b6a90008d11927",
				baseId: "60df5d0bbf84855a680f892c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236e5b7b6a90008d1192b",
				baseId: "60df674bbf84855a680f8984",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236ebb7b6a90008d1192f",
				baseId: "61b11300cbb40a531ccf076a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236f6b7b6a90008d11933",
				baseId: "60ded54fbf84855a680f889f",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d236fbb7b6a90008d11937",
				baseId: "60df5a9dbf84855a680f8916",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23715b7b6a90008d1193b",
				baseId: "60df610bbf84855a680f8953",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2371bb7b6a90008d1193f",
				baseId: "60df5ba4bf84855a680f8920",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23725b7b6a90008d11943",
				baseId: "60df4822bf84855a680f88e0",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2372bb7b6a90008d11947",
				baseId: "61b1179bcbb40a531ccf0792",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23731b7b6a90008d1194b",
				baseId: "60df65dabf84855a680f8976",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23736b7b6a90008d1194f",
				baseId: "611e8e8bbe7e9b1954658e27",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2373db7b6a90008d11953",
				baseId: "60df5a67bf84855a680f8914",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23749b7b6a90008d11957",
				baseId: "60df5b77bf84855a680f891e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23750b7b6a90008d1195b",
				baseId: "61b11559cbb40a531ccf077e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2375ab7b6a90008d1195f",
				baseId: "60df486abf84855a680f88e2",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23762b7b6a90008d11963",
				baseId: "60df5fa3bf84855a680f8947",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2376cb7b6a90008d11967",
				baseId: "60df4feebf84855a680f890c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23772b7b6a90008d1196b",
				baseId: "61b11376cbb40a531ccf076e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2377ab7b6a90008d1196f",
				baseId: "60df48fbbf84855a680f88e6",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23780b7b6a90008d11973",
				baseId: "60df4b35bf84855a680f88fa",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23785b7b6a90008d11977",
				baseId: "60df4a12bf84855a680f88f0",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2379cb7b6a90008d1197b",
				baseId: "61b111e4cbb40a531ccf0764",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237a4b7b6a90008d1197f",
				baseId: "60ded588bf84855a680f88a1",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237beb7b6a90008d11983",
				baseId: "60df4f48bf84855a680f8906",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237c7b7b6a90008d11987",
				baseId: "60f0735f1d00452cd0554157",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237d0b7b6a90008d1198b",
				baseId: "61b1142ecbb40a531ccf0772",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237ddb7b6a90008d1198f",
				baseId: "60df4ac6bf84855a680f88f6",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237e5b7b6a90008d11993",
				baseId: "60df6050bf84855a680f894d",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237edb7b6a90008d11997",
				baseId: "60df5bd4bf84855a680f8922",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237f4b7b6a90008d1199b",
				baseId: "60df4b05bf84855a680f88f8",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d237feb7b6a90008d1199f",
				baseId: "60df47dcbf84855a680f88de",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23804b7b6a90008d119a3",
				baseId: "61b11405cbb40a531ccf0770",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23812b7b6a90008d119a7",
				baseId: "60ded290bf84855a680f8887",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2381cb7b6a90008d119ab",
				baseId: "614e13b355d8b2253cc05551",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23823b7b6a90008d119af",
				baseId: "60df5025bf84855a680f890e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2384757c76b0009fd6138",
				baseId: "61252d6022975356085a1a07",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2385357c76b0009fd613f",
				baseId: "60ded377bf84855a680f888f",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2385e57c76b0009fd6143",
				baseId: "61b117c0cbb40a531ccf0794",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2386657c76b0009fd6148",
				baseId: "60df66efbf84855a680f8980",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2386d57c76b0009fd614c",
				baseId: "60df5accbf84855a680f8918",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2387757c76b0009fd6151",
				baseId: "60df61dabf84855a680f895b",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2387f57c76b0009fd6155",
				baseId: "60df5c07bf84855a680f8924",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2388957c76b0009fd6159",
				baseId: "60df5f46bf84855a680f8943",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2389157c76b0009fd615d",
				baseId: "60df6017bf84855a680f894b",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2389857c76b0009fd6161",
				baseId: "61b11331cbb40a531ccf076c",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2389f57c76b0009fd6165",
				baseId: "61b1104dcbb40a531ccf075a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238a757c76b0009fd6169",
				baseId: "60df5a32bf84855a680f8912",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238b457c76b0009fd616d",
				baseId: "60df4ea8bf84855a680f8900",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238c057c76b0009fd6171",
				baseId: "60df49e3bf84855a680f88ee",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238c957c76b0009fd6175",
				baseId: "61b11659cbb40a531ccf0788",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238d357c76b0009fd6179",
				baseId: "60df608ebf84855a680f894f",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238db57c76b0009fd617d",
				baseId: "60df67d2bf84855a680f898a",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238e257c76b0009fd6181",
				baseId: "611620ae147d3f4f203722f6",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238ef57c76b0009fd6189",
				baseId: "61b1145ecbb40a531ccf0774",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238f657c76b0009fd618d",
				baseId: "61b115dbcbb40a531ccf0784",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d238fd57c76b0009fd6191",
				baseId: "60df5d75bf84855a680f8930",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2390357c76b0009fd6195",
				baseId: "61b11742cbb40a531ccf0790",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2390a57c76b0009fd6199",
				baseId: "60df4b65bf84855a680f88fc",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2390f57c76b0009fd619d",
				baseId: "60df4f75bf84855a680f8908",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23916742bd60008fcefe4",
				baseId: "61b1126ecbb40a531ccf0766",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d2391d742bd60008fcefe9",
				baseId: "60df66bfbf84855a680f897e",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23921742bd60008fcefed",
				baseId: "60ded302bf84855a680f888b",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61d23926742bd60008fceff1",
				baseId: "60df613fbf84855a680f8955",
				options: [],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [{ uid: "S3FIWI9HqVdLcjIQzEniHNaAl123", role: "Owner" }],
		createdDate: "2022-01-02T23:24:55.951Z",
		displayName: "ALLKITS",
		urlSafeName: "ALLKITS",
		__v: 0,
		previousUpdater: "Fogthecatman"
	},
	{
		_id: "61f05526e9ce6d00123e7cd7",
		meta: {
			brandColors: { primary: "" },
			hasCoverPhoto: false,
			stripeId: "",
			premiumType: "",
			hasProfileImage: false,
			profileImage: "",
			specs: {},
			affiliates: {},
			setupPhotos: {},
			links: {}
		},
		viewCount: 0,
		games: [],
		kits: [],
		managers: [{ uid: "w5lMLvVLL3uJNRuoqSWvYjNIJ1GF", role: "Owner" }],
		createdDate: "2022-01-25T19:53:10.506Z",
		displayName: "brandnewchannel",
		urlSafeName: "brandnewchannel",
		__v: 0
	},
	{
		_id: "61f05587e9ce6d00123e7ce7",
		meta: {
			brandColors: { primary: "" },
			hasCoverPhoto: false,
			stripeId: "",
			premiumType: "",
			hasProfileImage: false,
			profileImage: "",
			specs: {},
			affiliates: {},
			setupPhotos: {},
			links: {}
		},
		viewCount: 0,
		games: [{ id: "60da97598821ed46dc9c008c" }],
		kits: [
			{
				_id: "61f0559ee9ce6d00123e7cf0",
				baseId: "61b1184acbb40a531ccf0796",
				options: [
					"61b1042fcbb40a531ccf051f",
					"61b10562cbb40a531ccf0573",
					"61b2dfc876830d4150679258",
					"61b103adcbb40a531ccf04f9",
					"61b10ccecbb40a531ccf06e2",
					"61b10df1cbb40a531ccf0728",
					"61b10d8bcbb40a531ccf0702",
					"61b10bbfcbb40a531ccf067e",
					"61b10e42cbb40a531ccf074e"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61f055b1e9ce6d00123e7cf4",
				baseId: "60df5fcbbf84855a680f8949",
				options: [
					"60df7203bf84855a680f8a49",
					"60e3defd8a26dd1acccc5e41",
					"60df7280bf84855a680f8a55",
					"60df732abf84855a680f8a73",
					"60e3df288a26dd1acccc5e49"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: true,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			},
			{
				_id: "61f055b9e9ce6d00123e7cf8",
				baseId: "60df5ce4bf84855a680f892a",
				options: [
					"60e3ceee8a26dd1acccc5bdf",
					"60e1d9babf84855a680f8efb",
					"60e4b092e580dd3004e5db3c"
				],
				userData: {
					customTitle: "",
					blueprint: "",
					featured: false,
					youtubeURL: "",
					tiktokId: "",
					quote: ""
				}
			}
		],
		managers: [
			{ uid: "w5lMLvVLL3uJNRuoqSWvYjNIJ1GF", role: "Owner" },
			{ uid: "VeoTKmMs72amUYzPRovBGJDJnGn1", role: "Administrator" },
			{ uid: "AnRFlNNbQ4d3K6nfEIRGBJm5nER3", role: "Editor" }
		],
		createdDate: "2022-01-25T19:54:47.173Z",
		displayName: "anthonyshew",
		urlSafeName: "anthonyshew",
		__v: 0,
		previousUpdater: "anthony"
	}
]

export default raw.map((player) => ({
	...player,
	games: player.games.map((game) => ({
		...game,
		id: new Types.ObjectId(game.id)
	})),
	createdDate: new Date(player.createdDate),
	kits: player.kits.map((kit) => ({
		...kit,
		_id: new Types.ObjectId(kit._id),
		options: kit.options.map((opt) => new Types.ObjectId(opt))
	}))
}))
