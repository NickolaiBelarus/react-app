import { combineReducers } from 'redux';
import lots from './lots_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    lots,
    user
});

export default rootReducer;