<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <div class="head" style="text-align: center;font-size: 32px;font-weight: 600">
        <p>登  录</p>
      </div>
      <div style="margin-top: 20px">

        <el-tabs class="choose-head" @tab-click="handleClick" stretch="true">
          <el-tab-pane class="select" label="学生登录">
            <div style="display: flex;justify-content: center;flex-direction: column">
              <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon  style="margin-top: 25px">
                <el-form-item prop="username" label="用户名">
                  <el-input v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon></el-input>
                </el-form-item>
                <el-form-item id="password" prop="password" label="密码">
                  <el-input v-model="ruleForm.password" show-password placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item style="margin-top: 30px;">
                  <el-button type="primary" icon="el-icon-upload" @click="submitForm(ruleFormRef)" style="margin-left: 60px">登 录</el-button>
                </el-form-item>
                <div style="display: flex;justify-content: center">
          <span style="margin-right: 300px;">
          <router-link  to="/">找回密码</router-link>
          </span>
                  <span>
          <router-link to="/register">注册</router-link>
          </span>
                </div>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane class="select" label="教师登录">
            <div style="display: flex;justify-content: center;flex-direction: column">
              <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon  style="margin-top: 25px">
                <el-form-item prop="username" label="用户名">
                  <el-input v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon></el-input>
                </el-form-item>
                <el-form-item id="password" prop="password" label="密码">
                  <el-input v-model="ruleForm.password" show-password placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item style="margin-top: 30px;">
                  <el-button type="primary" icon="el-icon-upload" @click="submitFormT(ruleFormRef)" style="margin-left: 60px">登 录</el-button>
                </el-form-item>
                <div>
          <span style="float: left">
          <router-link  to="/">找回密码</router-link>
          </span>
                  <span style="float: right">
          <router-link to="/register">还没有账号？去注册</router-link>
          </span>
                </div>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { login } from "../request/api/login"
import { useRouter } from "vue-router";
import type {TabsPaneContext} from "element-plus";
import {ElMessage} from "element-plus";
const activeName = ref('first')
const handleClick=(tab: TabsPaneContext,event: Event)=>{
  console.log(tab,event)
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  password: '',
  tokenTpye:'string',
  clientId:'string',
  realm:'string',
  captchaId:'string',
  captchaCode:'string'

})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名长度为3-10', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名长度为3-10', trigger: 'blur' },
  ],
})


//登录路由
const router = useRouter()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(ruleForm)

      //登录验证
      login(ruleForm)
          .then(res => {
            // 登录成功后，将用户的username存入localStore,便于路由守卫验证用户手否登录
            localStorage.setItem("token", res.data.accessToken)
            console.log(res)
            ElMessage({
              message:'登陆成功',
              type:'success '
            })
            router.push('/student/home')
          })
    } else {
      console.log('error submit!', fields)
    }
  })
}
const submitFormT = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      //登录验证
      login(ruleForm).then(res => {
        console.log(res)
        // 登录成功后，将用户的username存入localStore,便于路由守卫验证用户手否登录
        window.localStorage.setItem("token", res.data.accessToken)
        console.log(res)
        router.push('/teacher')
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 740px;
  background: url("../assets/img/login-bg.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url("../assets/img/login_bg.jpg") no-repeat;
  background-size: cover;
  width: 400px;
  height: 400px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>
  