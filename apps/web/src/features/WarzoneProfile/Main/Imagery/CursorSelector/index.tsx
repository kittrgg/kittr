import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import type { Dispatch, SetStateAction } from "react"

interface Props {
	cursor: number
	setCursor: Dispatch<SetStateAction<number>>
	items: any[]
}

function CursorSelector({ cursor, setCursor, items }: Props) {
	return (
		<div style={{ margin: "24px 0 12px", textAlign: "center" }}>
			<SVG.Carat
				onClick={() => setCursor(Math.max(cursor - 1, 0))}
				style={{ marginRight: "5px", transform: "rotate(-90deg)", cursor: "pointer" }}
				width="16px"
			/>
			{items.map((item, index) => {
				return (
					<span
						key={item[0]}
						style={{
							display: "inline-block",
							width: "10px",
							height: "10px",
							margin: "0 5px",
							borderRadius: "100%",
							backgroundColor: index === cursor ? colors.white : colors.light
						}}
					/>
				)
			})}
			<SVG.Carat
				onClick={() => setCursor(Math.min(cursor + 1, items.length - 1))}
				style={{ marginLeft: "5px", transform: "rotate(90deg)", cursor: "pointer" }}
				width="16px"
			/>
		</div>
	)
}

export default CursorSelector
