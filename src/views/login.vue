<template>
  <div class="main">
    <div class="common-layout">
      <el-container>
        <el-header height="10vh" class="header">
          <div class="head-title">无人机web控制台</div>
        </el-header>
        <el-container>
          <el-aside width="65vw" class="aside">
            <div class="des-left">
              <img src="../assets/uav.svg" class="img" />
              <div>大数据无人机控制平台</div>
            </div>
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
                  <el-button type="primary" @click="onSubmit(form)"
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-main>
        </el-container>
        <el-footer height="80vh" class="footer">简介</el-footer>
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
        path: 'uav/status1'
      })
    }
  })
}
</script>

<style lang="less" scoped>
.main {
  .header {
    display: flex;
    align-items: center;
    background-color: #2bb4d0;

    .head-title {
      font-size: 3vh;
      font-weight: 600;
      color: #fff;
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
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px #bbb;
    flex-direction: column;

    .title {
      font-size: 18px;
      font-weight: 600;
    }
  }
}

.footer {
  background-color: #2bb4d0;
}
</style>
