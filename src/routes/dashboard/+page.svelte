<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	const { data } = $props();
	if (browser && !page.data.isAuthenticated) {
		goto('/', { replaceState: true });
	}
</script>

<div>HOMEEEE</div>
