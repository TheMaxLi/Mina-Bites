<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	const { data } = $props();
	if (browser && !data.isAuthenticated) {
		goto('/landing', { replaceState: true });
	}
</script>

<div>HOMEEEE</div>
