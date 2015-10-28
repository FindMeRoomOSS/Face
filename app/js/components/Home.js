import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { FloatingActionButton, FontIcon } from 'material-ui';
import * as actions from '../actions/rooms';
import RoomList from './RoomList';
import Loading from './Loading';

class Home extends Component {
	static propTypes = {
		rooms: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	};

	componentDidMount() {
		// TODO: initialization?

	}

	_queryRooms = () => {
		const { dispatch } = this.props;
		dispatch(actions.queryRooms());
	};

	_reserveRoom = (id) => {
		console.log('reserve room', id);
		const { history, dispatch } = this.props;
		const newLocation = '/confirm';

		dispatch(actions.reserveRoom(id))
			.then(() => history.pushState({}, newLocation));
	};

	render() {
		const style = {
			floating : {
				position: 'fixed',
				right: 25,
				bottom: 25
			}
		};

		const { rooms } = this.props;

		let content;
		if (rooms.statusKnown) {
			content = <RoomList rooms={rooms.rooms} onRoomSelect={this._reserveRoom} />;
		} else if (rooms.loading) {
			content = <Loading />;
		} else {
			content = <div/>;
		}

		return (
			<div>
				<content>
					{content}
				</content>

				<buttons>
					<FloatingActionButton style={style.floating} onTouchTap={this._queryRooms} >
						<FontIcon className="material-icons">assistant</FontIcon>
					</FloatingActionButton>
				</buttons>
			</div>);


	}
}

function mapStateToProps(state) {
	return {
		rooms: state.rooms
	}
}

export default connect(mapStateToProps)(Home);
