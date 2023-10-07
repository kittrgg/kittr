import colors from '@Colors';
import { SVG } from '@Components/shared';
import { setActiveKit, setModal } from '@Redux/slices/dashboard';
import {
	useActiveKit,
	useChannelData,
} from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import type {
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitOption,
	WarzoneTwoKitOptionTuning,
} from '@kittr/prisma';
import { Button } from '@kittr/ui';
import styled from 'styled-components';

interface Props {
	favorite?: true;
	kit: WarzoneKit & {
		base: WarzoneKitBase;
		options: WarzoneKitOption[];
		tuning: WarzoneTwoKitOptionTuning[];
	};
}

function KitButton({ favorite, kit }: Props) {
	const { isFetching: isFetchingChannelData } = useChannelData();
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
			fullWidth
			key={kit.id}
			leftIcon={
				favorite ? (
					<SVG.Star fill={colors.gold} stroke={colors.gold} width="12px" />
				) : null
			}
			loading={isFetchingChannelData}
			onClick={() => dispatch(setActiveKit(kit))}
			rightIcon={
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
			}
			styles={{
				root: {
					backgroundColor:
						activeKit.id == kit.id ? colors.darker : 'transparent',
				},
				label: {
					width: '100%',
					display: 'flex',
					textAlign: 'left',
					color: colors.white,
				},
			}}
			variant="subtle"
		>
			<p
				style={{
					maskImage:
						'linear-gradient(to right, black 65%, transparent 92%, transparent 100%)',
				}}
			>
				{title}
			</p>
		</Button>
	);
}

export default KitButton;

// Styled Components

// Const Button = styled.button<{ active: boolean }>`
// 	Position: relative;
// 	Appearance: none;
// 	Border: none;
// 	Background-color: ${(props) => (props.active ? colors.darker : "transparent")};
// 	Display: block;
// 	Width: 100%;
// 	Padding: 12px 24px;
// 	Padding-right: 52px;
// 	Border-radius: 12px;
// 	Color: ${colors.white};
// 	Font-family: "Montserrat", sans-serif;
// 	Font-size: 18px;
// 	Font-weight: 500;
// 	Letter-spacing: 2px;
// 	Text-align: left;
// 	Cursor: pointer;
// 	Overflow: hidden;

// 	&:hover {
// 		Background-color: ${colors.white};
// 		Color: ${colors.middle};
// 	}
// `
