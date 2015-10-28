import 'babel-core/polyfill';

import React, {Component, PropTypes} from 'react';
window.React = React; // to enable react productivity tools

import injectTapEventPlugin from 'react-tap-event-plugin'; // TODO: to deal with 300ms tap delay until React 1.0.0
injectTapEventPlugin();

import { Colors, Spacing, ThemeManager } from 'material-ui/lib/styles'
import { ColorManipulator } from 'material-ui/lib/utils'

import { Provider } from 'react-redux'

// TODO: add browser history https://github.com/emmenko/redux-react-router-async-example/
import { createHistory } from 'history';
import createHashHistory from 'history/lib/createHashHistory'

import Application from './components/Application';

import store from './store';

import * as app from './actions/app';
import * as session from './actions/session';

// TODO: split to file
const rawTheme = {
	spacing: Spacing,
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary1Color: Colors.cyan500,
		primary2Color: Colors.cyan700,
		primary3Color: Colors.lightBlack,
		accent1Color: Colors.pinkA200,
		accent2Color: Colors.grey100,
		accent3Color: Colors.grey500,
		textColor: Colors.darkBlack,
		alternateTextColor: Colors.white,
		canvasColor: Colors.white,
		borderColor: Colors.grey300,
		disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
	},
}

class Root extends Component {
	constructor(props, context) {
		super(props, context);
	}

	// setup Theme Manager for Material UI via React Context
	// TODO: React Context is not released feature and will change in the future
	static childContextTypes = {
		muiTheme: PropTypes.object
	};

	getChildContext() {
		return {
			muiTheme: ThemeManager.getMuiTheme(rawTheme)
		};
	}

	render () {
		const development = true;
		const history = development ? createHashHistory('/') : createHistory();

		return (
			<div>
				<Provider key="provider" store={store}>
					{() => <Application history={history} />}
				</Provider>
			</div>
		)
	}
}

store.dispatch(app.initialize());
store.dispatch(session.initialize());

React.render(<Root />, document.getElementById('root'));


