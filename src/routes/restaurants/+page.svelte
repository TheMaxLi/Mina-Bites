<script lang="ts">
	import type { Restaurant } from '$lib/types';
	import { slide } from 'svelte/transition';
	import RestaurantCard from '../../lib/components/restaurantCard.svelte';
	import Spinner from '../../lib/components/spinner.svelte';
	import { mightFail } from '@might/fail';
	import TextInput from '../../lib/components/TextInput.svelte';
	import SelectOption from '../../lib/components/SelectOption.svelte';

	const { data } = $props();
	let businesses = $state<Restaurant[]>(data.businesses);
	let offset = $state(data.offset);
	let loading = $state(false);
	let hasMore = $state(true);
	let favoritesArray = $derived(data.favorites.map((f) => f.restaurant?.externalId));

	let selectedPrice = $state('');
	let selectedRating = $state('');
	let selectedCategory = $state('');
	let selectedSort = $state('best_match');
	let search = $state('');

	const priceOptions = [
		{ label: '$', value: [1, 2, 3, 4] },
		{ label: '$$', value: [2, 3, 4] },
		{ label: '$$$', value: [3, 4] },
		{ label: '$$$$', value: [4] }
	];
	const categoryOptions = [
		{ value: 'japanese', label: 'Japanese' },
		{ value: 'italian', label: 'Italian' },
		{ value: 'chinese', label: 'Chinese' },
		{ value: 'american', label: 'American' },
		{ value: 'mexican', label: 'Mexican' }
	];

	const sortOptions = [
		{ value: 'best_match', label: 'Best Match' },
		{ value: 'rating', label: 'Rating' },
		{ value: 'review_count', label: 'Review Count' },
		{ value: 'distance', label: 'Distance' }
	];

	async function loadRestaurants(reset = false) {
		if (loading) return;
		loading = true;

		const currentOffset = reset ? 0 : offset;
		let url = `/api/restaurants?offset=${currentOffset}`;

		if (selectedPrice) url += `&price=${selectedPrice}`;
		if (selectedRating) url += `&rating=${selectedRating}`;
		if (selectedCategory) url += `&category=${selectedCategory}`;
		if (selectedSort) url += `&sort_by=${selectedSort}`;
		if (search) url += `&term=${search}`;

		const [error, result] = await mightFail(fetch(url));

		if (error) {
			console.error('Error loading restaurants:', error);
			loading = false;
			return;
		}

		const [jsonError, newData] = await mightFail(result.json());

		if (jsonError) {
			console.error('Error parsing JSON:', jsonError);
			loading = false;
			return;
		}

		if (newData.businesses.length === 0) {
			hasMore = false;
		} else {
			businesses = reset ? newData.businesses : [...businesses, ...newData.businesses];
			offset = newData.offset;
		}
		loading = false;
	}

	async function handleFilterChange() {
		businesses = [];
		hasMore = true;
		offset = 0;
		await loadRestaurants(true);
	}

	async function loadMore() {
		if (!hasMore) return;
		await loadRestaurants();
	}

	function onscroll(event: UIEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		const bottom =
			event.currentTarget.scrollHeight -
				event.currentTarget.scrollTop -
				event.currentTarget.clientHeight <
			1;
		if (bottom && !loading) {
			loadMore();
		}
	}
</script>

<div class="flex flex-col items-center w-full max-w-7xl mx-auto px-4">
	<div class="w-full bg-white shadow-sm rounded-lg p-4 mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
		<TextInput
			label="Search"
			oninput={handleFilterChange}
			placeholder="Search..."
			bind:value={search}
		/>
		<div class="flex flex-col">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<label class="text-sm font-medium text-gray-700 mb-1">Price Range</label>
			<select
				bind:value={selectedPrice}
				onchange={handleFilterChange}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			>
				<option value="">All Prices</option>
				{#each priceOptions as price}
					<option value={price.value}>{price.label}</option>
				{/each}
			</select>
		</div>

		<SelectOption
			label="Category"
			onchange={handleFilterChange}
			bind:value={selectedCategory}
			options={categoryOptions}
			placeholder="All Categories"
		/>
		<SelectOption
			label="Sort By"
			onchange={handleFilterChange}
			bind:value={selectedSort}
			options={sortOptions}
		/>
	</div>

	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 overflow-y-scroll h-screen no-scrollbar w-full"
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
