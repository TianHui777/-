<script lang="ts" setup name="XtxCarousel">
import { onBeforeUnmount, onMounted, ref } from "vue";
// duration: 决定切换一张图需要的时间。它就是自动播放的间隔 autoPlay:是否自动播放
const {duration,autoPlay} = defineProps<{duration:number,autoPlay:boolean}>();
const arr = [
  "https://ali-cdn.educoder.net/images/avatars/PortalImage/160?t=1659681277",
  "https://ali-cdn.educoder.net/images/avatars/PortalImage/210?t=1665797169",
  "https://ali-cdn.educoder.net/images/avatars/PortalImage/211?t=1665796763",
  "https://ali-cdn.educoder.net/images/avatars/PortalImage/248?t=1671000401",
];

// 初始值 默认那个图片选中
let active = ref(0);
// 左边按钮
const left = () => {
  active.value--;
  // 如果初始值 大于 0 便让初始值 等于 数组的长度减一
  if(active.value < 0) {
    active.value = arr.length-1
  }
};

// 右边按钮
const right = () => {
  active.value++;
  // 如果初始值等于数组的长度变回跳 到 0
  if(active.value===arr.length){
    active.value=0
  }
};

// 销毁组件，清理定时器
onBeforeUnmount(()=>{
  stop()
})

// 自动播放 如果开启了自动播放 则每隔duration 去播放下一张 left()
onMounted(()=>{
  start()
})

let timer = -1
// 开始  // 鼠标离开要继续播放
// const start =()=>{
//   // 如果是true 就开启定时器
//   if(autoPlay){
//     timer=window.setInterval(()=>{
//       right()
//     },2000)
//   }
// }
const start =()=>{
  // 如果是true 就开启定时器
  timer=window.setInterval(()=>{
    right()
  },3000)
}

// 停止 // 鼠标经过要暂停播放
const stop = ()=>{
  // 清除定时器
  clearInterval(timer)
}
</script>

<template>
  <div class="xtx-carousel">
    <ul class="carousel-body" @mouseleave="start()" @mouseenter="stop()">
      <!-- fade 表示当前可见的图片 -->
      <li class="carousel-item" :class="{ fade: active === index }" v-for="(item, index) in arr" :key="index">
        <RouterLink to="/">
          <img :src="item" alt="" />
        </RouterLink>
      </li>
    </ul>
    <a href=" " @click="left" class="carousel-btn prev"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:;" @click="right" class="carousel-btn next"><i class="iconfont icon-angle-right"></i></a>
    <div class="carousel-indicator">
      <span @mouseover="active=index" :class="{active:active===index}" v-for="(item,index) in arr" :key="index"></span>

    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>