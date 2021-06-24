
import { combineReducers } from 'redux';
import SerVdataReducer from './SerVdataReducer';
import selectedList from './SelectedList'
import Done from './Done'



export default combineReducers({
    dataFromServer: SerVdataReducer,
    selected: selectedList,
    // done:Done

});