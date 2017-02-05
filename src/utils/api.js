import 'isomorphic-fetch';
import { normalize, schema, arrayOf } from 'normalizr';

export const toJson = res => res.json();

export const checkStatus = (res) => {
	const { status } = res;
	if (status >= 200 && status < 300) {
		return res;
	}

	return Promise.reject(new Error(res.statusText || res.status));
};

export const normalizeRecipesList = data => normalize(data, arrayOf(new schema.Entity('recipes')));

export const returnRecipesAndIds = ({ entities: { recipes }, result: recipeIds }) => ({
	recipes,
	recipeIds,
});

export const fetchJson = (url, options = {}) => (
	fetch(url, {
		...options,
		headers: {
			...options.headers,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then(checkStatus)
		.then(toJson)
);

export default {
	recipes: {

		fetch() {
			return fetchJson('/recipes')
				.then(normalizeRecipesList)
				.then(returnRecipesAndIds);
		},

		add(content) {
			return fetchJson(
				'/recipes',
				{
					method: 'POST',
					body: JSON.stringify({ content }),
				},
			);
		},

		update(id, content) {
			return fetchJson(
				`/recipes/${id}`,
				{
					method: 'PUT',
					body: JSON.stringify({ content }),
				},
			);
		},

		delete(id) {
			return fetch(`/recipes/${id}`, { method: 'DELETE' })
				.then(checkStatus)
				.then(res => res.text());
		},
	},
};
