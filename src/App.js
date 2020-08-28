import React from "react";
import "./styles/index.css";
import Column from "./components/column";
import Board from "./components/board";
import { Provider } from "react-redux";
import NoteForm from "./components/NoteForm";

function App({ store }) {
  return (
    <Provider store={store}>

				<Board boardId={1} />
     
    </Provider>
  );
}

export default App;
