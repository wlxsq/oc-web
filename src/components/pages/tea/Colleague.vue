<template>
	<Content :style="{padding: '24px', minHeight: '400px', background: '#fff'}">
		<div class="content-2">
			<Table border :columns="columns7" :data="data6"></Table>
			<Page :total="12" show-elevator show-total :style="{marginTop: '20px',}"></Page>
		</div>
	</Content>
</template>
<script>
export default {
	data () {
		return {
			columns7: [
			// {
			// 	title: 'ID',
			// },
			{
				title: '姓名',
				key: 'name',
				render: (h, params) => {
					return h('div', [
						h('Icon', {
							props: {
								type: 'person'
							}
						}),
						h('strong', ' '+params.row.name)
						]);
				}
			},
			{
				title: '工号',
				key: 'id'
			},
			{
				title: '学历',
				key: 'education'
			},
			{
				title: '邮箱',
				key: 'email'
			},
			{
				title: '联系方式',
				key: 'telphone'
			},
			{
				title: '地址',
				key: 'address'
			},
			{
				title: '操作',
				key: 'action',
				width: 150,
				align: 'center',
				render: (h, params) => {
					return h('div', [
						h('Button', {
							props: {
								type: 'primary',
								size: 'small'
							},
							style: {
								marginRight: '5px'
							},
							on: {
								click: () => {
									this.show(params.index)
								}
							}
						}, 'email'),
						h('Button', {
							props: {
								type: 'primary',
								size: 'small'
							},
							style: {
								marginRight: '5px'
							},
							on: {
								click: () => {
									this.show(params.index)
								}
							}
						}, '查看'),
						]);
				}
			}
			],
			data6: []
		}
	},
	mounted: function() {
		this.$http.get('http://crm.oc.com/api/v1/staff/all').then(res=>{
			console.log(res.body);
			this.data6 = res.body;
		},res=>{
			console.log("error");
		});
	},
	methods: {
		show (index) {
			this.$Modal.info({
				title: 'User Info',
				content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].telphone}<br>Address：${this.data6[index].email}`
			})
		},
		remove (index) {
			this.data6.splice(index, 1);
		}
	}
}
</script>