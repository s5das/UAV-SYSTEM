<template>
  <div class="main">
    <div class="main-page-head">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <div class="des-left">
          <img src="./assets/uav.svg" class="img" />
          <div>UAV CONTROL SYSTEM</div>
        </div>
        <div class="flex-grow" />
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="2">介绍</el-menu-item>
        <el-menu-item index="3">关于我们</el-menu-item>
        <el-sub-menu index="4">
          <template #title>应用</template>
          <el-menu-item index="4-1">无人机状态</el-menu-item>
          <el-menu-item index="4-2">无人机控制</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <ElConfigProvider :locale="zhCn">
      <router-view></router-view>
    </ElConfigProvider>
    <div class="des">Xidian Licensed | Copyright © 2023-PRESENT</div>
  </div>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useRouter } from 'vue-router'
const router = useRouter()
let activeIndex = ref('1')
provide('activeIndex', activeIndex)
const handleSelect = (key) => {
  switch (key) {
    case '1':
      activeIndex.value = '1'
      router.replace({
        path: '/'
      })
      break
    case '2':
      activeIndex.value = '2'
      router.replace({
        path: '/features'
      })
      break
    case '3':
      activeIndex.value = '3'
      router.replace({
        path: '/aboutus'
      })
      break
    case '4-1':
      activeIndex.value = '4-1'
      router.replace({
        path: 'uav/status'
      })
      break
    case '4-2':
      activeIndex.value = '4-2'
      router.replace({
        path: '/control'
      })
      break
  }
}
</script>

<style lang="less" scoped>
.main-page-head {
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100vw;
  height: 8vh;
  background-color: #fff;
}

.des-left {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  height: 7vh;

  .img {
    width: auto;
    height: 70%;
  }
}

.flex-grow {
  flex-grow: 1;
}

.des {
  display: flex;
  justify-content: center;
  width: 95vw;
  margin: 0 auto;
}
</style>
