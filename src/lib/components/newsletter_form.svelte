<script lang="ts">
	import { page } from '$app/stores';
	import { enhance, applyAction } from '$app/forms';
	import EnvelopeIcon from '$components/icons/envelope_icon.svelte';

	let processing = false;
</script>

<div class="container mx-auto lg:w-1/2 mb-16 text-center lg:text-left">
	<hr class="mx-6 lg:mx-0 my-10" />

	<section class="card variant-filled-tertiary mx-4 lg:mx-0 p-4">
		<div class="h3">Subscribe to our newsletter,</div>
		and get fresh updates on our work.

		{#if !$page.form?.success}
			<form
				class="xl:w-2/3 pt-4"
				action="/?subscribe"
				method="POST"
				use:enhance={() => {
					processing = true;

					return async ({ result, update }) => {
						processing = false;

						await applyAction(result);
						update();
					};
				}}
			>
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim variant-filled-secondary">
						<EnvelopeIcon />
					</div>

					<input
						type="email"
						name="EMAIL"
						required
						disabled={processing}
						placeholder="Enter your email address"
					/>
					<button type="submit" class="variant-filled-surface">Send</button>
				</div>

				<div aria-hidden="true" style="position: absolute; left: -5000px;">
					<input type="text" name="b_ed56fe7bc3a089b12e7b5622b_ec155a6c0c" tabindex="-1" value="" />
				</div>
			</form>

			{#if processing}
				<p class="text-neutral-400">...</p>
			{/if}
		{/if}

		{#if $page.form && !$page.form.success}
			<p class="text-error-400">Oops. something went wrong. Try again later.</p>
		{/if}
		{#if $page.form?.success}
			<p class="text-success-400">Done! Thank you, we won't bother you that much.</p>
		{/if}
	</section>
</div>
