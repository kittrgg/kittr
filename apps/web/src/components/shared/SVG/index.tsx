import { createElement } from 'react';
import type React from 'react';
import { Arrow } from './Arrow';
import { Carat } from './Carat';
import { CheckMark } from './CheckMark';
import { Circle } from './Circle';
import { Clipboard } from './Clipboard';
import { CogWheel } from './CogWheel';
import { Discord as DISCORD } from './Discord';
import { EmptyAvatar } from './EmptyAvatar';
import { Export } from './Export';
import { Facebook as FACEBOOK } from './Facebook';
import { Instagram as INSTAGRAM } from './Instagram';
import { Line } from './Line';
import { Link } from './Link';
import { List } from './List';
import { Patreon as PATREON } from './Patreon';
import { Pencil } from './Pencil';
import { Premium } from './Premium';
import { PremiumWithCircle } from './PremiumWithCircle';
import { QuestionMark } from './QuestionMark';
import { QuotationMark } from './QuotationMark';
import { Renew } from './Renew';
import { Search } from './Search';
import { Star } from './Star';
import { Tiktok as TIKTOK } from './Tiktok';
import { TrashCan } from './TrashCan';
import { Twitch as TWITCH } from './Twitch';
import { Twitter as TWITTER } from './Twitter';
import { X } from './X';
import { Youtube as YOUTUBE } from './Youtube';

export type SVGType = keyof typeof SVG;

export const SVG = {
	Carat,
	Pencil,
	X,
	EmptyAvatar,
	Star,
	TrashCan,
	QuestionMark,
	CheckMark,
	Renew,
	Export,
	Search,
	Arrow,
	Twitch: TWITCH,
	TWITCH,
	Twitter: TWITTER,
	TWITTER,
	Youtube: YOUTUBE,
	YOUTUBE,
	Instagram: INSTAGRAM,
	INSTAGRAM,
	Facebook: FACEBOOK,
	FACEBOOK,
	Discord: DISCORD,
	DISCORD,
	Tiktok: TIKTOK,
	TIKTOK,
	Patreon: PATREON,
	PATREON,
	QuotationMark,
	Circle,
	Line,
	Premium,
	PremiumWithCircle,
	Link,
	CogWheel,
	List,
	Clipboard,
};

export default SVG;

interface SVGByTypeProps {
	type: SVGType;
	colorHover?: string;
}

export function SvgByType({
	type,
	...props
}: React.AllHTMLAttributes<any> & SVGByTypeProps) {
	return createElement(SVG[type], props);
}
