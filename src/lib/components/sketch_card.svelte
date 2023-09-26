<script lang="ts">
	import type Sketch from '../../routes/lab/[slug]/+page.svelte';
	export let sketch: Sketch;
</script>

<div class="card">
	<div class="card-header">
		<h3 class="h3 pb-4">{sketch.meta.title}</h3>
	</div>
</div>
