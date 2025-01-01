<script lang="ts">
	import { handleClickOutside } from '$lib/clickOutside';
	import type { MealType, Restaurant, User } from '$lib/types';
	import { mightFail } from '@might/fail';
	import { Heart, CirclePlus } from 'lucide-svelte';
	let { restaurant, user }: { restaurant: Restaurant; user: User | undefined } = $props();

	let showMenu = $state(false);

	const handleAddRestaurantToGroup = async (e: Event, mealType: MealType) => {
		e.preventDefault();
		e.stopPropagation();

		if (!user) {
			return; // do some pop up
		}
		const [addError, addResult] = await mightFail(
			fetch('api/restaurants/add_to_group', {
				method: 'POST',
				body: JSON.stringify({ groupId: user.currentGroupId, restaurant, mealType })
			})
		);
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
	<div class="border rounded-lg p-4 shadow-sm hover:shadow-lg">
		<div class="relative">
			<img
				class="aspect-square object-cover rounded-lg"
				src={restaurant.image_url}
				alt={`${restaurant.name}`}
			/>
			<button class="absolute top-2 right-2 rounded-full bg-white p-2" name="Save">
				<Heart />
			</button>
		</div>
		<div>
			<div class="flex w-full justify-between">
				<p>{restaurant.name}</p>
				{restaurant.price}
			</div>
			<div class="flex w-full justify-between menu-container relative">
				<p class="text-gray-500">{restaurant.location.address1}</p>
				<button name="Add to group" onclick={handleOpenMenu}>
					<CirclePlus class="rounded-lg p-0.5 bg-green-200 hover:bg-green-300" />
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
		</div>
	</div>
</a>
