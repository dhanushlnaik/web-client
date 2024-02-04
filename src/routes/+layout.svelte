<script>
	import '../styles/app.css';
	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';
</script>

<div class="bg-white text-[#2a4fb2] min-h-screen">
	<Navbar />
	<div class="sm:pt-[6rem] pt-[4rem]">
		<slot />
	</div>
</div>
