import server from '../api/server';


export const LOGIN_REQUESTED = 'login';
export const LOGOUT_REQUESTED = 'logout';
export const USER_IN = 'user_in';
export const USER_OUT = 'user_out';

//
// ActionCreators
//

export function initialize() {
	return (dispatch) => {
		let database = new server();
		return database
			.activateAuth()
			.then((authData) => {
				if (authData) {
					dispatch(userIn(authData));
				} else {
					dispatch(userOut());
				}
			})
			.catch((a) => console.error('initialize', a));
	};
}

export function login() {
	return (dispatch) => {
		dispatch(loginRequested());
		let database = new server();
		return database
			.login()
			.then((authData) => {
				if (authData) {
					dispatch(userIn(authData));
				} else {
					dispatch(userOut());
				}
			})
			.catch((a) => console.error('login', a));

	};
	// TODO: notify error
}

export function logout() {
	return (dispatch) => {
		dispatch(logoutRequested());
		let database = new server();
		return database
			.logout()
			.then(() => dispatch(userOut()))
			.catch(a => console.error('logout', a));
	}
}

//
// simple Actions
//

function loginRequested() {
	return {
		type: LOGIN_REQUESTED
	};
}

function userIn(authData) {
	return {
		type: USER_IN,
		payload: {authData}
	};
}

function logoutRequested() {
	return {
		type: LOGOUT_REQUESTED
	};
}

function userOut() {
	return {
		type: USER_OUT
	};
}
