import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

class Confirm extends Component {
	static propTypes = {
		rooms: PropTypes.object.isRequired
	};

	render() {
		const {rooms} = this.props;
		console.log('cofirmation', rooms);

		return (<Paper> <p>confirmation page</p></Paper>);
	}
}

function mapStateToProps(state) {
	return {
		rooms: state.rooms
	}
}

export default connect(mapStateToProps)(Confirm);
