<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import OnBoardingPage from './onBoardingPage.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';

	let { form } = $props();

	let stepCount = $state(1);
	let groupName = $state('');
	let interests = $state<string[]>([]);
	let interestOptions = $state([
		'American',
		'Italian',
		'Mexican',
		'Japanese',
		'Chinese',
		'Indian',
		'Pizza',
		'Burgers',
		'Sushi',
		'Vegetarian'
	]);

	$effect(() => {
		if (browser) {
			if (form?.success) {
				goto('/profile');
			}
		}
	});
</script>

<form method="POST" use:enhance>
	{#if stepCount === 1}
		<OnBoardingPage question="What is your group name?" {stepCount}>
			{#snippet headerMessage()}
				<div class="flex w-full justify-between">
					<ArrowLeft color="" />
					<p>Step {stepCount}</p>
					<ArrowRight class="cursor-pointer" onclick={() => stepCount++} />
				</div>
			{/snippet}
			{#snippet valueBox()}
				<input class="border w-full py-2 text-center text-xl" type="text" bind:value={groupName} />
			{/snippet}
		</OnBoardingPage>
	{/if}

	<!-- {#if stepCount === 2}
		<OnBoardingPage question="Any interest?" stepCount="1">
			{#snippet headerMessage()}
			<div class="flex w-full justify-between">
				<ArrowLeft class='cursor-pointer'  onclick={() => stepCount--} />
					<p>Step {stepCount}</p>
					<ArrowRight class='cursor-pointer'  onclick={() => stepCount++} />pointer
						</div>
						{/snippet}
						{#snippet valueBox()}
						<div class="flex flex-wrap gap-4">
							{#each interestOptions as category}
							<label class="cursor-pointer">
								<input type="checkbox" class="hidden" bind:group={interests} value={category} />
								<span
								class="inline-flex items-center px-4 py-2 rounded-full border-2 cursor-pointer transition
								{interests.includes(category) ? 'bg-sky-300' : ''}"
								>
								{category}
								</span>
								</label>
								{/each}
								</div>
								{/snippet}
								</OnBoardingPage>
								{/if} -->

	{#if stepCount === 2}
		<OnBoardingPage question="" {stepCount}>
			{#snippet headerMessage()}
				<div class="flex w-full justify-between">
					<ArrowLeft class="cursor-pointer" onclick={() => stepCount--} />
					<p>Step {stepCount}</p>
					<button type="submit">Done</button>
				</div>
			{/snippet}
			{#snippet valueBox()}
				HELLO {groupName} !!!
			{/snippet}
		</OnBoardingPage>
	{/if}
	<div class="hidden">
		<input name="groupName" type="text" bind:value={groupName} />
	</div>
</form>
