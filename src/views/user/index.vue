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
  </div>

</template>

<script>
import { userListByPage } from '@/api/user'

export default {
  // 绑定属性
  data() {
    return {
      userList: [],
      listLoading: true
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
      userListByPage().then(response => {
        this.userList = response.data
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
