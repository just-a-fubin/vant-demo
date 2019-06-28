<template>
  <div>
    <van-nav-bar
        title="首页"
        fixed
    />
      <!--<van-notice-bar mode="closeable">-->
        <!--这就是通知栏？-->
      <!--</van-notice-bar>-->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image
            height="150"
            lazy-load
            :src="image"
          />
        </van-swipe-item>
      </van-swipe>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="item in list"
            :key="item"
          >
            <div style="display: flex;justify-content: space-between;">
              <div style="display: flex;flex: 1;flex-direction: column;padding: 15px;">
                <div>这里是标题</div>
                <div>这里是标签</div>
                <div>这里是描述</div>
                <div>这里是时间</div>
              </div>
              <div style="display: flex;justify-content: center;align-items: center;width: 100px;background: deepskyblue;color: #fff">
                点我
              </div>
            </div>
          </van-cell>
        </van-list>
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
      ],
      list: [],
      loading: false,
      finished: false
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
    },
    onLoad(){
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  },
  mounted () {
    // console.log(this.$http)
    // this.$http.post('http://localhost:8090/api/test-demo', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // }).then((res) => {
    //   console.log(res)
    // })
  }
}
</script>

<style scoped lang="scss">
  .m-body{
    color: #f60
  }
  .van-pull-refresh{
    margin-bottom: 50px;
  }
  .van-notice-bar{
    position: fixed;
    top: 46px;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .van-swipe{
    position: fixed;
    top: 46px;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .van-pull-refresh{
    padding-top: 196px;
  }
  .van-cell{
    padding: 0;
  }
</style>
