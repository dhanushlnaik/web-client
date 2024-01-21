<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { Smile } from 'lucide-svelte';
</script>

<div class="sm:flex hidden">
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
					<a href="/profile">
						<Button class="w-full">Edit Profile</Button>
					</a>
					<Button on:click={() => signOut()}>Sign out</Button>
				</div>
			</Popover.Content>
		</Popover.Root>
	{:else}
		<Button on:click={() => signIn('google')}>Login</Button>
	{/if}
</div>

<div class="flex sm:hidden">
	{#if $page.data.session}
		<Popover.Root>
			<Popover.Trigger>
				{#if $page.data.session.user?.image}
					<img src={$page.data.session.user?.image} alt="avatar" class="w-12 rounded-full" />
				{:else}
					<Smile color="white" size="40" />
				{/if}
			</Popover.Trigger>
			<Popover.Content class=" w-[10rem]">
				<div class="flex flex-col gap-5">
					<a href="/profile">
						<Button class="w-full">Edit Profile</Button>
					</a>
					<Button on:click={() => signOut()}>Sign out</Button>
				</div>
			</Popover.Content>
		</Popover.Root>
	{:else}
		<Button on:click={() => signIn('google')}>Login</Button>
	{/if}
</div>
