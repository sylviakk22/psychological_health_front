<template>
    <div>
        <div class="side-bar">
            <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="/" @click="$router.push('/')">
                    <i class="el-icon-house"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/rbac/user/list" @click="$router.push('/rbac/user/list')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">心理测评</span>
                </el-menu-item>
                <el-menu-item index="/rbac/user/add" @click="$router.push('/rbac/user/add')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">心理咨询预约</span>
                </el-menu-item>
                <el-menu-item index="/rbac/user/profile" @click="$router.push('/rbac/user/profile')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">修改用户信息</span>
                </el-menu-item>
                <!-- <el-menu-item index="/rbac/user/pwd" @click="$router.push('/rbac/user/pwd')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">修改密码</span>
                </el-menu-item> -->
                <el-menu-item index="/logout" @click="logout">
                    <i class="el-icon-setting"></i>
                    <span slot="title">退出</span>
                </el-menu-item>
            </el-menu>

            <div class="main-content">
                <!-- 子路由所对应的组件会在此处显示 -->
                <router-view />
            </div>
        </div>
    </div>
</template>
  
<script>
import { removeToken } from '@/utils/auth'
export default {
    name: "MyComponent",
    methods: {
        logout() {
            this.$confirm('确定注销并退出系统吗？', '提示').then(() => {
                removeToken()
                this.$router.push({ path: '/login' })
            }).catch(() => { });
        },
    },
};
</script>
<style lang="scss" scoped>
.side-bar {
    display: flex;
    height: 100vh;
}

.main-content {
    flex: 1;
    padding: 20px;
}
</style>