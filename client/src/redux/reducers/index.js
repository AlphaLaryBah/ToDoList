
import { combineReducers } from 'redux';
import SerVdataReducer from './SerVdataReducer';



//FETCH DATA FROM SERVER
// export const fetchData = () => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get('http://localhost:8080/api');
//             const data = response.data;
//             dispatch({
//                 // type: ADD_FETCHED_DATA,
//                 payload: data
//             });
//         } catch (error) {
//             throw (error);
//         }
//     };
// };


export default combineReducers({
    dataFromServer: SerVdataReducer

});