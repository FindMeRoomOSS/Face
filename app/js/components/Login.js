import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions/session';

import { Paper, RaisedButton, FontIcon, Styles } from 'material-ui';
let { Typography } = Styles;

class Login extends Component {
	static propTypes = {
		location: PropTypes.object,
		history: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		authData: PropTypes.object
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired
	};

	handleLogin = () => {

		const { history, location, dispatch } = this.props;

		let newLocation = '/';
		if (location.state && location.state.nextPathname) {
			newLocation = location.state.nextPathname;
		}
		// TODO: try apply rule #2 here
		if (newLocation == '/login') {
			newLocation = '/';
		}

		dispatch(actions.login())
			.then(() => history.pushState({}, newLocation));
	};

	render() {
		console.log('render of login page');

		const openlabColor = '#FFFFFF';
		const openlabTextColor = '#303F9F';

		let styles = {
			paper: {
				color: Typography.textFullWhite,
				textAlign: 'center',
				verticalAlign: 'middle',
				width: '100%',
				height: '100%',
				position: 'fixed'
			},
			p: {
				marginTop: '20px',
				marginBottom: '16px'
			}
		};

		return (
			<Paper style={styles.paper} >
				<p style={styles.p} >
					login via
				</p>
				<RaisedButton labelColor={openlabTextColor} backgroundColor={openlabColor} onTouchTap={this.handleLogin} label="login">
				</RaisedButton>
				<p style={styles.p} >
					<Link to="/about">About</Link>
				</p>
			</Paper>
			);
	}
}

// inject dispatch
export default connect()(Login)
