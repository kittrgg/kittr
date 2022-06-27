import colors from "@Colors"
import { Button } from "@Components/shared"
import { useAllKitBases } from "@Hooks/trpc/useAllKitBases"
import { Loader } from "@kittr/ui"
import { createNewKit } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { filterKitsByFeature } from "@Utils/helpers/filterKitsByFeature"
import { sortAlphabetical } from "@Utils/helpers/sortAlphabetical"
import styled from "styled-components"
import KitButton from "./KitButton"

const KitList = () => {
	const dispatch = useDispatch()
	const { data } = useChannelData()
	const noKits = data?.warzoneKits.length === 0
	const {isLoading: isLoadingBases} = useAllKitBases({include: {}})

	if (noKits) {
		return (
			<Wrapper style={{ alignItems: "center", justifyContent: "center" }}>
				<Message>Creating your first kit?</Message>
				<Message>We love it.</Message>
				<Message>Use the editor to the right to build your desired kit.</Message>
				<Message>And make sure to save using the bottom bar!</Message>
			</Wrapper>
		)
	}

	if (isLoadingBases) return <Loader />

	return (
		<Wrapper>
			<Container>
				{data?.warzoneKits &&
					filterKitsByFeature(data?.warzoneKits)
						.sort((a, b) => sortAlphabetical(a.base.displayName, b.base.displayName))
						.map((kit) => <KitButton key={kit.id} favorite kit={kit} />)}
				{data?.warzoneKits && filterKitsByFeature(data?.warzoneKits).length > 0 && (
					<hr style={{ width: "88%", borderColor: colors.lightest }} />
				)}
				{data?.warzoneKits &&
					filterKitsByFeature(data?.warzoneKits, false)
						.sort((a, b) => sortAlphabetical(a.base.displayName, b.base.displayName))
						.map((kit) => <KitButton key={kit.id} kit={kit} />)}
			</Container>
			<ButtonWrapper>
				<Button
					design="transparent"
					text="Create New"
					onClick={() => dispatch(createNewKit())}
					style={{ margin: "0 auto" }}
				/>
			</ButtonWrapper>
		</Wrapper>
	)
}

export default KitList

// Styled Components

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 260px;
	height: 100%;
	padding-right: 24px;
`

const Container = styled.div`
	width: 100%;
	margin-bottom: 18px;
	flex-basis: 90%;
	overflow-y: auto;

	-webkit-overflow-scrolling: touch;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`

const ButtonWrapper = styled.div`
	width: 100%;
	flex-basis: 10%;
`

const Message = styled.p`
	width: 100%;
	margin-top: 24px;
	text-align: left;
	font-size: 18px;
	letter-spacing: 2px;
`
