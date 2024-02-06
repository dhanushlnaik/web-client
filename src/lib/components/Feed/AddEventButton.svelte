<script>
    import { Plus } from 'lucide-svelte';
    import Button from '../ui/button/button.svelte';
    import * as Dialog from '$lib/components/ui/dialog';
    import Input from '../ui/input/input.svelte';
    import * as Select from '$lib/components/ui/select';
    import { db } from '$lib/server/db';

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

    async function handleSubmit() {
        const category = (document.querySelector('[name=category]') as HTMLInputElement)?.value;
        const description = (document.querySelector('[name=description]') as HTMLInputElement)?.value;
        const latitude = parseFloat((document.querySelector('[name=latitude]') as HTMLInputElement)?.value || '0');
        const longitude = parseFloat((document.querySelector('[name=longitude]') as HTMLInputElement)?.value || '0');
        const date = (document.querySelector('[name=date]') as HTMLInputElement)?.value;
        const time = (document.querySelector('[name=time]') as HTMLInputElement)?.value;
        const image = (document.querySelector('[name=image]') as HTMLInputElement)?.files[0];

        try {
            const formData = new FormData();
            formData.append('category', category || '');
            formData.append('description', description || '');
            formData.append('latitude', latitude.toString());
            formData.append('longitude', longitude.toString());
            formData.append('date', date || '');
            formData.append('time', time || '');
            if (image) {
                formData.append('image', image, image.name);
            }

            await db.post.create({
                data: {
                    category,
                    description,
                    latitude,
                    longitude,
                    date,
                    time,
                    image: image ? image.name : null
                }
            });
            // Post created successfully
            // You can handle any success logic here
        } catch (error) {
            // Handle error
            console.error('Error creating post:', error);
        }
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
            <Input type="text" placeholder="Description" name="description" />
            <p class="text-red-500">Drop a pin on map to auto fetch</p>
            <div class="flex gap-5">
                <Input type="text" bind:value={lng} name="longitude" />
                <Input type="text" bind:value={lat} name="latitude" />
            </div>
            <Input type="text" placeholder="Date" name="date" />
            <Input type="text" placeholder="Time" name="time" />
            <Input type="file" placeholder="Image" name="image" />
            <button type="submit" on:click={handleSubmit}>Submit</button>
        </Dialog.Content>
    </Dialog.Root>
</div>
