import {ROOMS_QUERIED, ROOMS_RECEIVED} from '../actions/rooms';

// TODO: isChanging like in http://rackt.github.io/redux/docs/advanced/AsyncActions.html OR statusKnown like in element?
const initState = {
	statusKnown: false,
	rooms: []
};

export default function session(state = initState, action) {
	switch (action.type) {
		case ROOMS_QUERIED:
			console.log(ROOMS_QUERIED);
			return {
				statusKnown: false,
				rooms: []
			};

		case ROOMS_RECEIVED:
			let rooms = action.payload;
			console.log(ROOMS_RECEIVED);
			return {
				statusKnown: true,
				rooms: rooms
			};

		default:
			return state;
	}
}
