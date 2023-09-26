<script lang="ts">
	import { page } from '$app/stores';
	import { links } from '../store';
	import { LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!bg-primary-active-token' : '';
</script>

<div class="flex flex-col h-full">
	<div class="flex justify-between items-center p-4">
		<a href="/" on:click={() => drawerStore.close()} class="block">
			<img src="/img/logo_white.png" alt="DisplayJerky" class="hidden dark:block h-10" />
			<img src="/img/logo_black.png" alt="DisplayJerky" class="block dark:hidden h-10" />
		</a>
		<LightSwitch />
	</div>
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
