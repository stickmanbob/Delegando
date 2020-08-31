import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App.jsx";
import configureStore from "./store/store";

// TEST IMPORTS
  import * as colActions from "./actions/column_actions";
  import * as noteActions from "./actions/note_actions";
import { Provider } from "react-redux";
//

window.colActions = colActions;
window.noteActions = noteActions; 

document.addEventListener("DOMContentLoaded", () => {
 
	// Initialize state
	let storage = window.localStorage;
	let state = JSON.parse(storage.getItem('data'));
	// let state; 
	
	if(!state){
		state = {
			entities: {
				boards: {
					1: {
						title: "My First Board",
						columns: [1,2,3],
						id:1
					},
					nextId: 2,
				},
				columns: {
					1:{
						title:"To Do",
						notes:[],
						id:1
					},
					2: {
						title: "In Progress",
						notes: [],
						id: 2
					},
					3: {
						title: "Done",
						notes: [],
						id: 3
					},
					nextId: 4,
				},
				notes: {
					nextId: 1,
				}
			}
		}
	}
  

  //Create a store with the preloaded state
  let store = configureStore(state);

  // //TEST LINE
  //   window.store = store;
  // //

  ReactDOM.render(
    <React.StrictMode>
			<Provider store={store}>
      	<App />
			</Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}); 