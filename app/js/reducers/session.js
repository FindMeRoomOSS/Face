import {USER_IN, USER_OUT, LOGIN_REQUESTED} from '../actions/session';

// TODO: isChanging like in http://rackt.github.io/redux/docs/advanced/AsyncActions.html OR statusKnown like in element?
const initState = {
	statusKnown: false,
	authData: null
};

export default function session(state = initState, action) {
	switch (action.type) {
		case LOGIN_REQUESTED:
			console.log('LOGIN_REQUESTED');
			return {
				statusKnown: false,
				authData: null
			};

		case USER_IN:
			let authData = action.payload.authData;
			console.log('USER_IN', authData);
			if (!authData) {
				console.error('authData', authData);
			}
			return {
				statusKnown: true,
				authData: authData
			};

		case USER_OUT:
			console.log('USER_OUT');
			return {
				statusKnown: true,
				authData: null
			};

		default:
			return state;
	}
}