import { eq } from 'drizzle-orm';
import { db } from '.';
import { users } from './schema';
import type { User, UserInput } from '$lib/types';

export async function createOrGetUser(userData: UserInput): Promise<User> {
	try {
		const [existingUser] = await db.select().from(users).where(eq(users.kindeId, userData.kindeId));

		if (existingUser) {
			return {
				...existingUser,
				isNewUser: false
			};
		}

		const newUserData = {
			email: userData.email,
			name: userData.name ?? null,
			image: userData.image ?? null,
			kindeId: userData.kindeId
		};

		const [newUser] = await db.insert(users).values(newUserData).returning();

		return {
			...newUser,
			isNewUser: true
		};
	} catch (error) {
		console.error('User creation error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to create user: ${error.message}`);
		}
		throw new Error('Unexpected error during user creation');
	}
}

export async function setCurrentGroup(userId: number, groupId: number) {
	try {
		const result = await db
			.update(users)
			.set({ currentGroupId: groupId })
			.where(eq(users.id, userId))
			.returning();
		return result;
	} catch (error) {
		console.error('setting current group error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to set current group: ${error.message}`);
		}
		throw new Error('Unexpected error while setting current group');
	}
}
