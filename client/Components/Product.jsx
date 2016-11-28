import React from 'react';

class Product extends React.Component {
	constructor() {
		super();
		console.log('props from product ', this.props);
	}
	render() {
		return <div></div>
	}
}

export default Product;