<script lang="ts">
	import type { Restaurant, User } from '$lib/types';
	import { mightFail } from '@might/fail';
	import { Star, CirclePlus } from 'lucide-svelte';
	let { restaurant, user }: { restaurant: Restaurant; user: User | undefined } = $props();

	const handleAddRestaurantToGroup = async () => {
		if (!user) {
			return; // do some pop up
		}
		const [addError, addResult] = await mightFail(
			fetch('api/restaurants/add_to_group', {
				method: 'POST',
				body: JSON.stringify({ groupId: user.currentGroupId, restaurantData: restaurant })
			})
		);
	};
</script>

<a href="/" title={restaurant.name}>
	<div class="border rounded-lg p-4 shadow-sm hover:shadow-lg">
		<div class="relative">
			<img
				class="aspect-square object-cover rounded-lg"
				src={restaurant.image_url}
				alt={`${restaurant.name}`}
			/>
			<button class="absolute top-2 right-2 rounded-full bg-white p-2">
				<Star />
			</button>
		</div>
		<div>
			<div class="flex w-full justify-between">
				<p>{restaurant.name}</p>
				{restaurant.price}
			</div>
			<div class="flex w-full justify-between">
				<p class="text-gray-500">{restaurant.location.address1}</p>
				<button onclick={handleAddRestaurantToGroup}>
					<CirclePlus class="rounded-lg p-0.5 bg-green-200" />
				</button>
			</div>
		</div>
	</div>
</a>
