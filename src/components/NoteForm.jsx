import React from 'react';

class NoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	handleInput(type) {
		return e => this.setState({[type]: e.currentTarget.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createNote(this.state)
	} 

	render(){
		return (
			<div className="create-note">
				<h2>Create Note</h2>
				<form className="create-form" onSubmit={this.handleSubmit}>
					<label className="create-title">Title:</label>
					<input type="text" value={this.state.title} onChange={this.handleInput('title')} />

					<label className="create-description">Description:</label>
					<textarea className="create-ta" 
						cols="30" rows="10" 
						value={this.state.description} 
						placeholder="Expand here..." 
						onChange={this.handleInput('description')}
					></textarea>

					<button className="create-submit">Create!</button>
				</form>
			</div>
		)	
	}
}

export default NoteForm;