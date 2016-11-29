import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
class SortBy extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<DropdownButton id='1' title='Sort by'>
				    <MenuItem eventKey='1'>Name: A-Z</MenuItem>
				    <MenuItem eventKey='2'>Name: Z-A</MenuItem>
				    <MenuItem eventKey='3'>Price: Low to High</MenuItem>
				    <MenuItem eventKey='4'>Price: High to Low</MenuItem>
  		</DropdownButton>
		);
	}
}

export default SortBy;