/** Not up in here! Filter bad words (or at least try to). Pass in a string and see if it passes. */
export const badWordFilter = (string: string): boolean => {
	const badWords = [
		'penis',
		'vagina',
		'nazi',
		'nigger',
		'faggot',
		'fag',
		'nigga',
		'fuck',
		'slut',
		'whore',
		'cunt',
		'cock',
		'bullshit',
		'bull shit',
		'bitch',
		'twat',
		'mierda',
		'pussy',
		'nipple',
		'butthole',
		'asshole',
		'areola',
		'arsehole',
		'ballsack',
		'ball sack',
		'blowjob',
		'blow job',
		'bondage',
		'bunghole',
		'bung hole',
		'cameltoe',
		'camel toe',
		'chink',
		'choad',
		'chode',
		'cocaine',
		'marijuana',
		'coitus',
		'sex',
		'condom',
		'crotch',
		'cum',
		'cumm',
		'dildo',
		'ejaculate',
		'genital',
		'goddamn',
		'goddam',
		'handjob',
		'hitler',
		'hymen',
		'scrotum',
		'taint',
		'intercourse',
		'jackoff',
		'jack off',
		'jigga',
		'jiggaboo',
		'jigger',
		'jizz',
		'kkk',
		'lesbian',
		'lesbo',
		'masterbate',
		'master bate',
		'masturbate',
		'mastur bate',
		'milf',
		'molest',
		'nigg',
		'orgy',
		'orgies',
		'orgasm',
		'pen15',
		'peni5',
		'pervert',
		'phuk',
		'porn',
		'prostitute',
		'queef',
		'queer',
		'raghead',
		'racist',
		'rapist',
		'rectum',
		'retard',
		'rimjob',
		'semen',
		'shitdick',
		'shiteater',
		'shitface',
		'shitfit',
		'shitforbrains',
		'shithead',
		'shitstain',
		'sixsixsix',
		'sixtynine',
		'sixty nine',
		'six six six',
		'sixsix six',
		'six sixsix',
		'slanteye',
		'swastika',
		'tampon',
		'testicle',
		'titjob',
		'tittie',
		'titty',
		'towelhead',
		'towel head',
		'urinary',
		'urinate',
		'urine',
		'vibrator',
		'vibrater',
		'vulva',
		'wetback',
		'gspot',
		'g spot',
		'wigger',
		'whigger',
		'wet back',
		'wtf',
		'xtc',
		'xxx',
		'x x x',
		'w t f',
		'x t c',
		'zipperhead',
		'zipper head',
		'peepee',
		'pee pee',
	];

	return badWords.some((check) => string.includes(check));
};
