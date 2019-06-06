<template>
  <div class="hello">
    <mt-header style="height:50px" :fixed="true" title="首页1" >
      <!--<router-link to="/" slot="left">-->
        <!--<mt-button icon="back" style="color: white">back</mt-button>-->
      <!--</router-link>-->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tab-container style="margin-top:50px;margin-bottom: 50px" :swipeable="true" v-model="selected">
      <mt-tab-container-item id="tab1">
        <mt-loadmore
          topPullText="下拉刷新"
          topDropText="释放更新"
          topLoadingText="加载中..."
          bottomPullText="上拉刷新"
          bottomDropText="释放更新"
          bottomLoadingText="加载中..."
          :top-method="loadTop"
          :bottom-method="loadBottom"
          :bottom-all-loaded="false"
          :auto-fill="false"
          ref="loadmore">
            <mt-cell v-for="(item,index) in list" :key="index" :title="item.toString()"></mt-cell>
          <!--<div slot="top" class="mint-loadmore-top">-->
            <!--<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>-->
            <!--<span v-show="topStatus === 'loading'">Loading...</span>-->
          <!--</div>-->
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <mt-cell v-for="n in 7" :key="n" title="tab-container 4"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar style="height:50px" :fixed="true" v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../assets/logo.png">
        热门
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/logo.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[1,2,3,4,5,6,7,8,9,10,11,12,13],
      selected:"tab1",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    loadTop(){
      let self=this;
      setTimeout(function () {
        self.list=[1,2,3,4,5,6,7,8,9,10,11,12,13];
        self.$refs.loadmore.onTopLoaded();
      },2000);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .hello{
    padding: 0;
    margin: 0;
  }
</style>
