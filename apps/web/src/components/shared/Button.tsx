import colors from '@Colors';
import type { CSSProperties, MutableRefObject } from 'react';
import styled from 'styled-components';

interface Props {
	/** HTML5 types for the button. */
	type?: 'button' | 'reset' | 'submit';
	/** Button's base design. */
	design?: 'default' | 'premium' | 'transparent' | 'white';
	/** Text content of the button. Can also be a React component (use wisely and be careful of resizing issues). */
	text: string;
	/** HTML5 disabled attribute. Can this button be disabled by certain application behavior? Use this flag. */
	disabled?: boolean;
	/** Function to run on the click of the button. */
	onClick?: (ev: React.MouseEvent) => void;
	/** React CSSProperties object to override base design. While this button comes with design presets, you may need to override those styles for certain use cases. */
	style?: CSSProperties;
	/** Cypress testing value for targeting button. */
	dataCy?: string;
	/** Used to display an icon on the button to the left of the label */
	startIcon?: React.ReactNode;
	/** Used to display an icon on the button to the right of the label*/
	endIcon?: React.ReactNode;
	/** Change the underlying button html component */
	as?: 'a' | 'button';
	/** Used when button is an 'a' tag for linking */
	href?: string;
	/** Used when button is an 'a' tag for opening in a new tab */
	target?: string;
	/** Used when button is an 'a' tag for opening in a new tab */
	rel?: string;
	/** Used to get ref of button */
	buttonRef?: MutableRefObject<HTMLButtonElement>;
}

/** Button to be used as the default choice for buttons in the application. */
export function Button({
	text,
	dataCy,
	design = 'default',
	as = 'button',
	buttonRef,
	...props
}: Props) {
	const StyledButton =
		design === 'premium'
			? PremiumButton
			: design === 'transparent'
			? TransparentButton
			: design === 'white'
			? WhiteButton
			: ButtonBase;

	return (
		<StyledButton
			as={as}
			data-cy={dataCy}
			design={design}
			ref={buttonRef}
			{...props}
		>
			<ButtonLabelContainer>
				{props.startIcon}
				{typeof text === 'string' ? text.toUpperCase() : text}
				{props.endIcon}
			</ButtonLabelContainer>
		</StyledButton>
	);
}

export default Button;

// Styled Components

const ButtonBase = styled.button<Pick<Props, 'design' | 'disabled'>>`
  display: block;
  appearance: none;
  padding: 20px 46px;
  border-radius: 20px;
  font-family: 'Montserrat', serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  transition: 0.2s;
  text-decoration: none;

  border: none;
  background-color: ${colors.middle};
  color: ${colors.white};

  &:hover {
    border: none;
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

const TransparentButton = styled(ButtonBase)`
  border: 1px solid ${colors.white};
  background-color: transparent;
  color: ${colors.white};

  &:hover {
    border: 1px solid ${colors.middle};
    background-color: ${colors.middle};
    color: ${colors.white};
  }
`;

const WhiteButton = styled(ButtonBase)`
  border: none;
  background-color: ${colors.white};
  color: ${colors.black};

  &:hover {
    border: none;
    background-color: ${colors.middle};
    color: ${colors.white};
  }
`;

const PremiumButton = styled(ButtonBase)`
  border: none;
  background: ${colors.premiumGradient};
  color: ${colors.white};

  &:hover {
    border: none;
    background: ${colors.white};
    color: ${colors.black};
  }
`;

const ButtonLabelContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
