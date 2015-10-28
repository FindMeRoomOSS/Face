import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { FloatingActionButton, FontIcon } from 'material-ui';
import { List, ListItem } from 'material-ui';
import * as actions from '../actions/rooms';

class RoomList extends Component {
	static propTypes = {
		rooms: PropTypes.array.isRequired
	};

	_onTouchTap = (e) => {
		console.log(e.currentTarget.id);
	};

	render() {
		const { rooms } = this.props;

		if (rooms.length == 0) {
			return (<div/>);
		}

		let items =  rooms.map((item) => <ListItem id={item.id} key={item.id} onTouchTap={this._onTouchTap} >{item.name}</ListItem> );

		return (<List>{items}</List>);
	}
}

class Home extends Component {
	static propTypes = {
		rooms: PropTypes.object.isRequired
	};

	componentDidMount() {
		// TODO: initialization?

	}

	_queryRooms = () => {
		const { dispatch } = this.props;
		dispatch(actions.queryRooms());
	}

	render() {
		const style = {
			floating : {
				position: 'fixed',
				right: 25,
				bottom: 25
			}
		};

		const { rooms } = this.props;

		return (
			<div>
				<content>
					<RoomList rooms={rooms.rooms} />
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
