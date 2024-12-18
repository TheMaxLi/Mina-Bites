<script lang="ts">
	import { Settings } from 'lucide-svelte';
	import { getUserState } from '$lib/state.svelte';
	import GroupSelfie from '../../components/groupSelfie.svelte';

	const user = getUserState();
	const { data } = $props();
	console.log(data.groups);
</script>

<div class="flex flex-col p-10 space-y-10">
	<div class="flex justify-between pb-10 border-b">
		<div class="flex flex-col space-y-4 items-center">
			<img class="rounded-full" src={user.image} alt={`${user.name}'s profile image'`} />
			<p>{user.name}</p>
		</div>
		<div class="flex justify-between items-start gap-4">
			<button>Edit profile</button>
			<Settings />
		</div>
	</div>
	<div>
		<p>Groups:</p>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
			{#if data.groups}
				{#each data.groups as group}
					<GroupSelfie group={group.groups} groupMembers={group.group_members} />
				{/each}
			{/if}
		</div>
	</div>
</div>
