<template>
  <div style="margin: 100px 60px 20px 50px;width: 100%;height: 500px">
    <div class="menu" style="width: 15%;float:left;">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          style="width: 200px"

      >
        <el-sub-menu index="1">
          <template #title>
            <p>程序语言设计</p>
          </template>
          <el-menu-item-group>
            <template #title><span>程序设计</span></template>
            <el-menu-item index="1-1"><p>>C/C++语言设计</p></el-menu-item>
            <el-menu-item index="1-1"><p>php语言设计</p></el-menu-item>
            <el-menu-item index="1-2"><p>Java语言设计</p></el-menu-item>
            <el-menu-item index="1-2"><p>Python语言设计</p></el-menu-item>
            <el-menu-item index="1-2"><p>JavaScript语言设计</p></el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">

          <template #title>
            <p>算法设计</p>
          </template>
          <el-menu-item-group>
            <template #title><span>算法设计</span></template>
            <el-menu-item index="2-1"><el-link ref="/student/course"><span>数据结构与算法C/C++</span></el-link></el-menu-item>
            <el-menu-item index="2-2">数据结构与算法Java</el-menu-item>
            <el-menu-item index="2-3">算法设计与分析</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">

          <template #title>
            <p>云计算与大数据</p>
          </template>
          <el-menu-item-group>
            <template #title><span>云计算大数据</span></template>
            <el-menu-item index="3-1">计算科学</el-menu-item>
            <el-menu-item index="3-2">虚拟化</el-menu-item>
            <el-menu-item index="3-3">集群</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <p>数据库</p>
          </template>
          <el-menu-item-group>
            <template #title><span>数据库</span></template>
            <el-menu-item index="4-1">MySQL</el-menu-item>
            <el-menu-item index="4-2">SQL Server</el-menu-item>
            <el-menu-item index="4-3">Redis</el-menu-item>
            <el-menu-item index="4-4">MongoDB</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-link href="p"><p>更多</p></el-link>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="lunbo" style="width: 77%;float: right;height: 400px;padding-left: 20px;margin-right: 70px">
      <Swiper/>
      <!--      <a href="https://www.educoder.net/paths/ylzc54fh?userid=503673">-->
      <!--        <img src="https://ali-cdn.educoder.net/images/avatars/PortalImage/170?t=1659681136" style="width: 100%;height: 100%;margin-right: 20px"></a>-->
    </div>
  </div>


</template>

<script setup lang="ts">
import {ref} from "vue";
import Swiper from '../Swiper.vue'
const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>

</style>

