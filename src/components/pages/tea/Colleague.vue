<template>
	<Content :style="{padding: '24px', minHeight: '400px', background: '#fff'}">
		<div class="content-2">
			<Table border :columns="columns7" :data="showData"></Table>
			<Page :total="dataCount" :page-size="pageSize" @on-change="changepage" :style="{marginTop: '20px',}" show-elevator show-total></Page>
		</div>
	</Content>
</template>
<script>
export default {
	data () {
		return {
			//	初始化信息总条数
			dataCount: 0,
			//	每页显示多少条
			pageSize:1,
			//	表头字段
			columns7: [
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
			//	总数据数据
			totalData: [],
			//	显示的数据
			showData: [],

		}
	},
	mounted: function() {
		this.$http.get('http://localhost/oc-server/public/index.php/api/v1/staff/all').then(res=>{
			//	将数据赋值给data6
			this.totalData = res.body;
			console.log(this.totalData);
			//	统计数据的总数
			this.dataCount = res.body.length;
			//	给显示的数据赋值
			if(this.dataCount < this.pageSize){
				this.showData = this.totalData;
			} else {
				this.showData = this.totalData.slice(0,this.pageSize);
			}
		},res=>{
			console.log("error");
		});
	},
	methods: {
		//	点击查看详细数据
		show (index) {
			this.$Modal.info({
				title: 'User Info',
				content: `Name：${this.showData[index].name}<br>Age：${this.showData[index].telphone}<br>Address：${this.showData[index].email}`
			})
		},
		//	删除某条数据
		remove (index) {
			this.showData.splice(index, 1);
		},
		//	
		changepage(index){
			console.log(index);
			var st = (index - 1 ) * this.pageSize;
			var ed = index * this.pageSize;
			this.showData = this.totalData.slice(st, ed);
			console.log(this.showData);
		}

	}
}
</script>