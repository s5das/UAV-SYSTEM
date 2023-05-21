<template>
  <div class="main">
    <el-menu
      default-active="1-1-1"
      class="el-menu-vertical-demo left"
      @select="handleSelect"
      background-color="#271b52"
      text-color="#fff"
      style="height: 100vh"
    >
      <el-menu-item index="1">
        <el-icon><Setting /></el-icon>
        <span>主页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Setting /></el-icon>
        <span>无人机状态</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Location /></el-icon>
        <span>创建任务</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><IconMenu /></el-icon>
        <span>无人机信息</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><IconMenu /></el-icon>
        <span>退出登录</span>
      </el-menu-item>
    </el-menu>

    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const handleSelect = (key) => {
  switch (key) {
    case '1':
      router.replace({
        path: 'map'
      })
      break
    case '2':
      router.replace({
        path: 'status2'
      })
      break
    case '3':
      router.replace({
        path: 'task'
      })
      break
    case '4':
      router.replace({
        path: '/login'
      })
      break
    case '5':
      router.replace({
        path: 'information'
      })
      break
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-around;
}

.left {
  position: fixed;
  top: 0;
  left: 0;
  width: 10%;
  height: 100%;

  .el-menu-item {
    color: #fff;
  }
}

.right {
  margin-left: 10vw;
  width: 90%;
}
</style>
