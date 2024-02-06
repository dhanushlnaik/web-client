<script lang="ts">
	import { page } from '$app/stores';
	import EventCard from '$lib/components/Feed/EventCard.svelte';
	import AddEventButton from '$lib/components/Feed/AddEventButton.svelte';
	import type { SuperValidated } from "sveltekit-superforms";
	export let form: SuperValidated<FormSchema>;
</script>



{#each $page.data.posts as post}
	<EventCard data={post} />
{/each}

<AddEventButton />
