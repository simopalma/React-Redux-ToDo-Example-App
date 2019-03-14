import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoItems(props) { 
    const todoEntries = props.entries;
    const listItems = todoEntries.map((item) => {
        return <TodoItem key={item.get('key')} item={item} deleteItem={props.deleteItem} />
    });

    return <ul className="theList">{listItems}</ul>
}

TodoItems.propTypes = {
    entries: PropTypes.instanceOf(List).isRequired,
    deleteItem: PropTypes.func.isRequired,
}

TodoItems.defaultProps = {
    entries: List(),
    deleteItem: () => { },
}

export default TodoItems
