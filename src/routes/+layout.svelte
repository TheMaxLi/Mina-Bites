<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { LogOut, Home, Users, MapPin, Star, User } from 'lucide-svelte';

	let { children } = $props();

	const navItems = [
		{ href: '/dashboard', icon: Home, label: 'Dashboard' },
		{ href: '/restaurants', icon: MapPin, label: 'Restaurants' },
		{ href: '/groups', icon: Users, label: 'Groups' },
		{ href: '/favorites', icon: Star, label: 'Favorites' },
		{ href: '/profile', icon: User, label: 'Profile' }
	];
</script>

<div class="flex flex-col min-h-screen">
	{#if $page.data.user}
		<aside
			class="hidden md:flex md:w-64 fixed left-0 top-0 bottom-0 bg-gray-100 p-6 flex-col justify-between"
		>
			<div>
				<div class="mb-8 text-center">
					<img
						src={$page.data.user.image || '/default-avatar.png'}
						alt="User Avatar"
						class="w-16 h-16 rounded-full mx-auto mb-2"
					/>
					<p class="font-semibold">{$page.data.user.name || 'User'}</p>
				</div>

				<nav class="space-y-2">
					{#each navItems as item}
						<a
							href={item.href}
							class="flex items-center p-2 rounded hover:bg-gray-200
							{$page.url.pathname === item.href ? 'bg-blue-100' : ''}"
						>
							<item.icon class="mr-3 size-5" />
							{item.label}
						</a>
					{/each}
				</nav>
			</div>

			<div class="ml-2">
				<a
					href="/api/auth/logout"
					class="flex items-center w-full p-2 rounded hover:bg-red-50 text-red-600"
				>
					<LogOut class="mr-2 size-5" /> Logout
				</a>
			</div>
		</aside>

		<!-- Mobile Bottom Navigation -->
		<nav
			class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
		>
			<div class="flex py-3 px-8 w-full justify-between">
				{#each navItems as item}
					<a
						href={item.href}
						class="flex flex-col items-center justify-center
						{$page.url.pathname === item.href
							? 'text-blue-600 font-semibold'
							: 'text-gray-500 hover:text-gray-700'}"
					>
						<item.icon class="size-8 mb-1" />
					</a>
				{/each}
			</div>
		</nav>

		<main class="flex-1 md:pl-64 pb-16 md:pb-0">
			{@render children()}
		</main>
	{:else}
		<main class="flex-1">
			{@render children()}
		</main>
	{/if}
</div>

<style>
	@media (max-width: 767px) {
		main {
			padding-bottom: 72px;
		}
	}
</style>
