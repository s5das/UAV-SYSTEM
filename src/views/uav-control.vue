<template>
  <div id="container" style="width: 100%; height: 100vh" ref="container"></div>
  <el-button type="primary" @click="clearAll" style="position: fixed;bottom: 1vh;left: 18vw;">清除</el-button>
  <el-button type="primary" @click="submit" style="position: fixed;bottom: 1vh;left: 10vw;">确定</el-button>
</template>

<script setup>
let map
let point
let container = ref()
var overlays = reactive([])
var overlaycomplete = function (e) {
  overlays.push(e.overlay)
  console.log(overlays)
}
const clearAll = () => {
  console.log(overlays)
  for (var i = 0; i < overlays.length; i++) {
    map.removeOverlay(overlays[i])
  }
  overlays.length = 0
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
</script>

<style lang="less" scoped></style>
