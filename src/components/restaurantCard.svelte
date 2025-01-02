<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { handleClickOutside } from '$lib/clickOutside';
	import type { MealType, Restaurant, User } from '$lib/types';
	import { mightFail } from '@might/fail';
	import { Heart, CirclePlus, Star } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	let {
		restaurant,
		user,
		isFavorited
	}: { restaurant: Restaurant; user: User | undefined; isFavorited: boolean } = $props();

	let showMenu = $state(false);

	const handleAddRestaurantToGroup = async (e: Event, mealType: MealType) => {
		e.preventDefault();
		e.stopPropagation();

		if (!user) {
			return toast('Please login or create an account first');
		}
		const [addError, addResult] = await mightFail(
			fetch('api/restaurants/add_to_group', {
				method: 'POST',
				body: JSON.stringify({ groupId: user.currentGroupId, restaurant, mealType })
			})
		);
	};
	const handleAddToFavorite = async (e: Event) => {
		e.preventDefault();
		e.stopPropagation();

		if (!user) {
			return toast('Please login or create an account first');
		}
		const [addError, addResult] = await mightFail(
			fetch('api/favorites', {
				method: 'POST',
				body: JSON.stringify({ restaurant })
			})
		);
		if (addError) {
			return toast('Could not add to favorites');
		}
		await invalidateAll();
		toast(`${restaurant.name} has been added to favorites`);
	};
	const handleOpenMenu = (e: Event) => {
		e.preventDefault();
		e.stopPropagation();
		showMenu = !showMenu;
	};
</script>

<svelte:window
	on:click={(e) =>
		handleClickOutside(e, '.menu-container', () => (showMenu ? (showMenu = false) : showMenu))}
/>

<a href="/" title={restaurant.name}>
	<div class="rounded-lg shadow-md hover:shadow-lg bg-white">
		<div class="relative">
			<img
				class="w-full h-48 object-cover rounded-t-lg"
				src={restaurant.image_url}
				alt={`${restaurant.name}`}
			/>
			<button class="absolute top-2 right-2 rounded-full bg-white p-2" name="Save">
				<Heart
					onclick={handleAddToFavorite}
					color={isFavorited ? 'red' : 'black'}
					fill={isFavorited ? 'red' : 'white'}
				/>
			</button>
		</div>
		<div class="p-4">
			<div class="flex justify-between items-start mb-2 menu-container relative">
				<h3 class="text-lg font-semibold">{restaurant.name}</h3>
				<button
					name="Add to group"
					class="text-green-400 hover:text-green-500"
					onclick={handleOpenMenu}
				>
					<CirclePlus class="rounded-lg p-0.5" />
				</button>
				{#if showMenu}
					<div
						class="absolute right-0 w-[145px] top-full mt-2 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-2 z-20 border"
					>
						<div class="px-2 w-full border-b">Add to:</div>
						<button
							class="px-2 hover:bg-gray-100 rounded text-left"
							onclick={(e) => handleAddRestaurantToGroup(e, 'breakfast')}>Breakfast</button
						>
						<button
							class="px-2 hover:bg-gray-100 rounded text-left"
							onclick={(e) => handleAddRestaurantToGroup(e, 'lunch')}>Lunch</button
						>
						<button
							class="px-2 hover:bg-gray-100 rounded text-left"
							onclick={(e) => handleAddRestaurantToGroup(e, 'dinner')}>Dinner</button
						>
					</div>
				{/if}
			</div>
			<div class="mb-2 flex items-center space-x-2">
				<span class="text-green-600 font-medium">
					{restaurant.price}
				</span>
			</div>
			<div class="flex items-center justify-between mt-4 text-sm text-gray-500">
				<p class="text-gray-500">{restaurant.location.address1}</p>
				<div class="flex items-center">
					<Star class="text-yellow-400 mr-1" size={16} />
					<span>{restaurant.rating}</span>
				</div>
			</div>
		</div>
	</div>
</a>
