<template>
  <div class="main">
    <ElConfigProvider :locale="zhCn">
      <router-view></router-view>
    </ElConfigProvider>
    <div class="des">Xidian Licensed | Copyright © 2023-PRESENT</div>
  </div>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style lang="less" scoped>
.des {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 95vw;
}
</style>
