import React from "react";
import { connect } from "react-redux";
import { updateColumn } from "../actions/column_actions";
class editColumnForm extends React.Component {
  constructor(props) {
    super(props);

    //Setup State
    let column = this.props.column;
    this.state = column;

    //Create a ref to the outer form node
    this.node = React.createRef();

    //Function bindings
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleOutsideClick(e) {
    if (!this.node.current) return;
    if (!this.node.current.contains(e.target)) {
      this.props.hide();
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let column = this.state;
    this.props.updateColumn(column);
    this.props.hide();
  }

  render() {
    return (
      <form
        ref={this.node}
        onSubmit={this.handleSubmit}
        className="edit-column-form"
      >
        <input
          autoFocus
          className="column-title"
          onChange={this.handleChange}
          value={this.state.title}
          type="text"
        />
        <button className="edit-column-submit" type="submit" >Save Changes</button>
      </form>
    );
  }
}

function mSTP(state, ownProps) {
  return {
    column: state.entities.columns[ownProps.columnId],
  };
}

function mDTP(dispatch) {
  return {
    updateColumn: (col) => dispatch(updateColumn(col)),
  };
}

export default connect(mSTP, mDTP)(editColumnForm);
