import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Vue3BaiduMapGL from 'vue3-baidu-map-gl'
import baiduMap from 'vue3-baidu-map-gl'

createApp(App)
  .use(Vue3BaiduMapGL)
  .use(router)
  .mount('#app')
