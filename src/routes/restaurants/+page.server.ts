import type { RequestEvent } from '@sveltejs/kit';
import { getFavorites } from '$lib/server/db/favorites';

export async function load({ fetch, request, url, cookies }: RequestEvent) {
	const offset = url.searchParams.get('offset') || '0';
	const price = url.searchParams.get('price');
	const rating = url.searchParams.get('rating');
	const category = url.searchParams.get('category');
	const sortBy = url.searchParams.get('sort_by') || 'best_match';
	const term = url.searchParams.get('term') || '';

	const limit = 50;
	const userId = cookies.get('userId');
	let favorites;

	let apiUrl = `/api/restaurants?offset=${offset}&limit=${limit}&sort_by=${sortBy}`;

	if (price) apiUrl += `&price=${price}`;
	if (rating) apiUrl += `&rating=${rating}`;
	if (category) apiUrl += `&categories=${category}`;
	if (term) apiUrl += `&term=${term}`;

	const res = await fetch(apiUrl);

	const data = await res.json();

	if (userId) {
		favorites = await getFavorites(parseInt(userId));
	}

	return { businesses: data.businesses, offset: data.offset, favorites: favorites ?? [] };
}
