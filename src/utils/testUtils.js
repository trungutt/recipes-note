const withNoRecipe = () => ({
	byId: {},
	ids: [],
	openRecipeId: null,
});

const withOneRecipe = () => ({
	byId: {
		'id-1': {
			id: 'id-1',
			content: 'Poulet à la citronnelle',
			timestamp: 1,
		},
	},
	ids: ['id-1'],
	openRecipeId: 'id-1',
});

const withNoOpenRecipe = () => ({
	byId: {
		'id-1': {
			id: 'id-1',
			content: 'Poulet à la citronnelle',
			timestamp: 1,
		},
	},
	ids: ['id-1'],
	openRecipeId: null,
});

const mockState = {
	withNoRecipe,
	withOneRecipe,
	withNoOpenRecipe,
};

export default mockState;
