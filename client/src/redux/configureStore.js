import { combineReducers, createStore } from 'redux';
import todoListReducer from './ducks/todList';

const reducer = combineReducers({
    time: todoListReducer
})


const store = createStore(
    reducer
);

export default store;