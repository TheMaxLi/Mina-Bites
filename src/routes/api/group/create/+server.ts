import { json } from '@sveltejs/kit';

export async function POST({ request, url }: { request: Request; url: URL }) {
	return json({});
}
