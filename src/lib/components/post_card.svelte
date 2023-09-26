<script lang="ts">
	import Time from 'svelte-time';
	import type Post from '../../routes/blog/[slug]/+page.svelte';
	export let post: Post;
</script>

<div class="card">
	<div class="card-header text-right">
		<h3 class="h3 text-left">{post.meta.title}</h3>
		<Time timestamp={new Date(post.meta.date)} />
	</div>
	<section>
		{#if post.meta.img}
			<img class="w-full" src={post.meta.img} alt={post.meta.title} loading="lazy" />
		{/if}
	</section>
	<div class="card-footer" />
</div>
