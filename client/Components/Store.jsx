import React from 'react';
import Product from './Product.jsx';
import SortBy from './SortBy.jsx';
import Filter from './Filter.jsx';
//Getting AJAX from jQuery
import $ from 'jquery';
import {ProgressBar, Row, Col} from 'react-bootstrap';
const URL = ' https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
//Store compoents shows the store page with each product
class Store extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			sortBy: '',
		}

		this.sortProduct = this.sortProduct.bind(this);
	}
	sortProduct(element) {
		console.log(element);
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

			thumbnails = products.map((val,index)=> <Col key={index + 1} xs={12} md={4}> <Product product={val}/></Col>)

			return (
				<div>
					<SortBy sortProduct={this.sortProduct}/>
					<br/> <br/>
					<Row>
						<Col mdOffset={4}>
							<Filter/>
						</Col>
					</Row>
					<br/>
					<Row>
							{thumbnails}	
					</Row>
				</div>
			);
		}
		
	}
}

export default Store;