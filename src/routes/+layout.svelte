<script lang="ts">
	import '../app.postcss';
	import '../styles/animations.scss';
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch
	} from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import Navigation from '$components/navigation.svelte';
	import Footer from '$components/footer.svelte';
	import Hamburger from '$components/hamburger.svelte';
	import Socials from '$components/socials.svelte';
	import SidebarNavigation from '$components/sidebar_navigation.svelte';

	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { page } from '$app/stores';

	import { fade } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';

	export let data;
	$: ({ pathname } = data);

	initializeStores();

	const drawerStore = getDrawerStore();

	afterNavigate(() => {
		disableScrollHandling();
		setTimeout(() => {
			const el = document.getElementById('page');
			if (el !== null) el.scrollTop = 0;
		}, 300);
	});
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="w-0 lg:w-64">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase">
						<img src="/img/logo_white.png" alt="DisplayJerky" class="hidden dark:block h-10" />
						<img src="/img/logo_black.png" alt="DisplayJerky" class="block dark:hidden h-10" />
					</strong>
				</a>
			</svelte:fragment>
			<Navigation />
			<svelte:fragment slot="trail">
				<Hamburger on:click={() => drawerStore.open({})} />
				<div class="hidden lg:flex items-baseline space-x-4">
					<Socials />
					<LightSwitch />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<Drawer>
		<SidebarNavigation>
			<Socials />
		</SidebarNavigation>
	</Drawer>
	<!-- Page Route Content -->
	{#key pathname}
		<div
			class="min-h-full"
			in:fade|local={{ duration: 300, easing: quadIn, delay: 400 }}
			out:fade|local={{ duration: 300, easing: quadOut }}
		>
			<slot />
		</div>
	{/key}
	<Footer />
</AppShell>
