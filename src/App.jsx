import React from "react";
import "./styles/index.css";
import Board from "./components/board";
import { Provider } from "react-redux";
import SaveButton from './components/save_button';



export default class App extends React.Component{

	render(){
		let { store } = this.props;

		return (
			<Provider store={store}>
				<SaveButton/>
				
					<Board boardId={1} />
				

			</Provider>
		);
	} 
  
}



