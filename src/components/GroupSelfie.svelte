<script lang="ts">
	import type { GetGroupGroupMember } from '$lib/server/db/groups';
	import type { Group } from '$lib/types';

	const { group, groupMembers }: { group: Group; groupMembers: GetGroupGroupMember[] | null } =
		$props();
</script>

<div class="flex flex-col">
	<div>
		{#each groupMembers! as groupMember, id}
			<img
				class="rounded-full aspect-square"
				src={groupMember.image}
				alt={`${groupMember.name}'s profile image'`}
			/>
		{/each}
	</div>
	<p>
		{group.name}
	</p>
</div>
