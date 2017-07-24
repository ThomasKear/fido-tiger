	import { combineReducers } from 'redux';

import LogInReducer from './reducer_login';

export default combineReducers({
    login: LogInReducer
})