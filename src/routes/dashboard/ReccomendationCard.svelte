<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { DbRestaurant } from '$lib/types';
	import { Star, Trash2 } from 'lucide-svelte';
	// import { toast } from 'svelte-sonner';

	const {
		rec
	}: {
		rec: {
			restaurant: DbRestaurant | null;
			mealType: 'breakfast' | 'lunch' | 'dinner';
			recommendedAt: string;
		};
	} = $props();

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
			// toast.success('Restaurant removed from favorites');
		} catch (error) {
			// toast.error('Failed to remove from favorites');
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
		src={rec.restaurant!.image || '/placeholder-restaurant.jpg'}
		alt={rec.restaurant!.name}
		class="w-full h-48 object-cover"
	/>
	<div class="p-4">
		<div class="flex justify-between items-start mb-2">
			<h3 class="text-lg font-semibold">{rec.restaurant!.name}</h3>
			<button
				onclick={() => {}}
				class="text-red-500 hover:text-red-600"
				title="Remove from favorites"
			>
				<Trash2 size={20} />
			</button>
		</div>

		<div class="mb-2 flex items-center space-x-2">
			<span class="text-green-600 font-medium">
				{rec.restaurant?.price}
			</span>
		</div>

		<p class="text-gray-600 text-sm mb-2">{rec.restaurant!.address}</p>

		<div class="flex items-center justify-between mt-4 text-sm text-gray-500">
			<span>Recommended on {formatDate(rec.recommendedAt)}</span>
			<div class="flex items-center">
				<Star class="text-yellow-400 mr-1" size={16} />
				<span>{rec.restaurant!.rating}</span>
			</div>
		</div>
	</div>
</div>
