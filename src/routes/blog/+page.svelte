<script>
	export let data;
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="mt-16 mx-6 lg:w-1/2 space-y-6">
		<h1 class="h1">Read</h1>

		<ul class="space-y-6">
			{#each data.posts as post}
				<li>
					<a href={post.path}>
						<h3 class="h3">
							{post.meta.title}
						</h3>
					</a>
					Published {post.meta.date}
				</li>
			{/each}
		</ul>
	</div>
</div>
