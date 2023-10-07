import colors from '@Colors';
import SVG from '@Components/shared/SVG';
import { Routes } from '@Utils/lookups/routes';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import styled from 'styled-components';

/** A search input built specfically for searching channels. Will automatically handle redirection to page for channels search results. */
export function ChannelSearch() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState(router.query.searchTerm || '');
	const inputRef = useRef<HTMLInputElement>(null);

	const hasSearchTerm = searchTerm.length > 0;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(Routes.CHANNEL.createSearchPath(searchTerm as string));
		if (inputRef.current) {
			inputRef.current.blur();
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchInput
				autoComplete="off"
				data-cy="channel-search-input"
				name="channelSearch"
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
				placeholder="Search"
				ref={inputRef}
				type="text"
				value={searchTerm as string}
			/>
			<SVG.Search
				fill={hasSearchTerm ? colors.white : ''}
				onClick={handleSubmit}
				style={{
					padding: '12px',
					height: '50%',
					position: 'absolute',
					right: '-1px',
					top: '50%',
					transform: 'translateY(-50%)',
					backgroundColor: hasSearchTerm ? colors.lightest : 'transparent',
					borderTopRightRadius: '12px',
					borderBottomRightRadius: '12px',
					cursor: hasSearchTerm ? 'pointer' : 'initial',
					pointerEvents: hasSearchTerm ? 'initial' : 'none',
				}}
				width="20px"
			/>
		</Form>
	);
}

export default ChannelSearch;

// Styled Components

const Form = styled.form`
  position: relative;
  display: block;
  width: 90%;
  margin: 24px 24px 0 5%;
`;

const SearchInput = styled.input`
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
