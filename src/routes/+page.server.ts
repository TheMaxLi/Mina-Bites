import { redirect } from '@sveltejs/kit';
import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	);

	if (isAuthenticated) {
		throw redirect(302, '/dashboard');
	}
}
