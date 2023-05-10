import colors from '@Colors';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  /** Input types for "text" based inputs */
  type: 'email' | 'password' | 'text';
  /** HTMl5 name for the input. */
  name: string;
  /** Text label for the input. */
  label: ReactNode | string;
  /** Optionally move the label above the text input. */
  topLabel?: boolean;
  /** Optionally remove the label from the text input. */
  noTextLabel?: boolean;
  /** Placeholder for the input field. Optional. */
  placeholder?: string;
  /** User's input. */
  value: string;
  /** A subtext beneath the input field. */
  subline?: string;
  /** A width for the element. Important for keeping the label at the same size as the input in certain situations. */
  width?: string;
  /** React CSS Properties for the input. */
  inputStyles?: React.CSSProperties;
  /** React CSS Properties for the label. */
  labelStyles?: React.CSSProperties;
  /** React CSS Properties for the subline. */
  sublineStyles?: React.CSSProperties;
  /** OnChange handler for the input. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...args: any) => any;
  /** Optional onFocus handler for the input. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFocus?: (...args: any) => any;
  /** Optional onBlur handler for the input. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onBlur?: (...args: any) => any;
}

/** Utility text input component. */
export function TextInput({
  type,
  name,
  label,
  topLabel,
  noTextLabel,
  placeholder,
  value,
  subline,
  width,
  inputStyles,
  labelStyles,
  sublineStyles,
  onChange,
  onFocus,
  onBlur,
}: Props) {
  if (topLabel) {
    return (
      <>
        <Label
          htmlFor={name}
          style={{ display: 'block', marginTop: '48px', ...labelStyles }}
          width={width}
        >
          {!noTextLabel && typeof label === 'string'
            ? label.toUpperCase()
            : label}
        </Label>
        <Input
          autoComplete="off"
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          style={{ marginLeft: '0', ...inputStyles }}
          type={type}
          value={value}
          width={width}
        />
        {subline ? <Subline style={sublineStyles}>{subline}</Subline> : null}
      </>
    );
  }

  return (
    <Label htmlFor={name} style={labelStyles} width={width}>
      {!noTextLabel && label}
      <Input
        autoComplete="off"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        style={inputStyles}
        type={type}
        value={value}
        width={width}
      />
      {subline ? <Subline style={sublineStyles}>{subline}</Subline> : null}
    </Label>
  );
}

export default TextInput;

// Styled Components

const Label = styled.label<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : 'initial')};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Input = styled.input<{ width?: string }>`
  appearance: none;
  width: ${(props) => (props.width ? props.width : 'initial')};
  margin-left: 24px;
  padding: 4px;
  border: none;
  border-radius: 0;
  border-bottom: ${`1px solid ${colors.lightest}`};
  background-color: transparent;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 4px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-bottom-color: ${colors.white};
  }
`;

const Subline = styled.p`
  padding-top: 4px;
  color: ${colors.white};
  font-size: 14px;
  letter-spacing: 1px;
`;
