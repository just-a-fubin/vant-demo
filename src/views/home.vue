<template>
  <div>
    <van-nav-bar
        title="首页"
    />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-notice-bar mode="closeable">
        这就是通知栏？
      </van-notice-bar>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image
            height="200"
            lazy-load
            :src="image"
          />
        </van-swipe-item>
      </van-swipe>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isLoading: false,
      count: 0,
      images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  },
  methods: {
    onRefresh () {
      this.count++
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      })
      setTimeout(() => {
        this.isLoading = false
        this.$toast.clear()
      }, 1000)
    }
  },
  mounted () {
    console.log(this.$http)
    this.$http.post('http://localhost:8090/api/test-demo', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
  .m-body{
    color: #f60
  }
</style>
