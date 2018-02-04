<template>
	<div class="layout">
		<Layout>
			<!-- <img src="../../assets/header.png" style="witdh:100%"> -->
			<Header class="layout-menu">
				<Menu mode="horizontal" theme="dark" :active-name="setActive" @on-select="routeTo" >
					<div class="layout-logo">
						<img src="../../assets/OneCode.png" class="layout-logo-img">
					</div>
					<div class="layout-nav">
						<MenuItem name="index">
							<Icon type="ios-navigate"></Icon>
							首页
						</MenuItem>
						<MenuItem name="stu">
							<Icon type="ios-keypad"></Icon>
							一码学员
						</MenuItem>
						<MenuItem name="tea">
							<Icon type="ios-analytics"></Icon>
							一码老师
						</MenuItem>
						<MenuItem name="consultation">
							<Icon type="ios-paper"></Icon>
							预约报名
						</MenuItem>
					</div>
					<div>
						<!-- <Button type="primary">登录</Button> -->
						<Dropdown>
							<a href="javascript:void(0)">
								wlxsq
								<Icon type="arrow-down-b"></Icon>
							</a>
							<DropdownMenu slot="list" placement="right">
								<DropdownItem name="1">个人信息</DropdownItem>
								<DropdownItem name="1">修改密码</DropdownItem>
								<DropdownItem name="1">消息通知</DropdownItem>
								<DropdownItem divided>退出登录</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</Menu>
			</Header>
			<div :style="{minHeight: '465px'}">
				<router-view></router-view>
			</div>
			<Footer>一码学程 | Copyright © 2018-2018 author:ONECODE</Footer>
		</Layout>
	</div>
</template>
<script>
export default {
	data(){
		return {
			page:['consultation', 'stu', 'stu_err', 'tea', 'tea_err', 'index'],
		}	
	},
	computed:{
		setActive(){
			return this.$route.path.replace('/','');
		}
	},
	methods:{
		routeTo(e){
			console.log(e);
			this.$router.push(e);
		}
	}
}
</script>
<style scoped>
.layout{
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
}
.layout-logo{
    /*width: 55px;
    height: 55px;
    background: #5b6270;
    border-radius: 3px;*/
    position: relative;
    top: 5px;
    left: 20px;
    float: left;
}
.layout-logo-img{
	width: 55px;
	height: 100%;
}
.layout-nav{
	width: 45%;
	margin: 0 auto;
	margin-right: 20px;
}
</style>