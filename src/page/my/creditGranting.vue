<template>
  <div style="background-color: #eee">
    <!--<mt-header style="height:50px;background-color: #3598FF;font-size:18px" :fixed="true" title="我的余额" >-->
    <!--<router-link to="/my" slot="left">-->
    <!--<mt-button icon="back" style="color: white"/>-->
    <!--</router-link>-->
    <!--&lt;!&ndash;<mt-button icon="more" slot="right"/>&ndash;&gt;-->
    <!--</mt-header>-->
    <div class="head" :style="{background:head_bg}">
      <img style="height:.30rem;width: .18rem;" @click="$router.back()" src="static/img/back.png" srcset="static/img/back.png 1x,static/img/back@2x.png 2x">
      <span class="head_title">我的授信</span>
      <img style="width: .40rem;height: .10rem;" src="static/img/more.png" srcset="static/img/more.png 1x,static/img/more@2x.png 2x">
    </div>
    <div class="header">
      <div class="header_content">
        <span class="head_text" style=" margin-left: .40rem;margin-top: .40rem" @click="addPan">某某某某有限公司</span>
        <div class="show_content" ref="panContent">
          <pan :radius="2.2" :percent="pan.panVer" >
            <div style="align-items: center;margin-top:30px;margin-left:5px">
              <span class="head_text">授信余额</span>
              <span class="head_text_num">50000</span>
              <span class="head_text" style="margin-top: 10px">已用授信￥10000</span>
            </div>
          </pan>
          <!--<div class="little_line" v-for="item in lines"-->
               <!--:style="{left:item.x+'px',bottom:item.y+'px',-->
               <!--transform:item.rotate,backgroundColor:item.backgroundColor}">-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <div class="list_head">
      <div class="ver_line"></div>
      <strong class="list_head_title">余额变动明细</strong>
    </div>
    <div class="list">
      <div class="list_item" v-for="item in listData">
        <div class="list_item_head">
          <span class="list_item_head_text">授信余额</span>
          <span class="list_item_head_text">¥ 20000</span>
        </div>
        <div  class="list_item_content">
          <span class="list_content_text">交易金额：10000</span>
          <div style="flex-direction: row">
            <span class="list_content_text">授信支付：</span>
            <span class="list_content_text" style="color:#FB9361;margin-left: 0">20000</span>
          </div>
          <span class="list_content_text">上次结余：30000</span>
          <span class="list_content_text">交易日期：2019越3月30日</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Pan from "../../components/pan";
  export default {
    components: {Pan},
    name: "balance",
    data() {
      return {
        listData:[1,2,3,4,5,6,7,8],
        head_bg:"rgba(53,152,255,0)",
        pageWidth:0,
        pan:this.$store.state
      }
    },
    computed:{
      // pan(){
      //   return this.$store.state.panVer
      // }
    },
    methods:{
      handleScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.head_bg=`rgba(53,152,255,${scrollTop/60})`;

      },
      addPan(){
        // this.pan=30;
        this.$store.setState("panVer",50);
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
      this.pageWidth=this.$refs.panContent.offsetHeight;  //100
    },
    created(){
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  .little_line{
    position: absolute;
    height: .08rem;
    width: .20rem;
    /*border-radius: 10px;*/
  }
  .list_content_text{
    font-size:.26rem;
    color:#666666;
    line-height:.50rem;
    margin-left:.20rem;
  }
  .list_item_content{
    width: 90%;
    margin-left: 5%;
  }
  .list_item_head_text{
    font-size:.30rem;
    font-weight: bold;
    color:#333333;
    line-height:.50rem;
    margin-left:.20rem;
  }
  .list_head{
    width:100%;
    flex-direction: row;
    align-items: center;
  }
  .list_item{
    width: 90%;
    margin-left: 5%;
    background-color: white;
    margin-bottom: .20rem;
    border-radius:.10rem ;
    box-shadow: @cardShadow;
  }
  .list_item_head{
    width:90%;
    margin-left: 5%;
    flex-direction: row;
    height: .88rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(238,238,238,1);
  }
  .ver_line{
    height:.24rem ;
    width: .04rem;
    background-color: #268CF0;
    margin-left: .30rem;
  }
  .list_head_title{
    font-size:.30rem;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:.84rem;
    margin-left: .06rem;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .show_content{
    margin-top: .50rem;
    align-items: center;
    justify-content: center;
    /*position: relative;*/
  }
  .header{
    width: 100%;
    height: 5.40rem;
    background-image: -webkit-image-set( url("../../assets/img/balance_bg.png") 1x, url("../../assets/img/balance_bg@2x.png") 2x);
    background-image: image-set( url("../../assets/img/balance_bg.png") 1x, url("../../assets/img/balance_bg@2x.png") 2x);
    /*background-size:100% 5.40rem;*/
    background-repeat: space;
    background-position: center;
  }
  .head_text{
    font-size:.26rem;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.42rem;
  }
  .head_text_num{
    font-size:.76rem;
    font-weight:500;
    color:rgba(255,255,255,1);
    margin-top: .20rem;
    line-height:.62rem;
  }
  .header_content{
    width: 100%;
    margin-top: 1rem;
  }
  .head{
    width:90%;
    height: 1rem;
    position: fixed;
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 5%;
    padding-right: 5%;
  }
  .head_title{
    font-size: .36rem;
    color: white;
    margin-left: .20rem;
  }
</style>
