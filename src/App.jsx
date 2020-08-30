import React from "react";
import "./styles/index.css";
import Board from "./components/board";
import { Provider } from "react-redux";
import SaveButton from './components/save_button';
import { HashRouter, Switch, Route} from "react-router-dom";


export default class App extends React.Component{

	render(){
		let { store } = this.props;

		return (
			<Provider store={store}>
				
					<HashRouter>
					<Route path="/">
						<SaveButton />
						<Board boardId={1} />
					</Route>
				</HashRouter>
			</Provider>
		);
	} 
  
}



