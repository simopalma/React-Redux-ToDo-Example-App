import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from '../reducers/index';
import initialState from '../reducers/initialState';

export default createStore(
    rootReducer,
    fromJS(initialState),
);
