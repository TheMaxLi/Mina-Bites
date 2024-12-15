<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { LogOut, Home, Users, MapPin, Star, Menu, X } from 'lucide-svelte';
	import { fade, slide } from 'svelte/transition';

	let { children } = $props();

	let mobileMenuOpen = $state(false);

	const navItems = [
		{ href: '/dashboard', icon: Home, label: 'Dashboard' },
		{ href: '/restaurants', icon: MapPin, label: 'Restaurants' },
		{ href: '/groups', icon: Users, label: 'Groups' },
		{ href: '/favorites', icon: Star, label: 'Favorites' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="flex flex-col min-h-screen">
	{#if $page.data.user}
		<!-- Mobile Navigation -->
		<nav class="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
			<div class="flex justify-between items-center p-4">
				<div class="flex items-center">
					<img
						src={$page.data.user.picture || '/default-avatar.png'}
						alt="User Avatar"
						class="w-10 h-10 rounded-full mr-3"
					/>
					<span class="font-semibold">{$page.data.user.given_name || 'User'}</span>
				</div>
				<button onclick={toggleMobileMenu} class="z-50">
					{#if mobileMenuOpen}
						<X class="size-6" />
					{:else}
						<Menu class="size-6" />
					{/if}
				</button>
			</div>

			{#if mobileMenuOpen}
				<div transition:slide class="fixed inset-0 bg-white pt-20 z-40">
					<nav class="space-y-4 px-6">
						{#each navItems as item}
							<a
								href={item.href}
								onclick={toggleMobileMenu}
								class="flex items-center p-3 rounded-lg
								{$page.url.pathname === item.href ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}"
							>
								<item.icon class="mr-4 size-6" />
								<span class="text-lg">{item.label}</span>
							</a>
						{/each}

						<a
							href="/api/auth/logout"
							class="flex items-center p-3 rounded-lg hover:bg-red-50 text-red-600"
						>
							<LogOut class="mr-4 size-6" />
							<span class="text-lg">Logout</span>
						</a>
					</nav>
				</div>
			{/if}
		</nav>

		<!-- Desktop Sidebar -->
		<aside
			class="hidden md:flex md:w-64 fixed left-0 top-0 bottom-0 bg-gray-100 p-6 flex-col justify-between"
		>
			<div>
				<div class="mb-8 text-center">
					<img
						src={$page.data.user.picture || '/default-avatar.png'}
						alt="User Avatar"
						class="w-16 h-16 rounded-full mx-auto mb-2"
					/>
					<p class="font-semibold">{$page.data.user.given_name || 'User'}</p>
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

		<main class="flex-1 md:pl-64 pt-16 md:pt-0">
			{@render children()}
		</main>
	{:else}
		<!-- Not logged in content -->
		<main class="flex-1">
			{@render children()}
		</main>
	{/if}
</div>

<style>
	@media (max-width: 767px) {
		main {
			padding-top: 72px;
		}
	}
</style>
