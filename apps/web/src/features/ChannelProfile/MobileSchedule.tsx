import styled from "styled-components"

import { ITwitchScheduleSegment } from "@kittr/types"
import colors from "@Colors"
import { SideScroller } from "@Components/shared"
import { header1, header2, paragraph } from "@Styles/typography"
import { format, getMilliseconds } from "date-fns"

interface Props {
	schedule?: ITwitchScheduleSegment[]
	brandColor: string
}

const MobileSchedule = ({ schedule, brandColor }: Props) => {
	return (
		<section id="schedule">
			<SideScroller childMargin="24px" wrapperStyles={{ width: "100vw" }}>
				{schedule?.map((channel) => {
					const { category, start_time, end_time, title } = channel

					return (
						<Item brandColor={brandColor} key={getMilliseconds(start_time)}>
							<StartDate>{format(new Date(start_time), "MM/dd/yyyy")}</StartDate>
							{category?.name && <Category>{category?.name || "No Category"}</Category>}
							{title && <Title>{title || "Untitled Channel"}</Title>}
							<Time>Start: {format(new Date(start_time), "h:mm a")}</Time>
							<Time>End: {format(new Date(end_time), "h:mm a")}</Time>
						</Item>
					)
				})}
			</SideScroller>
		</section>
	)
}

export default MobileSchedule

// Styled Components

const Item = styled.div<{ brandColor: string }>`
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: 24px;
	border-left: 5px solid ${(props) => props.brandColor};
	width: 300px;
`

const StartDate = styled.h3`
	${header1};
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Category = styled.h3`
	${header2};
	margin-bottom: 12px;
	color: ${colors.lighter};
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Title = styled.p`
	${paragraph};
	margin-bottom: 24px;
	color: ${colors.lighter};
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Time = styled.p`
	${paragraph};
	color: ${colors.lighter};
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`
