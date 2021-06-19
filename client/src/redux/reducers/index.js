
import { combineReducers } from 'redux';
import SerVdataReducer from './SerVdataReducer';
import selectedList from './SelectedList'




export default combineReducers({
    dataFromServer: SerVdataReducer,
    selected: selectedList

});