import 'babel-core/polyfill';

import React, {Component, PropTypes} from 'react';
window.React = React; // to enable react productivity tools

import injectTapEventPlugin from 'react-tap-event-plugin'; // TODO: to deal with 300ms tap delay until React 1.0.0
injectTapEventPlugin();

import { Styles } from 'material-ui';
let ThemeManager = new Styles.ThemeManager();

import { Provider } from 'react-redux'

// TODO: add browser history https://github.com/emmenko/redux-react-router-async-example/
import { createHistory } from 'history';
import createHashHistory from 'history/lib/createHashHistory'

// import Application from './components/Application.react';

import store from './store';

import * as app from './actions/app';
import * as session from './actions/session';

class Root extends Component {
	constructor(props, context) {
		super(props, context);

		// TODO: use Colors?
		ThemeManager.setPalette({
			primary1Color: '#1976D2',
			primary2Color: '#2196F3',
			primary3Color: '#BBDEFB',
			accent1Color: '#FF5252',
			textColor: '#212121'
		});

			//primary1Color: String, - AppBar
			//primary2Color: String,
			//primary3Color: String,
			//accent1Color: String, - Add button
			//accent2Color: String,
			//accent3Color: String,
			//textColor: String,
			//canvasColor: String,
			//borderColor: String,
			//disabledColor: String
	}

	// setup Theme Manager for Material UI via React Context
	// TODO: React Context is not released feature and will change in the future
	static childContextTypes = {
		muiTheme: PropTypes.object
	};

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}

	render () {
		const development = true;
		const history = development ? createHashHistory('/') : createHistory();

//		return (
//			<div>
//				<Provider key="provider" store={store}>
//					{() => <Application history={history} />}
//				</Provider>
//			</div>
//		)

		return (<div>Hello World</div>)
	}
}

store.dispatch(app.initialize());
store.dispatch(session.initialize());

React.render(<Root />, document.getElementById('root'));


