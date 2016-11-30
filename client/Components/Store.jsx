import $ from 'jquery';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import React from 'react';
import Product from './Product';
import SortBy from './SortBy';
import Filter from './Filter';

const URL = ' https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js';

// Store compoent shows the store page with each product
class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      originalProducts: null,
      max: 0,
      min: 0,
    };

    this.sortProduct = this.sortProduct.bind(this);
    this.filterByPrice = this.filterByPrice.bind(this);
  }
  // Before rendering getch the data to get the products
  componentDidMount() {
    $.get(URL, (data, status) => {
      if (status === 'success') {
        const { products } = JSON.parse(data);
        // Setting up max min for filtering prices
        const prices = products.map(val => val.defaultPriceInCents);
        const max = Math.max(...prices);
        const min = Math.min(...prices);
        this.setState({ products, originalProducts: products, min, max });
      }
    });
  }
  // This function sorts the products
  sortProduct(element) {
    // 1 Sort by name from A to Z
    // 2 Sort by name from Z to A
    // 3 Sort by price lowest to highest
    // 4 Sort by price highest to lowest

    const { products } = this.state;

    switch (element) {
      case '1':
        products.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        break;
      case '2':
        products.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
        break;
      case '3':
        products.sort((a, b) => a.defaultPriceInCents > b.defaultPriceInCents);
        break;
      case '4':
        products.sort((a, b) => a.defaultPriceInCents < b.defaultPriceInCents);
        break;
      default:
        break;
    }
    this.setState({ products });
  }

  // This function filter the products by price
  filterByPrice(min, max) {
    const filterProducts = this.state.originalProducts.filter((val) => {
      const price = val.defaultPriceInCents / 100;
      return min <= price && max >= price;
    });
    this.setState({ products: filterProducts });
  }
  render() {
    const { products, min, max } = this.state;

    if (!products) {
      return (
        <div>
          <h3 className="text-center">Loading... </h3>
          <ProgressBar active now={100} />
        </div>
      );
    }

    let thumbnails = [];

    thumbnails = products.map((val, index) =>
      <Col key={index + 1} xs={12} md={4}>
        <Product
          mainImage={val.mainImage.ref}
          name={val.name}
          defaultPriceInCents={val.defaultPriceInCents}
        />
      </Col>);
    return (
      <div>
        <SortBy sortProduct={this.sortProduct} />
        <br /> <br />
        <Row>
          <Col mdOffset={4}>
            <Filter filterByPrice={this.filterByPrice} max={max} min={min} />
          </Col>
        </Row>
        <br />
        <Row>
          {thumbnails}
        </Row>
      </div>
    );
  }
}


export default Store;
