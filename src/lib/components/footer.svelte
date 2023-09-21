<script>
	import NewsletterForm from './newsletter_form.svelte';

	import DiscordIcon from './icons/discord_icon.svelte';
	import InstagramIcon from './icons/instagram_icon.svelte';
	import ItchIcon from './icons/itch_icon.svelte';
	import TwitterIcon from './icons/twitter_icon.svelte';
	// import AtSymbolIcon from './icons/at_symbol_icon.svelte';

	let links = [
		{ label: 'itch.io', icon: ItchIcon, href: 'https://displayjerky.itch.io' },
		{ label: 'discord', icon: DiscordIcon, href: 'https://discord.gg/36GnR2bp9F' },
		{ label: 'instagram', icon: InstagramIcon, href: 'https://www.instagram.com/display_jerky' },
		{ label: 'twitter', icon: TwitterIcon, href: 'https://twitter.com/DisplayJerky' }
	];
</script>

<footer class="text-center mt-auto">
	<div class="container h-full mx-auto lg:flex justify-between">
		<div class="flex flex-col">
			<!--Sign-up form section-->
			<div class="px-6 pt-6">
				<NewsletterForm />
			</div>

			<!-- Social links -->
			<div class="flex flex-col lg:flex-row lg:space-x-2">
				{#each links as { label, icon, href }}
					<a {href} target="_blank" rel="noreferrer" class="flex space-x-4 py-1">
						<div class="btn btn-sm variant-ghost-surface">
							<svelte:component this={icon} />
							<span class="self-center">{label}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!--Copyright section-->
		<div class="p-4 text-center">© 2023 © DisplayJerky</div>
	</div>
</footer>
