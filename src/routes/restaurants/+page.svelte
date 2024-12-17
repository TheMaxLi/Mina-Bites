<script lang="ts">
	import type { Restaurant } from '$lib/types';
	import RestaurantCard from '../../components/restaurantCard.svelte';
	const { data } = $props();
	let businesses = $state(data.businesses);
	let offset = $state(data.offset);
	let loading = $state(false);

	async function loadMore() {
		if (loading) return;
		loading = true;

		const response = await fetch(`/api/restaurants?offset=${offset}`);
		const newData = (await response.json()) as { businesses: Restaurant[]; offset: number };
		// console.log(newData, 'WE ARE ACTUALLY FETCHING?');
		// console.log($state.snapshot(businesses), ' BUSINESSSS', businesses.length, offset);
		businesses = [...businesses, ...newData.businesses];
		offset = newData.offset;
		loading = false;
	}
	$effect(() => {
		console.log($state.snapshot(businesses));
	});

	async function handleScroll(event: UIEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		const bottom =
			event.currentTarget.scrollHeight ===
			event.currentTarget.scrollTop + event.currentTarget.clientHeight;
		if (bottom && !loading) {
			await loadMore();
		}
	}
</script>

<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
	onscroll={handleScroll}
	onclick={loadMore}
>
	{#each data.businesses as restaurant (restaurant.id)}
		<RestaurantCard {restaurant} />
	{/each}
</div>
