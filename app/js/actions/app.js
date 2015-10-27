export const APP_ACTIVATE = 'activate'; // activate connection and restore user state
export const APP_ACTIVATED = 'started'; // activate connection and restore user state

export function initialize() {
	return appActivate(); // TODO: call UserSession
}

function appActivate() {
	return {
		type: APP_ACTIVATE
	};
}

function appActivated() {
	return {
		type: APP_ACTIVATED
	};
}
