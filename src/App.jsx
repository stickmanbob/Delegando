import React from "react";
import {connect} from 'react-redux';
import "./styles/index.css";
import Board from "./components/board";
import { Provider } from "react-redux";
import SaveButton from './components/save_button';
import { HashRouter, Switch, Route} from "react-router-dom";
import BoardIndex from "./components/board_index";
import Landing from "./components/landing";

class App extends React.Component{
	constructor(props){
		super(props);

		this.save = this.save.bind(this);
	}

	save(){
		let storage = window.localStorage;
		if(this.props.state){
			let data = JSON.stringify(this.props.state);
			storage.setItem("data", data);
		}
	}

	render(){
		this.save();
		return (	
				<HashRouter>
					<Switch>
						<Route path="/boards/:id">
							<Board  />
						</Route>

						<Route path="/boards">
							<BoardIndex />
						</Route>

						<Route path="/">
							<Landing/>
						</Route>
					</Switch>

				</HashRouter>
			
		);
	} 
  
}

function mSTP(state){
	return{
		state:state
	}
}

export default connect (mSTP, null)(App);



