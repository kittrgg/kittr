import React, { useState } from "react"

import { KitWithBaseInDisplayr } from "@Types/prisma"
import * as Styled from "./styles"
import colors from "@Colors"
import { filterKitsByFeature } from "@Utils/helpers/filterKitsByFeature"
import { sortAlphabetical } from "@Utils/helpers/sortAlphabetical"
import { useDispatch } from "@Redux/store"
import { useChannel, useSidebarState } from "@Redux/slices/displayr/selectors"
import { setIsSidebarOpen } from "@Redux/slices/displayr"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import Item from "./Item"
import { SearchInput, Button } from "@Components/shared"
import Ad from "@Services/venatus/Ad"

const CATEGORIES = [
	"Assault Rifle",
	"SMG",
	"Shotgun",
	"LMG",
	"Tactical Rifle",
	"Marksman Rifle",
	"Sniper Rifle",
	"Handgun"
]
const CATEGORY_SPLIT = 19

const Sidebar = () => {
	const dispatch = useDispatch()
	const isSidebarOpen = useSidebarState()
	const { kits: unfilteredKits = [] } = useChannel()
	const { width } = useViewportDimensions()
	const [filterQuery, setFilterQuery] = useState("")

	const sanitizeForSearch = (string: string) => string.toLowerCase().replace(/[^0-9a-zA-Z]/g, "")

	const sortForUniqueKitName = (arr: KitWithBaseInDisplayr[]): string[] =>
		arr.map((elem) => elem.kitBase.displayName).sort((a, b) => sortAlphabetical(a, b))

	const kits = unfilteredKits.filter((kit) =>
		sanitizeForSearch(kit.kitBase.displayName).includes(sanitizeForSearch(filterQuery))
	)

	const featuredKits = filterKitsByFeature(kits)
	const uniqueListItems = sortForUniqueKitName(featuredKits)

	const restOfKits = kits.filter((elem) => !elem.featured)
	const restListItems = sortForUniqueKitName(restOfKits)

	return (
		<Styled.Wrapper isSidebarOpen={isSidebarOpen} viewportWidth={width} data-cy="kit-list">
			<Styled.Container>
				<Styled.SearchWrapper>
					<SearchInput
						value={filterQuery}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterQuery(e.target.value)}
						clearSearch={() => setFilterQuery("")}
					/>
				</Styled.SearchWrapper>

				{uniqueListItems.map((baseName) => {
					return (
						<Item
							key={baseName}
							kits={filterKitsByFeature(kits)}
							baseName={baseName}
							featured
							setFilterQuery={setFilterQuery}
						/>
					)
				})}

				{filterKitsByFeature(kits).length > 0 && <hr style={{ width: "88%", borderColor: colors.lightest }} />}

				{unfilteredKits && unfilteredKits.length > CATEGORY_SPLIT
					? CATEGORIES.map((category) => {
							return (
								<React.Fragment key={category}>
									<Styled.CategoryLabel>
										{restOfKits.filter((kit) => kit.kitBase.category.displayName === category).length > 0 && (
											<>{`${category}s`.toUpperCase()}</>
										)}
									</Styled.CategoryLabel>
									{restOfKits
										.filter((kit) => kit.kitBase.category.displayName === category)
										.map((kit) => {
											const { id, kitBase } = kit
											return (
												<Item key={id} kits={kits} baseName={kitBase.displayName} setFilterQuery={setFilterQuery} />
											)
										})}
								</React.Fragment>
							)
					  })
					: restListItems.map((baseName) => {
							return <Item key={baseName} kits={kits} baseName={baseName} setFilterQuery={setFilterQuery} />
					  })}

				{(width as number) < 1051 && (
					<Button
						design="white"
						text="CLOSE"
						onClick={() => dispatch(setIsSidebarOpen(false))}
						style={{
							position: "fixed",
							bottom: "12px",
							right: "12px",
							width: isSidebarOpen ? "initial" : "0",
							height: isSidebarOpen ? "initial" : "0",
							paddingLeft: isSidebarOpen ? "18px" : "0",
							paddingRight: isSidebarOpen ? "18px" : "0",
							opacity: isSidebarOpen ? "1" : "0",
							overflow: "hidden",
							fontSize: "12px"
						}}
					/>
				)}

				{unfilteredKits && unfilteredKits.length > CATEGORY_SPLIT && (
					<>
						<Styled.Caption>
							Ads are annoying but keep this site running. Thank you for understanding.
							<br />- The Guy That Makes kittr
						</Styled.Caption>
						<Ad placementType="d300x250" />
					</>
				)}
			</Styled.Container>
		</Styled.Wrapper>
	)
}

export default Sidebar
