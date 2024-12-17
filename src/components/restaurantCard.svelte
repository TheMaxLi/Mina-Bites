<script lang="ts">
	import type { Restaurant } from '$lib/types';
	import { Star } from 'lucide-svelte';
	let { restaurant }: { restaurant: Restaurant } = $props();
</script>

<div class="border rounded-lg p-4">
	<div class="relative">
		<img
			class="aspect-square object-cover rounded-lg"
			src={restaurant.image_url}
			alt={`${restaurant.name}`}
		/>
		<div class="absolute top-2 right-2 rounded-full bg-white p-2">
			<Star />
		</div>
	</div>
	<div>
		<div class="flex w-full justify-between">
			<p>{restaurant.name}</p>
			{restaurant.price}
		</div>
		<div class="flex w-full justify-between">
			<p class="text-gray-500">{restaurant.location.address1}</p>
			<button class="rounded-lg px-2 py-1 bg-green-200">i want it</button>
		</div>
	</div>
</div>
