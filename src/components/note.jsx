import React from "react";

class Note extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="note-display">
        <h3 className="note-title">{this.props.note.title}</h3>
      </div>
    );
  }
}

// const mSTP = (state, ownProps) => {
//   return {

// 	};
// };

// const mDTP = (dispatch) => ({});

export default Note;
