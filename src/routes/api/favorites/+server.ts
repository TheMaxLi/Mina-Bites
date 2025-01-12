import { json, type RequestHandler } from '@sveltejs/kit';
import { addToFavorites, deleteFavorite } from '$lib/server/db/favorites';
import { createOrGetRestaurant } from '$lib/server/db/restaurants';
import type { NewRestaurant, Restaurant } from '$lib/types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	try {
		const { restaurant }: { restaurant: Restaurant } = await request.json();
		const userId = cookies.get('userId');
		if (!userId) {
			return json({ error: 'Unauthorized' }, { status: 401 });
		}
		const restaurantData: NewRestaurant = {
			address: restaurant.location.display_address.join(' '),
			externalId: restaurant.id,
			image: restaurant.image_url,
			url: restaurant.url,
			latitude: restaurant.coordinates.latitude,
			longitude: restaurant.coordinates.longitude,
			menuUrl: restaurant.attributes.menu_url,
			name: restaurant.name,
			price: restaurant.price ?? null,
			rating: restaurant.rating
		};

		const result = await createOrGetRestaurant(restaurantData);
		await addToFavorites(parseInt(userId), result.id);

		return json({ success: true });
	} catch (error) {
		console.error('Error adding favorite:', error);
		return json({ error: 'Failed to add favorite' }, { status: 500 });
	}
};

export const DELETE: RequestHandler = async ({ request, cookies }) => {
	try {
		const { favoriteId } = await request.json();
		const userId = cookies.get('userId');
		if (!userId) {
			return json({ error: 'Unauthorized' }, { status: 401 });
		}

		await deleteFavorite(parseInt(userId), favoriteId);

		return json({ success: true });
	} catch (error) {
		console.error('Error removing favorite:', error);
		return json({ error: 'Failed to remove favorite' }, { status: 500 });
	}
};
