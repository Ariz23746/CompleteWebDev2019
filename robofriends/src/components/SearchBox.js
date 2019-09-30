import React from 'react';

const SearchBox = ({searchQuery,searchfield}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue' 
				type='search'
				placeholder='Search Robots'
				onChange={searchQuery}
			/>
		</div>		
	);
}
export default SearchBox;