<template>
  <div class="main">
    <div class="block">
      <div>
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="
            display: flex;
            justify-content: space-around;
            margin-top: 5vh;
            height: 15vh;
          "
        >
          <el-form-item label="任务">
            <el-select v-model="value1" class="m-2" placeholder="请选择任务">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="地区">
            <el-select v-model="value2" class="m-2" placeholder="请选择地区">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="组网">
            <el-select
              v-model="value3"
              class="m-2"
              placeholder="请选择组网状态"
            >
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              color="#626aef"
              plain
              @click="submitForm(ruleFormRef)"
            >
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <div class="table-area">
          <div class="title-box">
            <div
              v-for="item in table_content"
              style="width: 8vw; height: 1.5vh; font-size: 1.5vh"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="items">
            <div class="item" v-for="item in table_content">
              <div class="content-box" v-for="item2 in tableData">
                <div class="content">{{ item2[item.prop] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="名称" width="180" />
    <el-table-column prop="m1" label="电量" width="180" />
    <el-table-column prop="m2" label="CPU" />
    <el-table-column prop="m3" label="续航时间" />
    <el-table-column prop="m4" label="控制距离" />
    <el-table-column prop="m5" label="组网状态" />
  </el-table> -->
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

const table_content = [
  {
    name: '名称',
    prop: 'name'
  },
  {
    name: '电量',
    prop: 'm1'
  },
  {
    name: 'CPU',
    prop: 'm2'
  },
  {
    name: '续航时间',
    prop: 'm3'
  },
  {
    name: '控制距离',
    prop: 'm4'
  },
  {
    name: '组网状态',
    prop: 'm5'
  }
]
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

<style lang="less" scoped>
.main {
  height: 100vh;
  background: #010108;

  .block {
    margin-top: 5vh;
    width: 80vw;
    height: 80vh;
    background-color: rgb(42 39 61 / 50%);
    border-radius: 20px;
  }

  .table-area {
    overflow-y: scroll;
    margin: 5vh auto;
    width: 75vw;
    height: 50vh;

    .title-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 2vh;
      margin: 5vh auto;
      width: 70vw;
      height: 6vh;
      font-size: 1vh;
      color: #ba9cff;
      border: #ba9cff 1px solid;
      border-radius: 20px;
    }

    .items {
      display: flex;
      justify-content: space-around;
      width: 70vw;
      .item {
        width: 8vw;

        .content-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 8vw;
          font-size: 1vh;
          color: #ba9cff;
          flex-direction: column;
        }

        .content {
        }
      }
    }
  }
}
</style>
