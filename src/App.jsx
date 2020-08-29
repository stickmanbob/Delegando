import React from "react";
import "./styles/index.css";
import Column from "./components/column";
import Board from "./components/board";
import { Provider, connect } from "react-redux";
import NoteForm from "./components/NoteForm";

class App extends React.Component{

	constructor(props){
		super(props);

		//Bindings
		this.save = this.save.bind(this); 
	}
	
	save(e){
		e.preventDefault();
		let storage = window.localStorage;
		let data = JSON.stringify(this.props.state);
		storage.setItem("data", data);
	}

	render(){
		let { store } = this.props;

		return (
			<Provider store={store}>

				<button onClick={this.save}>Save Boards</button>
				<Board boardId={1} />

			</Provider>
		);
	} 
  
}

function mSTP(state){
	return {
		state: state 
	}
}

export default connect(mSTP,null)(App);
