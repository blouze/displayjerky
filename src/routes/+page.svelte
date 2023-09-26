<script>
	import { fade } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';

	import DiscordIcon from '$components/icons/discord_icon.svelte';
	import PostCard from '$components/post_card.svelte';
	import SketchCard from '$components/sketch_card.svelte';
	import VideoHero from '$components/video_hero.svelte';

	// import Hero from '$components/hero.svelte';
	export let data;
</script>

<VideoHero src="/video/puck_cut_sm.mp4">
	<p class="h1 text-6xl">Quit playing games.</p>
	<p>Or&nbsp;don't. We're&nbsp;a&nbsp;game&nbsp;studio, not&nbsp;a&nbsp;cop.</p>
	<a
		href="https://discord.gg/36GnR2bp9F"
		target="_blank"
		rel="noreferrer"
		class="btn variant-filled-tertiary w-full"
	>
		<DiscordIcon />
		<span class="px-1">Join us on Discord </span>
	</a>
</VideoHero>

<div
	in:fade={{ duration: 300, easing: quadIn, delay: 400 }}
	out:fade={{ duration: 300, easing: quadOut }}
>
	<div class="container mx-auto lg:w-1/2">
		<hr class="mx-6 lg:mx-0 my-10" />

		<section class="grid lg:grid-cols-2 gap-6 mx-4 lg:mx-0">
			<a href={data.latestPost.path}>
				<PostCard post={data.latestPost} />
			</a>
			<a href={data.latestSketch.path}>
				<SketchCard sketch={data.latestSketch} />
			</a>
		</section>
	</div>
</div>
