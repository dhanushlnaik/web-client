<script>
	import { Plus } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import Input from '../ui/input/input.svelte';
	import * as Select from '$lib/components/ui/select';
	import { Content } from '../ui/card';
	const category = [
		{ value: 'accident', label: 'Accident' },
		{ value: 'moderateTraffic', label: 'Moderate Traffic' },
		{ value: 'heavyTraffic', label: 'Heavy Traffic' },
		{ value: 'roadClosed', label: 'Road Closed' },
		{ value: 'others', label: 'Others' }
	];
	let lng = 0;
	let lat = 0;
	if (typeof window !== 'undefined') {
		lng = parseFloat(window.localStorage.getItem('lng') || '0');
		lat = parseFloat(window.localStorage.getItem('lat') || '0');
	}
</script>

<div class="fixed bottom-[2rem] right-[2rem]">
	<Dialog.Root>
		<Dialog.Trigger><Button class="text-one-500"><Plus />Add Event</Button></Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Title>Add a new Event</Dialog.Title>
			<Select.Root portal={null}>
				<Select.Trigger class="w-full">
					<Select.Value placeholder="Select a category" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each category as cat}
							<Select.Item value={cat.value} label={cat.label}>{cat.label}</Select.Item>
						{/each}
					</Select.Group>
				</Select.Content>
				<Select.Input name="category" />
			</Select.Root>
			<Input type="text" placeholder="Description" />
			<p class="text-red-500">Drop a pin on map to auto fetch</p>
			<div class="flex gap-5">
				<Input type="text" bind:value={lng} />
				<Input type="text" bind:value={lat} />
			</div>
			<Input type="text" placeholder="Date" />
			<Input type="text" placeholder="Time" />
			<Input type="file" placeholder="Image" />
			<button type="submit">Submit</button>
		</Dialog.Content>
	</Dialog.Root>
</div>
