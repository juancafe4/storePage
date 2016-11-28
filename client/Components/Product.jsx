import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
class Product extends React.Component {
	constructor(props) {
		super(props);
		console.log('props from product ', this.props);
	}

	render() {
		let {mainImage, name, defaultPriceInCents} = this.props.product;
		return (
			<Thumbnail src={`http:${mainImage.ref}`}>
        <h3>{name}</h3>
        <h3>${defaultPriceInCents/100}</h3>
        <p>
          <Button bsStyle="primary">Add Cart</Button>&nbsp;
        </p>
      </Thumbnail>
		);
	}
}

export default Product;