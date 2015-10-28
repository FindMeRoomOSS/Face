import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

class Confirm extends Component {
	static propTypes = {
		reservation: PropTypes.object.isRequired
	};

	render() {
		const {reservation} = this.props;

		return (<Paper><p>confirmation page {reservation.status}</p></Paper>);
	}
}

function mapStateToProps(state) {
	return {
		reservation: state.reservation
	}
}

export default connect(mapStateToProps)(Confirm);
