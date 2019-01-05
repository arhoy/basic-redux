import { combineReducers } from 'redux';

// to the root reducer
import movies from './movies_reducer';

const rootReducer = combineReducers({
    movies
})

export default rootReducer;