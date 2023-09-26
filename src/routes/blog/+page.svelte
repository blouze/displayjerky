<script>
	import PostCard from '$components/post_card.svelte';
	export let data;
</script>

<div class="container h-[80vh] lg:w-1/2 mx-auto px-4 py-8 lg:py-32 space-y-6">
	<h1 class="h1">Read :</h1>
	<ul class="grid lg:grid-cols-2 gap-4">
		{#each data.posts as post}
			<li>
				<a href={post.path}>
					<PostCard {post} />
				</a>
			</li>
		{/each}
	</ul>
</div>
