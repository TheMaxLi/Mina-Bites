<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { DbRestaurant } from '$lib/types';
	import { Star, Trash2 } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	const {
		favorite
	}: { favorite: { restaurant: DbRestaurant | null; id: number; addedAt: string } } = $props();

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
