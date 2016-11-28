import React from 'react';
import Store from './Store.jsx'

//This is the main component it will display the store page
class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Store/>
			</div>
		);
	}
}

export default App;