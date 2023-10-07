import colors from '@Colors';
import { SVG } from '@Components/shared';
import { setActiveKit, setModal } from '@Redux/slices/dashboard';
import { useActiveKit } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import type {
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitOption,
} from '@kittr/prisma';
import styled from 'styled-components';

interface Props {
	favorite?: true;
	kit: WarzoneKit & { base: WarzoneKitBase; options: WarzoneKitOption[] };
}

function KitButton({ favorite, kit }: Props) {
	const dispatch = useDispatch();
	const activeKit = useActiveKit();
	const { customTitle, base } = kit;

	let title = '';

	if (customTitle) {
		title = `${base.displayName} (${customTitle})`;
	} else {
		title = `${base.displayName}`;
	}

	return (
		<Button
			active={activeKit.id === kit.id}
			key={kit.id}
			// @ts-expect-error My code is so bad. This will get written out in time.
			onClick={() => dispatch(setActiveKit(kit))}
		>
			<p
				style={{
					maskImage:
						'linear-gradient(to right, black 65%, transparent 92%, transparent 100%)',
				}}
			>
				{title}
			</p>
			{favorite ? (
				<SVG.Star
					fill={colors.gold}
					stroke={colors.gold}
					style={{
						position: 'absolute',
						top: '50%',
						right: '8px',
						transform: 'translateY(-50%)',
					}}
					width="12px"
				/>
			) : null}
			<SVG.Export
				dataCy={`${base.displayName}-quick-export`}
				onClick={() => {
					dispatch(
						setModal({
							type: 'Quick Command Export',
							data: [kit],
						}),
					);
				}}
				stroke={activeKit.id === kit.id ? colors.darker : colors.light}
				style={{
					position: 'absolute',
					top: '50%',
					right: favorite ? '28px' : '8px',
					transform: 'translateY(-50%)',
					width: '20px',
					cursor: 'pointer',
				}}
			/>
		</Button>
	);
}

export default KitButton;

// Styled Components

const Button = styled.button<{ active: boolean }>`
  position: relative;
  appearance: none;
  border: none;
  background-color: ${(props) => (props.active ? colors.darker : 'transparent')};
  display: block;
  width: 100%;
  padding: 12px 24px;
  padding-right: 52px;
  border-radius: 12px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: left;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.middle};
  }
`;
