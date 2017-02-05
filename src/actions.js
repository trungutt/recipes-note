import { v4 } from 'uuid';

import actionTypes from './actionTypes';

const addRecipe = (content = '', id = v4(), timestamp = Date.now()) => ({
	type: actionTypes.ADD_RECIPE,
	payload: {
		content,
		id,
		timestamp,
	},
});

const updateRecipe = (content = '', id = v4(), timestamp = Date.now()) => ({
	type: actionTypes.UPDATE_RECIPE,
	payload: {
		content,
		id,
		timestamp,
	},
});

const removeRecipe = (id = v4()) => ({
	type: actionTypes.REMOVE_RECIPE,
	payload: {
		id,
	},
});

const openRecipe = (id = v4()) => ({
	type: actionTypes.OPEN_RECIPE,
	payload: {
		id,
	},
});

const closeRecipe = () => ({
	type: actionTypes.CLOSE_RECIPE,
});

export default {
	addRecipe,
	updateRecipe,
	removeRecipe,
	openRecipe,
	closeRecipe,
};
