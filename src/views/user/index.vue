<template>

  <div class="app-container">
    <div class="searchClass">
      <el-row>
        <el-col :span="2">
          <el-button type="primary" style="width: 100px">新增</el-button>
        </el-col>
        <el-col :span="22">
          <el-input v-model="searchContent" placeholder="请输入内容" style="width: 300px">
            <el-button slot="append" icon="el-icon-search" @click="search"/>
          </el-input>
        </el-col>
      </el-row>
    </div>

    <div class="tableClass" style="padding-top: 15px">
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
    </div>
    <div class="pageClass" style="text-align: right; padding-top: 15px">
      <el-pagination
        :total="total"
        :page-size="pageSize"
        background
        layout="prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
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
      pageSize: 2,
      searchContent: ''
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
      if (this.searchContent !== '') {
        params.content = this.searchContent
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
    },
    search: function() {
      this.fetchData()
    }
  }
}
</script>

<style scoped>

</style>
