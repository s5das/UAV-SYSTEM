<template>
  <div class="main">
    <div class="main-page-content">
      <div class="left">
        <img src="../assets/uav.svg" class="img" />
        <div class="title">UAV SYSTEM</div>
        <div class="des">
          <strong>无人机</strong>实时控制<strong>系统</strong>
        </div>
        <div class="btn">
          <button class="btn1" @click="goto(0)">开始使用</button>
          <button class="btn2" @click="goto(1)">了解更多</button>
        </div>
      </div>
      <div class="right">
        <img src="../assets/a1.jpg" class="img1" />
        <img src="../assets/a2.jpg" class="img2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const des = ref()

const router = useRouter()

const activeIndex = inject('activeIndex')

const paper = [
  {
    img: new URL('@/assets/paper1.png', import.meta.url).href,
    des: '    Community detection remains an important problem in data mining, owing to the lack of scalable algorithms that exploit all aspects of available data - namely the directionality of flow of information and the dynamics thereof. Most existing methods use measures of connectedness in the graphical structure. In this paper, we present a fast, scalable algorithm to detect communities in directed, weighted graph representations of social networks by simulating flow of information through them. By design, our algorithm naturally handles undirected or unweighted networks as well. Our algorithmruns in O(|E|) time, which is better than most existing work and uses O(|E|) space and hence scales easily to very large datasets. Finally, we show that our algorithm outperforms the state-of-the-art Markov Clustering Algorithm (MCL) [22] in both accuracy and scalability on ground truth data (in a number of cases, we can find communities in graphs too large for MCL).'
  },
  {
    img: new URL('@/assets/paper2.png', import.meta.url).href,
    des: '    Community detection is a classical problem in the field of graph mining. While most algorithms work on the entire graph, it is often interesting in practice to recover only the community containing some given set of seed nodes. In this paper, we propose a novel approach to this problem, using some low-dimensional embedding of the graph based on random walks starting from the seed nodes. From this embedding, we propose some simple yet efficient versions of the PageRank algorithm as well as a novel algorithm, called WalkSCAN, that is able to detect multiple communities, possibly overlapping. We provide insights into the performance of these algorithms through the theoretical analysis of a toy network and show that WalkSCAN outperforms existing algorithms on real networks.'
  },
  {
    img: new URL('@/assets/paper3.png', import.meta.url).href,
    des: '	  How can we detect communities when the social graphs is not available? We tackle this problem by modeling social contagion from a log of user activity, that is a dataset of tuples (u, i, t) recording the fact that user u “adopted” item i at time t. This is the only input to our problem.We propose a stochastic framework which assumes that item adoptions are governed by un underlying diffusion process over the unobserved social network, and that such diffusion model is based on community-level influence. By fitting the model parameters to the user activity log, we learn the community membership and the level of influence of each user in each community. This allows to identify for each community the “key” users, i.e., the leaders which are most likely to influence the rest of the community to adopt a certain item.The general framework can be instantiated with different diffusion models. In this paper we define two models: the extension to the community level of the classic (discrete time) Independent Cascade model, and a model that focuses on the time delay between adoptions.To the best of our knowledge, this is the first work studying community detection without the network.'
  },
  {
    img: new URL('@/assets/paper4.png', import.meta.url).href,
    des: '    Community detection is an important task in network analysis. A community (also referred to as a cluster) is a set of cohesive vertices that have more connections inside the set than outside. In many social and information networks, these communities naturally overlap. For instance, in a social network, each vertex in a graph corresponds to an individual who usually participates in multiple communities. One of the most successful techniques for finding overlapping communities is based on local optimization and expansion of a community metric around a seed set of vertices. In this paper, we propose an efficient overlapping community detection algorithm using a seed set expansion approach. In particular, we develop new seeding strategies for a personalized PageRank scheme that optimizes the conductance community score. The key idea of our algorithm is to find good seeds, and then expand these seed sets using the personalized PageRank clustering procedure. Experimental results show that this seed set expansion approach outperforms other state-of-the-art overlapping community detection methods. We also show that our new seeding strategies are better than previous strategies, and are thus effective in finding good overlapping clusters in a graph.'
  }
]

const change = (res) => {
  des.value.setActiveItem(res)
}

const goto = (key) => {
  switch (key) {
    case 0:
      activeIndex.value = '4-1'
      router.push({
        path: '/status'
      })
      break
    case 1:
      activeIndex.value = '3'
      router.push({
        path: '/aboutus'
      })
      break
  }
}
</script>

<style scoped lang="less">
.main-page-content {
  display: flex;
  padding: 0 15vw;
  margin-top: 10vh;
  width: 95vw;
  height: 120vh;
  box-sizing: border-box;

  .left {
    flex: 28vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img {
      margin-bottom: 2vh;
      width: 12vw;
      height: auto;
    }

    .title {
      margin-bottom: 4vh;
      font-size: 4vh;
      font-weight: 600;
    }

    .des {
      margin-bottom: 3vh;
      font-size: 2vh;
    }

    .btn {
      color: #fff;
      font-weight: 600;

      .btn1 {
        margin-right: 1vw;
        width: 7vw;
        height: 5vh;
        background-color: #3ab9d4;
        border-radius: 1.5vh 3vh 2vh 2.5vh;
      }

      .btn1:hover {
        background-color: #2082a6;
      }

      .btn2 {
        width: 7vw;
        height: 5vh;
        background-color: #476582;
        border-radius: 1.5vh 2vh 3vh 2.5vh;
      }

      .btn2:hover {
        background-color: #304a64;
      }
    }
  }

  .right {
    position: relative;
    width: 42vw;

    .img1 {
      position: absolute;
      top: 10vh;
      left: 0;
      z-index: 50;
      width: 45vw;
      height: 45vh;
      border-radius: 10px;
      box-shadow: 1px 1px 1px 1px #bbb;
    }

    .img2 {
      position: absolute;
      top: 50vh;
      left: 4vw;
      z-index: 60;
      width: 45vw;
      height: 45vh;
      border-radius: 10px;
      box-shadow: 1px 1px 1px 1px #bbb;
    }
  }
}

.paper {
  display: flex;
  justify-content: center;
  padding: 0 0 0 5vw;
  margin-top: 3vh;
  width: 95vw;
  height: 120vh;
  box-sizing: border-box;

  .paper-left {
    margin-right: 5vw;
    width: 40vw;
    height: 80vh;
  }

  .paper-right {
    padding: 0 5vw;
    width: 35vw;
    height: 80vh;
    border-left: #bbb 1px solid;
  }
}
</style>
