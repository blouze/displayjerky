<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="flex flex-col h-full pb-6 items-center">
	<div class="w-4/5 space-y-6 text-center">
		<img class="w-full" {src} {alt} />
		<div class="text-sm">
			<i>
				<slot />
			</i>
		</div>
	</div>
</div>
