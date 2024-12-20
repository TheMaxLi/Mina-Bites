<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import GroupSelfie from '../../components/GroupSelfie.svelte';
	const { data } = $props();
	if (browser && !page.data.isAuthenticated) {
		goto('/', { replaceState: true });
	}
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

<div class="p-10">
	<div>HOMEEEE</div>
	<div class="flex overflow-x-scroll gap-5">
		{#each testData! as group}
			<GroupSelfie group={group.groups!} groupMembers={group.group_members} />
		{/each}
	</div>
</div>
