import { env } from '$env/dynamic/private';
import type { Restaurant } from '$lib/types';
import { json } from '@sveltejs/kit';

export async function GET({ url }: { request: Request; url: URL }) {
	const offset = url.searchParams.get('offset') || '0';
	const limit = url.searchParams.get('limit') || 20;
	const price = url.searchParams.get('price');
	const rating = url.searchParams.get('rating');
	const category = url.searchParams.get('category');
	const sortBy = url.searchParams.get('sort_by') || 'best_match';
	const term = url.searchParams.get('term') || '';
	console.log(term);
	const myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${env.YELP_API_KEY!}`);

	if (!env.YELP_API_KEY) throw new Error('YELP_API_KEY is not set');

	let yelpUrl = `https://api.yelp.com/v3/businesses/search?location=vancouver&offset=${offset}&limit=${limit}&sort_by=${sortBy}`;

	if (price) yelpUrl += `&price=${price}`;
	if (rating) yelpUrl += `&rating=${rating}`;
	if (category) yelpUrl += `&categories=${category}`;
	if (term) yelpUrl += `&term=${term}`;

	const res = await fetch(yelpUrl, {
		headers: myHeaders
	});

	const data = await res.json();
	const businesses = data.businesses as Restaurant[];
	return json({ businesses, offset: Number(offset) + Number(limit) });
}
