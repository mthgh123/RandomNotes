<template>
	<div>
		<el-tree
			:data="data"
			@node-click="handleNodeClick"
		/>
	</div>
</template>

<script setup lang='ts'>
	import { ref, reactive } from 'vue';

	const data: any[] = [
		{
			label: 'Level one 1',
			children: [
				{
					label: 'Level two 1-1',
				},
			],
		},
		{
			label: 'Level one 2',
			children: [
				{
					label: 'Level two 2-1',
				},
			],
		},
	]

	const handleNodeClick = (data: any) => {
		console.log(data)
	}

</script>

<style scoped lang='scss'>

</style>