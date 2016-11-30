import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

// This component sorts the porducts by name or by price
// calling the function sortProduct from the Store component
const SortBy = (props) => {
  const { sortProduct } = props;
  return (
    <DropdownButton id="1" title="Sort by" onSelect={e => sortProduct(e)}>
      <MenuItem eventKey="1">Name: A-Z </MenuItem>
      <MenuItem eventKey="2">Name: Z-A </MenuItem>
      <MenuItem eventKey="3">Price: Low to High </MenuItem>
      <MenuItem eventKey="4">Price: High to Low </MenuItem>
    </DropdownButton>
  );
};

SortBy.propTypes = {
  sortProduct: React.PropTypes.func,
};
export default SortBy;
