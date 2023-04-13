<template>
  <div class="uav-item" v-for="(item,index) in 4">
    <div class="uav-list">
      <div class="profile">
        <div class="name">无人机1</div>
        <img src="../assets/uav4.png" alt="" class="ico" />
      </div>
      <div class="details">
        <div class="details-item">
          <div class="des">电量:{{ uav[0].energy }}%</div>
        </div>

        <div class="details-item">
          <div class="des">CUP使用率:{{ uav[0].cpu }}%</div>
        </div>
        <div class="details-item">
          <div class="des">剩余续航时间:{{ uav[0].time }}h</div>
        </div>
        <div class="details-item">
          <div class="des">距离控制器距离:{{ uav[0].distance }}m</div>
        </div>
      </div>
    </div>
    <div class="pic" :ref="'pic'+(index+1)"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'

const pic1 = ref()
const pic2 = ref()
const pic3 = ref()
const pic4 = ref()

onMounted(() => {

  var myChart = echarts.init(pic1.value[0])
  var myChart1 = echarts.init(pic2.value[0])
  var myChart2 = echarts.init(pic3.value[0])
  var myChart3 = echarts.init(pic4.value[0])

  var option;

let base = +new Date(2016, 9, 3);
let oneDay = 24 * 3600 * 1000;
let valueBase = Math.random() * 300;
let valueBase2 = Math.random() * 50;
let data = [];
let data2 = [];
for (var i = 1; i < 10; i++) {
  var now = new Date((base += oneDay));
  var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
  valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
  valueBase <= 0 && (valueBase = Math.random() * 300);
  data.push([dayStr, valueBase]);
  valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
  valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
  data2.push([dayStr, valueBase2]);
}
option = {
  title: {
    left: 'center',
    text: 'CPU Condition'
  },
  legend: {
    top: 'bottom',
    data: ['Intention']
  },
  tooltip: {
    triggerOn: 'none',
    position: function (pt) {
      return [pt[0], 130];
    }
  },
  xAxis: {
    type: 'time',
    axisPointer: {
      value: '2016-10-7',
      snap: true,
      lineStyle: {
        color: '#7581BD',
        width: 2
      },
      label: {
        show: true,
        formatter: function (params) {
          return echarts.format.formatTime('yyyy-MM-dd', params.value);
        },
        backgroundColor: '#7581BD'
      },
      handle: {
        show: true,
        color: '#7581BD'
      }
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisTick: {
      inside: true
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      inside: true,
      formatter: '{value}\n'
    },
    z: 10
  },
  grid: {
    top: 110,
    left: 15,
    right: 15,
    height: 160
  },
  dataZoom: [
    {
      type: 'inside',
      throttle: 50
    }
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      sampling: 'average',
      itemStyle: {
        color: '#0770FF'
      },
      stack: 'a',
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(58,77,233,0.8)'
          },
          {
            offset: 1,
            color: 'rgba(58,77,233,0.3)'
          }
        ])
      },
      data: data
    },
    {
      name: 'Fake Data',
      type: 'line',
      smooth: true,
      stack: 'a',
      symbol: 'circle',
      symbolSize: 5,
      sampling: 'average',
      itemStyle: {
        color: '#F2597F'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(213,72,120,0.8)'
          },
          {
            offset: 1,
            color: 'rgba(213,72,120,0.3)'
          }
        ])
      },
      data: data2
    }
  ]
};
  option && myChart.setOption(option)
  option && myChart1.setOption(option)
  option && myChart2.setOption(option)
  option && myChart3.setOption(option)
})




let uav = reactive([
  {
    id: 1,
    energy: 99,
    cpu: 50,
    time: 10,
    distance: 100,
    status: 1
  },
  {
    id: 2,
    energy: 60,
    cpu: 50,
    time: 15,
    distance: 100,
    status: 1
  },
  {
    id: 3,
    energy: 99,
    cpu: 50,
    time: 10,
    distance: 100,
    status: 0
  }
])
</script>

<style lang="less" scoped>
.uav-item {
  display: flex;
  justify-content: center;
  padding: 3vh 0;
  margin: 2vh auto;
  width: 95%;
  background-color: #DDF2FF;
  border-radius: 20px;

  .uav-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .profile {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15vw;
      flex-direction: column;

      .name {
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ico {
        width: 15vw;
        height: 15vh;
      }
    }

    .details {
      display: flex;
      justify-content: center;
      width: 20vw;
      flex-direction: column;

      .details-item {
        display: flex;
        overflow: hidden;
        margin-top: 1vh;
        margin-right: 3vw;
        width: 25vw;
        border-radius: 30px;

        .des {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30vw;
          font-weight: 600;
        }
      }
    }
  }

  .pic {
    width: 40vw;
    height: 30vh;
  }
}
</style>
