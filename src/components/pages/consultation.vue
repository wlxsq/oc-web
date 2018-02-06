<template>
	<div class="layout2">
		<Layout>
			<Card>
				<p slot="title">不知你想问啥呢？</p>
				<p>
					<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
						<FormItem label="学生姓名" prop="name">
							<Input v-model="formValidate.name" placeholder="请输入学生姓名"></Input>
						</FormItem>
						<FormItem label="家长姓名" prop="name">
							<Input v-model="formValidate.name" placeholder="请输入家长姓名"></Input>
						</FormItem>
						<FormItem label="联系方式" prop="mail">
							<Input v-model="formValidate.mail" placeholder="请输入联系方式"></Input>
						</FormItem>
						<Row>
							<Col span="10">
								<FormItem label="信息" prop="name">
									<FormItem prop="date">
										<DatePicker type="date" placeholder="选择你的出生日期" v-model="formValidate.date"></DatePicker>
									</FormItem>
								</FormItem>
							</Col>
							<Col span="10">
								<FormItem label="年级" prop="name">
									<FormItem>
										<Select  placeholder="选择你的年级">
										<Option value="beijing">一年级</Option>
										<Option value="shanghai">二年级</Option>
										<Option value="shenzhen">三年级</Option>
										<Option value="shenzhen">四年级</Option>
										<Option value="shenzhen">五年级</Option>
										<Option value="shenzhen">六年级</Option>
										<Option value="shenzhen">初一</Option>
										<Option value="shenzhen">初二</Option>
										<Option value="shenzhen">初三</Option>
										</Select>
									</FormItem>
								</FormItem>
							</Col>
						</Col>
					</Row>
				<FormItem label="咨询课程" >
					<Col span="20">
					<CheckboxGroup v-model="formValidate.interest">
						<Checkbox span="5" label="Scratch趣味编程"></Checkbox>
						<Checkbox span="5" label="计算机基础"></Checkbox>
						<Checkbox span="5" label="C/C++语言基础"></Checkbox>
						<Checkbox span="5" label="信奥竞赛"></Checkbox>
					</CheckboxGroup>
					</Col>
				</FormItem>
				<FormItem label="问题" prop="desc">
					<Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="您想咨询的问题可以写在这里..."></Input>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
					<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
				</FormItem>
			</Form>
		</p>
	</Card>
</Layout>
</div>
</template>
<script>
export default {
	data () {
		return {
			formValidate: {
				name: '',
				mail: '',
				city: '',
				gender: '',
				interest: [],
				date: '',
				time: '',
				desc: ''
			},
			ruleValidate: {
				name: [
				{ required: true, message: 'The name cannot be empty', trigger: 'blur' }
				],
				mail: [
				{ required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
				{ type: 'email', message: 'Incorrect email format', trigger: 'blur' }
				],
				city: [
				{ required: true, message: 'Please select the city', trigger: 'change' }
				],
				gender: [
				{ required: true, message: 'Please select gender', trigger: 'change' }
				],
				interest: [
				{ required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
				{ type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
				],
				date: [
				{ required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
				],
				time: [
				{ required: true, type: 'date', message: 'Please select time', trigger: 'change' }
				],
				desc: [
				{ required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
				{ type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		handleSubmit (name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$Message.success('Success!');
				} else {
					this.$Message.error('Fail!');
				}
			})
		},
		handleReset (name) {
			this.$refs[name].resetFields();
		}
	}
}
</script>

<style type="text/css">
.layout2{
	width: 50%;
	position: relative;
	margin: auto;
	margin-top: 30px;
}
</style>