<script lang="ts">
	export let data;
	const { title, description, date, content } = data;
</script>

<article class="space-y-6">
	<h1 class="h1">{title}</h1>
	<h2 class="text-xs uppercase">{description}</h2>
	{#if date}
		<p>{date}</p>
	{/if}
	<svelte:component this={content} />
</article>
