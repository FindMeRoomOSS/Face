import React, {Component} from 'react';
import { RefreshIndicator } from 'material-ui';

export default class Loading extends Component {
	render() {  
		console.log('Loading...');
		const style = {
			content : {
				position: 'fixed',
                top: '50%',
                left: '50%',
                margin: '-20px 0 0 -20px', 
                }
            };

		return (
			<div style={style.content}>
				<RefreshIndicator size={40}  left={0} top={0} status="loading" />
			</div> 
			);
	}
};