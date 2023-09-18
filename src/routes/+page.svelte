<script>
	// import Hero from '$components/hero.svelte';
</script>

<section class="relative h-[80vh] shrink-0 flex flex-col items-center justify-center">
	<video
		class="absolute w-full h-full object-cover -z-10 brightness-50 saturate-150"
		muted
		autoplay
		loop
		playsinline
		disablepictureinpicture
	>
		<source src="/video/puck_cut_sm.mp4" type="video/mp4" />
	</video>
	<div
		class="backdrop-blur-lg m-10 p-8 space-y-4 text-center border-2 rounded-2xl border-primary-800"
	>
		<p class="h1 text-6xl">Quit playing games.</p>
		<p>Or&nbsp;don't. We're&nbsp;a&nbsp;game&nbsp;studio, not&nbsp;a&nbsp;cop.</p>
		<button class="btn btn-primary variant-filled">Do something about it</button>
	</div>
</section>

<!-- <Hero>
	<p class="h1 text-8xl">DAMN!</p>
	<p>There are cats in the background for some reason.</p>
	<button class="btn btn-primary variant-filled">Do something about it</button>
</Hero> -->
