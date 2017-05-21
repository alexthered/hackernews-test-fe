import React from 'react';
import './TopStory.css'

import Story from './Story'
import { connect } from 'react-redux'
import { fetchLifeTimeTopStory } from  '../../actions/index'

class TopStoryView extends React.Component {

	componentDidMount(){
		this.props.fetchLifeTimeTopStory();
	}

	render(){

		const story = this.props.story;

		return(
				<div className="top-story"><Story key={story.id}
					   title={story.title}
					   score={story.score}
					   descendants={story.descendants}
					   url={story.url}
					   by={story.by}
					   lifetime={story.lifetime} />
				</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		story: state.lifeTimeTopStory
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchLifeTimeTopStory: () => {
			fetchLifeTimeTopStory(dispatch);
		}
	}
};

const TopStory =  connect(
	mapStateToProps,
	mapDispatchToProps
)(TopStoryView);

export default TopStory;