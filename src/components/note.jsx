import React from "react";
import { connect } from "react-redux";

class Note extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    debugger;
    return <div>lol</div>;
  }
}

const mSTP = (state, ownProps) => {
  return {};
};

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(Note);
