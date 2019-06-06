<template>
    <div style="background-color: #eee">
      <!--<mt-header style="height:50px;background-color: #3598FF;font-size:18px" :fixed="true" title="我的余额" >-->
        <!--<router-link to="/my" slot="left">-->
          <!--<mt-button icon="back" style="color: white"/>-->
        <!--</router-link>-->
        <!--&lt;!&ndash;<mt-button icon="more" slot="right"/>&ndash;&gt;-->
      <!--</mt-header>-->
      <div class="head" :style="{background:head_bg}">
        <router-link to="/my">
          <img style="height:15px;width: 9px;" src="static/img/back.png">
        </router-link>
        <span class="head_title">我的余额</span>
        <img style="width: 27px;height: 5px;" src="static/img/more.png">
      </div>
      <div class="header">
        <div class="header_content">
          <span class="head_text" style=" margin-left: 20px;">某某某某有限公司</span>
          <div class="show_content">
            <span class="head_text">某某某某有限公司</span>
            <span class="head_text_num">¥ 200000</span>
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
                  <span class="list_item_head_text">账户余额</span>
                  <span class="list_item_head_text">¥ 10000</span>
              </div>
              <div  class="list_item_content">
                <span class="list_content_text">交易金额：10000</span>
                <span class="list_content_text">本次结束：20000</span>
                <span class="list_content_text">上次结束：30000</span>
                <span class="list_content_text">车辆牌照：冀RR527</span>
                <span class="list_content_text">交易日期：2019越3月30日</span>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "balance",
        data() {
          return {
            listData:[1,2,3,4,5,6,7,8],
            head_bg:""
          }
        },
      methods:{
        handleScroll(){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          // console.log(scrollTop);
          this.head_bg=`rgba(53,152,255,${scrollTop/60})`;
        }
      },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      },
    }
</script>

<style scoped>
  .list_content_text{
    font-size:13px;
    color:#666666;
    line-height:25px;
    margin-left: 10px;
  }
  .list_item_content{
    width: 90%;
    margin-left: 5%;
  }
  .list_item_head_text{
    font-size:15px;
    font-weight: bold;
    color:#333333;
    line-height:25px;
    margin-left: 10px;
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
    margin-bottom: 10px;
    border-radius:5px ;
  }
  .list_item_head{
    width:90%;
    margin-left: 5%;
    flex-direction: row;
    height: 44px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(238,238,238,1);
  }
  .ver_line{
     height:12px ;
     width: 2px;
     background-color: #268CF0;
     margin-left: 15px;
  }
  .list_head_title{
    font-size:15px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:42px;
    margin-left: 3px;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .show_content{
    margin-top:25px;
    align-items: center;
    justify-content: center;
  }
  .header{
    width: 100%;
    height: 300px;
    background: url("../../assets/img/balance_bg.png") ;
    background-position: center;
  }
  .head_text{
    font-size:13px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:21px;
    margin-top: 30px;
  }
  .head_text_num{
    font-size:38px;
    font-weight:500;
    color:rgba(255,255,255,1);
    margin-top: 10px;
    line-height:31px;
  }
  .header_content{
     width: 100%;
     margin-top: 50px;
  }
  .head{
    width:90%;
    height: 50px;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 5%;
    padding-right: 5%;
  }
  .head_title{
    font-size: 18px;
    color: white;
    margin-left: 10px;
  }
</style>
