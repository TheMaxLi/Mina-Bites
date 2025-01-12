<script lang="ts">
	import type { GetGroupGroupMember } from '$lib/server/db/groups';

	const { groupMembers }: { groupMembers: GetGroupGroupMember[] } = $props();

	let centerMember = groupMembers[0];
	let surroundingMembers = groupMembers.slice(1, 5);
	let hasMore = groupMembers.length > 5;
</script>

<div class="relative w-48 h-48 flex items-center justify-center">
	<div class="absolute z-10">
		<img
			src={centerMember.image}
			alt="{centerMember.name}'s profile image"
			class="w-32 h-32 rounded-full border-4 border-white shadow-lg"
		/>
	</div>

	{#if surroundingMembers[0]}
		<div class="absolute w-24 h-24 top-[0px] left-[0px]">
			<img
				src={surroundingMembers[0].image}
				alt="{surroundingMembers[0].name}'s profile image"
				class="w-full h-full rounded-full border-2 border-white shadow-xl"
			/>
		</div>
	{/if}
	{#if surroundingMembers[1]}
		<div class="absolute w-20 h-20 top-[0px] right-[10px]">
			<img
				src={surroundingMembers[1].image}
				alt="{surroundingMembers[1].name}'s profile image"
				class="w-full h-full rounded-full border-2 border-white shadow-xl"
			/>
		</div>
	{/if}
	{#if surroundingMembers[2]}
		<div class="absolute w-16 h-16 bottom-[25px] left-[3px]">
			<img
				src={surroundingMembers[2].image}
				alt="{surroundingMembers[2].name}'s profile image"
				class="w-full h-full rounded-full border-2 border-white shadow-xl"
			/>
		</div>
	{/if}

	{#if hasMore}
		<p
			class="absolute bottom-2 font-semibold right-1 w-16 h-16 bg-gray-200 rounded-full border-2 border-white shadow-xl flex items-center justify-center"
		>
			{Math.min(groupMembers.length - 5, 99)}+
		</p>
	{/if}
</div>
