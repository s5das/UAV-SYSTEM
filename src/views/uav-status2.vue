<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="名称" width="180" />
    <el-table-column prop="m1" label="电量" width="180" />
    <el-table-column prop="m2" label="CPU" />
    <el-table-column prop="m3" label="续航时间" />
    <el-table-column prop="m4" label="控制距离" />
    <el-table-column prop="m5" label="组网状态" />
  </el-table>
</template>

<script setup>

const tableData = [
  {
    name: '无人机1',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'已组网'
  },
  {
    name: '无人机2',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'已组网'
  },
  {
    name: '无人机3',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'已组网'
  },
  {
    name: '无人机4',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'已组网'
  },
  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },
  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },
  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },
  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },
  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },  {
    name: '无人机5',
    m1:'85%',
    m2:'90%',
    m3:'10h',
    m4:'60km',
    m5:'未组网'
  },
]
</script>

<style lang="less" scoped></style>
