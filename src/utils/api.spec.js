import { expect } from 'chai';
import fetchMock from 'fetch-mock';

import api from './api';

describe('api read recipes list', () => {
	const RECIPE_ONE = {
		id: 1,
		content: 'Pot au feu',
		timestamp: 1,
	};
	const RECIPE_TWO = {
		id: 2,
		content: 'Blanquette de veau',
		timestamp: 1,
	};

	const DUMMY_RECIPES = [RECIPE_ONE, RECIPE_TWO];

	it('Get recipes and their ids', () => {
		fetchMock.mock('/recipes', DUMMY_RECIPES);
		api.recipes
			.fetch()
			.then(({ recipes, recipeIds }) => {
				const expectedRecipes = {
					[RECIPE_ONE.id]: RECIPE_ONE,
					[RECIPE_TWO.id]: RECIPE_TWO,
				};
				const expectedRecipeIds = [RECIPE_ONE.id, RECIPE_TWO.id];

				expect(recipes).to.deep.equal(expectedRecipes);
				expect(recipeIds).to.deep.equal(expectedRecipeIds);
			});
	});
});

describe('api add a recipe', () => {
	const RECIPE = {
		id: 1,
		timestamp: 2,
	};

	it('add a recipe', () => {
		fetchMock.mock('/recipes', 'POST', (url, options) => {
			const { content } = JSON.parse(options.body);
			return {
				...RECIPE,
				content,
			};
		});

		api.recipes
			.add('Dim sum')
			.then((recipe) => {
				const expectedRecipes = {
					...RECIPE,
					content: 'testContent',
				};
				expect(recipe).to.deep.equal(expectedRecipes);
			});
	});
});

describe('api update a recipe', () => {
	const RECIPE = {
		id: 1,
		timestamp: 2,
	};

	it('update a recipe', () => {
		fetchMock.mock('/recipes/1', 'PUT', (url, options) => {
			const { content } = JSON.parse(options.body);
			return {
				...RECIPE,
				content,
			};
		});

		api.recipes
			.update(1, 'Champignon farci')
			.then((recipe) => {
				const expectedRecipe = {
					...RECIPE,
					content: 'Champignon farci',
				};
				expect(recipe).to.deep.equal(expectedRecipe);
			});
	});
});

describe('api delete a recipe', () => {
	it('delete a recipe', () => {
		fetchMock.mock('/recipes/1', 'DELETE', 200);

		api.recipes
			.delete(1)
			.then((res) => {
				expect(res).to.equal('');
			});
	});
});
