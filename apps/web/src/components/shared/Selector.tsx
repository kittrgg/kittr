/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from "@Colors"
import type { Props } from "react-select";
import Select from "react-select"
import CreatableSelect from "react-select/creatable"

export function Selector({ ...props }: Props & { isCreatable?: boolean }) {
	const { styles, ...restOfProps } = props

	const style = {
		control: (base: any) => ({
			...base,
			backgroundColor: "transparent",
			cursor: "pointer",
			boxShadow: "0",
			minHeight: "40px",
			color: colors.white,
			border: "none"
		}),
		singleValue: (base: any) => ({
			...base,
			fontSize: "18px",
			color: colors.lighter,
			letterSpacing: "2px"
		}),
		placeholder: (base: any) => ({
			...base,
			fontSize: "18px",
			color: colors.lighter,
			letterSpacing: "2px"
		}),
		indicatorSeparator: (base: any) => ({
			...base,
			display: "none",
			color: colors.lighter
		}),
		menu: (base: any) => ({
			...base,
			backgroundColor: colors.dark,
			marginTop: "5px",
			padding: "0 20px",
			paddingRight: "0",
			borderRadius: "12px",
			border: `1px solid ${colors.white}`,
			overflow: "hidden"
		}),
		menuList: (base: any) => ({
			...base,
			"paddingRight": "12px",
			"&::-webkit-scrollbar": {
				width: "8px"
			},
			"&::-webkit-scrollbar-track": {
				background: "transparent"
			},
			"&::-webkit-scrollbar-thumb": {
				backgroundColor: colors.lightest,
				border: "5px solid transparent"
			}
		}),
		input: (base: any, state: any) => ({
			...base,
			color: colors.white,
			marginRight: "20px",
			cursor: state.isActive ? "pointer" : ""
		}),
		option: (base: any, state: any) => ({
			...base,
			"padding": "12px",
			"marginRight": "20px",
			"paddingRight": "20px",
			"borderRadius": "12px",
			"cursor": "pointer",
			"&:hover": {
				backgroundColor: colors.white,
				color: colors.black
			},
			"backgroundColor": state.isSelected ? colors.lighter : "transparent"
		}),
		valueContainer: (base: any, state: any) => ({
			...base,
			marginTop: "0px",
			margin: state.selectProps.isCreatable ? "0.5rem" : 0,
			overflow: "hidden",
			color: colors.white
		}),
		container: (base: any) => ({
			...base,
			flex: "0.5",
			minWidth: "250px",
			height: "100%",
			color: colors.white
		}),
		...styles
	}

	if (props.isCreatable) {
		return <CreatableSelect styles={style} {...restOfProps} />
	}

	return <Select styles={style} {...restOfProps} />
}

export default Selector
