<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="flex flex-col h-full items-center pb-8">
	<div class="mx-auto space-y-6 text-center">
		<img class="w-full rounded-lg" {src} {alt} loading="lazy" />
		<div class="text-xs uppercase">
			<slot />
		</div>
	</div>
</div>
