import React from "react";
import { connect } from "react-redux";
import "./styles/index.css";
import Board from "./components/board";
import { HashRouter, Switch, Route } from "react-router-dom";
import BoardIndex from "./components/board_index";
import Landing from "./components/landing";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  save() {
    let storage = window.localStorage;
    if (this.props.state) {
      let data = JSON.stringify(this.props.state);
      storage.setItem("data", data);
    }
  }

  render() {
    this.save();
    return (
      <HashRouter>
        <NavBar />
        <Switch>
          <Route path="/boards/:id">
            <Board />
          </Route>

          <Route path="/boards">
            <BoardIndex />
          </Route>

          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

function mSTP(state) {
  return {
    state: state,
  };
}

export default connect(mSTP, null)(App);
