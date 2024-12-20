<script lang="ts">
	import { Settings, PlusCircle } from 'lucide-svelte';
	import { getUserState } from '$lib/state.svelte';
	import GroupSelfie from '../../components/GroupSelfie.svelte';
	import { handleClickOutside } from '$lib/clickOutside';

	const user = getUserState();
	const { data } = $props();

	let testData = [
		...data.groups!,
		...data.groups!,
		...data.groups!,
		...data.groups!,
		...data.groups!,
		...data.groups!,
		...data.groups!,
		...data.groups!,
		...data.groups!
	];

	let showMenu = $state<boolean>(false);

	function toggleMenu() {
		showMenu = !showMenu;
	}

	$effect(() => console.log(showMenu));
</script>

<svelte:window
	on:click={(e) =>
		handleClickOutside(e, '.plus-menu-container', () => (showMenu ? (showMenu = false) : showMenu))}
/>

<div class="flex flex-col space-y-10">
	<div class="flex justify-between p-10 border-b">
		<div class="flex flex-col space-y-4 items-center">
			<img class="rounded-full" src={user.image} alt={`${user.name}'s profile image'`} />
			<p>{user.name}</p>
		</div>
		<div class="flex justify-between items-start gap-4">
			<button>Edit profile</button>
			<Settings />
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
						<a href="/" class="px-4 py-2 hover:bg-gray-100 rounded text-left">Create Group</a>
						<a href="/" class="px-4 py-2 hover:bg-gray-100 rounded text-left">Join Group</a>
					</div>
				{/if}
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4 px-5 md:px-0 sm:justify-center w-full sm:flex sm:flex-wrap">
			<!-- {#if data.groups}
				{#each data.groups as group}
					<GroupSelfie group={group.groups} groupMembers={group.group_members} />
				{/each}
			{/if} -->
			{#if data.groups}
				{#each testData as group}
					<GroupSelfie group={group.groups} groupMembers={group.group_members} />
				{/each}
			{/if}
		</div>
	</div>
</div>
