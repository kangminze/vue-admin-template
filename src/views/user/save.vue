<template>
  <el-dialog :visible="dialogP.dialogFormVisible" :close-on-click-modal="false" title="新增用户">
    <el-form ref="userForm" :model="userForm" label-width="100px">
      <el-form-item label="用户名称" prop="username">
        <el-input v-model="userForm.username"/>
      </el-form-item>

      <el-form-item label="密    码" prop="password">
        <el-input v-model="userForm.password"/>
      </el-form-item>

    </el-form>
    <div>
      <el-button type="primary" style="width: 100px" @click="cancel('userForm')">取 消</el-button>
      <el-button type="primary" style="width: 100px" @click="submitForm('userForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { saveUser } from '../../api/user'

export default {
  props: {
    dialogP: {
      type: Object,
      default: function() {
        return { dialogFormVisible: false }
      }
    }
  },
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    cancel: function(formName) {
      this.$refs[formName].resetFields()
      this.dialogP.dialogFormVisible = false
    },
    submitForm: function(form) {
      const _this = this
      saveUser(JSON.stringify(this.userForm)).then(response => {
        console.info('添加成功')
        this.dialogP.dialogFormVisible = false
        _this.$emit('refreshTable')
      })
    }
  }
}
</script>

<style scoped>

</style>
