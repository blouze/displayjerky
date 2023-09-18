<script lang="ts">
	import { links } from '../store';
</script>

<nav class="hidden lg:flex justify-end">
	<ul class="flex mx-6 space-x-6">
		{#each $links as link}
			<li class="block flip-animate">
				<a href={link.href}>
					<span data-hover={link.label}>{link.label}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
