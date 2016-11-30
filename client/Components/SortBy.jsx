import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function SortBy(props) {
  const { sortProduct } = props;
  return (
    <DropdownButton id="1" title="Sort by" onSelect={e => sortProduct(e)}>
      <MenuItem eventKey="1">Name: A-Z </MenuItem>
      <MenuItem eventKey="2">Name: Z-A </MenuItem>
      <MenuItem eventKey="3">Price: Low to High </MenuItem>
      <MenuItem eventKey="4">Price: High to Low </MenuItem>
    </DropdownButton>
  );
}

SortBy.propTypes = {
  sortProduct: React.PropTypes.func,
};
export default SortBy;
