import { getUserFromRequest } from '$lib';
import { createOrGetUser } from '$lib/server/db/user';
import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
    
}
