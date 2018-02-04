<template>
	<Content :style="{padding: '24px', minHeight: '400px', background: '#fff'}">
		<div class="content-2">
			<Table border :columns="columns7" :data="data7"></Table>
		</div>
	</Content>
</template>
<script>
export default{
	data () {
		return {
			columns7: [
			{
				title: '时间',
				key: 'date',
			},
			{
				title: '星期一',
				key: 'day_id'
			},
			{
				title: '星期二',
				key: 'day_id',
			},
			{
				title: '星期三',
				key: 'day_id'
			},
			{
				title: '星期四',
				key: 'day_id'
			},
			{
				title: '星期五',
				key: 'day_id'
			},
			{
				title: '星期六',
				key: 'day_id'
			},
			{
				title: '星期日',
				key: 'day_id'
			}
			],
			data7: [
			{
				name: 'John Brown',
				day_id: 18,
				address: 'New York No. 1 Lake Park',
				date: '08:15 - 10:15'
			},
			{
				name: 'Jim Green',
				age: 24,
				address: 'London No. 1 Lake Park',
				date: '10:15 - 12:15'
			},
			{
				name: 'Jon Snow',
				age: 26,
				address: 'Ottawa No. 2 Lake Park',
				date: '12:15 - 14:15'
			},
			{
				name: 'Joe Black',
				age: 30,
				address: 'Sydney No. 1 Lake Park',
				date: '14:15 - 16:15'
			},
			{
				name: 'Jon Snow',
				age: 26,
				address: 'Ottawa No. 2 Lake Park',
				date: '16:15 - 18:15'
			},
			{
				name: 'Jon Snow',
				age: 26,
				address: 'Ottawa No. 2 Lake Park',
				date: '18:15 - 20:15'
			}
			]
		}
	},
}
</script>

<style>

</style>