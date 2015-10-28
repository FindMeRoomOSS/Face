import {ROOM_REQUESTED, ROOM_RESERVED, ROOM_REJECTED} from '../actions/rooms';

// TODO: isChanging like in http://rackt.github.io/redux/docs/advanced/AsyncActions.html OR statusKnown like in element?
const initState = {
	status: null
};

export default function session(state = initState, action) {
	switch (action.type) {
		case ROOM_REQUESTED:
			console.log(ROOM_REQUESTED);
			return {
				status: 'loading',
				id: action.payload
			};

		case ROOM_RESERVED:
			console.log(ROOM_RESERVED);
			return {
				status: 'reserved',
				id: action.payload
			};

		case ROOM_REJECTED:
			console.warn(ROOM_REJECTED);
			return {
				status: 'rejeced',
				id: action.payload,
				message: action.message
			};

		default:
			return state;
	}
}
