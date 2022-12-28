<template>
  <div style="overflow-y:scroll;overflow-x:hidden;height:100%">
  <div class='detail-title'>
    <div class='detail-main'>
      <div class='detail-map'>
      </div>
      <div class='detail-name'>python程序设计</div>
      <div class='detail-content'>老师：王普明</div>
    </div>
  </div>
  <div class='detail-container'>
    <div class='tab-name'>
      <ul>
      </ul>
    </div>
    <div class='tab-chapters'>
      <div class='detail-list'>
        <div class='item'>
          <ul>
            <li>

              <div class='course'>
                <div>01 第一个函数</div>
              </div>
              <div class='course'>
                <div>2022-12-23至2022-12-28</div>
              </div>

              <router-link to="/student/code">
              <div class='course-video'>开始学习</div>
              </router-link>
            </li>
            <li>

              <div class='course'>
                <div>02 在函数中修改全局变量</div>
              </div>
              <div class='course'>
                <div>2022-12-23至2022-12-28</div>
              </div>
              <router-link to="/student/code">
              <div class='course-video'>开始学习</div>
              </router-link>
            </li>
            <li>

              <div class='course'>
                <div>03 练习使用参数</div>
              </div>
              <div class='course'>
                <div>2022-12-23至2022-12-28</div>
              </div>
              <router-link to="/student/code">
              <div class='course-video'>开始学习</div>
              </router-link>
            </li>
            <li>

              <div class='course'>
                <div>04 具有多个返回值的函数</div>
              </div>
              <div class='course'>
                <div>2022-12-23至2022-12-28</div>
              </div>
              <router-link to="/student/code">
              <div class='course-video'>开始学习</div></router-link>
            </li>
<!--            <li>-->
<!--              <div class='course'>-->
<!--                <div>05 Lambda 表达式</div>-->
<!--              </div>-->
<!--              <div>2022-12-23至2022-12-28</div>-->
<!--              <div class='course-video'>开始学习</div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class='course'>-->
<!--                <div>06 使用关键字参数</div>-->
<!--              </div>-->
<!--              <div>2022-12-23至2022-12-28</div>-->
<!--              <div class='course-video'>开始学习</div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class='course'>-->
<!--                <div>07 使用可变长参数</div>-->
<!--              </div>-->
<!--              <div>2022-12-23至2022-12-28</div>-->
<!--              <div class='course-video'>开始学习</div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class='course'>-->
<!--                <div>08 使用递归</div>-->
<!--              </div>-->
<!--              <div>2022-12-23至2022-12-28</div>-->
<!--              <div class='course-video'>开始学习</div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class='course'>-->
<!--                <div>09 生成器与yield</div>-->
<!--              </div>-->
<!--              <div>2022-12-23至2022-12-28</div>-->
<!--              <div class='course-video'>开始学习</div>-->
<!--            </li>-->
          </ul>
        </div>
<!--        <div class='item'>-->
<!--          <ul>-->
<!--            <li>-->
<!--              <div class='course'>-->
<!--                <div>视频：1-1开发语言必会知识（10:44)</div>-->
<!--              </div>-->
<!--              <div class='course-video'>开始学习</div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class='course'>-->
<!--                <div>视频：1-1开发语言必会知识（10:44)</div>-->
<!--              </div>-->
<!--              <div class='course-video'>开始学习</div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
      </div>
    </div>
  </div>
  </div>
<!--  <div>学生选课页面</div>-->
<!--  <div>点击课程即可进入对应的题目选择界面</div>-->

<!--  <div>例如:</div>-->
<!--  <p>test</p>-->

</template>

<script setup>
//引入组件
//element
import { ArrowRight } from '@element-plus/icons-vue'

//章节 和 下载笔记代码切换数据
// let isActive = ref(1);
</script>

<style scoped>
.detail-title{
  width: 100%;
  height: 183px;
  background: url('../../assets/img/detail-bg.png') no-repeat;
  background-size: 100% 100%;
}
.detail-main{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1000px;
  margin: 0 auto;
  height: 100%;
}
::v-deep .el-breadcrumb__separator{
  color: #fff;
}
::v-deep .el-breadcrumb__inner{
  color: #fff;
}
::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
  color: #fff;
  font-weight: 500;
}
.detail-name{
  font-size: 27px;
  font-weight: 500;
  color: #FFFFFF;
}
.detail-content{
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
}
.tab-name{
  width: 100%;
  height: 57px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1600);
}
.tab-name ul{
  display: flex;
  align-items: center;
  height: 57px;
  width: 1000px;
  margin: 0 auto;
  font-size: 16px;
  cursor: pointer;
}
.tab-name ul li + li{
  margin-left: 67px;
}
.tab-name ul li.active{
  position: relative;
  color: #388FFF;
  font-weight: bold;
}
.tab-name ul li.active:after{
  content: '';
  position: absolute;
  left: 50%;
  margin-left: -20%;
  bottom: -6px;
  width: 40%;
  height: 3px;
  background: #388FFF;
  border-radius: 1px;
}
.tab-chapters{
  width: 1000px;
  margin: 0 auto;
}
.tab-txt{
  margin: 29px 0;
  width: 100%;
  height: 147px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.0900);
  border-radius: 5px;
}
.txt-content{
  padding: 24px 27px;
}
.txt-btn{
  display: flex;
  justify-content: flex-end;
}
.payment{
  margin-right: 13px;
  width: 99px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #FFFFFF;
  background: #F11D1D;
  border-radius: 15px;
}
.add-cart{
  margin-right: 33px;
  width: 99px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #F11D1D;
  background: #FDE7E7;
  border-radius: 15px;
}
.detail-list{
  margin-top: 30px;
}
.item{
  margin-bottom: 10px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.0900);
  border-radius: 5px;
}
.item-title{
  padding: 16px 27px;
}
.item-name{
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.item-key{
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #5C5C5C;
}
.item ul{

}
.item ul li{
  display: flex;
  justify-content: space-between;
  padding: 16px 27px;
}
.item ul li .course{
  display: flex;
}
.course{
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.course img{
  width: 13px;
  height: 11px;
  margin-right: 7px;
}
.course-video{
  width: 73px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  color: #FFFFFF;
  line-height:20px;
  background: #388FFF;
  border-radius: 8px;
}
.tab-main{
  width: 1000px;
  margin: 0 auto;
}
.tab-main ul{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.tab-main ul li{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  line-height: 35px;
  font-size: 14px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 9%);
}
.download{
  width: 100px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  background-color: #007bff;
}
</style>