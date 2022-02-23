import {
	getMonth,
	getDate,
	getDay,
	getHours,
	getMinutes,
	getSeconds,
	format,
	isSameDay,
	isBefore,
	isAfter,
	add
} from "date-fns"
import { Fragment } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { caption, paragraph } from "@Styles/typography"
import useDimensions from "@Hooks/useDimensions"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { H2 } from "./style"
import MobileSchedule from "./MobileSchedule"

interface Props {
	schedule: ITwitchScheduleSegment[]
	brandColor: string
}

const DAYS_OF_THE_WEEK = ["Su", "M", "Tu", "W", "Th", "F", "Sa"]
const SECONDS_IN_A_DAY = 86399

const Schedule = ({ schedule, brandColor }: Props) => {
	const { observe, width } = useDimensions()
	const { width: viewportWidth } = useViewportDimensions()

	const advanceDaysFromToday = (days: number) => add(new Date(), { days })

	const getMonthAndDateString = (days: number) => format(advanceDaysFromToday(days), "M/d")

	const convertToCalendarPosition = (
		channel: any,
		startOrEnd: "start_time" | "end_time",
		weekIndex: number,
		right?: boolean
	) => {
		const endTimeDate = getDate(new Date(channel.end_time))
		const startTimeDate = getDate(new Date(channel.start_time))

		const hours = getHours(new Date(channel[startOrEnd]))
		const minutes = getMinutes(new Date(channel[startOrEnd]))
		const seconds = getSeconds(new Date(channel[startOrEnd]))

		const sum = hours * 3600 + minutes * 60 + seconds + 3600

		// Channel started the previous calendar day
		if (isBefore(startTimeDate, getDate(advanceDaysFromToday(weekIndex)))) {
			if (right) return `${width - (sum / SECONDS_IN_A_DAY) * width}px`
			return "-10px"
		}

		// Channel continues to next calendar day
		if (right && isAfter(endTimeDate, startTimeDate)) return "-10px"

		return right ? `${width - (sum / SECONDS_IN_A_DAY) * width}px` : `${width / (SECONDS_IN_A_DAY / sum)}px`
	}

	// If channel has not set a Twitch schedule.
	if (schedule.length === 0) return null

	return (
		<section id="schedule">
			<H2>CHANNEL SCHEDULE</H2>
			{viewportWidth < 900 ? (
				<MobileSchedule brandColor={brandColor} schedule={schedule} />
			) : (
				<Wrapper>
					<CurrentWeek>
						{getMonth(Date.now())}/{getDate(Date.now())} - {getMonthAndDateString(7)}
					</CurrentWeek>
					<Container>
						<TimeZone>{new Date().toLocaleTimeString(undefined, { timeZoneName: "short" }).split(" ")[2]}</TimeZone>
						{[...Array(12)].map((_: any, index: number) => {
							return (
								<TimeOfDay key={index} index={index}>
									<span>
										{(index * 2) % 12 || 12}
										{index === 0 ? "a" : ""}
										{index === 6 ? "p" : ""}
									</span>
								</TimeOfDay>
							)
						})}
						{[...Array(7)].map((_: any, weekIndex: number) => {
							return (
								<Fragment key={weekIndex}>
									<DayOfWeek brandColor={brandColor} firstOfType={weekIndex === 0}>
										<div>{DAYS_OF_THE_WEEK[getDay(advanceDaysFromToday(weekIndex))]}</div>
										<div>{getMonthAndDateString(weekIndex)}</div>
									</DayOfWeek>
									<Day firstOfType={weekIndex === 0} ref={observe}>
										{schedule
											// Filter for any channel where the start time or end time happens today
											.filter((channel: any) => {
												const channelStartsOnDay = isSameDay(
													new Date(channel.end_time),
													advanceDaysFromToday(weekIndex)
												)
												const channelEndsOnDay = isSameDay(
													new Date(channel.start_time),
													advanceDaysFromToday(weekIndex)
												)

												return channelStartsOnDay || channelEndsOnDay
											})
											.map((channel: any) => {
												return (
													<ScheduledChannel
														key={channel.id}
														brandColor={brandColor}
														startPosition={convertToCalendarPosition(channel, "start_time", weekIndex)}
														endPosition={convertToCalendarPosition(channel, "end_time", weekIndex, true)}
													>
														<ChannelTitle>{channel.title || "Untitled Channel"}</ChannelTitle>
														<ChannelCategory>{channel.category?.name || "No Category"}</ChannelCategory>
													</ScheduledChannel>
												)
											})}
									</Day>
								</Fragment>
							)
						})}
					</Container>
				</Wrapper>
			)}
		</section>
	)
}

export default Schedule

// Styled Components

const Wrapper = styled.div``

const CurrentWeek = styled.div`
	${paragraph};
	margin-bottom: 20px;
	color: ${colors.lighter};
	text-align: center;
`

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-template-rows: 8;
	width: 80%;
	max-width: 2000px;
	margin: 0 auto;
	padding: 28px 50px;
	border-radius: 10px;
	background-color: ${colors.dark20};
`

const TimeZone = styled.span`
	grid-column: 1/2;
	${paragraph};
	color: ${colors.lighter};
`

const TimeOfDay = styled.span<{ index: number }>`
	grid-column: ${(props) => props.index + 2} / ${(props) => props.index + 3};
	margin-bottom: 40px;
	text-align: center;
	font-size: 18px;
`

const DayOfWeek = styled.span<{ firstOfType: boolean; brandColor: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	grid-column: 1/2;
	padding-left: 12px;
	padding-right: ${(props) => (props.firstOfType ? "21px" : "24px")};
	border-right: ${(props) => (props.firstOfType ? `3px solid ${props.brandColor}` : "")};
	background-color: ${(props) => (props.firstOfType ? colors.darker : "")};

	& > div:last-of-type {
		${paragraph};
		margin-top: 12px;
		color: ${colors.lighter};
	}
`

const Day = styled.span<{ firstOfType: boolean }>`
	position: relative;
	grid-column: 2/14;
	height: 114px;
	border-bottom: 1px solid ${colors.lightest};
	background-color: ${(props) => (props.firstOfType ? colors.darker : "")};
	overflow: hidden;
`

const ScheduledChannel = styled.div<{ brandColor: string; startPosition: string; endPosition: string }>`
	position: absolute;
	left: ${(props) => props.startPosition};
	right: ${(props) => props.endPosition};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 85%;
	margin: 8px 0;
	padding: 26px 22px;
	border: 1px solid ${(props) => props.brandColor};
	border-radius: 10px;
`

const ChannelTitle = styled.p`
	width: 100%;
	white-space: nowrap;
	${paragraph};
	color: ${colors.white};
	text-overflow: ellipsis;
	overflow: hidden;
`

const ChannelCategory = styled.p`
	width: 100%;
	white-space: nowrap;
	${caption};
	color: ${colors.lighter};
	text-overflow: ellipsis;
	overflow: hidden;
`
