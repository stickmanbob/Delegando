import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import configureStore from "./store/store";

// TEST IMPORTS
  import * as colActions from "./actions/column_actions";
  import * as noteActions from "./actions/note_actions";
//

window.colActions = colActions;
window.noteActions = noteActions; 

document.addEventListener("DOMContentLoaded", () => {
 
  // Initialize empty state
  let preloadedstate = {
    entities:{
      boards:{ 
        nextId: 1,
      },
      columns:{
        
        nextId: 1,
      },
      notes:{
        nextId: 1,
      }
    }
  }

  //Create a store with the preloaded state
  let store = configureStore(preloadedstate);

  //TEST LINE
    window.store = store;
  //

  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}); 