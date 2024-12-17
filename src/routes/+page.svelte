<script lang="ts">
	import { Users, MapPin, Star } from 'lucide-svelte';

	const features = [
		{
			icon: Users,
			title: 'Group Dining Made Easy',
			description: 'Collaborate with friends to discover and choose restaurants together.'
		},
		{
			icon: MapPin,
			title: 'Local Discovery',
			description: 'Find restaurants near you with advanced filtering options.'
		},
		{
			icon: Star,
			title: 'Save Favorites',
			description: 'Keep track of your favorite restaurants and recommendations.'
		}
	];
</script>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 pb-16 md:pt-16 text-center">
		<h1 class="text-5xl font-bold mb-6 text-gray-900">Mina Bites: Discover Restaurants Together</h1>
		<p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
			Simplify group dining by discovering, recommending, and deciding on restaurants with your
			friends.
		</p>

		<div class="flex justify-center space-x-4 mb-16">
			<button class="w-32 h-8 rounded-xl outline"
				><a href="/api/auth/register">Get Started</a>
			</button>
			<button class="w-32 h-8 rounded-xl outline"> <a href="/api/auth/login">Log In</a> </button>
		</div>

		<div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
			{#each features as feature}
				<div class="bg-gray-50 p-6 rounded-lg shadow-md">
					<svelte:component this={feature.icon} class="mx-auto mb-4 text-blue-600" size={48} />
					<h3 class="text-xl font-semibold mb-3">{feature.title}</h3>
					<p class="text-gray-600">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
