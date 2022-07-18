import colors from "@Colors"
import { header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import styled from "styled-components"

/** Simple link to get back to the /dashboard route */
const BackToLogin = ({ ...props }) => (
		<Link href={Routes.DASHBOARD} passHref>
			<StyledLink>Back to login.</StyledLink>
		</Link>
	)

export default BackToLogin

// Styled Components

const StyledLink = styled.a`
	display: inline-block;
	margin-top: 48px;
	color: ${colors.white};
	${header2};

	&:hover {
		text-decoration: underline;
	}
`
