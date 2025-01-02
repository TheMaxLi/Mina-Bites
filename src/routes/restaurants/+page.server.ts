import type { RequestEvent } from '@sveltejs/kit';
import type { Restaurant } from '$lib/types';
import { getFavorites } from '$lib/server/db/favorites';

export async function load({ fetch, request, url, cookies }: RequestEvent) {
	const offset = url.searchParams.get('offset') || '0';
	const limit = 20;
	const userId = cookies.get('userId');
	let favorites;

	const res = await fetch(`/api/restaurants?offset=${offset}`);

	const data = await res.json();

	if (userId) {
		favorites = await getFavorites(parseInt(userId));
	}

	return { businesses: data.businesses, offset: data.offset, favorites: favorites ?? [] };
}
