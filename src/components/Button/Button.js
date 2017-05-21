import React from 'react';
import './Button.css'
import { connect } from 'react-redux'
import { fetchTopStories } from  '../../actions/index'

class ButtonView extends React.Component {
	render() {
		const refreshStoryList = this.props.refreshStoryList;

		return (
			<button className="button" onClick={refreshStoryList}>Refresh</button>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		refreshStoryList: () => {
			fetchTopStories(dispatch);
		}
	}
};

const Button =  connect(
	null,
	mapDispatchToProps
)(ButtonView);


export default Button;