import { logger } from '$lib/utils/logger';
import { sessionHooks, type Handler } from '@kinde-oss/kinde-auth-sveltekit';

export const handle: Handler = async ({ event, resolve }) => {
	sessionHooks({ event });
	logger.info({ method: event.request.method, url: event.request.url });

	const response = await resolve(event);
	return response;
};
