import styled from "styled-components"

import colors from "@Colors"
import PremiumCallout from "@Features/Dashboard/PremiumCallout"
import SubscriptionSettings from "@Features/Dashboard/Channel/ChannelSettings/SubscriptionSettings"
import { useManagerRole, useModal, usePremiumStatus, useChannelData } from "@Redux/slices/dashboard/selectors"
import { header1 } from "@Styles/typography"
import BuyHomeChannelBoostr from "../../../Promo/BuyHomeChannelBoostr"
import AddAffiliate from "../../modals/AddAffiliate"
import AddSpec from "../../modals/AddSpec"
import PremiumSignUp from "../../modals/PremiumSignUp"
import Overlays from "../../premiumFeatures/overlays"
import AccountManagers from "./AccountManagers"
import Affiliate from "./Affiliate"
import CoverPhotoUploader from "./CoverPhotoUploader"
import DisplayNameEditor from "./DisplayNameEditor"
import ImageEditor from "./ImageEditor"
import LinkEditor from "./LinkEditor"
import SetupPhotos from "./SetupPhotos"
import Specs from "./Specs"
import ChannelDeleter from "./ChannelDeleter"
import ThemeColor from "./ThemeColor"
import YouTubeAutoplayEditor from "./YouTubeAutoplayEditor"

const ChannelSettings = ({ ...props }) => {
	const { displayName } = useChannelData()
	const role = useManagerRole()
	const modal = useModal()
	const { isPremium } = usePremiumStatus()

	return (
		<>
			{modal.type === "Buy Home Channel Boostr" && <BuyHomeChannelBoostr />}
			{modal.type === "Premium Sign Up" && <PremiumSignUp />}
			{modal.type === "Add Spec" && <AddSpec />}
			{modal.type === "Add Affiliate" && <AddAffiliate />}
			<Header>{displayName}'s SETTINGS</Header>
			<Grid>
				{!isPremium && role !== "Editor" && (
					<GridItem>
						<GridTitle>SUBSCRIPTION SETTINGS</GridTitle>
						<SubscriptionSettings />
					</GridItem>
				)}
				<GridItem>
					<GridTitle>ACCOUNT INFORMATION</GridTitle>
					{role !== "Editor" && <ImageEditor />}
					{role !== "Editor" && <DisplayNameEditor />}
					<AccountManagers />
				</GridItem>
				<GridItem>
					<GridTitle>PROFILE PAGE CUSTOMIZATION</GridTitle>
					{role === "Editor" && (
						<p>
							You are not allowed to change the profile's settings as an Editor. If you think you should be able to, ask
							the channel Owner or an Administrator for permission.
						</p>
					)}
					{role !== "Editor" && (
						<Grid style={{ gap: "60px" }}>
							{isPremium ? (
								<>
									<CoverPhotoUploader />
									<ThemeColor />
									<SetupPhotos />
									<Specs />
									<Affiliate />
								</>
							) : (
								<>
									<PremiumCallout text="Upgrade to Premium to customize your profile page a banner, custom color, channel setup photos, PC specs, and affiliate links!" />
								</>
							)}
						</Grid>
					)}
					{role !== "Editor" && <LinkEditor />}
					{role !== "Editor" && <YouTubeAutoplayEditor />}
				</GridItem>
				<GridItem>
					<GridTitle>OVERLAY CONTROLLER</GridTitle>
					<Overlays />
				</GridItem>
				{isPremium && role !== "Editor" && (
					<GridItem>
						<GridTitle>SUBSCRIPTION SETTINGS</GridTitle>
						<SubscriptionSettings />
					</GridItem>
				)}
				{role === "Owner" && <ChannelDeleter />}
			</Grid>
		</>
	)
}

export default ChannelSettings

// Styled Components

const Header = styled.h1`
	margin-bottom: 32px;
	${header1};
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 16px;
`

const GridItem = styled.div<{ backgroundColor?: string }>`
	padding: 52px;
	border-radius: 24px;
	background-color: ${(props) => props.backgroundColor || colors.darker};
`

const GridTitle = styled.p`
	margin-bottom: 20px;
	color: ${colors.white};
	font-weight: 600;
	font-size: 22px;
	letter-spacing: 2px;
`
