import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';

// place files you want to import through the `$lib` alias in this folder.
export const getUserFromRequest = async (request: Request) => {
	const user = await kindeAuthClient.getUser(request as unknown as SessionManager);
	return user;
};
