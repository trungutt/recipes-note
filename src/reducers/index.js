import { combineReducers } from 'redux';

import reducers from './reducers';

export default combineReducers({
	byId: reducers.byId,
	openRecipeId: reducers.openRecipeId,
});
