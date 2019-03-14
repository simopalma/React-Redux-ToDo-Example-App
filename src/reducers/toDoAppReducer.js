import { fromJS } from 'immutable';
import * as toDoActions from '../actions/toDoActionTypes';

export const toDoApp = (state = null, action) => {
    switch (action.type) {
        case toDoActions.ADD_REMOVE_TODO:
            // With ImmutableJS is not nocessary
            // return Object.assign({}, state, {
            //     toDoApp: action.object
            // });
            return state.set('items', fromJS(action.items));
        case toDoActions.INSTERTING_ITEM:
            // return Object.assign({}, state, {
            //     toDoApp: { items: state.toDoApp.items, currentItem: action.item }
            // });
            return state.set('currentItem', fromJS(action.item));
        default:
            return state
    }
}
