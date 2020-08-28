import React from "react";
import logo from "./mintbean.png";
import "./styles/index.css";
import Column from "./components/column";
import { Provider } from "react-redux";
import NoteForm from "./components/NoteForm";

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>App.js</code> is the entrypoint to your app.
        </p>
        <Column></Column>
				<NoteForm></NoteForm>
        <h2>HAPPY HACKING!</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </Provider>
  );
}

export default App;
