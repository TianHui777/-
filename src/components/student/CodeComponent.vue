<template>
  <el-container>
    <el-aside width="500px">题目列表</el-aside>
    <el-main>
      <el-button type="primary" @click="runCode(code)">
        <el-icon>
          <VideoPlay/>
        </el-icon>
      </el-button>
      <codemirror
          v-model="code"
          placeholder="Code gose here..."
          :style="{ height: '400px',width:'700px' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tabSize="2"
          :extensions="extensions"
      />

    </el-main>

  </el-container>

</template>

<script setup>
import {Codemirror} from "vue-codemirror";
import {javascript} from "@codemirror/lang-javascript";
import {python} from "@codemirror/lang-python";
import {oneDark} from "@codemirror/theme-one-dark";

import {ref} from "vue";


let code = ref(`console.log('Hello, world!')`);
const extensions = [python(), oneDark];
const runCode = (code) => {
  console.log(code)
}

</script>
