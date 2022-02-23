import * as Styled from "../style"
import StatBar from "./StatBar"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"

const WeaponStats = ({ ...props }) => {
	const activeWeapon = useActiveWeapon()
	const stats = activeWeapon.base.gameInfo.stats

	if (stats) {
		const { accuracy, range, mobility, damage, fireRate, control } = stats

		return (
			<Styled.Container data-cy="kit-stats">
				<Styled.Header>BASE STATS</Styled.Header>
				<Styled.StatsWrapper>
					<StatBar label="Accuracy" number={stats ? accuracy : 0} />
					<StatBar label="Range" number={stats ? range : 0} />
					<StatBar label="Mobility" number={stats ? mobility : 0} />
					<StatBar label="Damage" number={stats ? damage : 0} />
					<StatBar label="Fire Rate" number={stats ? fireRate : 0} />
					<StatBar label="Control" number={stats ? control : 0} />
				</Styled.StatsWrapper>
			</Styled.Container>
		)
	}

	return null
}

export default WeaponStats
