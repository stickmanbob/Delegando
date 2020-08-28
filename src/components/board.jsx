import React from 'react';
import {connect} from 'react-redux';
import Column from './column';
// import { createColumn } from '../actions/column_actions';

class Board extends React.Component {

    constructor(props){
        super(props);
    }

    renderColumns(columns){
        return (
            columns.map((col)=>{
                return(
                   <Column title={col.title}/>
                )
            })
        )
    }


    render(){
        let columnsIds = this.props.board.columns;
        let columns = columnsIds.map((id)=> this.props.allColumns[id]);

        return(
            <section class="board">

							<div className="columns">
								{this.renderColumns(columns)}
							</div>
                
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