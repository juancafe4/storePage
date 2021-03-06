import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

// This component renders a specific product.
const Product = (props) => {
  const { mainImage, name, defaultPriceInCents } = props;
  return (
    <Thumbnail src={`http:${mainImage}`}>
      <h4>{name}</h4>
      <h4>${(defaultPriceInCents / 100).toFixed(2)}</h4>
      <p>
        <Button bsStyle="primary">Add to Cart</Button>&nbsp;
      </p>
    </Thumbnail>
  );
};

Product.propTypes = {
  mainImage: React.PropTypes.string,
  name: React.PropTypes.string,
  defaultPriceInCents: React.PropTypes.number,
};
export default Product;
