<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { MealType, Restaurant, User } from '$lib/types';
	import { handleClickOutside } from '$lib/utils/clickOutside';
	import { mightFail } from '@might/fail';
	import { Heart, CirclePlus, Star } from 'lucide-svelte';

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
			// return addToast({
			// 	message: 'Please login or create an account first'
			// });
			return;
		}
		const [addError, addResult] = await mightFail(
			fetch('api/restaurants/add_to_group', {
				method: 'POST',
				body: JSON.stringify({ groupId: user.currentGroupId, restaurant, mealType })
			})
		);
		showMenu = false;
		if (addError) {
			// addToast({
			// 	message: 'Error adding to group' + addError.message
			// });
		}
		// addToast({
		// 	message: `${restaurant.name} has been added to your ${mealType} plans`
		// });
	};
	const handleAddToFavorite = async (e: Event) => {
		e.preventDefault();
		e.stopPropagation();

		if (!user) {
			// return toast.error('Please login or create an account first');
		}
		const [addError, addResult] = await mightFail(
			fetch('api/favorites', {
				method: 'POST',
				body: JSON.stringify({ restaurant })
			})
		);
		if (addError) {
			// return toast.error('Error adding to favorites' + addError.message);
		}
		await invalidateAll();
		// toast(`${restaurant.name} has been added to favorites`);
	};
	const handleOpenMenu = (e: Event) => {
		e.preventDefault();
		e.stopPropagation();
		showMenu = !showMenu;
	};
</script>

<svelte:window
	onclick={(e) =>
		handleClickOutside(e, `.menu-container${restaurant.id}`, () =>
			showMenu ? (showMenu = false) : showMenu
		)}
/>

<a href="/" title={restaurant.name}>
	<div class="rounded-lg shadow-md hover:shadow-lg bg-white h-full">
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
			<div class="flex justify-between items-start mb-2 menu-container{restaurant.id} relative">
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
				<p class="text-gray-500">{restaurant.location.display_address.join(' ')}</p>
				<div class="flex items-center">
					<Star class="text-yellow-400 mr-1" size={16} />
					<span>{restaurant.rating}</span>
				</div>
			</div>
		</div>
	</div>
</a>
