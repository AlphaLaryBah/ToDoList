//action creators
import axios from "axios";

export const fetchData = () => async dispatch => {
    const response = await axios.get('/api');
    dispatch({ type: 'FETCH_DATA', payload: response.data });
    //  console.log(response);
};

export const selectItem = (item) => {
    //return an ction
    return {
        type: 'ITEM_SELECTED',
        payload: item

    }

}


