<template>
  <el-container>
    <el-aside width="500px">
      <p>任务描述</p>
      函数是组织好的、可重复使用的、用来实现单一或相关联功能的代码段。函数能提高代码的重复利用率，一般来讲稍微复杂些的程序中必然包含函数。

      本关的任务是让读者初识 Python 函数，定义一个函数来实现华氏-摄氏温度的转换。
    <p>编程要求</p>

    本关的编程任务是补全 src/step1/step1.py 文件中的代码，要求对于输入的数完成从摄氏度到华氏度的转化。

    从摄氏度到华氏度的转化公式为：
    F(C)= 5/ 9 C+32
    </el-aside>
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
