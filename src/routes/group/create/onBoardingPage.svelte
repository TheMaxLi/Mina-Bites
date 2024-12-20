<script lang="ts">
	import { fade } from 'svelte/transition';

	let { stepCount, headerMessage, valueBox, question } = $props();
</script>

<div class="flex flex-col justify-between items-center h-screen w-full p-14">
	<div transition:fade class="flex flex-col justify-between items-center h-screen w-full">
		<div class="flex flex-col items-center w-full">
			{#if headerMessage}
				{@render headerMessage()}
			{/if}
		</div>
		<div class="flex flex-col items-center w-full gap-5">
			<div class="text-xl">{question}</div>
			{@render valueBox()}
		</div>
	</div>
</div>
