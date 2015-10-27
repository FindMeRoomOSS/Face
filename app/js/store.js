import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

// Every time the state changes, log it
const debug = store.subscribe(() => {
	console.log('DEBUG: ', store.getState())
});

export default store;
