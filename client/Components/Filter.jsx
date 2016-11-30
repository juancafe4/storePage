import React from 'react';
import { Row, Col } from 'react-bootstrap';

// This component filter the products by their price
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: Math.floor(this.props.max / 100) };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    // It calls filterByPrice from the Store compoent
    // to filter out the products by their price
    this.props.filterByPrice(this.props.min / 100, e.target.value);
  }
  render() {
    let { max, min } = this.props;
    min /= 100;
    max /= 100;
    return (
      <Row>
        <Col xs={12} md={4}>
          <h4 className="text-center">${min}-${this.state.value}</h4>
          <input
            type="range"
            value={this.state.value}
            min={min}
            max={max}
            onChange={this.handleChange}
            step={0.01}
          />
        </Col>
      </Row>
    );
  }
}

Filter.propTypes = {
  max: React.PropTypes.number,
  min: React.PropTypes.number,
  filterByPrice: React.PropTypes.func,
};

export default Filter;
