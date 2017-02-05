import { expect } from 'chai';

import mockState from '../common/testUtils';

import selectors from './selectors';

describe('select all recipes', () => {
	it('get no recipes', () => {
		const state = mockState.withNoRecipe();
		const recipes = selectors.getRecipes(state);
		const expectedRecipes = [];

		expect(recipes).to.deep.equal(expectedRecipes);
	});

	it('get one recipes', () => {
		const state = mockState.withOneRecipe();
		const recipes = selectors.getRecipes(state);
		const expectedRecipes = [
			{
				id: 'id-1',
				content: 'Poulet à la citronnelle',
				timestamp: 1,
			},
		];

		expect(recipes).to.deep.equal(expectedRecipes);
	});
});

describe('select open recipe', () => {
	it('get no recipe', () => {
		const state = mockState.withNoRecipe();
		const recipes = selectors.getOpenRecipe(state);
		const expectedRecipes = null;

		expect(recipes).to.deep.equal(expectedRecipes);
	});

	it('get one recipe', () => {
		const state = mockState.withOneRecipe();
		const recipes = selectors.getOpenRecipe(state);
		const expectedRecipes = 'id-1';

		expect(recipes).to.deep.equal(expectedRecipes);
	});
});

describe('select a specific recipe', () => {
	it('get no recipe', () => {
		const state = mockState.withNoRecipe();
		const recipes = selectors.getRecipe(state, 'id-3');
		const expectedRecipes = undefined;

		expect(recipes).to.deep.equal(expectedRecipes);
	});

	it('get one recipe', () => {
		const state = mockState.withOneRecipe();
		const recipes = selectors.getRecipe(state, 'id-1');
		const expectedRecipes = {
			id: 'id-1',
			content: 'Poulet à la citronnelle',
			timestamp: 1,
		};

		expect(recipes).to.deep.equal(expectedRecipes);
	});
});
