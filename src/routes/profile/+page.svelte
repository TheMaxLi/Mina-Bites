<script lang="ts">
	import { page } from '$app/state';

	const user = page.data.user;
	console.log(user);
</script>

<div class="text-4xl p-52">Wassap {user.name}</div>
