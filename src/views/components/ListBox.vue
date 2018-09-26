<template>
	<section class="list-box">
    <el-table :data="dataSource" fixed height="400" border highlight-current-row style="width: 100%;">
			<el-table-column type="index" width="60"></el-table-column>
      <el-table-column v-for="(column, index) in  columns" :width="column.width ? column.width : null" :key="index" :prop='column.columnName' :label='column.columnKey' sortable>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="setValue"
      :current-page="pagination.currentPage" :page-sizes="pageOptions" :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="pagination.total"></el-pagination>
	</section>
</template>
<script>
	export default {
    name:'list-box',
    props:['columns', 'dataSource','pagination'],
    data(){
      return {
        pageSize: 10,
        pageOptions:[],
        currentPage:1,
      }
    },
    mounted(){
      const pagination = this.$props.pagination || {};
      this.pageOptions = pagination.pageOptions || [10, 20, 30, 40]
    },
		methods: {
      handleSizeChange(pageSize){
        this.pageSize = pageSize
        this.$emit('handleValue', {pageSize: pageSize, pageIndex:this.currentPage})
      },
      setValue(current){
        this.currentPage = current
        this.$emit('handleValue', {pageSize: this.pageSize, pageIndex:current})
      }
		}
	};

</script>

<style lang="scss" scoped>

</style>

