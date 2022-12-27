import colors from "@Colors"
import { useIsMounted } from "@Hooks/useIsMounted"
import { useEffect, Dispatch, SetStateAction, ReactNode } from "react"
import styled from "styled-components"

interface Props {
	visible: boolean
	setVisibility: Dispatch<SetStateAction<boolean>>
	children: string | ReactNode
}

export const Toast = ({ visible, setVisibility, children }: Props) => {
	const isMounted = useIsMounted()

	useEffect(() => {
		setTimeout(() => {
			if (isMounted() && visible) {
				setVisibility(false)
			}
		}, 1000)
	}, [visible, isMounted, setVisibility])

	return <Container visible={visible}>{children}</Container>
}

export default Toast

const Container = styled.div<{ visible: boolean }>`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 16px 75px;
	border-radius: 20px;
	background-color: ${colors.light};
	transition: 0.2s;
	bottom: ${(props) => (props.visible ? "30px" : "0")};
	opacity: ${(props) => (props.visible ? "1" : 0)};

	p {
		letter-spacing: 2px;
	}
`
