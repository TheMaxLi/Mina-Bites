import { createGroup } from '$lib/server/db/groups.js';
import { addRestaurantToGroup, createOrGetRestaurant } from '$lib/server/db/restaurants.js';
import type { MealType, NewRestaurant, Restaurant } from '$lib/types.js';
import { mightFail } from '@might/fail';
import { json } from '@sveltejs/kit';

export async function POST({ request, url, cookies }) {
	const {
		groupId,
		restaurant,
		mealType
	}: { groupId: string; restaurant: Restaurant; mealType: MealType } = await request.json();
	const userId = cookies.get('userId');
	if (!userId) {
		return new Response('No user set in cookie', {
			status: 401
		});
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

	const [restaurantError, restaurantResult] = await mightFail(
		createOrGetRestaurant(restaurantData)
	);
	if (restaurantError) {
		return new Response(restaurantError.message, {
			status: 500
		});
	}
	const [addError, addResult] = await mightFail(
		addRestaurantToGroup(restaurantResult.id, parseInt(groupId), parseInt(userId), mealType)
	);

	console.log(addResult);
	return json(restaurant);
}
