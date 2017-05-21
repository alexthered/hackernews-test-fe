import React from 'react';
import './Button.css'
import { connect } from 'react-redux'
import { refreshData } from  '../../actions/index'

class ButtonView extends React.Component {
	render() {
		const refreshData = this.props.refreshData;

		return (
			<button className="button" onClick={refreshData}>Refresh</button>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		refreshData: () => {
			refreshData(dispatch);
		}
	}
};

const Button =  connect(
	null,
	mapDispatchToProps
)(ButtonView);


export default Button;