<template>
  <div class="main">
    <el-menu
      default-active="1-1-1"
      class="el-menu-vertical-demo left"
      @select="handleSelect"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>无人机状态</span>
        </template>
        <el-sub-menu index="1-1">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>在线数:2</span>
          </template>
          <el-menu-item index="1-1-1">
            <el-icon><Setting /></el-icon>
            <span>无人机2</span>
          </el-menu-item>
          <el-menu-item index="1-1-2">
            <el-icon><Setting /></el-icon>
            <span>无人机4</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="1-2">
          <el-icon><Setting /></el-icon>
          <span>离线数:2</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <el-icon><Document /></el-icon>
          <span>组网状态</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Location /></el-icon>
        <span>地图</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><IconMenu /></el-icon>
        <span>控制台</span>
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
    case '1-1-1':
      router.replace({
        path: 'status'
      })
      break
    case '2':
      router.replace({
        path: 'map'
      })
      break
    case '3':
      router.replace({
        path: 'control'
      })
      break
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10vh;
}

.left {
  position: fixed;
  top: 0;
  left: 0;
  width: 10%;
}

.right {
  margin-left: 10vw;
  width: 90%;
}
</style>
