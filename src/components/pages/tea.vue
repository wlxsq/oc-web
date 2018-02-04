<template>
	<Layout >
		<Sider hide-trigger  :style="{background: '#fff'}">
			<Menu :active-name="setActive" width="auto" @on-select="routeTo" :open-names="['1']">
				<MenuItem name="schedule">
					<Icon type="ios-navigate"></Icon>
					我的课表
				</MenuItem>
				<MenuItem name="my-stu">
					<Icon type="ios-navigate"></Icon>
					我的学生
				</MenuItem>
				<MenuItem name="class-record">
					<Icon type="ios-navigate"></Icon>
					上课记录
				</MenuItem>
				<MenuItem name="work-record">
					<Icon type="ios-analytics"></Icon>
					我的考勤
				</MenuItem>
				<MenuItem name="colleague">
					<Icon type="ios-keypad"></Icon>
					我的同事
				</MenuItem>
			</Menu>
		</Sider>
		<Layout :style="{padding: '0 24px 24px'}">
			<Breadcrumb :style="{margin: '24px 0'}">
				<BreadcrumbItem>一码老师</BreadcrumbItem>
				<BreadcrumbItem>{{this.$route.path.replace('/','')}}</BreadcrumbItem>
			</Breadcrumb>
			<router-view></router-view>
		</Layout>
	</Layout>
	<!-- <Card>
		<div style="min-height: 400px;">
			<Content :style="{padding: '0 100px'}">
				<div>
					<Menu mode="horizontal" theme="light" active-name="1">
						<div class="t1">
							<Breadcrumb>
								<BreadcrumbItem>首页</BreadcrumbItem>
								<BreadcrumbItem>一码教师</BreadcrumbItem>
								<BreadcrumbItem>课表</BreadcrumbItem>
							</Breadcrumb>
						</div>
						<div class="t2">
							<MenuItem>
								<Icon type="ios-keypad"></Icon>
								<span>课表</span>
							</MenuItem>
							<MenuItem>
								<Icon type="ios-keypad"></Icon>
								<span>上课记录</span>
							</MenuItem>
							<MenuItem>
								<Icon type="ios-keypad"></Icon>
								<span>上课记录</span>
							</MenuItem>
						</div>
					</Menu>
				</div>
				<div>
					<h1></h1>
				</div>
			</Content>
		</div>
	</Card> -->
</template>
<script type="text/javascript">
export default{
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