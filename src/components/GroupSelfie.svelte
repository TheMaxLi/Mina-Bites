<script lang="ts">
	import type { GetGroupGroupMember } from '$lib/server/db/groups';
	import type { Group } from '$lib/types';
	import SelfieImage from './SelfieImage.svelte';

	const { group, groupMembers }: { group: Group; groupMembers: GetGroupGroupMember[] | null } =
		$props();
</script>

<div class="flex flex-col">
	<div title={group.name}>
		<SelfieImage groupMembers={groupMembers ?? []} />
	</div>
	<p>
		{group.name}
	</p>
</div>
