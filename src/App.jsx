import React from "react";
import "./styles/index.css";
import Board from "./components/board";
import { Provider } from "react-redux";
import SaveButton from './components/save_button';
import { HashRouter, Switch, Route} from "react-router-dom";
import BoardIndex from "./components/board_index";

export default class App extends React.Component{

	render(){
		let { store } = this.props;

		return (
			<Provider store={store}>	
				<HashRouter>
					<Switch>
						<Route path="/boards/:id">
							<SaveButton />
							<Board />
						</Route>

						<Route path="/boards">
							<BoardIndex/>
						</Route>
					</Switch>
				</HashRouter>
			</Provider>
		);
	} 
  
}



