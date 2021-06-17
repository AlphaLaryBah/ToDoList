//action creators
import axios from "axios";


export const fetchData = () => async dispatch => {
    const response = await axios.get('http://localhost:8080/api');
    dispatch({ type: 'FETCH_DATA', payload: response.data });


}


