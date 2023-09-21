<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="flex flex-col h-full pb-6 items-center">
	<div class="mx-auto space-y-4 text-center">
		<img class="w-full rounded-lg" {src} {alt} loading="lazy" />
		<div class="text-xs uppercase">
			<slot />
		</div>
	</div>
</div>
