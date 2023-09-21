<script lang="ts">
	import Breadcrumbs from '$components/breadcrumbs.svelte';
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="variant-soft-surface lg:w-3/5 p-8 lg:p-16 leading-relaxed text-lg">
		<Breadcrumbs class="mb-8" />
		<slot />
	</div>
</div>
