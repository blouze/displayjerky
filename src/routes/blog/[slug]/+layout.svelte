<script lang="ts">
	import Breadcrumbs from '$components/breadcrumbs.svelte';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto lg:w-1/2 px-4 pt-8 lg:pt-32">
	<Breadcrumbs class="mb-8" />
	<!-- <TableOfContents class="sticky top-10"  /> -->
	<div use:tocCrawler={{ mode: 'generate' }}>
		<slot />
	</div>
</div>
