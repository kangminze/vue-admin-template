<template>

  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="userList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column
        fixed
        prop="username"
        label="用户名"/>
      <el-table-column
        fixed
        prop="password"
        label="密码"
      />
    </el-table>

    <el-pagination
      :total="total"
      :page-size="pageSize"
      background
      layout="prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>

</template>

<script>
import { userListByPage } from '@/api/user'

export default {
  // 绑定属性
  data() {
    return {
      userList: [],
      listLoading: true,
      total: 0,
      currentPage: 1,
      pageSize: 2
    }
  },
  // 生命周期时间
  created() {
    this.fetchData()
  },
  // 方法
  methods: {
    fetchData: function() {
      this.listLoading = true
      var params = {
        pageSize: this.pageSize,
        page: this.currentPage
      }
      userListByPage(params).then(response => {
        this.userList = response.data.rows
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleSizeChange: function(val) {
      this.pageSize = val
      this.fetchData()
    },
    handleCurrentChange: function(val) {
      this.currentPage = val
      this.fetchData()
    }
  }
}
</script>

<style scoped>

</style>
