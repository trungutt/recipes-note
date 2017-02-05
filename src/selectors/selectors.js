const selectors = {
	getRecipes: state => state.ids.map(id => state.byId[id]),
	getOpenRecipe: state => state.openRecipeId,
	getRecipe: (state, id) => state.byId[id],
};

export default selectors;
