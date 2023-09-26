<script lang="ts">
	export let src: string;
	export let type = 'video/mp4';
</script>

<section class="relative h-[80vh] shrink-0 flex flex-col items-center justify-center">
	<video
		class="absolute w-full h-full object-cover -z-10"
		muted
		autoplay
		loop
		playsinline
		disablepictureinpicture
		poster="/video/puck_poster.jpg"
	>
		<source {src} {type} />
	</video>

	<div class="variant-glass-secondary text-center space-y-4 m-6 p-6 lg:w-1/2 rounded-lg">
		<slot />
	</div>
</section>
