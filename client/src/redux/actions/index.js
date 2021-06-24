//action creators
import axios from "axios";
// export const fetchPostedData = () => async dispatch => {
//     await dispatch(fetchData());
//     console.log('got it')
// }

export const fetchData = () => async dispatch => {
    const response = await axios.get('http://localhost:8080/api');
    dispatch({ type: 'FETCH_DATA', payload: response.data });
    //  console.log(response)


};

export const selectItem = (item) => {
    //return an ction
    return {
        type: 'ITEM_SELECTED',
        payload: item

    }

}

export const doneData = () => async dispatch => {
    const response = await axios.get('http://localhost:8080/api/delete');
    dispatch({ type: 'DONE_DATA', payload: response});
    // console.log(response)


};

