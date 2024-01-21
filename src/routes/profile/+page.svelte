<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Check } from 'lucide-svelte';
	let user = $page.data.user;
	let name = user.name;
	let email = user.email;
</script>

<div class="flex justify-center flex-col items-center h-[75dvh]">
	<Card.Root class="md:w-[30rem] w-[95vw]">
		<Card.Header>
			<Card.Title>Edit Profile</Card.Title>
		</Card.Header>
		<Card.Content>
			<form action="?/updateProfile" class="flex flex-col gap-5" method="POST">
				<span class="flex justify-center w-full">
					<img src={user.image} alt="" class="w-24 justify-center rounded-full" />
				</span>
				<span>
					<label for="name">Name</label>
					<Input name="name" bind:value={name} />
				</span>
				<span>
					<label for="name">Email</label>
					<Input name="email" bind:value={email} disabled />
				</span>
				{#if !user.kycVerified}
					<span class="flex text-red-600">
						Please complete your KYC to be able to add new events
					</span>
				{:else}
					<span class="flex text-green-600"><Check /> KYC Verified</span>
				{/if}

				<Button type="submit">Save</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
