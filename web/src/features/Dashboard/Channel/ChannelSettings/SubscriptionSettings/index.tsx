import { fromUnixTime, differenceInDays } from "date-fns"
import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import PlanTile from "./PlanTile"
import { useModal, usePremiumStatus } from "@Redux/slices/dashboard/selectors"
import { getToken } from "@Services/firebase/auth/getToken"
import { useQuery } from "react-query"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import PremiumPlans from "@Features/Dashboard/modals/PremiumPlan"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import fetch from "@Fetch"
import { isFetchError } from "@Utils/helpers/typeGuards"

const SubscriptionSettings = ({ ...props }) => {
	const dispatch = useDispatch()
	const modal = useModal()
	const { isPremium } = usePremiumStatus()
	const { data } = useDashboardChannel()
	const { data: subscriptionEnd } = useQuery(
		`/api/channel/meta/premium?stripeId=${data?.meta.stripeId}`,
		async () => {
			const result = await fetch.get<{ periodEnd: number }>({
				url: `/api/channel/meta/premium?stripeId=${data?.meta.stripeId}`,
				headers: {
					authorization: `Bearer: ${await getToken()}`
				}
			})

			return result.periodEnd
		},
		{
			enabled: isPremium,
			cacheTime: 60000,
			refetchOnWindowFocus: false
		}
	)

	const { data: cardLast4 } = useQuery(
		`/api/stripe/getPaymentMethod?subId=${data?.meta.stripeId}`,
		async () => {
			const result = await fetch.get<{ last4: string }>({
				url: `/api/stripe/getPaymentMethod?subId=${data?.meta.stripeId}`,
				headers: { authorization: `Bearer: ${await getToken()}` }
			})

			return result.last4
		},
		{
			enabled: isPremium,
			cacheTime: 60000,
			refetchOnWindowFocus: false
		}
	)

	const handleUpgrade = async () => {
		const apiRoute = isPremium ? `/api/payments/managePremium` : `/api/payments/buyPremium`

		const result = await fetch.post<{ url: string }>({
			url: apiRoute,
			headers: { authorization: `Bearer ${await getToken()}` },
			body: { _id: data?._id, displayName: data?.displayName, urlSafeName: data?.urlSafeName }
		})

		if (isFetchError(result)) {
			return dispatch(setModal({ type: "Error Notification", data: {} }))
		}

		window.open(result.url, "_blank")
	}

	return (
		<div>
			{modal.type === "Premium Plans" && <PremiumPlans />}
			<HorizFlex>
				<Paragraph>Plan</Paragraph>
				{subscriptionEnd && (
					<>
						<Paragraph style={{ color: colors.lighter, fontStyle: "italic" }}>
							{differenceInDays(fromUnixTime(subscriptionEnd), Date.now())} days until renewal
						</Paragraph>
					</>
				)}
			</HorizFlex>
			<Grid>
				<PlanTile
					price="FREE"
					title="BASIC"
					buttonStyle="transparent"
					buttonText="COMPARE PLANS"
					description="Build kits, share with friends and viewers, managers, social links & content..."
					buttonAction={() => dispatch(setModal({ type: "Premium Plans", data: {} }))}
				/>
				<PlanTile
					price={isPremium ? "ACTIVE" : "$5/MO (EARLY BIRD PRICE)"}
					title="PREMIUM"
					buttonStyle="white"
					buttonText={isPremium ? "MANAGE" : "UPGRADE"}
					description="Active Kit Overlay, AutoBot, profile customization, and more!"
					buttonAction={handleUpgrade}
					planType="premium"
				/>
			</Grid>

			{isPremium && (
				<>
					<HorizFlex>
						<Paragraph>Payment Method</Paragraph>
						{cardLast4 && <Paragraph style={{ color: colors.lighter }}>Card ending in {cardLast4}</Paragraph>}
					</HorizFlex>
					<Paragraph style={{ marginTop: "54px", color: colors.lighter }}>
						If you’d like to adjust your the tip on your Premium subscription, cancel your current subscription, then
						reinstate it with your desired tip. You will be charged $5 for restarting the subscription, so we recommend
						waiting until the end of your current subscription to make adjustments.
					</Paragraph>
				</>
			)}
		</div>
	)
}

export default SubscriptionSettings

// Styled Components

const Paragraph = styled.p`
	${paragraph}
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 68px;
	margin-top: 24px;
`

const HorizFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 54px;
`
