<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Home, MapPin, User, Bookmark } from 'lucide-svelte';
	import { setUserState } from '$lib/state.svelte';
	import SearchableDropDown from '../components/SearchableDropDown.svelte';
	import { mightFail } from '@might/fail';
	import { invalidateAll } from '$app/navigation';
	import { Toaster } from 'svelte-sonner';

	let { children, data } = $props();

	setUserState(data.user!);

	const navItems = [
		{ href: '/dashboard', icon: Home, label: 'Home' },
		{ href: '/restaurants', icon: MapPin, label: 'Restaurants' },
		{ href: '/saved', icon: Bookmark, label: 'Saved' },
		{ href: '/profile', icon: User, label: 'Profile' }
	];
	const handleSelectGroup = async (groupId: number) => {
		const [selectError, selectResult] = await mightFail(
			fetch(`/api/group/select_current`, { method: 'PATCH', body: JSON.stringify({ groupId }) })
		);

		if (selectError) {
			return console.error('Error loading more restaurants:', selectResult);
		}

		invalidateAll();
	};

	const searchableGroups = data.groups?.map((g) => {
		return { id: g.id, name: g.name };
	});
</script>

<Toaster />

<div class="flex flex-col min-h-screen">
	{#if data.user}
		<aside
			class="hidden md:flex z-50 md:w-64 fixed left-0 top-0 bottom-0 bg-gray-100 p-6 flex-col justify-between"
		>
			<div>
				<div class="mb-8 text-center">
					<img
						src={data.user.image || '/default-avatar.png'}
						alt="User Avatar"
						class="w-16 h-16 rounded-full mx-auto mb-2"
					/>
					<p class="font-semibold">{data.user.name || 'User'}</p>
					{data.user.currentGroupId === null ? '' : `Current group: ${data.user.currentGroupId}`}
				</div>
				<nav class="space-y-2">
					{#each navItems as item}
						<a
							title={item.label}
							href={item.href}
							class="flex items-center p-2 rounded hover:bg-gray-200
							{page.url.pathname === item.href ? 'bg-blue-100' : ''}"
						>
							<item.icon class="mr-3 size-5" />
							{item.label}
						</a>
					{/each}
				</nav>
			</div>

			<div class="ml-2">
				<SearchableDropDown onSelect={handleSelectGroup} data={searchableGroups} />
			</div>
		</aside>

		<!-- Mobile Bottom Navigation -->
		<nav
			class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
		>
			<div class="flex py-3 px-8 w-full justify-between">
				{#each navItems as item}
					<a
						title={item.label}
						href={item.href}
						class="flex flex-col items-center justify-center
						{page.url.pathname === item.href
							? 'text-blue-600 font-semibold'
							: 'text-gray-500 hover:text-gray-700'}"
					>
						<item.icon class="size-8 mb-1" />
						{item.label}
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
