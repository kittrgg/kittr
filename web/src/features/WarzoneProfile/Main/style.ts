import styled from "styled-components"
import colors from "@Colors"
import { header4 } from "@Styles/typography"

export const Header = styled.h2`
	padding-left: 28px;
	color: ${colors.white};
	${header4};
	font-size: 36px;

	@media (max-width: 650px) {
		font-size: 22px;
	}
`

export const StatsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding-top: 10px;
`

export const Container = styled.div`
	justify-self: center;
	align-self: center;
	position: relative;
	width: 100%;
	padding: 20px;
	background-color: ${colors.light};
	border-radius: 25px;
	color: ${colors.white};
`

export const List = styled.ul`
	margin-top: 24px;
	margin-left: 24px;
	list-style: disc;
`

export const ListItem = styled.li`
	margin: 12px 0;
	color: ${colors.white};
	font-size: 22px;
	letter-spacing: 2px;
`

export const Disclaimer = styled.p`
	text-align: right;
	font-size: 14px;
`

export const KitOptionLabel = styled.p`
	color: ${colors.light};
	font-size: 22px;
	font-weight: 600;

	&:not(:first-of-type) {
		margin-top: 20px;
	}

	@media (max-width: 650px) {
		font-size: 18px;
	}
`

export const KitOption = styled.p`
	width: 100%;
	padding-left: 5%;
	color: ${colors.white};
	font-family: "Barlow Condensed", sans-serif;
	font-size: 36px;
	font-weight: 700;
	letter-spacing: 2px;
	white-space: nowrap;
	mask-image: linear-gradient(to right, black 90%, transparent 100%);

	@media (max-width: 650px) {
		font-size: 22px;
	}
`
