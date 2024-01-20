<script lang="ts">
	import Geolocation from 'svelte-geolocation';
	let coords: [number, number] = [0, 0];
</script>

<Geolocation getPosition bind:coords />
<div class="flex flex-col gap-5 justify-center items-center text-3xl">
	<span>Latitude: {coords[1]}</span>
	<span>Longitude: {coords[0]}</span>
</div>
