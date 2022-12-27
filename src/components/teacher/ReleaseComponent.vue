<template>
  <div >
    <div style="text-align: center;font-size: 30px;font-weight: 600">
      <p>发布实验</p>
      <div style="margin-left: 400px;margin-top: 20px">
        <el-form style="width: 400px">

          <el-form-item label="实验名称" style="width: 400px">
            <el-input v-model="paper.name"></el-input>
          </el-form-item>
          <el-form-item label="实验描述" style="width: 400px">
            <el-input v-model="paper.description"></el-input>
          </el-form-item>
          <el-form-item label="开始时间">

            <el-date-picker
                v-model="paper.startTime"
                type="date"
                placeholder="请选择"
                size="size"
                format="YYYY/MM/DD"
                value-format="x"

            />

          </el-form-item>
          <el-form-item label="截止时间">

            <el-date-picker
                v-model="paper.endTime"
                type="date"
                placeholder="请选择"
                size="size"
                format="YYYY/MM/DD"
                value-format="x"

            />

          </el-form-item>

          <el-form-item label="实验班级">
            <el-select
                v-model="value1"
                multiple
                placeholder="Select"
                style="width: 240px"
            >
              <el-option
                  v-for="item in classOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="实验公告" style="width: 400px">
            <el-input textarea :rows="10" v-model="paper.tips"></el-input>
          </el-form-item>
          <el-form-item label="上传实验报告" style="width: 400px">
            <el-upload
                v-model:file-list="fileList"
                class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :limit="3"
                :on-exceed="handleExceed"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">发布实验</el-button>
            <el-button type="text" @click="cancel()">取消</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
const value=ref([])
export default {
  name: "release",
  data() {
    return {
      value1: value,
      classOptions: [{
        value: 'python程序设计'
      }, {
        value: 'C++程序设计'
      }],
      paper: {},
    }
  },
  created() {
    this.getClass();
  },
  methods:{
    getClass(){//获取该老师的教学班
      axios.get('',{
      }).then(res=>{
        this.classOptions=res.data
      })
    },
    onSubmit(){
      // axios.post('',{
      //   ...this.paper
      // }).then(res=>{
      //   if(res.data.state===200){
          ElMessage({
            message:'发布成功',
            type:'success'
          })
   0
    },
    cancel(){
      this.paper={}
    }
  }
}
const success = () => {
  ElMessage('保存成功！')
};


</script>

<style scoped>

</style>
