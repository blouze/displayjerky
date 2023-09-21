<script lang="ts">
	import { page } from '$app/stores';
	import { enhance, applyAction } from '$app/forms';

	let processing = false;
</script>

{#if $page.form?.success}
	<p class="text-success-400">Done! Thank you, we won't bother you that much.</p>
{:else}
	<form
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
		<input
			type="email"
			name="EMAIL"
			required
			disabled={processing}
			placeholder="Enter your email address"
		/>
		<div aria-hidden="true" style="position: absolute; left: -5000px;">
			<input type="text" name="b_ed56fe7bc3a089b12e7b5622b_ec155a6c0c" tabindex="-1" value="" />
		</div>
		<button type="submit" class="btn btn-primary">Subscribe</button>
	</form>

	{#if processing}
		<p class="text-neutral-400">...</p>
	{/if}

	{#if $page.form && !$page.form.success}
		<p class="text-error-400">Oops. something went wrong. Try again later.</p>
	{/if}
{/if}
