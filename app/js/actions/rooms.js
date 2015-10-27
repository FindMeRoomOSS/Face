export const ROOMS_QUERY = 'rooms_query';
export const ROOMS_RECEIVED = 'rooms_received';
export const ROOMS_FAILED = 'rooms_failed';

// complex actions

export function queryRooms() {
//	return appActivate();
	return roomsFailed('simple error message');
}

// simple actions

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


