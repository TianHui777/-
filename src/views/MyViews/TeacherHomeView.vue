<template>
  <Header></Header>
  <sidebar></sidebar>

  <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
    <!--		<v-tags></v-tags>-->
    <div class="content">
     <RouterView></RouterView>
    </div>
  </div>

</template>

<script setup lang="ts">
import Header from "../../components/teacher/header.vue"
import {useSidebarStore} from '../../store/sidebar';
import Sidebar from "../../components/teacher/sidebar.vue";
const sidebar = useSidebarStore();
</script>

<style lang="less" scoped>

</style>
