<script lang="ts">
	import SearchInput from './SearchInput.svelte';

	let menuOpen = $state(true);
	let inputValue = $state('');

	const menuItems = [
		'About',
		'Base',
		'Blog',
		'Contact',
		'Custom',
		'Support',
		'Tools',
		'Boats',
		'Cars',
		'Bikes',
		'Sheds',
		'Billygoats',
		'Zebras',
		'Tennis Shoes',
		'New Zealand'
	];
	let filteredItems = $state<any[]>([]);

	const handleInput = () => {
		return (filteredItems = menuItems.filter((item) =>
			item.toLowerCase().match(inputValue.toLowerCase())
		));
	};
</script>

<section class="relative inline-block">
	<button onclick={() => (menuOpen = !menuOpen)}>{menuOpen ? 'Close Menu' : 'Open Menu'}</button>

	<div class="{menuOpen ? '' : 'hidden'} absolute min-w-56 max-w-28 border z-10 bottom-16 -left-4">
		<SearchInput bind:inputValue oninput={handleInput} />
		<div class="max-h-96 overflow-y-scroll">
			{#if filteredItems.length > 0}
				{#each filteredItems as item}
					<img src="https://i.pinimg.com/736x/17/8c/c1/178cc1a3453979979e3d1afd0c89dd9b.jpg" />
				{/each}
			{:else}
				{#each menuItems as item}
					<img src="https://i.pinimg.com/736x/17/8c/c1/178cc1a3453979979e3d1afd0c89dd9b.jpg" />
				{/each}
			{/if}
		</div>
	</div>
</section>
