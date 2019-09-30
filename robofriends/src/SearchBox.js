import React from 'react';

const SearchBox = ({searchQuery,searchfield}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue' 
				type='search'
				placeholder='Search Robots'
				onChange={searchQuery} // this event gets track of any time input changes
			/>
		</div>		
	);
}
export default SearchBox;