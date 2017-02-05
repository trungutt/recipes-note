import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
import initialStore from './initialStore';

const logger = createLogger({ collapsed: true });

const configureStore = () => createStore(rootReducer, initialStore, applyMiddleware(logger));

export default configureStore;
