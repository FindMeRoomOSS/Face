import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { FloatingActionButton, FontIcon } from 'material-ui';
import * as actions from '../actions/rooms';


class Home extends Component {
	//static propTypes = {
	//	locations: PropTypes.object.isRequired
	//};

	componentDidMount() {
		// TODO: initialization?
	}

	_queryRooms = () => {
		const { dispatch } = this.props;
		dispatch(actions.queryRooms());
	}

	render() {
		const style = {
			floating : {
				position: 'fixed',
				right: 25,
				bottom: 25
			}
		};

		//const { locations } = this.props;

		return (
			<div>
				<buttons>
					<FloatingActionButton style={style.floating} onTouchTap={this._queryRooms} >
						<FontIcon className="material-icons">assistant</FontIcon>
					</FloatingActionButton>
				</buttons>
			</div>);

		//<content>
		//	{Object.keys(locations).map((id) => <LocationCard id={id} key={id} place={locations[id]} />)}
		//</content>
	}
}

function mapStateToProps(state) {
	return {};
	// 		locations: state.places
}

export default connect(mapStateToProps)(Home);
