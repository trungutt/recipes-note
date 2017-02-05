import { expect } from 'chai';

import actionTypes from './actionTypes';
import actions from './actions';

describe('action creators', () => {
	it('add recipe', () => {
		const actualAction = actions.addRecipe('Poulet à la citronnelle', 'id-1', 1);
		const expectedAction = {
			type: actionTypes.ADD_RECIPE,
			payload: {
				content: 'Poulet à la citronnelle',
				id: 'id-1',
				timestamp: 1,
			},
		};

		expect(actualAction).to.deep.equal(expectedAction);
	});

	it('update recipe', () => {
		const actualAction = actions.updateRecipe('Poulet à la citronnelle', 'id-1', 2);
		const expectedAction = {
			type: actionTypes.UPDATE_RECIPE,
			payload: {
				content: 'Poulet à la citronnelle',
				id: 'id-1',
				timestamp: 2,
			},
		};

		expect(actualAction).to.deep.equal(expectedAction);
	});

	it('remove recipe', () => {
		const actualAction = actions.removeRecipe('id-1');
		const expectedAction = {
			type: actionTypes.REMOVE_RECIPE,
			payload: {
				id: 'id-1',
			},
		};

		expect(actualAction).to.deep.equal(expectedAction);
	});

	it('open recipe', () => {
		const actualAction = actions.openRecipe('id-1');
		const expectedAction = {
			type: actionTypes.OPEN_RECIPE,
			payload: {
				id: 'id-1',
			},
		};

		expect(actualAction).to.deep.equal(expectedAction);
	});

	it('close recipe', () => {
		const actualAction = actions.closeRecipe();
		const expectedAction = {
			type: actionTypes.CLOSE_RECIPE,
		};

		expect(actualAction).to.deep.equal(expectedAction);
	});
});
