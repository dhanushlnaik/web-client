<script>
	import { page } from '$app/stores';
	import EventCard from '$lib/components/Feed/EventCard.svelte';
	import AddEventButton from '$lib/components/Feed/AddEventButton.svelte';
</script>

{#each $page.data.posts as post}
	<EventCard data={post} />
{/each}

<AddEventButton />
