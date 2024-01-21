<script lang="ts">
	import { onMount } from 'svelte';
	import { Map, MapStyle, config, Marker, Popup } from '@maptiler/sdk';
	import '@maptiler/sdk/dist/maptiler-sdk.css';

	export let data;
	import Geolocation from 'svelte-geolocation';
	let coords: [number, number] = [13.1809592, 74.9358458];
	let testCoords: Array<{ longitude: number; latitude: number }> = [
		{
			longitude: 139.7525,
			latitude: 35.6846
		},
		{
			longitude: 74.686156,
			latitude: 13.633306
		}
	];
	let map: any;
	let mapContainer: any;
	let allData = [...testCoords, ...data.posts];
	config.apiKey = 'ofcoyTTLUZ3R3CZu3MXa';

	onMount(() => {
		// const initialState = { lng: coords[1], lat: coords[0], zoom: 14 };
		map = new Map({
			container: mapContainer,
			style: MapStyle.STREETS,
			center: [coords[1], coords[0]],
			zoom: 17
		});
		map.on('click', (e: any) => {
			const threshold = 0.0001;
			const exists = allData.find((coord) => {
				const dx = coord.longitude - e.lngLat.lng;
				const dy = coord.latitude - e.lngLat.lat;
				return Math.sqrt(dx * dx + dy * dy) < threshold;
			});
			if (!exists) {
				allData.push({
					longitude: e.lngLat.lng,
					latitude: e.lngLat.lat
				});
				allData = allData;
			}
		});

		map.on('click', 'places', function (e: any) {
			var coordinates = e.features[0].geometry.coordinates.slice();
			var description = e.features[0].properties.description;
			while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
				coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
			}

			new Popup().setLngLat(coordinates).setHTML(description).addTo(map);
		});

		map.on('load', function () {
			map.addSource('places', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: allData.map((coord) => {
						return {
							type: 'Feature',
							properties: {
								description: '<p class="text-3xl">Chipi Chipi Chap Chapa</p>'
							},
							geometry: {
								coordinates: [coord.longitude, coord.latitude],
								type: 'Point'
							},
							id: 0
						};
					})
				}
			});
			map.addLayer({
				id: 'places',
				type: 'circle',
				source: 'places',
				paint: {
					'circle-color': '#FF0000',
					'circle-radius': 10,
					'circle-stroke-width': 2,
					'circle-stroke-color': '#ffffff'
				}
			});
		});
	});

	$: if (allData && map && map.isStyleLoaded()) {
		if (map.getSource('places')) {
			map.getSource('places').setData({
				type: 'FeatureCollection',
				features: allData.map((coord) => {
					return {
						type: 'Feature',
						properties: {
							description: '<p class="text-3xl">Chipi Chipi Chap Chapa</p>'
						},
						geometry: {
							coordinates: [coord.longitude, coord.latitude],
							type: 'Point'
						},
						id: 0
					};
				})
			});
		} else {
			map.addSource('places', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: allData.map((coord) => {
						return {
							type: 'Feature',
							properties: {
								description: '<p class="text-3xl">Chipi Chipi Chap Chapa</p>'
							},
							geometry: {
								coordinates: [coord.longitude, coord.latitude],
								type: 'Point'
							},
							id: 0
						};
					})
				}
			});
			map.addLayer({
				id: 'places',
				type: 'circle',
				source: 'places',
				paint: {
					'circle-color': '#FF0000',
					'circle-radius': 10,
					'circle-stroke-width': 2,
					'circle-stroke-color': '#ffffff'
				}
			});
		}
	}
</script>

<Geolocation getPosition bind:coords />
<div class="relative w-full h-screen">
	<div class="absolute w-full h-full" bind:this={mapContainer}></div>
</div>
