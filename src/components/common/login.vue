<style>
.wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	padding-top: 150px;
	padding-bottom: 200px;
}
.wrapper > h1{
	text-align: center;
	vertical-align: middle;
	margin-bottom: 20px;
	color: #000;
}
.login {
	margin: 0 auto;
	padding: 200px auto;
	width: 200px;
	height: 100%;
}
</style>

<template>
	<div class="wrapper">
		<h1>后台管理系统</h1>
		<div class="login">
			<Form ref="formInline" :model="formInline" :rules="ruleInline">
				<FormItem prop="user">
					<Input v-model="formInline.user" placeholder="Username">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
					</Input>
				</FormItem>
				<FormItem prop="password">
					<Input v-model="formInline.password" type="password" placeholder="Password">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
					</Input>
				</FormItem>
				<FormItem>
					<Button type="success" @click="handleSubmit('formInline')" long>登录</Button>
				</FormItem>
			</Form>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				formInline:{
					user: '',
					password: '',
				},
				ruleInline:{
					user:[{
						required: true,
						message: '请填写用户名',
						trigger: 'blur'
					}],
					password:[{
						required:true,
						message: '请填写密码',
						trigger: 'blur'
					}, {
						type:'string',
						min: 6,
						message: '密码长度不能小于6位数',
						trigger: 'blur'
					}]
				}
		}
	},
	methods: {
		handleSubmit(name) {
			this.$refs[name].validate((valid)=>{
				if(valid){
					this.$Message.success('登录成功!');
					this.$router.push('/index');
				}else{
					this.$Message.error('登录失败！');
				}
			})
		}
	}
}
</script>
