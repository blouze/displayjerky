<script lang="ts">
	export let src: string;
	export let type = 'video/mp4';
</script>

<div class="flex flex-col h-full pb-6 items-center">
	<div class="space-y-4 text-center">
		<video width="100%" autoplay loop muted class="rounded-lg">
			<source {src} {type} />
		</video>

		<div class="text-xs uppercase">
			<slot />
		</div>
	</div>
</div>
