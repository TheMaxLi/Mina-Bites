<!-- src/routes/favorites/+page.svelte -->
<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { Star, Trash2, DollarSign } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	const { data } = $props();

	async function removeFavorite(favoriteId: number | undefined) {
		try {
			const response = await fetch('/api/favorites', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ favoriteId })
			});

			if (!response.ok) throw new Error('Failed to remove favorite');

			await invalidateAll();
			toast.success('Restaurant removed from favorites');
		} catch (error) {
			toast.error('Failed to remove from favorites');
		}
	}

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
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
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<img
						src={favorite.restaurant!.image || '/placeholder-restaurant.jpg'}
						alt={favorite.restaurant!.name}
						class="w-full h-48 object-cover"
					/>
					<div class="p-4">
						<div class="flex justify-between items-start mb-2">
							<h3 class="text-lg font-semibold">{favorite.restaurant!.name}</h3>
							<button
								onclick={() => removeFavorite(favorite.id)}
								class="text-red-500 hover:text-red-600"
								title="Remove from favorites"
							>
								<Trash2 size={20} />
							</button>
						</div>

						<div class="mb-2 flex items-center space-x-2">
							<span class="text-green-600 font-medium">
								{favorite.restaurant?.price}
							</span>
						</div>

						<p class="text-gray-600 text-sm mb-2">{favorite.restaurant!.address}</p>

						<div class="flex items-center justify-between mt-4 text-sm text-gray-500">
							<span>Added {formatDate(favorite.addedAt)}</span>
							<div class="flex items-center">
								<Star class="text-yellow-400 mr-1" size={16} />
								<span>{favorite.restaurant!.rating}</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
