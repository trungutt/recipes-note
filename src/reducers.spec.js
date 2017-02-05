import { expect } from 'chai';

import actions from './actions';
import mockState from './testUtils';

import reducers from './reducers';

describe(' byId reducers', () => {
	it('add recipe handler', () => {
		const state = mockState.withNoRecipe();

		const nextState = reducers.byId(state.byId, actions.addRecipe('Poulet à la citronnelle', 'id-1', 1));
		const expectedNextState = {
			'id-1': {
				content: 'Poulet à la citronnelle',
				id: 'id-1',
				timestamp: 1,
			},
		};

		expect(nextState).to.deep.equal(expectedNextState);
	});

	it('update recipe handler', () => {
		const state = mockState.withOneRecipe();

		const nextState = reducers.byId(state.byId, actions.updateRecipe('Poulet à la citronnelle', 'id-1', 2));
		const expectedNextState = {
			'id-1': {
				content: 'Poulet à la citronnelle',
				id: 'id-1',
				timestamp: 2,
			},
		};

		expect(nextState).to.deep.equal(expectedNextState);
	});

	it('remove recipe handler', () => {
		const state = mockState.withOneRecipe();

		const nextState = reducers.byId(state.byId, actions.removeRecipe('id-1'));
		const expectedNextState = {};

		expect(nextState).to.deep.equal(expectedNextState);
	});
});

describe('openRecipeId reducers', () => {
	it('open recipe handler', () => {
		const state = mockState.withNoRecipe();

		const nextState = reducers.openRecipeId(state.openRecipeId, actions.openRecipe('id-1'));
		const expectedNextState = 'id-1';

		expect(nextState).to.deep.equal(expectedNextState);
	});

	it('close recipe handler', () => {
		const state = mockState.withOneRecipe();

		const nextState = reducers.openRecipeId(state.openRecipeId, actions.closeRecipe('id-1'));
		const expectedNextState = null;

		expect(nextState).to.deep.equal(expectedNextState);
	});

	it('add recipe handler', () => {
		const state = mockState.withNoRecipe();

		const nextState = reducers.openRecipeId(state.openRecipeId, actions.addRecipe('Poulet à la citronnelle', 'id-1', 1));
		const expectedNextState = 'id-1';

		expect(nextState).to.deep.equal(expectedNextState);
	});

	it('remove recipe handler', () => {
		const state = mockState.withOneRecipe();

		const nextState = reducers.openRecipeId(state.openRecipeId, actions.removeRecipe('id-1'));
		const expectedNextState = null;

		expect(nextState).to.deep.equal(expectedNextState);
	});
});
