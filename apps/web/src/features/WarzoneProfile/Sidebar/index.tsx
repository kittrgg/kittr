/* eslint-disable max-len */
import React, { useState } from "react"

import colors from "@Colors"
import { Button, SearchInput } from "@Components/shared"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import {
	WarzoneTwoKit,
	WarzoneTwoKitBase,
	WarzoneTwoKitBaseCategory,
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitBaseCategory
} from "@kittr/prisma"
import { setIsSidebarOpen } from "@Redux/slices/displayr"
import { useChannel, useSidebarState } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import Ad from "@Services/venatus/Ad"
import { filterKitsByFeature } from "@Utils/helpers/filterKitsByFeature"
import { sortAlphabetical } from "@Utils/helpers/sortAlphabetical"
import Item from "./Item"
import * as Styled from "./styles"
import { useRouter } from "next/router"

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
	const { warzoneKits: unfilteredKits = [], warzoneTwoKits: unfilteredwz2Kits = [] } = useChannel()
	const { width } = useViewportDimensions()
	const [filterQuery, setFilterQuery] = useState("")
	const router = useRouter()
	const {
		query: { game }
	} = router

	const sanitizeForSearch = (string: string) => string.toLowerCase().replace(/[^0-9a-zA-Z]/g, "")

	const sortForUniqueKitName = (
		arr: ((WarzoneKit | WarzoneTwoKit) & {
			base: (WarzoneKitBase | WarzoneTwoKitBase) & {
				category: WarzoneKitBaseCategory | WarzoneTwoKitBaseCategory
			}
		})[]
	): string[] => arr.map((elem) => elem.base.displayName).sort((a, b) => sortAlphabetical(a, b))

	const kits = unfilteredKits.filter((kit) =>
		sanitizeForSearch(kit.base.displayName).includes(sanitizeForSearch(filterQuery))
	)

	const wz2Kits = unfilteredwz2Kits.filter((kit) =>
		sanitizeForSearch(kit.base.displayName).includes(sanitizeForSearch(filterQuery))
	)

	const featuredKits = filterKitsByFeature(game === "wz2" ? wz2Kits : kits)
	const uniqueListItems = sortForUniqueKitName(featuredKits)

	const restOfKits = game === "wz2" ? wz2Kits.filter((elem) => !elem.featured) : kits.filter((elem) => !elem.featured)
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

				{uniqueListItems.map((baseName) => (
					<Item
						key={baseName}
						kits={filterKitsByFeature(kits)}
						baseName={baseName}
						featured
						setFilterQuery={setFilterQuery}
					/>
				))}

				{filterKitsByFeature(kits).length > 0 && <hr style={{ width: "88%", borderColor: colors.lightest }} />}

				{unfilteredKits && unfilteredKits.length > CATEGORY_SPLIT
					? CATEGORIES.map((category) => (
							<React.Fragment key={category}>
								<Styled.CategoryLabel>
									{restOfKits.filter((kit) => kit.base.category.displayName === category).length > 0 && (
										<>{`${category}s`.toUpperCase()}</>
									)}
								</Styled.CategoryLabel>
								{restOfKits
									.filter((v, i, a) => a.findIndex((t) => t.base.displayName === v.base.displayName) === i)
									.filter((kit) => kit.base.category.displayName === category)
									.map((kit) => {
										const { id, base } = kit
										return <Item key={id} kits={kits} baseName={base.displayName} setFilterQuery={setFilterQuery} />
									})}
							</React.Fragment>
					  ))
					: restListItems.map((baseName) => (
							<Item key={baseName} kits={kits} baseName={baseName} setFilterQuery={setFilterQuery} />
					  ))}

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
