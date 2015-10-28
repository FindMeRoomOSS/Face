export const APP_ACTIVATE = 'activate'; // activate connection and restore user state
export const APP_ACTIVATED = 'started'; // activate connection and restore user state
export const APP_LOCATION = 'geolocation';

export function initialize() {
	return (dispatch) => {
		dispatch(appActivate());
		return getUserPosition()
			.then((position) => dispatch(positionReceived(position)))
			.catch((error) => console.error(error))
	}
}

// API
function getUserPosition() {
	return new Promise(function(resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

function positionReceived(position) {
	console.log(position.coords.latitude, position.coords.longitude);
	return {
		type: APP_LOCATION,
		payload: position
	};
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
