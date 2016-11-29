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
		}

		this.sortProduct = this.sortProduct.bind(this);
	}
	sortProduct(element) {
		// 1 Sort by name from A to Z
		// 2 Sort by name from Z to A
		// 3 Sort by price lowest to highest
		// 4 Sort by price highest to lowest

		let {products} = this.state;
		console.log('elemnent: ', element);
		switch(element) {
			case '1':
				products.sort((a, b) =>{
			    if(a.name < b.name) return -1;
			    if(a.name > b.name) return 1;
			    return 0;
				})
				break;
			case '2':
				products.sort((a, b) =>{
			    if(a.name > b.name) return -1;
			    if(a.name < b.name) return 1;
			    return 0;
				})
				break;
			case '3':
				products.sort((a, b) => a.defaultPriceInCents > b.defaultPriceInCents);
				break;
			case '4':
				products.sort((a, b) => a.defaultPriceInCents < b.defaultPriceInCents);
				break;
			}
			this.setState({products})
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