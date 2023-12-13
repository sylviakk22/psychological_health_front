<template>
    <div class="register-container">
        <div class="register-box">
            <div class="register-form">
                <h3>用户注册</h3>
                <el-form ref="form" :model="registerForm" :rules="rules" label-width="100px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="registerForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="registerForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-radio-group v-model="registerForm.gender">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="registerForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="registerForm.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="do_login" :loading="loading">返回登录</el-button>
                        <el-button type="primary" @click="do_register" :loading="loading">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
    
<script>
import { register } from '@/api/register.js'
import { setToken } from '@/utils/auth'
export default {
    data() {
        return {
            registerForm: {
                username: '',
                password: '',
                name: '',
                gender: '',
                phone: '',
                email: '',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
                gender: [{ required: true, message: '请选择性别', trigger: 'blur' }],
                phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
                email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
            },
            loading: false
        }
    },
    methods: {
        do_login() {
            this.$router.push({ path: '/login' })
        },
        do_register() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true
                    //发起网络请求；如果注册成功。跳转
                    register(this.registerForm.username, this.registerForm.password, this.registerForm.name,this.registerForm.gender, this.registerForm.phone,this.registerForm.email).then(res => {
                        console.log(res.data.token)
                        // setToken(res.data.accessToken)
                        this.$message.success('注册成功')
                        this.$router.push({ path: '/login' })
                    }).catch(() => {
                        // 登录失败，显示错误提示
                        this.$message.error('注册失败')
                        this.loading = false
                    })
                }
            })
        }
    }
}
</script>
    
<style lang="scss">
.register-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .register-box {
        width: 400px;
        height: 600px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px #ccc;

        .register-form {
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