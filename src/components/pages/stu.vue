<template>
	<Layout >
		<Sider hide-trigger  :style="{background: '#fff'}">
			<Menu @on-select="routeTo" active-name="1-2" width="auto" :open-names="['1']">
				<MenuItem name="stu-schedule">
					<Icon type="ios-navigate"></Icon>
					我的课表
				</MenuItem>
				<MenuItem name="stu-score">
					<Icon type="ios-navigate"></Icon>
					我的课程
				</MenuItem>
				<MenuItem name="stu-tea">
					<Icon type="ios-analytics"></Icon>
					我的老师
				</MenuItem>
				<MenuItem name="stu-stu">
					<Icon type="ios-keypad"></Icon>
					优秀同学
				</MenuItem>
			</Menu>
		</Sider>
		<Layout :style="{padding: '0 24px 24px'}">
			<Breadcrumb :style="{margin: '24px 0'}">
				<BreadcrumbItem>一码学生</BreadcrumbItem>
				<BreadcrumbItem>{{this.$route.path.replace('/','')}}</BreadcrumbItem>
			</Breadcrumb>
			<router-view></router-view>
		</Layout>
	</Layout>
</template>
<script type="text/javascript">
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
	computed:{
		setActive() {
			return this.$route.path.replace('/','');
		},
	},
	methods:{
		routeTo(e) {
			console.log(e);
			this.$router.push(e);
		}
	}
}
</script>
<style type="text/css">
.t1{
	margin-left: 30px; 
	position: relative;
	float: left;
}
.t2{
	width: 350px;
	margin: 0 auto;
	margin-right: 20px;
}
</style>