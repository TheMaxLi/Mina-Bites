import { logger } from '$lib/logger';
import { sessionHooks, type Handler } from '@kinde-oss/kinde-auth-sveltekit';

export const handle: Handler = async ({ event, resolve }) => {
	sessionHooks({ event });
	logger.info({ request: event.request, url: event.request.url });

	const response = await resolve(event);
	return response;
};
