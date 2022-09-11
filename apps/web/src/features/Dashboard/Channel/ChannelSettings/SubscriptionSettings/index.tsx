import { differenceInDays, fromUnixTime } from "date-fns"
import styled from "styled-components"

import colors from "@Colors"
import PremiumPlans from "@Features/Dashboard/modals/PremiumPlan"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useModal, usePremiumStatus } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { trpc } from "@Server/createHooks"
import { paragraph } from "@Styles/typography"
import PlanTile from "./PlanTile"

const SubscriptionSettings = () => {
	const dispatch = useDispatch()
	const modal = useModal()
	const { isPremium } = usePremiumStatus()
	const { data, refetch: refetchChannel } = useDashboardChannel()

	const { data: subscriptionEnd } = trpc.useQuery(
		[
			"channels/plan/subscription-end",
			{ stripeSubscriptionId: data?.plan?.stripeSubscriptionId!, channelId: data?.id! }
		],
		{ enabled: !!data?.plan?.stripeSubscriptionId }
	)
	const { data: cardLast4 } = trpc.useQuery(
		[
			"channels/plan/card-last-4-digits",
			{ stripeSubscriptionId: data?.plan?.stripeSubscriptionId!, channelId: data?.id! }
		],
		{
			enabled: !!data?.plan?.stripeSubscriptionId
		}
	)

	const { mutate: buyPremium } = trpc.useMutation("stripe/buy-premium", {
		onSuccess: (result) => {
			window.open(result.url as string, "_blank")
			refetchChannel()
		},
		onError: () => {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})
	const { mutate: managePremium } = trpc.useMutation("stripe/manage-premium", {
		onSuccess: (result) => {
			window.open(result.url as string, "_blank")
		},
		onError: () => {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

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
					buttonAction={() =>
						isPremium
							? managePremium({ channelId: data?.id! })
							: buyPremium({ channelId: data?.id!, displayName: data?.displayName!, urlSafeName: data?.urlSafeName! })
					}
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
						If you'd like to adjust your the tip on your Premium subscription, cancel your current subscription, then
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
