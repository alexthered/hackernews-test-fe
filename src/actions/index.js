export const receiveTopStories = (storyList) => {
	return {
		type: 'RECEIVE_TOP_STORIES',
		storyList
	}
};

export const fetchTopStories = (dispatch) => {
	//fetch('http://localhost:3000/v1/stories')
	fetch('https://hackernews-test-api.herokuapp.com/v1/stories')
		.then((response) => {
			console.log(response);
			return response.json()
		})
		.then((storyList) => {
			console.log(storyList);
			dispatch(receiveTopStories(storyList));
		})
		.catch((ex) => {
			console.log('parsing failed', ex)
		});
}