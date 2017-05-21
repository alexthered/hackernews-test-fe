import { createStore, combineReducers, applyMiddleware } from 'redux';
import { storyList, lifeTimeTopStory } from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const initialState = {
	storyList: [],
	lifeTimeStopStory: {}
};

const configureStore = () => {

	const store = createStore(combineReducers({
			storyList,
			lifeTimeTopStory
		}),
		initialState,
		applyMiddleware(logger)
	);

	return store;
};

export default configureStore;