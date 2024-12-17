import { env } from '$env/dynamic/private';
import type { Restaurant } from '$lib/types';
import { json } from '@sveltejs/kit';

export async function GET({ request, url }: { request: Request; url: URL }) {
	const offset = url.searchParams.get('offset') || '0';
	const limit = 20;
	const myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${env.YELP_API_KEY!}`);

	if (!env.YELP_API_KEY) throw new Error('YELP_API_KEY is not set');

	const res = await fetch(
		`https://api.yelp.com/v3/businesses/search?location=vancouver&offset=${offset}&limit=${limit}`,
		{
			headers: myHeaders
		}
	);

	const data = await res.json();
	const businesses = data.businesses as Restaurant[];
	return json({ businesses, offset: Number(offset) + limit });
}
