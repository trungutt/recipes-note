import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const reducer = (state, action) => {
	if (action.type === 'INC') {
		return state + 3;
	}
	return state;
};

const store = createStore(reducer, 0, applyMiddleware(createLogger()));

store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
