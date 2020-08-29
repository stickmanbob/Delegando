import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      colId: this.props.colId,
      show: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleClick() {
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let noteIds = Object.values(this.props.column.notes);
    // debugger;
    noteIds.push(this.props.nextNoteId);
    let col = {
      notes: noteIds,
      id: this.props.column.id,
    };
    this.setState({
      title: "",
      description: "",
      colId: this.props.colId,
      show: false,
    });
    this.props.createNote(this.state, col);
  }

  render() {
    let createForm;
    if (this.state.show === false) {
      createForm = <div></div>;
    } else {
      createForm = (
        <form className="create-form" onSubmit={this.handleSubmit}>
          <label className="create-title">Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
          />

          <label className="create-description">Description:</label>
          <textarea
            className="create-ta"
            cols="30"
            rows="10"
            value={this.state.description}
            placeholder="Expand here..."
            onChange={this.handleInput("description")}
          ></textarea>

          <button className="create-submit">Create!</button>
        </form>
      );
    }
    return (
      <div className="create-note">
        <button onClick={this.handleClick}>Create Note</button>
        {createForm}
      </div>
    );
  }
}

export default NoteForm;
