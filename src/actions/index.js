export const receiveTopStories = (storyList) => {
	return {
		type: 'RECEIVE_TOP_STORIES',
		storyList
	}
};

export const receiveLifeTimeTopStory = (topStory) => {
	return {
		type: 'RECEIVE_LIFETIME_TOP_STORY',
		topStory
	}
};

export const fetchTopStories = (dispatch) => {
	fetch('https://hackernews-test-api.herokuapp.com/v1/stories')
		.then((response) => {
			return response.json()
		})
		.then((storyList) => {
			dispatch(receiveTopStories(storyList));
		})
		.catch((ex) => {
			console.log('parsing failed', ex)
		});
};

export const fetchLifeTimeTopStory = (dispatch) => {
	fetch('https://hackernews-test-api.herokuapp.com/v1/stories/top')
		.then((response) => {
			return response.json()
		})
		.then((storyList) => {
			dispatch(receiveLifeTimeTopStory(storyList));
		})
		.catch((ex) => {
			console.log('parsing failed', ex)
		});
};

export const refreshData = (dispatch) => {
	fetchLifeTimeTopStory(dispatch);
	fetchTopStories(dispatch);
};