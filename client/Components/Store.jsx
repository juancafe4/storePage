import React from 'react';
import Product from './Product.jsx'
//Getting AJAX from jQuery
import $ from 'jquery';
import {ProgressBar} from 'react-bootstrap';
const URL = ' https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
//Store compoents shows the store page with each product
class Store extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}
	componentDidMount() {		
		$.get(URL, (data, status) => {
			let {products} = JSON.parse(data)
			this.setState({products});	
		})
	}

	render() {
		let {products} = this.state

		if (!products.length)
			return (
			<div>
				<h3 className='text-center'>Loading...</h3>
				<ProgressBar active now={100} />
			</div>
			);
		else {
			let thumbnails = []
			thumbnails = products.map((val,index)=> <Product key={index + 1} product={val} />)

			return (
				<div>{thumbnails}</div>
			);
		}
		
	}
}

export default Store;