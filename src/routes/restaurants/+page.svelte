<script lang="ts">
	import type { Restaurant } from '$lib/types';
	import { slide } from 'svelte/transition';
	import RestaurantCard from '../../components/restaurantCard.svelte';
	import Spinner from '../../components/spinner.svelte';
	import { mightFail } from '@might/fail';
	const { data } = $props();
	let businesses = $state<Restaurant[]>(data.businesses);
	let offset = $state(data.offset);
	let loading = $state(false);
	let hasMore = $state(true);
	let favoritesArray = $derived(data.favorites.map((f) => f.restaurant?.externalId));

	async function loadMore() {
		if (loading || !hasMore) return;
		loading = true;

		const [restaurantError, restaurantResult] = await mightFail(
			fetch(`/api/restaurants?offset=${offset}`)
		);

		if (restaurantError) {
			return console.error('Error loading more restaurants:', restaurantError);
		}

		const [convertToJSONError, newData] = await mightFail(restaurantResult.json());

		if (newData.businesses.length === 0) {
			hasMore = false;
		} else {
			businesses = [...businesses, ...newData.businesses];
			offset = newData.offset;
		}
		loading = false;
	}

	async function onscroll(event: UIEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		const bottom =
			event.currentTarget.scrollHeight -
				event.currentTarget.scrollTop -
				event.currentTarget.clientHeight <
			1;
		if (bottom && !loading) {
			await loadMore();
		}
	}
</script>

<div class="flex flex-col items-center no-scrollbar">
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 overflow-y-scroll h-screen no-scrollbar"
		{onscroll}
	>
		{#each businesses as restaurant}
			<RestaurantCard
				{restaurant}
				user={data.user}
				isFavorited={favoritesArray.includes(restaurant.id)}
			/>
		{/each}
	</div>
	{#if loading}
		<div transition:slide class="relative h-10 w-full flex justify-center">
			<div class="p-4 absolute bottom-0">
				<Spinner />
			</div>
		</div>
	{/if}

	{#if !hasMore}
		<div class="col-span-full text-center text-gray-500 p-4">No more restaurants to load</div>
	{/if}
</div>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none; /* Chrome */
	}

	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
