<script lang="ts">
	import { page } from '$app/stores';
	import { links } from '../store';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!bg-primary-active-token' : '';
</script>

<div class="h-full flex flex-col justify-around p-6 space-y-4">
	<a href="/" on:click={() => drawerStore.close()} class="block">
		<img src="/img/logo_white.png" alt="DisplayJerky" class="h-10 m-4" />
	</a>
	<hr />
	<nav class="list-nav h-full">
		<ul>
			{#each $links as link}
				<li>
					<a class={classesActive(link.href)} href={link.href} on:click={() => drawerStore.close()}>
						<span data-hover={link.label}>{link.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<hr />
	<slot />
</div>
