import { combineReducers } from 'redux';
import session from './session';
import rooms from './rooms';

export default combineReducers({
	session, rooms
});
