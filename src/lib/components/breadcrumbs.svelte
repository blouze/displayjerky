<script lang="ts">
	import HomeIcon from '$components/icons/home_icon.svelte';
	let className = '';
	export { className as class };
</script>

<div class={className}>
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/"><HomeIcon /></a></li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="/blog">Blog</a></li>
	</ol>
</div>
