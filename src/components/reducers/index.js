import { combineReducers } from 'redux';
import resultsReducer from './results_reducer';

const rootReducer = combineReducers ({
        list: resultsReducer,
        // form: formReducer
});

export default rootReducer;
