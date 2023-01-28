import { trpc } from "@/lib/trpc"
import colors from "@Colors"
import { Button, MultiSelect, Section, Text, TextInput } from "@kittr/ui"
import { Switch } from "@mantine/core"
import { useState } from "react"

interface GameInputs {
	urlSafeName: string
	displayName: string
	backgroundImageUrl: string
	titleImageUrl: string
	active: boolean
	blurDataUrl: string
	developer: string
	releaseDate: Date
	genres: string[]
	platforms: string[]
}

const Page = () => {
	const { mutate: addGame, isLoading } = trpc.games.add.useMutation()
	const { data: platforms, isLoading: isLoadingPlatforms } = trpc.games["list-platforms"].useQuery()
	const { data: genres, isLoading: isLoadingGenres } = trpc.games["list-platforms"].useQuery()

	const [gameInputs, setGameInputs] = useState<GameInputs>({
		active: false,
		releaseDate: new Date(),
		urlSafeName: "",
		displayName: "",
		backgroundImageUrl: "",
		titleImageUrl: "",
		blurDataUrl: "",
		developer: "",
		platforms: [],
		genres: []
	})

	const handleInputChange = (e: EventTarget & HTMLInputElement, inputKey: keyof GameInputs) => {
		const gameInputsCopy = { ...gameInputs }

		if (inputKey === "genres" || inputKey === "platforms") return

		// is game active toggle
		if (inputKey === "active") gameInputsCopy.active = !gameInputsCopy.active
		// handle date change TODO: Do we want the date formatted this way?
		else if (inputKey === "releaseDate") gameInputsCopy.releaseDate = new Date(e.value)
		// gameinput strings
		else gameInputsCopy[inputKey] = e.value

		setGameInputs(gameInputsCopy)
	}

	const isFormComplete = () =>
		gameInputs.urlSafeName &&
		gameInputs.displayName &&
		gameInputs.backgroundImageUrl &&
		gameInputs.titleImageUrl &&
		gameInputs.blurDataUrl &&
		gameInputs.developer

	if (isLoadingGenres || isLoadingPlatforms) return <p>Loading...</p>

	if (genres && platforms) {
		return (
			<Section title="Create Game">
				{Object.keys(gameInputs).map((input) => {
					if (input === "active") {
						return (
							<>
								<Switch
									size="lg"
									label="Active"
									checked={gameInputs.active}
									onChange={({ currentTarget }) => {
										handleInputChange(currentTarget, "active")
									}}
									sx={{ input: { backgroundColor: colors.light, border: "none" }, label: { color: colors.white } }}
								/>
							</>
						)
					}

					if (input === "releaseDate") {
						return (
							<>
								<Text variant="text" size="lg" color={colors.white}>
									Release Date
								</Text>
								<input
									type="date"
									onChange={({ target }) => handleInputChange(target, "releaseDate")}
									style={{
										backgroundColor: colors.light,
										padding: "0.5rem",
										borderRadius: "10px",
										color: colors.white
									}}
								/>
							</>
						)
					}

					return (
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						<TextInput key={input} label={input} onChange={({ target }) => handleInputChange(target, input as any)} />
					)
				})}

				<MultiSelect
					label="Genres"
					data={genres.map((el) => ({ label: el.displayName, value: el.id }))}
					onChange={(val) => setGameInputs((prev) => ({ ...prev, genres: val }))}
				/>
				<MultiSelect
					label="Platforms"
					data={platforms.map((el) => ({ label: el.displayName, value: el.id }))}
					onChange={(val) => setGameInputs((prev) => ({ ...prev, platforms: val }))}
				/>
				{!isFormComplete() && <Text color={colors.red}>Fill out form fully before submitting...</Text>}

				<Button
					mt="0.75rem"
					loading={isLoading}
					onClick={() => {
						addGame({ ...gameInputs }, { onSuccess: () => console.log("Okay to clear...") })
					}}
					disabled={!isFormComplete()}
				>
					Add Game
				</Button>
			</Section>
		)
	}

	return null
}

export default Page
