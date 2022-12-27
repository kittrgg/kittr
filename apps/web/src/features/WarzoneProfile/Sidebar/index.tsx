import colors from "@Colors"
import { SearchInput, SVG } from "@Components/shared"
import { useChannelProfileData } from "@Hooks/trpc/useChannelProfileData"
import { Routes } from "@Utils/lookups/routes"
import { WarzoneKit, WarzoneKitBase, WarzoneTwoKit, WarzoneTwoKitBase } from "@kittr/prisma"
import { Button, Text, Title, ButtonProps } from "@kittr/ui"
import { Accordion, ScrollArea } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import { useRouter } from "next/router"
import React, { useState } from "react"

interface SidebarButtonProps extends ButtonProps {
	kit: (WarzoneKit & { base: WarzoneKitBase }) | (WarzoneTwoKit & { base: WarzoneTwoKitBase })
	featured?: boolean
	subButton?: boolean
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ kit, featured, subButton, ...props }) => {
	const {
		query: { k }
	} = useRouter()
	const kitNameQuery = k as string
	const selected = matchDisplayQuery(kitNameQuery, kit, kit?.customTitle ? true : false)
	const defaultStyle = { backgroundColor: selected ? colors.dark20 : colors.light, margin: "0.5em 0" }
	const subButtonStyle = {
		width: "90%",
		backgroundColor: selected ? colors.dark20 : colors.light,
		marginLeft: "auto",
		marginTop: "0.25em"
	}

	return (
		<Button
			fullWidth
			rightIcon={featured && <SVG.Star stroke="none" fill={colors.gold} />}
			style={subButton ? subButtonStyle : defaultStyle}
			styles={{ label: { textAlign: "left", width: "100%" } }}
			{...props}
		>
			{kit?.customTitle ? kit?.customTitle : subButton ? "Default" : kit?.base?.displayName}
		</Button>
	)
}

const matchDisplayQuery = (
	kitNameQuery: string,
	kit: (WarzoneKit & { base: WarzoneKitBase }) | (WarzoneTwoKit & { base: WarzoneTwoKitBase }),
	customTitle?: boolean
) => {
	if (customTitle) {
		return kitNameQuery?.replace(" ", "-") === (kit?.base?.displayName + kit?.customTitle).replace(" ", "-")
	}
	return kitNameQuery?.replace(" ", "-") === kit?.base?.displayName.replace(" ", "-")
}

const CATEGORIES = [
	"Assault Rifle",
	"Battle Rifle",
	"SMG",
	"Shotgun",
	"LMG",
	"Tactical Rifle",
	"Marksman Rifle",
	"Sniper Rifle",
	"Handgun"
]

const Sidebar = () => {
	const { width } = useViewportSize()
	const [filterQuery, setFilterQuery] = useState("")
	const isMobile = width <= 1050
	const router = useRouter()
	const {
		query: { game, channel }
	} = router
	const { data: channelData } = useChannelProfileData()
	const unfilteredKits = channelData?.warzoneKits ?? []
	const unfilteredwz2Kits = channelData?.warzoneTwoKits ?? []
	const allKits = game === "wz2" ? unfilteredwz2Kits : unfilteredKits
	const filteredByFavorite = allKits.filter((kit) => kit.featured)

	console.log({ unfilteredKits, unfilteredwz2Kits })

	return (
		<>
			<div style={{ padding: "0 1em" }}>
				<SearchInput
					value={filterQuery}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterQuery(e.target.value)}
					clearSearch={() => setFilterQuery("")}
				/>
			</div>
			<hr style={{ width: "88%", borderColor: colors.lightest }} />
			<ScrollArea style={{ height: isMobile ? "80%" : "92%", padding: "0 1em" }}>
				{/* if there are favorited kits and no filterQuery - display them at the top of the scroller */}
				{filteredByFavorite.length > 0 &&
					!filterQuery &&
					filteredByFavorite.map((favKit) => (
						<>
							<Title preset="h4" ml="0.75em">
								Favorites
							</Title>
							<SidebarButton
								key={favKit.id}
								kit={favKit}
								featured
								onClick={() => {
									router.push(
										Routes.CHANNEL.GAME.createPath(
											channel as string,
											game as string,
											`?k=${favKit.base.displayName.replace(/ /g, "-")}
			${favKit.customTitle && favKit.customTitle.replace(/ /g, "-")}`
										),
										undefined,
										{ shallow: true }
									)
								}}
							/>
						</>
					))}
				{CATEGORIES.map((category) => {
					return (
						<>
							<Title preset="h4" ml="0.75em">
								{/*
								If there is a filter query - filter allkits to the search query and find index of category - else find index on unfiltered kits
								 *** If index is -1 that means there is no kit so it won't show category name ***
								 */}
								{(filterQuery
									? allKits
											.filter((kit) => kit.base.displayName.toLowerCase().includes(filterQuery))
											.findIndex((kit) => kit.base.category.displayName === category) !== -1
									: allKits.findIndex((kit) => kit.base.category.displayName === category) !== -1) && category}
							</Title>
							{/* Kits are filtered by categories and does not include featured kits. */}
							{allKits
								.filter(
									(unsortedKit) =>
										// if there is a filter query search - find kits that include query and similar categories   else - find kits that are in similar categories
										(filterQuery
											? unsortedKit.base.displayName.toLowerCase().includes(filterQuery.toLowerCase()) &&
											  unsortedKit.base.category.displayName === category
											: unsortedKit.base.category.displayName === category) && !unsortedKit.featured
								)
								.map((kit) => {
									// If the kit has a customTitle - display an accordion with the kits that have a customTitle and the base kit that has no customTitle
									if (kit?.customTitle) {
										return (
											<>
												<Accordion
													iconPosition="right"
													icon={
														<Text>
															({allKits.filter((subKit) => kit.base.displayName === subKit.base.displayName).length})
														</Text>
													}
													disableIconRotation
													styles={{
														control: { backgroundColor: colors.light, padding: "0.6em" },
														label: { fontSize: "1.2em", fontWeight: "600", color: colors.white, paddingLeft: "0.7em" },
														contentInner: { padding: 0 }
													}}
												>
													<Accordion.Item label={kit.base.displayName}>
														{/* Finds similar kits by matching the filtered kit base displayname with the kit that has a customTitle */}
														{allKits
															.filter((subKit) => kit.base.displayName === subKit.base.displayName)
															.map((sub) => (
																<SidebarButton
																	key={sub.id}
																	kit={sub}
																	featured={sub.featured}
																	subButton={true}
																	onClick={() => {
																		router.push(
																			Routes.CHANNEL.GAME.createPath(
																				channel as string,
																				game as string,
																				`?k=${sub.base.displayName.replace(/ /g, "-")}
										${sub.customTitle && sub.customTitle.replace(/ /g, "-")}`
																			),
																			undefined,
																			{ shallow: true }
																		)
																	}}
																/>
															))}
													</Accordion.Item>
												</Accordion>
											</>
										)
									}
									// if there is only one kit with this displayName then show only the button
									if (allKits.filter((subKit) => kit.base.displayName === subKit.base.displayName).length === 1) {
										return (
											<>
												<SidebarButton
													key={kit.id}
													kit={kit}
													featured={kit.featured}
													onClick={() => {
														router.push(
															Routes.CHANNEL.GAME.createPath(
																channel as string,
																game as string,
																`?k=${kit.base.displayName.replace(/ /g, "-")}
										${kit.customTitle && kit.customTitle.replace(/ /g, "-")}`
															),
															undefined,
															{ shallow: true }
														)
													}}
												/>
											</>
										)
									}
								})}
							{/* Ad placement */}
						</>
					)
				})}
			</ScrollArea>
		</>
	)
}

export default Sidebar
