import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { NavBar, Tabbar, TabbarItem, PullRefresh, Swipe, SwipeItem,
  Lazyload, Image, Toast, NoticeBar, List, Cell } from 'vant'
import 'vant/lib/index.css'

import Lib from './libs/lib'

Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(PullRefresh)
  .use(Swipe).use(SwipeItem).use(Lazyload).use(Image).use(Toast)
  .use(NoticeBar).use(List).use(Cell)

Vue.use(Lib)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
