import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
class Product extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {mainImage, name, defaultPriceInCents} = this.props.product;
		return (
			<Thumbnail src={`http:${mainImage.ref}`}>
        <h4>{name}</h4>
        <h4>${(defaultPriceInCents/100).toFixed(2)}</h4>
        <p>
          <Button bsStyle="primary">Add Cart</Button>&nbsp;
        </p>
      </Thumbnail>
		);
	}
}

export default Product;