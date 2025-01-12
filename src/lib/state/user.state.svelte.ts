import { getContext, setContext } from 'svelte';
import type { User } from '../types';

const USER_CTX = 'USER_CTX';

export function setUserState(initialData: User) {
	const userState = $state(initialData);
	setContext(USER_CTX, userState);
	return userState;
}

export function getUserState() {
	return getContext<User>(USER_CTX);
}
