<template>
    <div class="edit-container">
        <div class="edit-box">
            <div class="edit-form">
                <h3>修改个人信息</h3>
                <el-form ref="form" :model="editForm" :rules="rules" label-width="100px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="editForm.username" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="editForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="editForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-radio-group v-model="editForm.gender">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="editForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="editForm.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="do_edit" :loading="loading">修改个人信息</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
    
<script>
import { edit } from '@/api/editprofile.js'
import { getInfo } from '@/api/login.js'
import { setToken } from '@/utils/auth'
export default {
    data() {
        return {
            editForm: {
                username: '',
                password: '',
                name: '',
                gender: '',
                phone: '',
                email: '',
            },
            rules: {
                // username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
                gender: [{ required: true, message: '请选择性别', trigger: 'blur' }],
                phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
                email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
            },
            loading: false
        }
    },
    mounted() {
       getInfo().then((res)=>{
            this.editForm.username = res.data.username;
            this.editForm.password = res.data.password;
            this.editForm.name = res.data.name;
            this.editForm.gender = res.data.gender;
            this.editForm.phone = res.data.phone;
            this.editForm.email = res.data.email; 
       })
    },
    methods: {
        do_edit() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true
                    //发起网络请求；如果注册成功。跳转
                    edit(this.editForm.username, this.editForm.password, this.editForm.name,this.editForm.gender, this.editForm.phone,this.editForm.email).then(res => {
                        console.log(res.data.token)
                        // setToken(res.data.accessToken)
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
</style>

