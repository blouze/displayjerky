<script lang="ts">
	import DiscordIcon from './icons/discord_icon.svelte';
	import InstagramIcon from './icons/instagram_icon.svelte';
	import ItchIcon from './icons/itch_icon.svelte';
	import TwitterIcon from './icons/twitter_icon.svelte';

	let links = [
		{ label: 'itch.io', icon: ItchIcon, href: 'https://displayjerky.itch.io' },
		{ label: 'discord', icon: DiscordIcon, href: 'https://discord.gg/36GnR2bp9F' },
		{ label: 'instagram', icon: InstagramIcon, href: 'https://www.instagram.com/display_jerky' },
		{ label: 'twitter', icon: TwitterIcon, href: 'https://twitter.com/DisplayJerky' }
	];
</script>

<div class="flex flex-col lg:flex-row lg:space-x-2">
	{#each links as { label, icon, href }}
		<a {href} target="_blank" rel="noreferrer" class="flex space-x-4 py-1">
			<div class="btn-icon btn-icon-sm variant-ghost-surface">
				<svelte:component this={icon} />
			</div>
			<span class="lg:hidden self-center">{label}</span>
		</a>
	{/each}
</div>
