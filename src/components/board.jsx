import React from 'react';
import {connect} from 'react-redux';
import column from './column';
// import { createColumn } from '../actions/column_actions';

class Board extends React.Component {

    constructor(props){
        super(props);
    }

    renderColumns(columns){
        return (
            columns.map((col)=>{
                return(
                    <div>
                        <h1>{col.title}</h1>
                    </div>
                )
            })
        )
    }


    render(){
        let columnsIds = this.props.board.columns;
        let columns = columnsIds.map((id)=> this.props.allColumns[id]);

        return(
            <section>
                {this.renderColumns(columns)}
            </section>
        )
    }
}

function mSTP(state,ownProps){
    return {
        allColumns: state.entities.columns,
        board: state.entities.boards[ownProps.boardId],
        nextColId: state.entities.columns.nextId 
    }
}

// function mDTP(dispatch){
//     createColumn: (column) => dispatch(createColumn(column));
// }

export default connect (mSTP,null)(Board);