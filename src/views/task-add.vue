<template>
  <div class="main">
    <div class="title">任务创建</div>
    <div class="content">
      <el-radio-group v-model="step" label="label position">
        <el-radio-button label="1">第一步</el-radio-button>
        <el-radio-button label="2">第二步</el-radio-button>
        <el-radio-button label="3">第三步</el-radio-button>
      </el-radio-group>
      <div style="margin: 20px" />
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
        v-if="step == 1"
      >
        <el-form-item label="任务名">
          <el-input v-model="formLabelAlign.name" style="width: 500px" />
        </el-form-item>
        <el-form-item label="任务类型">
          <el-input v-model="formLabelAlign.region" style="width: 500px" />
        </el-form-item>
        <el-form-item label="初始化">
          <el-input v-model="formLabelAlign.type" style="width: 500px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="step += 1" v-if="step <= 2">
            下一步
          </el-button>
          <el-button type="primary" @click="step += 1" v-else> 提交 </el-button>
        </el-form-item>
      </el-form>

      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 60vw"
        v-show="step == 2"
      >
        <el-form-item label="位置选取">
          <div style="position: relative; width: 60vw">
            <div style="width: 55vw; height: 35vh" ref="container"></div>
            <el-button
              type="primary"
              @click="clearAll"
              style="position: absolute; bottom: 1vh; left: 2vw"
              >清除</el-button
            >
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="step += 1" v-if="step <= 2">
            下一步
          </el-button>
          <el-button type="primary" @click="step += 1" v-else> 提交 </el-button>
        </el-form-item>
      </el-form>

      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 60vw"
        v-if="step == 3"
      >
        <el-form-item label="无人机群组">
          <el-radio-group
            v-model="formLabelAlign.select"
            class="ml-4"
            style="overflow-y: scroll; width: 60vw; height: 35vh"
          >
            <el-radio label="1" size="large">
              <div class="info">
                <div class="left">
                  <div class="item-name">西安无人机群组1</div>
                  <div class="des">无人机数50 空闲数30</div>
                </div>
                <div class="right">
                  <div class="dis">距离：30km</div>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" size="large">
              <div class="info">
                <div class="left">
                  <div class="item-name">西安无人机群组2</div>
                  <div class="des">无人机数40 空闲数30</div>
                </div>
                <div class="right">
                  <div class="dis">距离：35km</div>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" size="large">
              <div class="info">
                <div class="left">
                  <div class="item-name">西安无人机群组3</div>
                  <div class="des">无人机数5 空闲数3</div>
                </div>
                <div class="right">
                  <div class="dis">距离：20km</div>
                </div>
              </div>
            </el-radio>
            <el-radio label="4" size="large">
              <div class="info">
                <div class="left">
                  <div class="item-name">西安无人机群组4</div>
                  <div class="des">无人机数10 空闲数1</div>
                </div>
                <div class="right">
                  <div class="dis">距离：40km</div>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="step += 1" v-if="step <= 2">
            下一步
          </el-button>
          <el-button type="primary" @click="submit" v-else> 提交 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'

let map
let point
let container = ref()

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
  overlays: [],
  select: ''
})

var overlaycomplete = function (e) {
  formLabelAlign.overlays.push(e.overlay)
  console.log(formLabelAlign.overlays)
}
const clearAll = () => {
  console.log(formLabelAlign.overlays)
  for (var i = 0; i < formLabelAlign.overlays.length; i++) {
    map.removeOverlay(formLabelAlign.overlays[i])
  }
  formLabelAlign.overlays.length = 0
}

const submit = () => {
  ;(formLabelAlign.name = ''),
    (formLabelAlign.region = ''),
    (formLabelAlign.type = ''),
    (formLabelAlign.overlays = []),
    (formLabelAlign.select = '')
  step.value = 1
  ElNotification({
    title: '提交成功',
    message: h('i', { style: 'color: teal' }, '创建任务成功')
  })
}

onMounted(() => {
  map = new BMap.Map(container.value)
  point = new BMap.Point(116.404, 39.915)
  map.centerAndZoom(point, 15)
  map.enableScrollWheelZoom(true)

  var styleOptions = {
    strokeColor: 'red', //边线颜色。
    fillColor: 'red', //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3, //边线的宽度，以像素为单位。
    strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
    fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
  }
  //实例化鼠标绘制工具
  var drawingManager = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: true, //是否显示工具栏
    drawingToolOptions: {
      anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
      offset: new BMap.Size(5, 5) //偏离值
    },
    circleOptions: styleOptions, //圆的样式
    polylineOptions: styleOptions, //线的样式
    polygonOptions: styleOptions, //多边形的样式
    rectangleOptions: styleOptions //矩形的样式
  })
  //添加鼠标绘制工具监听事件，用于获取绘制结果
  drawingManager.addEventListener('overlaycomplete', overlaycomplete)
})

const step = ref(1)
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;
  height: 100vh;
  text-align: center;

  .title {
    margin-top: 10vh;
    font-weight: 600;
    font-size: 3vh;
  }
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 5vw;
  margin-top: 20vh;
  width: 60vw;
  height: 50vh;
  border-radius: 30px;
  box-shadow: 1px 1px 1px 1px #bbb;
  flex-direction: column;
}

.info {
  display: flex;
  width: 20vw;
  justify-content: space-around;
  align-items: center;
  height: 10vh;

  .left {
    flex: 3;
    display: flex;
    flex-direction: column;

    .item-name {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3vh;
      font-size: 2vh;
      font-weight: 600;
    }

    .des {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2vh;
      font-size: 1.5vh;
      font-weight: 600;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    flex: 1;

    .dis {
      height: 5vh;
      border: 2px solid rgb(107 241 107);
      padding: 5px;
    }
  }
}
</style>
