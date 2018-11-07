import types from './types';
import axios from 'axios';


export function getResultsData(filter){  // redux-promise vs async and await
    const resp = axios.get(`/api/search/${filter}`);
    return {
        type: types.GET_STATS,
        payload: resp
    }
}
