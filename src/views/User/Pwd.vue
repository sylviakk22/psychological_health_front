<!-- <template>
  <div class="edit-container">
      <div class="edit-box">
          <div class="edit-form">
              <h3>修改密码</h3>
              <el-form ref="form" :model="editForm" :rules="rules" label-width="100px">
                  <el-form-item label="原密码" prop="oldPassword">
                      <el-input type="password" v-model="editForm.oldPassword"></el-input>
                  </el-form-item>
                  <el-form-item label="新密码" prop="newPassword">
                      <el-input type="password" v-model="editForm.newPassword"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" @click="do_edit" :loading="loading">修改密码</el-button>
                  </el-form-item>
              </el-form>
          </div>
      </div>
  </div>
</template>
  
<script>
import { editPwd } from '@/api/editprofile.js'
import { getInfo } from '@/api/login.js'
import { setToken } from '@/utils/auth'
export default {
  data() {
      return {
          editForm: {
              oldPassword: '',
              newPassword: '',
          },
          rules: {
              // username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
              oldPassword: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
              newPassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
          },
          loading: false
      }
  },

  methods: {
      do_edit() {
        const data = {
        oldPassword: this.editForm.oldPassword,
        newPassword: this.editForm.newPassword
      }
          this.$refs.form.validate(valid => {
              if (valid) {
                  this.loading = true
                  //发起网络请求；如果注册成功。跳转
                  editPwd(this.editForm.oldPassword, this.editForm.newPassword).then(res => {
                      console.log(res.data.token)
                    //   setToken(res.data.accessToken)
                      this.$message.success('修改成功')
                      this.$router.push({ path: '/' })
                  }).catch(() => {
                      // 登录失败，显示错误提示
                      this.$message.error('修改失败')
                      this.loading = false
                  })
              }
          })
      }
  }
}
</script>
  
<style lang="scss">
.edit-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .edit-box {
      width: 400px;
      height: 600px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px #ccc;

      .edit-form {
          padding: 20px;

          h3 {
              font-size: 24px;
              margin-bottom: 20px;
              text-align: center;
          }
      }
  }
}
</style> -->

