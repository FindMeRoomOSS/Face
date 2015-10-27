import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import { connect } from 'react-redux';

import About from './About';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import Protected from './Protected';
import Loading from './Loading';

// TODO: move routes from here and rename to Shell
class Application extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		authData: PropTypes.object,
		statusKnown: PropTypes.bool.isRequired
	};

	render() {
		console.log('rendering Application => ');
		let { history } = this.props;
		let { statusKnown } = this.props;

		if (!statusKnown) {
			return (<Loading />);
		}

		return this._renderPages(history);
	}

	_requireUser = (nextState, replaceState) => {
		let { authData, statusKnown } = this.props;
		let userIn = statusKnown && authData !== null;
		if (!userIn) {
			console.log('user is not logged in, redirecting...');
			const state = {
				nextPathname: nextState.location.pathname
			};
			replaceState(null, '/login', state);
		}
	}

	// TODO: dynamically load routes from Protected (i.e. completely encapsulate user dependent code)
	// https://github.com/rackt/react-router/blob/master/docs/advanced/DynamicRouting.md
	_renderPages(history) {
		return (
			<Router history={history} >
				<Route path="/login" component={Login} />
				<Route path="/about" component={About} />
				<Route path="/logout" component={Logout} />
				<Route path="/" component={Protected} onEnter={this._requireUser} >
					<IndexRoute component={Home} />
				</Route>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		authData: state.session.authData,
		statusKnown: state.session.statusKnown
	};
}

export default connect(mapStateToProps)(Application);
