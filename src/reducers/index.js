import fetch from 'isomorphic-fetch'
import { receiveTopStories } from '../actions/index'

const storyList = (state = [], action) => {
	switch (action.type) {
		case 'RECEIVE_TOP_STORIES':
			return action.storyList;
		default:
			return state;
	}
};

export default storyList;

