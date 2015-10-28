import server from '../api/server';

export const ROOMS_QUERIED = 'rooms_queried';
export const ROOMS_RECEIVED = 'rooms_received';
export const ROOMS_FAILED = 'rooms_failed';

// complex actions

export function queryRooms() {
	return (dispatch) => {
		dispatch(roomsQueried());
		let database = new server();
		return database
			.queryRooms()
			.then((rooms) => {
				dispatch(roomsReceived(rooms));
			})
			.catch((a) => {
				console.error('rooms', a);
				dispatch(roomsFailed(a));
			});
	};
}

// simple actions

function roomsQueried() {
	return {
		type: ROOMS_QUERIED
	};
}

function roomsReceived(rooms) {
	return {
		type: ROOMS_RECEIVED,
		payload: rooms
	};
}

function roomsFailed(errorMessage) {
	return {
		type: ROOMS_FAILED,
		message: errorMessage
	};
}


