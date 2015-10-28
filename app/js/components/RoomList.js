import React, {Component, PropTypes} from 'react';
import { List, ListItem } from 'material-ui';

export default class RoomList extends Component {
	static propTypes = {
		rooms: PropTypes.array.isRequired
	};

	_onTouchTap = (e) => {
		console.log(e.currentTarget.id);
		const { onRoomSelect } = this.props;
		if (onRoomSelect) {
			onRoomSelect(e.currentTarget.id);
		}
	};

	render() {
		const { rooms } = this.props;
		let items = rooms.map((item) => <ListItem id={item.id} key={item.id} onTouchTap={this._onTouchTap} >{item.name}</ListItem> );
		return (<List subheader='Available rooms'>{items}</List>);
	}
}
