import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import configureStore from "./store/store";
import * as boardActions from "./actions/board_actions";
document.addEventListener("DOMContentLoaded", () => {
  // Example State

  let preloadedstate = {
    entities:{
      boards:{
        1: {
          name: "test",
          columnOrder: [2, 1, 3]
        },
        currentId: 4
      },
      columns:{
        1:{
          noteOrder:[1,2]
        },
        2:{
          noteOrder: [3]
        },
        3:{
          noteOrder: []
        },
      },
      notes:{
        1:{},
        2:{},
        3:{}
      }
    }
  }
  let store = configureStore(preloadedstate);

  window.store = store;
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
});


window.boardActions = boardActions; 