<script lang="ts">
	let links = [
		{ label: 'games', href: '/games' },
		{ label: 'lab/gallery', href: '/lab' },
		{ label: 'blog', href: '/blog' },
		{ label: 'contact', href: '/contact' }
	];
</script>

<nav class="flex mx-6 space-x-4">
	{#each links as link}
		<li class="block flip-animate">
			<a href={link.href}>
				<span data-hover={link.label}>{link.label}</span>
			</a>
		</li>
	{/each}
</nav>
