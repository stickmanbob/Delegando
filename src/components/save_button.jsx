import React from 'react';

import {connect} from 'react-redux';

class SaveButton extends React.Component{

	constructor(props) {
		super(props);

		//Bindings
		this.save = this.save.bind(this);
	}

	save(e) {
		e.preventDefault();
		let storage = window.localStorage;
		let data = JSON.stringify(this.props.state);
		storage.setItem("delegandoData", data);
	}


	render(){
		return(
			<button onClick={this.save}>Save Boards</button>
		)
	}
}


function mSTP(state) {
	return {
		state: state
	}
}

export default connect(mSTP,null)(SaveButton);
