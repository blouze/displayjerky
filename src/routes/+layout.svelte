<script lang="ts">
	import '../app.postcss';
	import '../styles/animations.scss';
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore
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

	initializeStores();

	const drawerStore = getDrawerStore();
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft=" w-0 lg:w-64">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase">
						<img src="/img/logo_white.png" alt="DisplayJerky" class="h-10" />
					</strong>
				</a>
			</svelte:fragment>
			<Navigation />
			<svelte:fragment slot="trail">
				<Hamburger on:click={() => drawerStore.open({})} />
				<div class="hidden lg:flex">
					<Socials />
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
	<slot />
	<Footer />
</AppShell>
