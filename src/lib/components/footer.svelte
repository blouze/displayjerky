<script>
	import { links } from '$lib/store';

	let socials = [
		{ label: 'itch.io', icon: ItchIcon, href: 'https://displayjerky.itch.io' },
		{ label: 'discord', icon: DiscordIcon, href: 'https://discord.gg/36GnR2bp9F' },
		{ label: 'instagram', icon: InstagramIcon, href: 'https://www.instagram.com/display_jerky' },
		{ label: 'twitter', icon: TwitterIcon, href: 'https://twitter.com/DisplayJerky' }
	];

	import DiscordIcon from './icons/discord_icon.svelte';
	import InstagramIcon from './icons/instagram_icon.svelte';
	import ItchIcon from './icons/itch_icon.svelte';
	import TwitterIcon from './icons/twitter_icon.svelte';

	import Time from 'svelte-time';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<footer class="container mx-auto lg:w-3/5 variant-filled-surface text-center lg:text-left p-4">
	<div class="flex flex-col lg:flex-row lg:flex-wrap justify-between gap-8 m-2">
		<div>
			<p class="h5 pb-2">Links :</p>

			<ul>
				{#each $links as { href, label }}
					<li>
						<a {href}>
							<span data-hover={label}>{label}</span>
						</a>
					</li>
				{/each}
				<li>
					<button on:click={() => dispatch('privacy')}>
						<span data-hover="privacy settings">privacy settings</span>
					</button>
				</li>
			</ul>
		</div>

		<!-- Social links -->
		<div>
			<p class="h5 pb-2">Reach us :</p>
			<div class="flex flex-col lg:flex-row gap-2 w-2/3 mx-auto lg:mx-0">
				{#each socials as { label, icon, href }}
					<a
						{href}
						target="_blank"
						rel="noreferrer"
						class="btn btn-sm variant-filled-secondary flip-animate"
					>
						<svelte:component this={icon} />
						<span data-hover={label}>{label}</span>
					</a>
				{/each}
			</div>
		</div>
		<!--Copyright section-->
		<div class="lg:text-right w-full">
			DisplayJerky ©
			<Time timestamp={new Date()} format="YYYY" />
		</div>
	</div>
</footer>
