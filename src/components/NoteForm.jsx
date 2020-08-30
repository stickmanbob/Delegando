import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      colId: this.props.column.id,
      show: false,
		};
		
		this.createFormRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleOuterClick = this.handleOuterClick.bind(this);
	}
	
	componentDidMount(){
		document.addEventListener("mousedown", this.handleOuterClick, false);
	}

	componentWillUnmount(){
		document.removeEventListener("mousedown", this.handleOuterClick, false);
	}

	handleOuterClick(e){
		if (!this.createFormRef.current) return;
		if (!this.createFormRef.current.contains(e.target)) {
			this.setState({
				show: false 
			})
		}
	}

  handleInput(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  handleSubmit(e) {
		e.preventDefault();
		
		if(this.state.title.length ===0) return; 

    let noteIds = Object.values(this.props.column.notes);
    noteIds.push(this.props.nextNoteId);
    let col = {
      notes: noteIds,
      id: this.props.column.id,
    };

    this.props.createNote(this.state, col);
    this.setState({
      title: "",
      description: "",
      colId: this.props.column.id,
      show: false,
		});
		
  }

  render() {
    let createForm;

    if (this.state.show === false) {
      createForm = <div></div>;
    } else {
      createForm = (
        <form className="create-form" ref={this.createFormRef} onSubmit={this.handleSubmit}>
          {/* <label className="create-title">Title:</label> */}
          <input
            type="text"
            value={this.state.title}
            placeholder="Title..."
            onChange={this.handleInput("title")}
          />

          {/* <label className="create-description">Description:</label> */}
          <textarea
            className="create-ta"
            cols="30"
            rows="10"
            value={this.state.description}
            placeholder="Description here..."
            onChange={this.handleInput("description")}
          ></textarea>

          <button className="create-submit">Create!</button>
        </form>
      );
    }

    return (
      <div>
        { !(this.state.show) && <span className="add-note" onClick={this.handleClick}>
          +
        </span>
	}
        <div className="create-note">{createForm}</div>
      </div>
    );
  }
}

export default NoteForm;
