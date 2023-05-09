import colors from '@Colors';
import SVG from '@Components/shared/SVG';
import styled from 'styled-components';

interface Props {
  /** User's search term. */
  value: string;
  /** OnChange handler for the text input. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (ev: any) => any;
  /** Clear the user's search term. Does not submit the form action unless done so explicitly in the function. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clearSearch: (...args: any) => any;
  /** Should the browser offer up auto-completions? Defaults to "off". */
  autoComplete?: 'off' | 'on';
}

export function SearchInput({
  value,
  onChange,
  clearSearch,
  autoComplete = 'off',
}: Props) {
  return (
    <div style={{ position: 'relative' }}>
      <Input
        autoComplete={autoComplete}
        data-cy="search-input"
        name="channelSearch"
        onChange={onChange}
        placeholder="Search..."
        type="text"
        value={value}
      />
      {value.length > 0 && (
        <SVG.X
          data-cy="clear-search"
          fill={colors.red}
          onClick={clearSearch}
          style={{
            padding: '12px',
            height: '20px',
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            cursor: 'pointer',
          }}
          width="12px"
        />
      )}
    </div>
  );
}

export default SearchInput;

// Styled Components

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px 5%;
  border-radius: 12px;
  background-color: ${colors.darker};
  color: ${colors.white};
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;

  &:focus {
    background-color: ${colors.white};
    color: ${colors.darker};
  }
`;
