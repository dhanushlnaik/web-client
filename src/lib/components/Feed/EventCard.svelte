<script lang="ts">
	export let data: any;
	console.log(data);
</script>

<div class="bg-gray-100 py-2 rounded-2xl max-w-xl">
	<div class="text-xl fle">
		{data.category}
		{data.latitude}
	</div>
</div>
