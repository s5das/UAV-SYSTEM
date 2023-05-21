<template>
  <div class="main">
    <img
      src="../assets/p1.svg"
      style="position: absolute; top: 46vh; right: 46.5vw; height: 8vh"
      alt=""
    />
    <div class="common-layout">
      <el-container>
        <el-header height="10vh" class="header"> 
          <div class="head-title">无人机Web控制台</div>
          </el-header>
        <el-container>
          <el-aside width="65vw" class="aside">
            <div class="des-left"></div>
          </el-aside>
          <el-main>
            <div class="box">
              <div class="title">用户登录</div>
              <el-form
                :model="formEl"
                ref="form"
                label-width="80px"
                :inline="false"
                :rules="rules"
              >
                <el-form-item label="用户名" prop="username">
                  <el-input
                    v-model="formEl.username"
                    placeholder="请输入用户名"
                  ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    v-model="formEl.password"
                    type="password"
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verify">
                  <el-row :gutter="20">
                    <el-col :span="12" :offset="0">
                      <el-input
                        v-model="formEl.verify"
                        placeholder="请输入验证码"
                      ></el-input
                    ></el-col>
                    <el-col :span="12" :offset="0">
                      <sIdentify
                        :identifyCode="codeofverify"
                        @click="changecode"
                      ></sIdentify>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit(form)" color="#826db8"
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-main>
        </el-container>
        <el-footer height="25vh" class="footer">
          <div>
            无人机数据共享平台是我校为师生搭建的一体化学习平台，集教育资源共建共享、在线学习于一体，师生可在线
          </div>
          <div>
            进行课程直播观看、学习资源获取、翻转课堂互动、知识分享交流等多样化学习活动
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import sIdentify from '../components/sIdentify.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 生成验证码
let codes = '1234567890'
const gencode = () => {
  let code = ''
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * codes.length)
    code += codes.slice(index, index + 1)
  }
  return code
}
// 验证码
let codeofverify = ref(gencode())
const changecode = () => {
  codeofverify.value = gencode()
}

const form = ref()
let formEl = reactive({
  username: '',
  password: '',
  verify: ''
})

const checkCode = (rule, value, callback) => {
  if (value !== codeofverify.value) {
    callback(new Error('请输入正确验证码'))
  } else {
    callback()
  }
}

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  verify: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { validator: checkCode, trigger: 'blur' }
  ]
})

const onSubmit = async (form) => {
  await form.validate((valid) => {
    if (valid) {
      router.replace({
        path: '/uav/map'
      })
    }
  })
}
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
  background: url('../assets/bg1.svg');

  .header {
    display: flex;
    align-items: center;

    .head-title {
      padding: 1vh 0.8vw;
      font-size: 2vh;
      color: #fff;
      background: linear-gradient(
          0deg,
          rgb(255 255 255 / 0.2%),
          rgb(255 255 255 / 0.2%)
        ),
        linear-gradient(
          90deg,
          rgb(229 156 255 / 24%) 0.01%,
          rgb(186 156 255 / 24%) 50.01%,
          rgb(156 178 255 / 24%) 100%
        );
      border-radius: 15px;
      font-weight: 600;
    }
  }

  .aside {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .des-left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 50vw;
      height: 20vh;
      font-weight: 600;

      .img {
        margin-bottom: 5vh;
        width: auto;
        height: 70%;
      }
    }
  }

  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 480px;
    height: 330px;
    border-radius: 20px;
    border: dashed  #fff 1px;
    flex-direction: column;

    .title {
      padding: 0.5vh 0.8vw;
      font-size: 3vh;
      color: #fff;
      background: linear-gradient(
          0deg,
          rgb(255 255 255 / 0.2%),
          rgb(255 255 255 / 0.2%)
        ),
        linear-gradient(
          90deg,
          rgb(229 156 255 / 24%) 0.01%,
          rgb(186 156 255 / 24%) 50.01%,
          rgb(156 178 255 / 24%) 100%
        );
      border-radius: 15px;
      font-weight: 600;
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vh auto;
  width: 55vw;
  color: white;
  flex-direction: column;
}
</style>
