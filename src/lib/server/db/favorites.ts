import { and, eq } from 'drizzle-orm';
import { db } from '.';
import { favorites, restaurants } from './schema';

export const deleteFavorite = async (userId: number, favoritesId: number) =>
	await db
		.delete(favorites)
		.where(and(eq(favorites.id, favoritesId), eq(favorites.userId, userId)));

export const addToFavorites = async (userId: number, restaurantId: number) =>
	await db.insert(favorites).values({
		userId,
		restaurantId
	});

export const getFavorites = async (userId: number) =>
	await db
		.select({
			id: favorites.id,
			addedAt: favorites.addedAt,
			restaurant: restaurants
		})
		.from(favorites)
		.leftJoin(restaurants, eq(favorites.restaurantId, restaurants.id))
		.where(eq(favorites.userId, userId));
