import actionTypes from '../actions/actionTypes';

const byId = (state = {}, { type, payload }) => {
	switch (type) {
		case actionTypes.ADD_RECIPE:
		case actionTypes.UPDATE_RECIPE:
			return Object.assign({}, state, { [payload.id]: payload });
		case actionTypes.REMOVE_RECIPE: {
			const nextState = Object.assign({}, state);
			delete nextState[payload.id];
			return nextState;
		}
		default:
			return state;
	}
};

const openRecipeId = (state = null, { type, payload }) => {
	switch (type) {
		case actionTypes.OPEN_RECIPE:
		case actionTypes.ADD_RECIPE:
			return payload.id;
		case actionTypes.CLOSE_RECIPE:
		case actionTypes.REMOVE_RECIPE:
			return null;
		default:
			return state;
	}
};

export default {
	byId,
	openRecipeId,
};
