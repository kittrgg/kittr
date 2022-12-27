import colors from "@Colors"
import { useDebounce } from "@Hooks/useDebounce"
import { useDidMountEffect } from "@Hooks/useDidMountEffect"
import { useState } from "react"
import styled from "styled-components"

type DesignVariants = "Big Square" | "Small Circle"

interface Props {
	onChangeComplete: (color: string | null) => void
	defaultColor: string
	designVariant: DesignVariants
}

export const ColorPicker = ({ onChangeComplete, defaultColor, designVariant }: Props) => {
	const [color, setColor] = useState<string | null>(defaultColor)
	const debouncedColor = useDebounce(color, 500)

	useDidMountEffect(() => {
		if (debouncedColor && onChangeComplete) {
			onChangeComplete(debouncedColor)
		}
		// eslint-disable-next-line
	}, [debouncedColor])

	return (
		<ColorInputWrapper designVariant={designVariant}>
			<ColorInput type="color" value={defaultColor} onChange={(e) => setColor(e.target.value)} />
		</ColorInputWrapper>
	)
}

export default ColorPicker

// Styled Components

const bigSquareCSS = `
    display: inline-block;
    width: 90px;
    height: 90px;
    border: 2px solid ${colors.lighter};
    border-radius: 8px;
    overflow: hidden;
`

const smallCircleCSS = `
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 24px;
    border: 2px solid ${colors.lighter};
    border-radius: 15px;
    overflow: hidden;
`

const designs = {
	"Big Square": bigSquareCSS,
	"Small Circle": smallCircleCSS
}

const ColorInputWrapper = styled.span<{ designVariant: DesignVariants }>`
	${(props) => designs[props.designVariant]};
`

const ColorInput = styled.input`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 200%;
	height: 200%;
	cursor: pointer;
`
