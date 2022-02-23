import { createElement } from "react"
import { Arrow } from "./Arrow"
import { Carat } from "./Carat"
import { CheckMark } from "./CheckMark"
import { Circle } from "./Circle"
import { Clipboard } from "./Clipboard"
import { CogWheel } from "./CogWheel"
import { Discord } from "./Discord"
import { EmptyAvatar } from "./EmptyAvatar"
import { Export } from "./Export"
import { Facebook } from "./Facebook"
import { Instagram } from "./Instagram"
import { Line } from "./Line"
import { Link } from "./Link"
import { List } from "./List"
import { Patreon } from "./Patreon"
import { Pencil } from "./Pencil"
import { Premium } from "./Premium"
import { PremiumWithCircle } from "./PremiumWithCircle"
import { QuestionMark } from "./QuestionMark"
import { QuotationMark } from "./QuotationMark"
import { Renew } from "./Renew"
import { Search } from "./Search"
import { Star } from "./Star"
import { Tiktok } from "./Tiktok"
import { TrashCan } from "./TrashCan"
import { Twitch } from "./Twitch"
import { Twitter } from "./Twitter"
import { X } from "./X"
import { Youtube } from "./Youtube"

export type SVGType = keyof typeof SVG

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
	Twitch,
	Twitter,
	Youtube,
	Instagram,
	Facebook,
	Discord,
	Tiktok,
	Patreon,
	QuotationMark,
	Circle,
	Line,
	Premium,
	PremiumWithCircle,
	Link,
	CogWheel,
	List,
	Clipboard
}

export default SVG

interface SVGByTypeProps {
	type: SVGType
	colorHover?: string
}

/** Use an SVG by specifying which one you want. You must pass a "type" prop! */
export const SvgByType = ({ type, ...props }: SVGByTypeProps & React.AllHTMLAttributes<any>) => {
	return createElement(SVG[type], props)
}
