<div class="hero min-h-full flex flex-col justify-around">
	<div class="hero-overlay" />
	<div class="hero-content text-center space-y-4 z-20">
		<slot />
	</div>
</div>

<style>
	.hero {
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(https://cataas.com/cat?filter=pixel);
	}
</style>
