import {ROOMS_QUERIED, ROOMS_RECEIVED, ROOMS_FAILED} from '../actions/rooms';

// TODO: isChanging like in http://rackt.github.io/redux/docs/advanced/AsyncActions.html OR statusKnown like in element?
const initState = {
	statusKnown: false,
	loading: false,
	rooms: []
};

export default function rooms(state = initState, action) {
	switch (action.type) {
		case ROOMS_QUERIED:
			console.log(ROOMS_QUERIED);
			return {
				statusKnown: false,
				loading: true,
				rooms: []
			};

		case ROOMS_RECEIVED:
			let rooms = action.payload;
			console.log(ROOMS_RECEIVED);
			return {
				statusKnown: true,
				loading: false,
				rooms: rooms
			};

		case ROOMS_FAILED:
			console.warn(ROOMS_FAILED);
			return initState;

		default:
			return state;
	}
}
