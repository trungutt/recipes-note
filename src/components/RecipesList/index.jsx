import React, { PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux';

import selectors from '../../selectors/selectors';
import actions from '../../actions/actions';

const RecipesList = () => (
	<div>
		<button onClick={this.props.actions.addRecipe}>Add Recipe</button>
		{(this.props.recipes.length === 0)
			? <div>No recipes</div>
			: this.props.recipes.map(recipe => (
				<button
					key={recipe.id}
					onClick={() => this.props.actions.openRecipe(recipe.id)}
				>
					{recipe.content}
				</button>
			))
		}
	</div>
);

const mapStateToProps = state => ({
	recipes: selectors.getRecipes(state),
	openRecipeId: selectors.getOpenRecipe(state),
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
