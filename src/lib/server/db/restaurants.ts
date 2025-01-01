import type { DbRestaurant, MealType, NewRestaurant } from '$lib/types';
import { eq } from 'drizzle-orm';
import { db } from '.';
import { restaurantRecommendations, restaurants } from './schema';

export async function createOrGetRestaurant(restaurantData: NewRestaurant): Promise<DbRestaurant> {
	try {
		const [existingRestaurant] = await db
			.select()
			.from(restaurants)
			.where(eq(restaurants.externalId, restaurantData.externalId));

		if (existingRestaurant) {
			return existingRestaurant;
		}

		const [newRestaurant] = await db.insert(restaurants).values(restaurantData).returning();

		return newRestaurant;
	} catch (error) {
		console.error('Restaurant creation error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to create restaurant: ${error.message}`);
		}
		throw new Error('Unexpected error during restaurant creation');
	}
}

export async function addRestaurantToGroup(
	externalRestauarantId: number,
	groupId: number,
	userId: number,
	mealType: MealType
) {
	try {
		const [restaurantRecommendation] = await db
			.insert(restaurantRecommendations)
			.values({ groupId: groupId, restaurantId: externalRestauarantId, userId, mealType })
			.returning();
		return restaurantRecommendation;
	} catch (error) {
		console.error('Restaurant adding to group error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to adding to restaurant to group: ${error.message}`);
		}
		throw new Error('Unexpected error during adding restaurant to group');
	}
}
