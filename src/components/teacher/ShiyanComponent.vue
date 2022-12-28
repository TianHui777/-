<template>
  <div>
    <div style="text-align: center;font-size: 30px;font-weight: 600">
      <p>实验列表</p>
    </div>
    <div>
      <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
        <el-table-column prop="id" label="实验序号" align="center"></el-table-column>
        <el-table-column prop="name" label="实验名称"></el-table-column>

        <el-table-column prop="startTime" label="开始时间"></el-table-column>
        <el-table-column prop="endTime" label="结束时间"></el-table-column>
        <el-table-column label="操作" width="220" align="center">
          <template #default="scope">
            <el-button text  @click="handle(scope.row.id)" style="color: #409eff">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShiyanComponent",
  data(){
    return{

      tableData:[
        {
          id:'1',
          name:'输出hello world',
          startTime:'2022-12-23',
          endTime:'2022-12-28'
        },
        {
          id:'2',
          name:'简单运算',
          startTime:'2022-12-23',
          endTime:'2022-12-28'
        },
        {
          id:'3',
          name:'输出HELLO World',
          startTime:'2022-12-23',
          endTime:'2022-12-28'
        },
        {
          id:'4',
          name:'输出Hello world',
          startTime:'2022-12-23',
          endTime:'2022-12-28'
        }

      ],
    }
  },
  created() {
    this.getInfo()
  },
  methods:{
    getInfo(){
      axios.post('http://boer.ink:5003',{
      }).then(res=>{

      })
    },
    handle(id){
      this.$router.push({path:'/teacher/consult',query:{id:id}})
    }
  }
}
</script>

<style scoped>

</style>