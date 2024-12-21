<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	let { form } = $props();

	let inviteCode = $state('');
	$effect(() => {
		if (browser) {
			if (form?.success) {
				goto('/profile');
			}
		}
	});
</script>

<form
	method="POST"
	use:enhance
	class="h-screen p-10 flex flex-col w-full justify-center items-center"
>
	<div class="flex gap-5">
		<input
			class="border-2"
			name="inviteCode"
			type="text"
			bind:value={inviteCode}
			placeholder="Invite Code:"
		/>
		<button type="submit" class="rounded-xl px-2 border-2 hover:bg-sky-300 hover:text-white"
			>Join group</button
		>
	</div>
</form>
