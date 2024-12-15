import { handleAuth } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET(requestEvents: RequestEvent) {
	console.log(requestEvents.params); // {kindeAuth: login}
	if (requestEvents.params.kindeAuth === 'kinde_callback') {
		console.log('CALLLLING BACK NOWW NOW NOWWW');
	}
	return handleAuth(requestEvents);
}
