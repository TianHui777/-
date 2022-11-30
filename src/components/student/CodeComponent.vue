<template>
  <el-container>
    <el-aside width="500px">
      <!--题目展示-->
      <div class="container mx-auto px-10">
        <h1>题目描述</h1>
        <p>背包问题背包问题背包问题背包问题背包问题背包问题背包问题背包问题背包问题</p>
      </div>


    </el-aside>
    <el-main>

      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button
            v-for="button in buttons"
            :key="button.text"
            :type="button.type"
            text
            @click="changeLanguage(button.text)"
        >{{ button.text }}
        </el-button
        >
      </div>
      <monacoEditor
          v-model="value"
          :language="language.type"
          width="900px"
          height="600px"
          @editor-mounted="editorMounted"

      ></monacoEditor>
    </el-main>


  </el-container>


</template>

<script setup lang="ts">

import MonacoEditor from "../monacoEditor.vue";
import * as monaco from 'monaco-editor'
import {reactive, ref, computed} from "vue";

const value = ref('')
setInterval((value) => {
  console.log(value)
}, 5000)
let language = reactive({type: 'python'})
const editorMounted = (editor: monaco.editor.IStandaloneCodeEditor) => {
  console.log('editor实例加载完成', editor)
}

// 语言选择按钮
const buttons = [
  {type: 'plain', text: 'java'},
  {type: 'primary', text: 'python'},
  {type: 'success', text: 'javascript'},
  {type: 'warning', text: 'typeScript'},
] as const

// 语言选择按钮点击事件
const changeLanguage = (type: string) => {
  language = {type: type}

}


</script>

<style scoped>

</style>
