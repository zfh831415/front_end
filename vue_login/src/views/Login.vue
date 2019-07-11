<template>
    <div class="login">
        <img style="position:absolute;left:0px;top:0px;width:100%;height:100%;z-Index:-1; border:1px solid blue" src="../assets/background.jpg" />
        <el-form :model="loginForm" ref="loginForm" label-width="80px" :rules="rules" class="login-box">
            <h2 style="align: center">欢迎登录</h2>
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default { 
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {require: true, message: '账号不能为空！', trigger: blur}
                ],
                password: [
                    {require: true, message: '密码不能为空！', trigger: blur}
                ]
            }
        }
    },
    methods: {
        login(){
            this.$refs.loginForm.validate(valid => {
                if(valid) {
                    this.$store.dispatch('user/Login', this.loginForm).then(() => {
                        this.$router.push({path: '/index'})
                    }).catch(error => {
                        console.log(error)
                    })
                } else {
                    return false;
                }
            })
        }
    }
}
</script>

<style>
.login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin:180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
}
</style>
