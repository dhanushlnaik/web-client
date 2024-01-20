<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Geolocation from 'svelte-geolocation';
	let coords: [number, number] = [0, 0];
</script>

<Geolocation getPosition bind:coords />
<p class="flex flex-col gap-5">
	<span>{coords[0]}</span>
	<span>{coords[1]}</span>
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<img src={$page.data.session.user.image} alt="avatar" class="rounded-full" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button on:click={() => signIn('google')}>Sign In with Google</button>
	{/if}
</p>
