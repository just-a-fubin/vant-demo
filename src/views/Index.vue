<template>
  <div>
    <home v-if="active === 0"></home>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Home from './index/home'
export default {
  name: 'index',
  components: { Home },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>
