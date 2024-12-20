<script lang="ts">
	import type { GetGroupGroupMember } from '$lib/server/db/groups';
	import type { Group } from '$lib/types';
	import SelfieImage from './SelfieImage.svelte';

	const { group, groupMembers }: { group: Group; groupMembers: GetGroupGroupMember[] | null } =
		$props();

	let testMembers = [...groupMembers!, ...groupMembers!, ...groupMembers!];

	for (let i = 0; i < 20; i++) {
		testMembers.push(...groupMembers!);
	}
</script>

<div class="flex flex-col">
	<div>
		<SelfieImage groupMembers={testMembers} />
	</div>
	<p>
		{group.name}
	</p>
</div>
