import { createStore, combineReducers, applyMiddleware } from 'redux';
import storyList from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const configureStore = () => {

	const store = createStore(combineReducers({
			storyList
		}),
		applyMiddleware(logger)
	);

	return store;
};

export default configureStore;