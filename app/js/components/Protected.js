import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { AppBar, LeftNav } from 'material-ui';

// TODO: it should be domain driven class (not security)
class Protected extends Component {
	static propTypes = {
		authData: PropTypes.object.isRequired
	};

	_menuInitiated = (e) => {
		e.preventDefault();
		this.refs.leftNav.toggle();
	};

	_menuSelected = (e, selectedIndex, menuItem) => {
		e.preventDefault();
		let { history } = this.props;
		history.pushState({}, menuItem.route);
	};

	render() {
		const { authData } = this.props;
		if (!authData) {
			return (<div>User has to be logged in</div>); // TODO: it has to be error page
		}

		const menuItems = [
			{ route: '/', text: 'Home' },
			{ route: '/about', text: 'About' },
			{ route: '/logout', text: 'Logout' }
		];

		return (
			<div>
				<LeftNav ref="leftNav" menuItems={menuItems} onChange={this._menuSelected} docked={false} />
				<header>
					<AppBar
						title='Find Me Room'
						isInitiallyOpen={true}
						iconClassNameRight="muidocs-icon-navigation-expand-more"
						onLeftIconButtonTouchTap={this._menuInitiated} />
				</header>
				<content>
					{this.props.children}
				</content>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authData: state.session.authData };
}

export default connect(mapStateToProps)(Protected);
