import { combineReducers } from 'redux-immutablejs';
import { toDoApp } from './toDoAppReducer';

const rootReducer = combineReducers({
    toDoApp,
});

export default rootReducer;
