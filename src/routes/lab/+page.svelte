<script lang="ts">
	import SpeakerWaveIcon from '$components/icons/speaker_wave_icon.svelte';
	import { browser } from '$app/environment';

	const playAudio = () => {
		if (browser) {
			const audio = new Audio('/audio/zigouigoui.wav');
			audio.play();
			audio.addEventListener('ended', () => {
				playing = false;
			});
			playing = true;
		}
	};

	let playing = false;
	export let data;
</script>

<div class="flex space-x-4 mb-10">
	<div class="h1">Zigouigoui</div>
	{#if browser}
		<button
			class="btn btn-icon variant-filled-primary"
			on:click={() => playAudio()}
			disabled={playing}
		>
			<SpeakerWaveIcon />
		</button>
	{/if}
</div>

<ul class="space-y-6">
	{#each data.sketches as sketch}
		<li>
			<a href={sketch.path}>
				<h3 class="h3">
					{sketch.meta.title}
				</h3>
			</a>
			Published {sketch.meta.date}
		</li>
	{/each}
</ul>
