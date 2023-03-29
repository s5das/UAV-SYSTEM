<template>
  <div class="head">
    <div>在线无人机数:2</div>
    <div>离线无人机数:2</div>
    <div>组网状态:未组网</div>
  </div>
  <div class="uav-list">
    <div
      class="uav-item"
      v-for="(item, index) in uav"
      :key="item.id"
      @click="handle(index)"
    >
      <div v-if="item.status == 1" class="des-simple">
        <img src="../assets/uav2.svg" class="ico" />
      </div>
      <div v-if="item.status == 0" class="des-simple status-loss">
        <img src="../assets/uav3.svg" class="ico" />
      </div>

      <transition name="moveing">
        <div class="des-detail" v-show="show[index]">
          <div class="item">
            <img src="../assets/充电.svg" alt="" />
            <div>电量:{{ item.energy }}%</div>
          </div>
          <div class="item">
            <img src="../assets/CPU.svg" alt="" />
            <div>CUP使用率:{{ item.cpu }}%</div>
          </div>
          <div class="item">
            <img src="../assets/时钟.svg" alt="" />
            <div>剩余续航时间:{{ item.time }}h</div>
          </div>
          <div class="item">
            <img src="../assets/距离.svg" alt="" />
            <div>距离控制器距离:{{ item.distance }}m</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
let uav = [
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
]

let show = reactive([false, false, false])

//定义点击事件处理函数
const handle = (index) => {
  if (uav[index].status) {
    for (let i = 0; i < show.length; i++) {
      if (i != index) {
        show[i] = false
      }
    }
    show[index] = !show[index]
  }
}
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-around;
  padding: 0 15vw;
  margin-top: 10vh;
  font-size: 3vh;
  font-weight: 600;
}

.uav-list {
  display: flex;
  justify-content: space-around;
  padding: 5vh 12vw 5vh 15vw;
  flex-wrap: wrap;
  margin-bottom: 50vh;

  .uav-item {
    overflow: hidden;
    margin-right: 3vw;
    border-radius: 30px 30px 0 0;

    .des-simple {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18vw;
      height: 28vh;
      background-color: #2bb4d0;

      .ico {
        position: relative;
        z-index: 10;
        width: 70%;
        height: 70%;
      }
    }

    .des-detail {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18vw;
      height: 30vh;
      font-size: 2vh;
      color: #fff;
      background-color: #2bb4d0;
      font-weight: 600;
      flex-direction: column;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 2vh;
        width: 15vw;
        height: 4vh;

        img {
          width: auto;
          height: 2.5vh;
        }
      }
    }
  }
}

.status-loss {
  background-color: #5e9ac2 !important;
}

.moveing-enter-active {
  animation: move 0.5s linear;
}

.moveing-leave-active {
  animation: move 0.5s reverse linear;
}

@keyframes move {
  from {
    color: transparent;
    transform: translateY(-100%);
  }

  to {
    color: #fff;
    transform: translateY(0);
  }
}
</style>
