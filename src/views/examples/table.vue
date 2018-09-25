<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
    <list-box :dataSource='users' :columns='columns' :pagination='pagination' v-on:handleValue='setValue'></list-box>
	</section>
</template>
<script>
  import { getUserList, getUserListPage } from '../../api/api';
  import { ListBox } from '../components/index'
	export default {
    components:{
      ListBox
    },
		data() {
			return {
				filters: {
					name: ''
        },
        pagination:{
          currentPage:1,
          pageSize:10,
          total:0
        },
				loading: false,
				users: [
        ],
        columns:[
          {
            columnName:'name',
            columnKey:'姓名'
          },
          {
            columnName:'sex',
            columnKey:'性别'
          },
          {
            columnName:'age',
            columnKey:'年龄'
          },
          {
            columnName:'birth',
            columnKey:'生日'
          },
          {
            columnName:'addr',
            columnKey:'地址',
            width:300
          },
        ]
			}
		},
		methods: {
			//性别显示转换
			formatSex(row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
      },
      handleSizeChange(){

      },
      setValue(params){
				let para = {
          name: this.filters.name,
          pageIndex:params.pageIndex,
          pageSize: params.pageSize
				};
        this.loading = true;
				getUserList(para).then((res) => {
          this.users = res.data.records;
          this.pagination = {
           total:res.data.total
          }
          this.loading = false;
				});
      },

			//获取用户列表
			getUser() {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				getUserList(para).then((res) => {
          this.users = res.data.records;
          this.pagination = {
           total:res.data.total
          }
					this.loading = false;
				});
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>
