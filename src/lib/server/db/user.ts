import { eq } from 'drizzle-orm';
import { db } from '.';
import { users } from './schema';

interface UserInput {
	email: string;
	name?: string | null;
	image?: string | null;
	kindeId: string;
}

interface UserResult {
	id: number;
	email: string;
	name: string | null;
	image: string | null;
	kindeId: string;
	isNewUser: boolean;
}

export async function createOrGetUser(userData: UserInput): Promise<UserResult> {
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
