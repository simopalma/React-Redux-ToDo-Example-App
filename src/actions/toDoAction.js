import * as toDoActions from './toDoActionTypes';

export const addRemoveTodo = (items) => {
    return {
        type: toDoActions.ADD_REMOVE_TODO,
        items
    }
}

export const insertingItem = (item) => {
    return {
        type: toDoActions.INSTERTING_ITEM,
        item
    }
}
