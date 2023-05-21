<template>
  <section class="mainbox">
    <div class="column">
      <div class="demo">
        <div class="title">无人机工作数据</div>
        <ul class="list">
          <li
            v-for="(item, index) in ulList"
            :key="item.id"
            :class="!index && play ? 'toup' : ''"
          >
            {{ item.msg }}
          </li>
        </ul>
      </div>
    </div>
    <div class="column">
      <div class="no"></div>
      <div class="map">
        <div class="chart" ref="pic1"></div>
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
      </div>
    </div>
    <div class="column">
      <div class="demo">
        <div class="title">极端天气</div>
        <ul class="list">
          <li
            v-for="(item, index) in ulList"
            :key="item.id"
            :class="!index && play ? 'toup' : ''"
          >
            {{ item.msg }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'echarts/map/js/china.js'
import getGuangXiMap from '../http/api/getmap'
// 1. 实例化对象
import * as echarts from 'echarts'
import map_data from '../assets/map.js'

let ulList = reactive([
  { msg: '这是第一条信息', id: '0' },
  { msg: '这是第二条信息', id: '1' },
  { msg: '这是第三条信息', id: '2' },
  { msg: '这是第四条信息', id: '3' },
  { msg: '这是第五条信息', id: '4' },
  { msg: '这是第六条信息', id: '5' },
  { msg: '这是第七条信息', id: '6' },
  { msg: '这是第八条信息', id: '7' },
  { msg: '这是第九条信息', id: '8' },
  { msg: '这是第十一条信息', id: '9' },
  { msg: '这是第十二条信息', id: '10' },
  { msg: '这是第十三条信息', id: '11' },
  { msg: '这是第十四条信息', id: '12' },
  { msg: '这是第十五条信息', id: '13' },
  { msg: '这是第十六条信息', id: '14' },
  { msg: '这是第十七条信息', id: '15' },
  { msg: '这是第十八条信息', id: '16' },
  { msg: '这是第十九条信息', id: '17' }
])
let play = ref(false)

const startPlay = () => {
  play.value = true //开始播放
  setTimeout(() => {
    ulList.push(ulList[0]) //将第一条数据塞到最后一个
    ulList.shift() //删除第一条数据
    play.value = false //暂停播放,此处修改，保证每一次都会有动画显示
  }, 500)
}

let pic1 = ref()
onMounted(() => {
  setInterval(startPlay, 2000)
  var myChart = echarts.init(pic1.value)
  // 显示 loading 动画
  myChart.showLoading()
  // 再得到数据的基础上，进行地图绘制
  // 得到结果后，关闭动画
  myChart.hideLoading()
  // 注册地图(数据放在axios返回对象的data中哦)
  echarts.registerMap('GX', map_data)
  var option = {
    visualMap: {
      min: 1111,
      max: 333332,
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'blue']
      }
    },

    roam: true,
    //   放大我们的地图
    title: {
      text: '陕西无人机设备统计图(/万元)',
      left: 'center',
      textStyle: {
        //文字颜色
        color: '#fff',
        //字体风格,'normal','italic','oblique'
        fontStyle: 'normal',
        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        fontWeight: 'bold',
        //字体系列
        fontFamily: 'sans-serif',
        //字体大小
        fontSize: 18
      }
    },
    series: [
      {
        name: '广西地图',
        type: 'map',
        map: 'GX', // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
        label: {
          show: true,
          color: '#fff'
        },
        itemStyle: {
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: [
          { name: '榆林市', value: 11111 },
          { name: '延安市', value: 22221 },
          { name: '铜川市', value: 33333 },
          { name: '渭南市', value: 22231 },
          { name: '咸阳市', value: 44441 },
          { name: '宝鸡市', value: 44444 },
          { name: '商洛市', value: 162475 },
          { name: '汉中市', value: 65454 },
          { name: '安康市', value: 77771 },
          { name: '西安市', value: 88884 }
        ]
      }
    ]
  }
  myChart.setOption(option)
})
</script>

<style lang="less" scoped>
.toup {
  margin-top: -40px;
  transition: all 0.5s;
}

.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  height: 80vh;
  font-size: 1vh;
  color: white;
  flex-direction: column;

  .title {
    display: flex;
    justify-content: center;
    padding: 1vh 1vw;
    margin-bottom: 2vh;
    width: 11vw;
    font-size: 2vh;
    background: linear-gradient(
        0deg,
        rgb(255 255 255 / 0.2%),
        rgb(255 255 255 / 0.2%)
      ),
      linear-gradient(
        90deg,
        rgb(229 156 255 / 24%) 0.01%,
        rgb(186 156 255 / 24%) 50.01%,
        rgb(156 178 255 / 24%) 100%
      );
    border-radius: 15px;
    font-weight: 600;
  }

  .list {
    overflow: hidden;
    padding: 0;
    margin: 0;
    height: 80vh;
    text-align: center;
    list-style: none;
  }

  li {
    height: 40px;
    text-align: left;
    line-height: 40px;
  }
}

@font-face {
  font-family: electronicFont;
  src: url('../font/DS-DIGIT.TTF');
}

.mainbox {
  display: flex;
  padding: 2vh 0;
  height: 96vh;
  background: #010108 url('../assets/bg2.png');

  .column {
    flex: 2.5;

    &:nth-child(2) {
      overflow: hidden;
      margin: 0 0.125rem 0.1875rem;
      flex: 5;
    }
  }
}

.panel {
  position: relative;
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  height: 30vh;
  border: 1px solid rgb(25 186 139 / 17%);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }

  .panel-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      content: '';
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
  }

  h2 {
    height: 2vh;
    font-size: 0.25rem;
    text-align: center;
    color: #fff;
    line-height: 0.6rem;
    font-weight: 400;

    a {
      margin: 0 0.1875rem;
      text-decoration: underline;
      color: #fff;
    }
  }

  .chart {
    margin-bottom: 10vh;
    height: 25vh;
  }
}

.no {
  padding: 0.1875rem;
  background: rgb(101 132 226 / 10%);

  .no-hd {
    position: relative;
    border: 1px solid rgb(25 186 139 / 17%);

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 10px;
      content: '';
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 30px;
      height: 10px;
      content: '';
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }

    ul {
      display: flex;

      li {
        position: relative;
        padding: 0.05rem 0;
        height: 1rem;
        font-size: 0.875rem;
        text-align: center;
        color: #ffeb7b;
        flex: 1;
        line-height: 1rem;
        font-weight: bold;

        &:first-child::after {
          position: absolute;
          top: 25%;
          right: 0;
          width: 1px;
          height: 50%;
          background: rgb(255 255 255 / 20%);
          content: '';
        }
      }
    }
  }

  .no-bd ul {
    display: flex;

    li {
      padding-top: 0.125rem;
      height: 0.5rem;
      font-size: 0.225rem;
      text-align: center;
      color: rgb(255 255 255 / 70%);
      flex: 1;
      line-height: 0.5rem;
    }
  }
}

.map {
  position: relative;
  height: 70vh;

  .chart {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 70vh;
  }

  .map1,
  .map2,
  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.475rem;
    height: 45vh;
    background: url('../images/map.png') no-repeat;
    background-size: 100% 100%;
    opacity: 0.3;
  }

  .map2 {
    z-index: 2;
    width: 8.0375rem;
    height: 45vh;
    opacity: 0.6;
    background-image: url('../images/lbx.png');
    animation: rotate 15s linear infinite;
  }

  .map3 {
    width: 7.075rem;
    height: 45vh;
    background-image: url('../images/jt.png');
    animation: rotate1 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>
