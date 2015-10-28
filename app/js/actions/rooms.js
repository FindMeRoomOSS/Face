import server from '../api/server';

export const ROOMS_QUERIED = 'rooms_queried';
export const ROOMS_RECEIVED = 'rooms_received';
export const ROOMS_FAILED = 'rooms_failed';

export const ROOM_REQUESTED = 'room_requested';
export const ROOM_RESERVED = 'room_reserved';
export const ROOM_REJECTED = 'room_rejected';

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

export function reserveRoom(id) {
	return (dispatch) => {
		dispatch(roomRequested(id));
		let database = new server();
		return database
			.reserveRoom(id)
			.then(() => {
				dispatch(roomReserved(id));
			})
			.catch((a) => {
				console.error('reservation', a);
				dispatch(roomRejected(id, a));
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

function roomRequested(id) {
	return {
		type: ROOM_REQUESTED,
		payload: id
	};
}

function roomReserved(id) {
	return {
		type: ROOM_RESERVED,
		payload: id
	};
}

function roomRejected(id, error) {
	return {
		type: ROOM_REJECTED,
		payload: id,
		message: error
	};
}
