<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Home } from 'lucide-svelte';
	import ReccomendationCard from './ReccomendationCard.svelte';
	const { data } = $props();

	if (browser && !page.data.isAuthenticated) {
		goto('/', { replaceState: true });
	}
</script>

<div class="container mx-auto px-4 py-8">
	{#if !data.user?.currentGroupId}
		<div class="text-center space-y-2">
			<h1 class="text-2xl font-bold">You are not part of any group yet.</h1>
			<p class="text-gray-500">Please join or create a group to see recommendations.</p>
		</div>
	{:else}
		<div class="mb-8 flex items-center gap-3">
			<h1 class="text-3xl font-bold">Current Group: {page.data.currentGroup.name}</h1>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#if data.breakfastRecs.length > 0}
				<div class="mb-8">
					<h2 class="text-xl font-semibold mb-4">Breakfast Recommendations</h2>
					<ul class="space-y-4">
						{#each data.breakfastRecs as rec}
							<ReccomendationCard {rec} />
						{/each}
					</ul>
				</div>
			{/if}

			{#if data.lunchRecs.length > 0}
				<div class="mb-8">
					<h2 class="text-xl font-semibold mb-4">Lunch Recommendations</h2>
					<ul class="space-y-4">
						{#each data.lunchRecs as rec}
							<ReccomendationCard {rec} />
						{/each}
					</ul>
				</div>
			{/if}

			{#if data.dinnerRecs.length > 0}
				<div class="mb-8">
					<h2 class="text-xl font-semibold mb-4">Dinner Recommendations</h2>
					<ul class="space-y-4">
						{#each data.dinnerRecs as rec}
							<ReccomendationCard {rec} />
						{/each}
					</ul>
				</div>
			{/if}
		</div>
		{#if data.breakfastRecs.length === 0 && data.lunchRecs.length === 0 && data.dinnerRecs.length === 0}
			<div class="text-center py-12">
				<Home class="mx-auto mb-4 text-gray-300" size={48} />
				<h2 class="text-xl font-semibold mb-2">No reccomendations yet</h2>
				<p class="text-gray-600 mb-4">Start exploring restaurants and add reccomendations!</p>
				<a href="/restaurants">Explore Restaurants</a>
			</div>
		{/if}
	{/if}
</div>
