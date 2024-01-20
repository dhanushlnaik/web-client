<script>
	import '../styles/app.css';
	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';
</script>

<div class="bg-[#fad6ca] text-[#2a4fb2] min-h-screen">
	<Navbar />
	<div class="pt-[8rem]">
		<slot />
	</div>
</div>
