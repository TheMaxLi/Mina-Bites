<script lang="ts">
	import type { Restaurant } from '$lib/types';
	import { Star, CirclePlus } from 'lucide-svelte';
	let { restaurant }: { restaurant: Restaurant } = $props();
</script>

<a href="/">
	<div class="border rounded-lg p-4">
		<div class="relative">
			<img
				class="aspect-square object-cover rounded-lg"
				src={restaurant.image_url}
				alt={`${restaurant.name}`}
			/>
			<button class="absolute top-2 right-2 rounded-full bg-white p-2">
				<Star />
			</button>
		</div>
		<div>
			<div class="flex w-full justify-between">
				<p>{restaurant.name}</p>
				{restaurant.price}
			</div>
			<div class="flex w-full justify-between">
				<p class="text-gray-500">{restaurant.location.address1}</p>
				<button>
					<CirclePlus class="rounded-lg p-0.5 bg-green-200" />
				</button>
			</div>
		</div>
	</div>
</a>
