<script lang="ts">
	import { Settings, PlusCircle, LogOut, Star, Users } from 'lucide-svelte';
	import { getUserState } from '$lib/state/user.state.svelte';
	import GroupSelfie from '../../lib/components/GroupSelfie.svelte';
	import { handleClickOutside } from '$lib/utils/clickOutside';

	const { data } = $props();

	const user = data.user!;

	let showMenu = $state<boolean>(false);

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<svelte:window
	onclick={(e) =>
		handleClickOutside(e, '.plus-menu-container', () => (showMenu ? (showMenu = false) : showMenu))}
/>

<div class="flex flex-col space-y-10">
	<div class="flex justify-between p-10 border-b">
		<div class="flex flex-col space-y-4 items-center">
			<img class="rounded-full" src={user.image} alt={`${user.name}'s profile image'`} />
			<p>{user.name}</p>
		</div>
		<div class="flex justify-between items-start gap-4">
			<Settings />
			<div class="flex flex-col">
				<button>Edit profile</button>
				<a
					href="/api/auth/logout"
					class="flex items-center w-full p-2 rounded hover:bg-red-50 text-red-600"
				>
					<LogOut class="mr-2 size-5" /> Logout
				</a>
			</div>
		</div>
	</div>
	<div class="flex flex-col w-full gap-5">
		<div class="px-5 flex w-full justify-between">
			<p>Groups:</p>
			<div class="relative plus-menu-container">
				<button onclick={toggleMenu} class="flex items-center">
					<PlusCircle />
				</button>
				{#if showMenu}
					<div
						class="absolute right-0 w-[145px] top-full mt-2 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-2 z-20 border"
					>
						<a href="/group/create" class="px-4 py-2 hover:bg-gray-100 rounded text-left"
							>Create Group</a
						>
						<a href="/group/join" class="px-4 py-2 hover:bg-gray-100 rounded text-left"
							>Join Group</a
						>
					</div>
				{/if}
			</div>
		</div>
		{#if data.groups?.length === 0}
			<div class="text-center py-12">
				<Users class="mx-auto mb-4 text-gray-300" size={48} />
				<h2 class="text-xl font-semibold mb-2">No groups yet</h2>
				<p class="text-gray-600 mb-4">Start adding restaurants and plan out your day!</p>
			</div>
		{:else}
			<div
				class="grid grid-cols-2 gap-4 px-5 pb-10 md:px-0 sm:justify-center w-full sm:flex sm:flex-wrap"
			>
				{#each data.groups! as group}
					<GroupSelfie group={group.groups} groupMembers={group.group_members} />
				{/each}
			</div>
		{/if}
	</div>
</div>
