import colors from "@Colors"
import styled from "styled-components"

export const Container = styled.aside<{ height: number }>`
	position: relative;
	width: 150px;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${colors.middle};
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0px;
	}
`

export const ButtonContainer = styled.div<{ isActive: boolean | string }>`
	position: relative;
	width: 100%;
	height: 90px;
	padding: 10px;
	background: ${(props) =>
		props.isActive
			? `linear-gradient(90deg, ${colors.white} 0%, ${colors.white} 8%, ${colors.light} 8%, ${colors.light} 89%)`
			: "transparent"};
	text-align: center;
	transition: 0.2s;

	&:first-of-type {
		height: 75px;
		margin-top: 20px;
		margin-bottom: 0;
		padding: 0;
	}
`

export const Button = styled.button`
	appearance: none;
	width: 70px;
	height: 70px;
	padding: 0;
	border: none;
	border-radius: 12px;
	background: ${colors.light};
	cursor: pointer;
	overflow: hidden;
	transition: 0.2s;
`

export const DeleteGameBubble = styled.button<{ isHovered: boolean }>`
	appearance: none;
	border: none;
	position: absolute;
	top: 6px;
	right: 25%;
	width: 20px;
	height: 20px;
	padding: 4px;
	border-radius: 25px;
	background-color: ${colors.white};
	cursor: pointer;
	transition: 0.2s;
	transform: ${(props) => (props.isHovered ? "scale(1)" : "scale(0)")};
`

export const SupportButton = styled.div`
	position: sticky;
	bottom: 0;
	left: 0;
	right: 0;
	margin-top: auto;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 12px 0;
	transition: 0.2s;
	background: ${colors.middle};

	&:hover {
		background: ${colors.dark};
	}
`
