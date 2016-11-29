import React from 'react'
import {Row, Col} from 'react-bootstrap';
class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: Math.floor(this.props.max / 100)};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
		this.props.filterByPrice(this.props.min / 100, e.target.value);
	}
	render() {
		let {max, min} = this.props
		min = min / 100;
		max = max / 100;
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
					        step={0.01}/>	
				</Col>
			</Row>
		);
	}
}

export default Filter;