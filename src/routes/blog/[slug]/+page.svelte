<script lang="ts">
	import Time from 'svelte-time';

	export let data;
	const { title, description, date, content } = data;
</script>

<article class="space-y-4 leading-normal">
	<h1 class="h1">{title}</h1>
	<div class="text-xs uppercase">{description}</div>
	{#if date}
		<div class="h6">
			<Time class="text-right" timestamp={new Date(date)} />
		</div>
	{/if}
	<svelte:component this={content} />
</article>
