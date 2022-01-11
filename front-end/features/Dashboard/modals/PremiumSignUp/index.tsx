import styled from "styled-components"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js/pure"

import colors from "@Colors"
import { header2, paragraph } from "@Styles/typography"
import Modal from "@Components/shared/Modal"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

const PremiumSignUp = ({ ...props }) => {
	return (
		<Modal title="CHECKOUT" style={{ maxWidth: "1400px" }}>
			<Title>WE ARE STOKED TO HEAR YOU’RE INTERESTED IN PREMIUM. WE KNOW YOU’LL LOVE IT.</Title>
			<Elements
				stripe={stripePromise}
				options={{
					fonts: [
						{
							cssSrc: "https://fonts.googleapis.com/css?family=Montserrat&display=swap"
						}
					]
				}}
			>
				<CheckoutForm />
			</Elements>
		</Modal>
	)
}

export default PremiumSignUp

const Title = styled.h3`
	${header2};
`

const BodyGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 64px;
`

const GridItem = styled.div`
	width: 100%;
	padding: 0 100px;
`

const Paragraph = styled.p`
	${paragraph};
	color: ${colors.lightest};
`

const HorizFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
