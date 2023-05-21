<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="任务名" width="180" />
    <el-table-column prop="m1" label="创建时间" width="180" />
    <el-table-column prop="m2" label="地点" />
    <el-table-column prop="m3" label="无人机状况" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small">查看</el-button>
        <el-button size="small" type="danger">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'

let value1 = ref('')
let value2 = ref('')
let value3 = ref('')

let options = reactive([
  {
    value: 1,
    label: '抗洪'
  },
  {
    value: 2,
    label: '训练'
  },
  {
    value: 3,
    label: '地震'
  }
])

let options2 = reactive([
  {
    value: 1,
    label: '陕西'
  },
  {
    value: 2,
    label: '山西'
  },
  {
    value: 3,
    label: '四川'
  }
])

let options3 = reactive([
  {
    value: 1,
    label: '已组网'
  },
  {
    value: 2,
    label: '未组网'
  }
])

const tableData = [
  {
    name: '无人机1',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '已组网'
  },
  {
    name: '无人机2',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '已组网'
  },
  {
    name: '无人机3',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '已组网'
  },
  {
    name: '无人机4',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '已组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  },
  {
    name: '无人机5',
    m1: '85%',
    m2: '90%',
    m3: '10h',
    m4: '60km',
    m5: '未组网'
  }
]
</script>
