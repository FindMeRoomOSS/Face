import React, { Component, PropTypes} from 'react'
import * as actions from '../actions/session'
import { connect } from 'react-redux';

class Logout extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired
	};

	constructor(props) {
    	super(props);

    	const { dispatch, history } = this.props;

    	// TODO: make it async
    	dispatch(actions.logout()).then(() => history.pushState({}, '/'));
  	}

	render () {
		return (<div>logout page</div>);
	}
}

export default connect()(Logout)
