<script>
	import AuthButton from '../Auth/AuthButton.svelte';
	import { Home } from 'lucide-svelte';
	import { NavItems } from '$lib/constants/const';
</script>

<div
	class="sm:flex hidden justify-evenly fixed w-full py-6 sm:px-8 px-2 h-[6rem] font-semibold bg-white items-center"
>
	<a href="/">
		<span class="flex items-center gap-x-2">
			<img src="/flc_logo_crop.png" alt="flc_Logo" class="md:h-16 h-12" />
			<h3 class="sm:text-2xl text-md font-bold">Finite Loop Club</h3>
		</span>
	</a>
	<ul class="flex space-x-5 text-xl font-bold">
		{#each NavItems as nav}
			<a href={nav.href}>
				<li>
					{nav.label}
				</li>
			</a>
		{/each}
	</ul>
	<AuthButton />
</div>

<div class="w-full sm:hidden flex">
	<div class="w-full h-[4rem] bg-two-700 flex items-center px-4 fixed top-0">
		<a href="/">
			<span class="flex items-center gap-x-2">
				<img src="/flc_logo_crop.png" alt="flc_Logo" class="md:h-16 h-12" />
				<h3 class="sm:text-2xl text-white text-md font-bold">Finite Loop Club</h3>
			</span>
		</a>
	</div>
	<div class="w-full h-[4rem] bg-two-700 fixed bottom-0 flex items-center px-4 justify-between">
		<a href="/">
			<Home size="40" color="white" />
		</a>
		<AuthButton />
	</div>
</div>
