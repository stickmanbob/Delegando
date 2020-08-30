import React from "react";

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNote(this.state);
    this.props.showEdit();
  }

  render() {
    return (
      <div>
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput("title")}
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              value={this.state.description}
              onChange={this.handleInput("description")}
              placeholder="Description..."
            ></textarea>
          </div>
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;
