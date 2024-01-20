<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
</script>

{#if $page.data.session}
	<Popover.Root>
		<Popover.Trigger>
			{#if $page.data.session.user?.image}
				<img src={$page.data.session.user?.image} alt="avatar" class="w-12 rounded-full" />
			{:else}
				<Button>You</Button>
			{/if}
		</Popover.Trigger>
		<Popover.Content class="mt-2">
			<div class="flex flex-col gap-5">
				<Button>Edit Profile</Button>
				<Button on:click={() => signOut()}>Sign out</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{:else}
	<!-- <button on:click={() => signIn('google')}>Sign In with Google</button> -->
	<Button on:click={() => signIn('google')}>Login</Button>
{/if}
