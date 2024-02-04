<script lang="ts">
	import Geolocation from 'svelte-geolocation';
	let coords: [number, number] = [0, 0];
	import Map from '$lib/components/Map/Map.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	// export let data: PageData;
	// $: ({ props } = data);
	// $: console.log(props);
</script>

<!-- <Geolocation getPosition bind:coords />
<div class="flex flex-col gap-5 justify-center items-center text-3xl">
	<span>Latitude: {coords[1]}</span>
	<span>Longitude: {coords[0]}</span>
</div>
<AddEvent /> -->
<Map data={$page.data} />
