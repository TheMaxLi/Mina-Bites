<script lang="ts">
	import { Settings } from 'lucide-svelte';
	import { getUserState } from '$lib/state.svelte';
	import GroupSelfie from '../../components/GroupSelfie.svelte';

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
</script>

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
		<p class="pl-5">Groups:</p>
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
