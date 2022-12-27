import colors from "@Colors"
import Button from "@Components/shared/Button"
import { createNewKit, setModal } from "@Redux/slices/dashboard"
import { useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { useRef, MutableRefObject, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
	padding: 80px 100px;
	border-radius: 20px;
	background-color: ${colors.middle};
	text-align: center;
`

const P = styled.p`
	margin: 50px 0 60px;
	letter-spacing: 2px;
	text-align: center;
`

const KitsPlaceholder = () => {
	const dispatch = useDispatch()
	const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>
	const modal = useModal()

	useEffect(() => {
		if (modal.data?.page === 6 && buttonRef && buttonRef.current) {
			dispatch(
				setModal({
					type: "Tutorial",
					data: {
						page: modal.data.page,
						ref: buttonRef.current.getBoundingClientRect().top * 0.4
					}
				})
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [buttonRef, buttonRef.current, modal.data?.page])

	return (
		<Container>
			<img src="/media/logo-no-text-square.svg" alt="" width={200} height={200} />
			<P>No kits added yet...</P>
			<Button
				buttonRef={buttonRef}
				design="white"
				text="+ Create New"
				style={modal.data?.page === 6 ? { position: "relative", zIndex: 101 } : undefined}
				onClick={() => {
					if (modal.type === "Tutorial") {
						dispatch(
							setModal({
								type: "Tutorial",
								data: { page: modal.data?.page + 1 }
							})
						)
						dispatch(createNewKit())
					} else {
						dispatch(createNewKit())
					}
				}}
				dataCy="create-first-kit"
			/>
		</Container>
	)
}

export default KitsPlaceholder
