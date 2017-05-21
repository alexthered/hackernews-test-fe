import fetch from 'isomorphic-fetch'
import { receiveTopStories } from '../actions/index'

export const storyList = (state = [], action) => {
	switch (action.type) {
		case 'RECEIVE_TOP_STORIES':
			return action.storyList;
		default:
			return state;
	}
};
export const lifeTimeTopStory = (state = {}, action) => {
	switch (action.type) {
		case 'RECEIVE_LIFETIME_TOP_STORY':
			return action.topStory;
		default:
			return state;
	}
};
