<!-- src/routes/favorites/+page.svelte -->
<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { Star, Trash2, DollarSign } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import SaveCard from './saveCard.svelte';

	const { data } = $props();
</script>

<div class="container mx-auto px-4 py-8">
	<div class="flex items-center justify-between mb-8">
		<h1 class="text-2xl md:text-3xl font-bold">Your Favorites</h1>
		<div class="flex items-center space-x-2">
			<Star class="text-yellow-400" size={24} />
			<span class="text-lg font-semibold">{data.favorites.length}</span>
		</div>
	</div>

	{#if data.favorites.length === 0}
		<div class="text-center py-12">
			<Star class="mx-auto mb-4 text-gray-300" size={48} />
			<h2 class="text-xl font-semibold mb-2">No favorites yet</h2>
			<p class="text-gray-600 mb-4">Start exploring restaurants and save your favorites!</p>
			<a href="/restaurants">Explore Restaurants</a>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.favorites as favorite}
				<SaveCard {favorite} />
			{/each}
		</div>
	{/if}
</div>
