import React from 'react';
import Story from '../Story/Story.js'
import { fetchTopStories } from  '../../actions/index'
import { connect } from 'react-redux'
import './StoryList.css'

class StoryListView extends React.Component {

	componentDidMount(){
		this.props.fetchTopStories();
	}

	render() {
		const storyList = this.props.storyList;

		return (
			<ol className="list">
				{storyList !== undefined && storyList.map(story =>
					<li><Story key={story.id}
						   title={story.title}
						   score={story.score}
						   descendants={story.descendants}
						   url={story.url}
						   by={story.by}
						   lifetime={story.lifetime} />
					</li>
				)
				}
			</ol>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		storyList: state.storyList
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTopStories: () => {
			fetchTopStories(dispatch);
		}
	}
};

const StoryList =  connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryListView);

export default StoryList;