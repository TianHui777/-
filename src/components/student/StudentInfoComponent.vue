<template>
  <div class="personalCenter">
    <el-container>
      <el-container>
        <el-aside width="400px">
          <el-col :span="24">
            <div class="sub-title"></div>
            <div class="info-image" @click="showDialog">
              <el-avatar :size="100" :src="avatarImg"/>
              <span class="info-edit">
								<i class="el-icon-lx-camerafill"></i>
							</span>
            </div>
          </el-col>
          <el-input
              v-model="form.input1"
              type="text"
              placeholder="姓名"
          ></el-input>
          <el-input
              v-model="form.input2"
              type="text"
              placeholder="性别"
              show-word-limit
          ></el-input>
          <el-input
              v-model="form.input3"
              type="text"
              placeholder="身份"
              show-word-limit
          ></el-input>
          <el-input
              v-model="form.input4"
              placeholder="学校"
          ></el-input>
          <el-input
              v-model="form.input5"
              type="text"
              placeholder="学院"
              show-word-limit
          ></el-input>
          <el-input
              v-model="form.input6"
              type="text"
              placeholder="学号"
              maxlength="20"
              show-word-limit
          ></el-input>
          <el-input
              v-model="form.input7"
              type="text"
              placeholder="密码"
              maxlength="20"
              show-word-limit
              show-password
          ></el-input>
          <el-input v-model="form.input8" placeholder="邮箱">
            <template slot="append">@163.com</template>
          </el-input>

          <el-input
              v-model="form.input9"
              type="text"
              placeholder="电话"
              maxlength="20"
              show-word-limit
          ></el-input>
          <el-button type="primary" @click="success">保存</el-button>
        </el-aside>
        <el-container>
          <el-main>
            <el-card class="box-card">
              <div>
                <span style="float: left" shadow="hover"><b>个人信息</b></span>
                <br />
                <br />
                <span>姓名：{{form.input1}}</span>
                <el-divider></el-divider>
                <span>性别：{{form.input2}}</span>
                <el-divider></el-divider>
                <span>身份：{{form.input3}}</span>
                <el-divider></el-divider>
                <span>学校：{{form.input4}}</span>
                <el-divider></el-divider>
                <span>学院：{{form.input5}}</span>
                <el-divider></el-divider>
                <span>学号：{{form.input6}}</span>
                <el-divider></el-divider>
                <span>密码：{{form.input7}}
                </span>
                <el-divider></el-divider>
                <span>邮箱：{{form.input8}}</span>
                <el-divider></el-divider>
                <span>电话：{{form.input9}}</span>
              </div>
            </el-card>
            <el-dialog title="裁剪图片" v-model="dialogVisible" width="600px">
              <vue-cropper
                  ref="cropper"
                  :src="imgSrc"
                  :ready="cropImage"
                  :zoom="cropImage"
                  :cropmove="cropImage"
                  style="width: 100%; height: 400px"
              ></vue-cropper>

              <template #footer>
				<span class="dialog-footer">
					<el-button class="crop-demo-btn" type="primary"
          >选择图片
						<input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
					</el-button>
					<el-button  @click="saveAvatar">上传并保存</el-button>
				</span>
              </template>
            </el-dialog>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts" name="student">
import {reactive, ref} from 'vue';
import { Delete, Edit, Search, Plus } from '@element-plus/icons-vue';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import avatar from '../../assets/img/img.jpg';
import { h } from 'vue'
import { ElMessage } from 'element-plus'
const name = localStorage.getItem('ms_username');
const success = () => {
  ElMessage('保存成功！')
};

const avatarImg = ref(avatar);
const imgSrc = ref('');
const cropImg = ref('');
const dialogVisible = ref(false);
const cropper: any = ref();

const showDialog = () => {
  dialogVisible.value = true;
  imgSrc.value = avatarImg.value;
};

const setImage = (e: any) => {
  const file = e.target.files[0];
  if (!file.type.includes('image/')) {
    return;
  }
  const reader = new FileReader();
  reader.onload = (event: any) => {
    dialogVisible.value = true;
    imgSrc.value = event.target.result;
    cropper.value && cropper.value.replace(event.target.result);
  };
  reader.readAsDataURL(file);
};

const cropImage = () => {
  cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
};

const saveAvatar = () => {
  avatarImg.value = cropImg.value;
  dialogVisible.value = false;
};
const form = reactive({
  showInput6:false,
  input1:'张三',
  input2: '男',
  input3: '学生',
  input4: '云南大学',
  input5: '软件学院',
  input6: '20201120000',
  input7: '******',
  input8: '123456@qq.com',
  input9:'123456789'
});

</script>
<style>
.el-header {
  line-height: 60px;
  text-align: center;
  background-color: #b3c0d1;
}
.el-aside {
  line-height: 44px;
  text-align: center;
  background-color: #d3dce6;
}
.el-main {
  line-height: 36px;
  text-align: center;
  background-color: #e9eef3;
}

.demo-basic--circle {
  align: 'center';
  margin-top: 30px;
  margin-left: 150px;
}
.block {
  margin-left: 25px;
  font-weight: bold;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}


.box-card {
  width: 1000px;
  border-radius: 30px;
  height: 600px;
  overflow-y: scroll;
}
</style>
