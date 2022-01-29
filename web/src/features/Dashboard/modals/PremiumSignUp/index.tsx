import styled from "styled-components"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js/pure"

import { header2 } from "@Styles/typography"
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
