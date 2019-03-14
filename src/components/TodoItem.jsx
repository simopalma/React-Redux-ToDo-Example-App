import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

function TodoItem(props) {
    const item = props.item;
    return <li onClick={() => props.deleteItem(item.get('key'))}>{item.get('text')}</li>
}

TodoItem.propTypes = {
    item: PropTypes.instanceOf(Map).isRequired,
    deleteItem: PropTypes.func.isRequired,
}

TodoItem.defaultProps = {
    item: Map(),
    deleteItem: () => { },
}

export default TodoItem