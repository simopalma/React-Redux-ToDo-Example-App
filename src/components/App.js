import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Map } from 'immutable';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import * as toDoAction from '../actions/toDoAction';

class App extends Component {
    static get propTypes() {
        return {
            toDoApp: PropTypes.instanceOf(Map).isRequired,
            toDoActions: PropTypes.object.isRequired,
        };
    }

    static get defaultProps() {
        return {
            toDoApp: Map(),
            toDoActions: {},
        };
    }

    constructor() {
        super();

        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    handleInput(e) {
        const currentItem = { text: e.target.value, key: Date.now() }
        this.props.toDoActions.insertingItem(currentItem);
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.props.toDoApp.get('currentItem');
        if (newItem.text !== '') {
            const items = [ ...this.props.toDoApp.get('items', List()), newItem ];
            this.props.toDoActions.addRemoveTodo(items);
            this.props.toDoActions.insertingItem({ text: '', key: 0 });
        }
    }
    deleteItem(key) {
        const filteredItems = this.props.toDoApp.get('items', List()).filter(item => {
            return item.get('key') !== key
        });
        this.props.toDoActions.addRemoveTodo(filteredItems);
        this.props.toDoActions.insertingItem({ text: '', key: 0 });
    }
    render() {
        return (
            <div className="App">
                <TodoList addItem={this.addItem} handleInput={this.handleInput} currentItem={this.props.toDoApp.get('currentItem')} />
                <TodoItems entries={this.props.toDoApp.get('items', List())} deleteItem={this.deleteItem} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        toDoApp: state.get('toDoApp'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toDoActions: bindActionCreators(toDoAction, dispatch),
    };
}

const AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppConnect