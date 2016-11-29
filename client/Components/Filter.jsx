import React from 'react'
import {Row, Col} from 'react-bootstrap';
class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 3};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		
		this.setState({value: e.target.value})
	}
	render() {
		console.log('value ', this.state.value)
		return (
			<Row>
				<Col xs={12} md={4}>
					<h4 className="text-center">$1-${this.state.value}</h4>
					<input 
						type="range"
						value={this.state.value}
					        min={1}
					        max={100}
					        onChange={this.handleChange}
					        step={1}/>	
				</Col>
			</Row>
		);
	}
}

export default Filter;