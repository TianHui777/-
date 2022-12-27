<template>
  <div class="login clearfix">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="resetFormRef"  :model="ruleForm" status-icon >

          <h3 style="text-align: center">注册</h3>
          <hr>
          <el-form-item prop="username" label="用户名">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <!--          <el-form-item prop="email" label="邮箱">-->
          <!--            <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>-->
          <!--          </el-form-item>-->
          <el-form-item prop="password" label="密码">
            <el-input v-model="ruleForm.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="doRegister(ruleFormRef)" style="margin-left: 50px;width: 200px">注册</el-button>
          </el-form-item>
          <span style="display: flex;justify-content: flex-end;margin-top: 25px">
            <router-link to="/login"> 已有账号，去登录</router-link></span>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<!--<script>-->
<!--import axios from "axios";-->
<!--import {ElMessage} from "element-plus";-->
<!--export default {-->
<!--  name: "Register",-->
<!--  data() {-->
<!--    return {-->
<!--      user: {-->
<!--        username: '',-->
<!--        password: '',-->
<!--        name:'string',-->
<!--        type:'string',-->
<!--        stuOrTeaNumber:'20209890',-->
<!--        enabled:true,-->
<!--        credentialsNonExpired:true,-->
<!--        accountNonLocked: true,-->
<!--        accountNonExpired: true-->
<!--      },-->
<!--    };-->
<!--  },-->

<!--  methods: {-->
<!--    doRegister() {-->
<!--      if (!this.user.username) {-->
<!--        this.$message.error("请输入用户名！");-->
<!--        return;-->
<!--      }-->
<!--      // else if (!this.user.email) {-->
<!--      //   this.$message.error("请输入邮箱！");-->
<!--      //   return;-->
<!--      // } else if (this.user.email != null) {-->
<!--      //   var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;-->
<!--      //   if (!reg.test(this.user.email)) {-->
<!--      //     this.$message.error("请输入有效的邮箱！");-->
<!--      //   }-->
<!--        else if (!this.user.password) {-->
<!--          this.$message.error("请输入密码！");-->
<!--          return;-->
<!--        } else {-->
<!--        var axios = require('axios');-->
<!--        var data = JSON.stringify({-->
<!--          "username": "string09",-->
<!--          "password": "{noop}string",-->
<!--          "name": "shiwenbo",-->
<!--          "type": "student",-->
<!--          "stuOrTeaNumber": "20201120443",-->
<!--          "enabled": true,-->
<!--          "credentialsNonExpired": true,-->
<!--          "accountNonLocked": true,-->
<!--          "accountNonExpired": true-->
<!--        });-->

<!--        var config = {-->
<!--          method: 'post',-->
<!--          url: 'http://boer.ink:5003/pub/auth/register',-->
<!--          headers: {-->
<!--            'Content-Type': 'application/json'-->
<!--          },-->
<!--          data : data-->
<!--        };-->
<!--        console.log(data)-->
<!--        axios(config)-->
<!--            .then(function (response) {-->
<!--              console.log(JSON.stringify(response.data));-->
<!--            })-->
<!--            .catch(function (error) {-->
<!--              console.log(error);-->
<!--            });-->

<!--        // console.log(...this.user)-->
<!--          // this.$router.push({ path: "/" }); //无需向后台提交数据，方便前台调试-->
<!--          // axios.post("http://boer.ink:5003/pub/auth/register", {-->
<!--          //       username: this.user.username,-->
<!--          //       // email: this.user.email,-->
<!--          //       password: '{noop}'+this.user.password,-->
<!--          //       name:'string',-->
<!--          //       type:'string',-->
<!--          //       stuOrTeaNumber:'2020',-->
<!--          //       enabled:true,-->
<!--          //       credentialsNonExpired:true,-->
<!--          //       accountNonLocked: true,-->
<!--          //       accountNonExpired: true,-->
<!--          //     },{-->
<!--          //   headers: {-->
<!--          //     'Content-Type': 'application/json'-->
<!--          //   },-->
<!--          // }).then(res => {-->
<!--          //       console.log(res)-->
<!--          //       if (res.data.status === 200) {-->
<!--          //         ElMessage({-->
<!--          //           message:'注册成功',-->
<!--          //           type:'success'-->
<!--          //         })-->
<!--          //         this.$router.push({ path: "/login" });-->
<!--          //       } else {-->
<!--          //         alert("您输入的用户名已存在！");-->
<!--          //       }-->
<!--          //     }).catch(error=>{-->
<!--          //   console.log(error)-->
<!--          // });-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--};-->
<!--</script>-->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { register } from "../request/api/login"
import { useRouter } from "vue-router";
import {ElMessage} from "element-plus";
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username:'',
  password: '',
  name:'string',
  type:'string',
  stuOrTeaNumber:'20201060',
  enabled:true,
  credentialsNonExpired:true,
  accountNonLocked: true,
  accountNonExpired: true,

})

const router = useRouter()
const doRegister = async (formEl: FormInstance | undefined) => {
  // if (!formEl) return
  // await formEl.validate((valid, fields) => {
  //   if (valid) {
  //     console.log(ruleForm)

  //登录验证
  console.log(ruleForm)
  register(ruleForm)
      .then(res => {
        console.log(res.data)
        if(res.status===200){
          ElMessage({
            message:'注册成功',
            type:'success '
          })
          router.push('/login')
        }}).catch(e=>{
    console.log(e)
  })
}
// else {
//   console.log('error submit!', fields)
// }
// })

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>
<style scoped>
.login {
  width: 100%;
  height: 740px;
  background: url("../assets/img/register-bg.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url("../assets/img/register-bg.png") no-repeat;
  background-size: cover;
  width: 400px;
  height: 400px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 20px;
}

h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}

.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>