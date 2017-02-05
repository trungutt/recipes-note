import React, { PropTypes } from 'react';

import { connect, bindActionCreators } from 'react-redux';

import selectors from '../../selectors/selectors';
import actions from '../../actions/actions';

const RecipeDetail = () => (
	<div>
		{!this.props.recipe
			? <div >No note is open</div>
			: <div>
				<div>
					{new Date(this.props.recipe.timestamp).toLocaleString()}
				</div>
				<textarea
					autoFocus
					key={this.props.recipe.id}
					onChange={event => this.props.actions.updateNote(event.target.value, this.props.recipe.id)}
					placeholder="New note..."
					value={this.props.recipe.content}
				/>
				<div>
					<button
						onClick={() => this.props.actions.removeRecipe(this.props.recipe.id)}
					>
						Remove
					</button>
					<button
						onClick={this.props.actions.closeRecipe}
					>
						Close
					</button>
				</div>
			</div>
		}
	</div>
);

const mapStateToProps = state => ({
	recipe: selectors.getRecipe(state, selectors.getOpenRecipe(state)),
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
