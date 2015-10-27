import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';

class About extends Component {
	_handleBack = () => {
		const { history } = this.props;
		history.goBack();
	};

	render() {
		let actions = [
			{ text: 'Close', onTouchTap: this._handleBack }
		];

		return (
			<Dialog
				ref="aboutDialog"
				title="About"
				actions={actions}
				actionFocus="submit"
				modal={true}
				openImmediately={true} >
				<p>Find Me Nearest Conference Room</p>
				Version: 0.0.1
			</Dialog>
		);
	}

	static propTypes = {
		history: PropTypes.object.isRequired
	};
}

export default connect()(About)
