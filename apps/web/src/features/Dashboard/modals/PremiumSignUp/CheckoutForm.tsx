import { useState, FormEvent } from "react"
import styled from "styled-components"
import { getToken } from "@Services/firebase/auth/getToken"
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js"
import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { TextInputBox } from "@Components/shared"
import Summary from "./Summary"
import { Button } from "@Components/shared"
import fetch from "@Fetch"

// This is currently not used at all anywhere for any reason.
const CheckoutForm = ({ ...props }) => {
	const stripe = useStripe()
	const elements = useElements() as any
	const [cardholderName, setCardholderName] = useState("")
	const [tip, setTip] = useState(0)
	const [error, setError] = useState("")
	const [isProcessing, setIsProcessing] = useState(false)

	const handleSubmit = async (ev: FormEvent) => {
		ev.preventDefault()

		if (!stripe || !elements) return

		const cardElement = elements.getElement(CardNumberElement)

		setIsProcessing(true)

		if (!cardholderName) {
			setIsProcessing(false)
			return setError("You must enter a cardholder name.")
		}

		try {
			const clientSecret = await fetch.post<string>({
				url: "/api/payments/premium",
				headers: { authorization: `Bearer ${await getToken()}` },
				body: { amount: 500 }
			})
			const paymentMethodReq = await stripe.createPaymentMethod({
				type: "card",
				card: cardElement as any
			})

			if (paymentMethodReq.error) {
				setIsProcessing(false)
				return setError(paymentMethodReq.error.message || "")
			}

			const { error } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: paymentMethodReq.paymentMethod.id
			})

			if (error) {
				setIsProcessing(false)
				return setError(error.message || "")
			}

			setIsProcessing(false)
		} catch (err) {
			console.log(err)
		}
	}

	const style = {
		style: {
			base: {
				fontFamily: '"Montserrat", sans-serif',
				fontSize: "18px"
			},
			complete: {
				color: colors.white
			}
		}
	}

	return (
		<>
			<BodyGrid>
				<GridItem>
					<FormWrapper onSubmit={handleSubmit}>
						<Label>
							Cardholder Name
							<TextInputBox
								name="cardholderName"
								onChange={(e) => setCardholderName(e.target.value)}
								type="text"
								value={cardholderName}
								inputStyles={{
									marginTop: "18px",
									marginLeft: "0",
									width: "100%",
									backgroundColor: colors.darker
								}}
							/>
						</Label>
						<Label>
							Card Number
							<StripeInputWrapper>
								<CardNumberElement options={style} />
							</StripeInputWrapper>
						</Label>
						<InputGridWrapper>
							<Label>
								Expiration
								<StripeInputWrapper>
									<CardExpiryElement options={style} />
								</StripeInputWrapper>
							</Label>
							<Label>
								CVC
								<StripeInputWrapper>
									<CardCvcElement options={style} />
								</StripeInputWrapper>
							</Label>
						</InputGridWrapper>
						<ErrorLine>{error}</ErrorLine>
					</FormWrapper>
				</GridItem>
				<GridItem style={{ borderLeft: `1px solid ${colors.lighter}` }}>
					<Summary tip={tip} setTip={setTip} />
				</GridItem>
			</BodyGrid>
			<Button
				type="button"
				design="white"
				onClick={(e) => handleSubmit(e)}
				text={isProcessing ? "..." : "CONFIRM & PAY"}
				style={{
					margin: "124px auto 0",
					backgroundColor: colors.premium,
					color: colors.white
				}}
			/>
		</>
	)
}

export default CheckoutForm

const BodyGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 64px;
`

const GridItem = styled.div`
	width: 100%;
	padding: 0 100px;
`

const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 24px;
	max-width: 500px;
	margin: 0 auto;
`

const InputGridWrapper = styled.div`
	display: grid;
	grid-template-columns: 33% 1fr;
	grid-gap: 32px;
`

const StripeInputWrapper = styled.div`
	& > .StripeElement {
		margin-top: 18px;
		padding: 18px 32px;
		border-radius: 20px;
		background-color: ${colors.darker};
		transition: 0.2s;
	}

	& > .StripeElement--focus {
		background: ${colors.white};
		color: ${colors.black};
	}

	& > .StripeElement--invalid {
		background: ${colors.darkRed};
	}

	& > .StripeElement--complete {
		color: ${colors.white};
		background-color: ${colors.darker};
	}
`

const Label = styled.label`
	width: 100%;
	${paragraph};
	color: ${colors.lighter};
`

const ErrorLine = styled.p`
	height: 24px;
	color: ${colors.red};
	font-size: 18px;
`
