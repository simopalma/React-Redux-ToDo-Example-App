import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

function TodoList(props) {
    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={props.addItem}>
                    <input
                        placeholder="Task"
                        value={props.currentItem.get('text')}
                        onChange={props.handleInput}
                    />
                    <button type="submit"> Add Task </button>
                </form>
            </div>
        </div>
    );
}

TodoList.propTypes = {
    currentItem: PropTypes.instanceOf(Map).isRequired,
    addItem: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
    currentItem: Map(),
    addItem: () => { },
    handleInput: () => { },
}

export default TodoList;
