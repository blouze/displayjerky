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
	import NewsletterForm from '$components/newsletter_form.svelte';
	import Socials from '$components/socials.svelte';
	import SidebarNavigation from '$components/sidebar_navigation.svelte';
	import Analytics from '$components/analytics.svelte';

	import { afterNavigate, disableScrollHandling } from '$app/navigation';

	import { fade } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';

	import '@beyonk/gdpr-cookie-consent-banner/style.css';
	import { Banner as GdprBanner } from '@beyonk/gdpr-cookie-consent-banner';

	export let data;
	$: ({ pathname } = data);

	initializeStores();

	let gdprBanner: GdprBanner;
	let cookie_consent = false;
	const initAnalytics = () => {
		//
		// gdprBanner.show();
		cookie_consent = true;
	};

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
<AppShell slotSidebarLeft="w-0 lg:w-64" regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar regionRowMain="container mx-auto">
			<svelte:fragment slot="lead">
				<a href="/">
					<img src="/img/logo_white.png" alt="DisplayJerky" class="hidden dark:block h-10" />
					<img src="/img/logo_black.png" alt="DisplayJerky" class="block dark:hidden h-10" />
				</a>
			</svelte:fragment>
			<Navigation />
			<svelte:fragment slot="trail">
				<Hamburger on:click={() => drawerStore.open({})} />
				<div class="hidden lg:flex items-center space-x-6">
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
			in:fade={{ duration: 300, easing: quadIn, delay: 400 }}
			out:fade={{ duration: 300, easing: quadOut }}
		>
			<slot />
		</div>
	{/key}

	<NewsletterForm />

	<Footer on:privacy={gdprBanner.show} />
</AppShell>

<GdprBanner
	cookieName="gdpr"
	bind:this={gdprBanner}
	on:analytics={initAnalytics}
	showEditIcon={false}
/>

{#if cookie_consent}
	<Analytics />
{/if}

<svelte:head>
	<link
		rel="preload"
		href="/fonts/Mukta-Regular.ttf"
		as="font"
		type="font/ttf"
		crossorigin="true"
	/>
	<link
		rel="preload"
		href="/fonts/PatuaOne-Regular.ttf"
		as="font"
		type="font/ttf"
		crossorigin="true"
	/>
</svelte:head>
