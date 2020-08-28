import { connect } from "react-redux";
import React from "react";

import {
  receiveNotes,
  receiveNote,
  removeNote,
} from "../actions/column_actions";

class Column extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>hello</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
