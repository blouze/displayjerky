<script lang="ts">
	export let src: string;
	export let type = 'video/mp4';
</script>

<div class="flex flex-col h-full pb-6 items-center">
	<div class="w-4/5 space-y-6 text-center">
		<video width="100%" autoplay loop muted>
			<source {src} {type} />
		</video>

		<div class="text-sm">
			<i>
				<slot />
			</i>
		</div>
	</div>
</div>
