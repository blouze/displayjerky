<script lang="ts">
	import Hero from '$lib/components/hero.svelte';

	export let data;
	const { title, description, date, content } = data;
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="mt-16 w-1/2">
		<article class="space-y-8">
			<h1 class="h1">{title}</h1>
			{#if date}
				<p>{date}</p>
			{/if}
			<svelte:component this={content} />
		</article>
	</div>
</div>
