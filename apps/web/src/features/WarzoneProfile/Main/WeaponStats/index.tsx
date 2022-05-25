import * as Styled from "../style"
import StatBar from "./StatBar"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"

const WeaponStats = () => {
	const activeWeapon = useActiveWeapon()
	const stats = activeWeapon.base.stats

	return (
		<Styled.Container data-cy="kit-stats">
			<Styled.Header>BASE STATS</Styled.Header>
			<Styled.StatsWrapper>
				{stats.map((stat) => {
					return (
						<StatBar
							key={stat.id}
							label={stat.displayName.charAt(0).toUpperCase() + stat.displayName.slice(1)}
							number={Number(stat.value)}
						/>
					)
				})}
			</Styled.StatsWrapper>
		</Styled.Container>
	)
}

export default WeaponStats
