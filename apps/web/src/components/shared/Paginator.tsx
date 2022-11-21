import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import Link from "next/link"
import styled from "styled-components"

interface Props {
	/** Total amount of results. */
	totalResults: number
	/** Index of the currently rendered page in the list of pagination. */
	currentPage: number
	/** What is the index of the first result that is on this page? */
	currentPageResultStart: number
	/** What is the index of the last result that is on this page? */
	currentPageResultEnd: number
	/** Is this the first page in the pagination sequence? */
	isFirstPage: boolean
	/** Is this the last page in the pagination sequence? */
	isLastPage: boolean
	/** Root route for the pagination to occur on.
	 * Ex: "/channels/" if the pagination is occuring through the channels pages.
	 * */
	pageRoot: string
}

/** For pages that require pagination,
 * this component renders the forward, backword, and current results of the page.
 * */
export const Paginator = ({
	totalResults,
	currentPage,
	currentPageResultStart,
	currentPageResultEnd,
	isFirstPage,
	isLastPage,
	pageRoot
}: Props) => (
	<Container>
		<p style={{ margin: "24px 0" }}>
			Viewing {currentPageResultStart} - {Math.min(currentPageResultEnd, totalResults)} of {totalResults} results.
		</p>
		<Navigation>
			{!isFirstPage && (
				<Link href={`${pageRoot}/${currentPage - 1}`} passHref>
					<PageLink data-cy="decrement-page">
						<SVG.Carat
							width="14px"
							style={{
								height: "14px",
								marginRight: "8px",
								transform: "rotate(-90deg)"
							}}
						/>
						Prev
					</PageLink>
				</Link>
			)}
			{!isFirstPage && !isLastPage && <CurrentPageIndicator>{currentPage}</CurrentPageIndicator>}
			{!isLastPage && (
				<Link href={`${pageRoot}/${currentPage + 1}`} passHref>
					<PageLink data-cy="increment-page">
						Next
						<SVG.Carat
							width="14px"
							style={{
								height: "14px",
								marginLeft: "8px",
								transform: "rotate(90deg)"
							}}
						/>
					</PageLink>
				</Link>
			)}
		</Navigation>
	</Container>
)

export default Paginator

// Styled Components

const Container = styled.div`
	margin: 0 auto;
	text-align: center;
`

const Navigation = styled.div`
	display: flex;
	column-gap: 24px;
	justify-content: center;
	list-style: none;
`

const PageLink = styled.a`
	color: ${colors.white};
	font-size: 20px;
	text-decoration: none;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			text-decoration: underline;
		}
	}
`

const CurrentPageIndicator = styled.p`
	font-size: 20px;
`
