import { combineReducers } from 'redux';
import session from './session';
import rooms from './rooms';
import reservation from './reservation';

export default combineReducers({
	session, rooms, reservation
});
