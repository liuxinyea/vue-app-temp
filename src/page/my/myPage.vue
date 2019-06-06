<template>
    <div class="container">
      <mt-header style="height:50px;background-color: #3598FF;font-size:18px" :fixed="true" title="新奥股份用户服务系统" >
        <router-link to="/" slot="left">
        <mt-button icon="back" style="color: white"/>
        </router-link>
        <mt-button icon="more" slot="right"/>
      </mt-header>
      <div class="mainInfo">
         <img class="headImg" @click="routerTo('/')" src="static/img/head@2x.png"/>
         <div style="margin-left: 13px" @click="routerTo('/')" v-if="user===null">
           <span class="headText">用户认证>></span>
         </div>
        <div v-else style="width:60%">
          <div style="flex-direction: row;align-items: center;margin-left: 13px">
            <span class="headText">理某某</span>
            <span style="color: white;font-size: 14px;margin-left: 13px">18909098789</span>
          </div>
          <div style="flex-direction: row;align-items: center;margin-left: 13px;margin-top:10px;width: 100%;justify-content: space-between;">
            <span style="color: white;font-size: 13px">某某某某有限公司</span>
            <div class="renzheng">
               <img style="height: 9px;width: 9px;" src="static/img/renzheng@2x.png" />
               <span style="color: white;font-size:10px">已认证</span>
            </div>
          </div>
          <div>
             <div style="flex-direction: row;margin-left: 10px;margin-top: 10px">
                <img v-for="a in 4" class="star" src="static/img/XXing@2x.png"/>
             </div>
          </div>
        </div>
      </div>
      <div class="mainOp">
        <router-link class="mainOpItem" to="/my/balance" tag="div">
          <img class="mainOpItem_img" src="static/img/userRen@2x.png"/>
          <div style="margin-left: 17px">
            <div style="flex-direction: row;align-items: center">
              <span class="mainOpItem_text">我的余额(元)</span>
              <img class="mainOpItem_img_end" src="static/img/link@2x.png"/>
            </div>
            <div v-if="user!==null">
              <span class="number" style="text-align: left;margin-left: 1px">20000</span>
            </div>
          </div>
        </router-link>
        <router-link class="mainOpItem" to="/my/creditGranting" tag="div">
          <img class="mainOpItem_img" src="static/img/shouxin@2x.png"/>
          <div style="margin-left: 17px">
            <div style="flex-direction: row;align-items: center">
              <span class="mainOpItem_text">我的授信(元)</span>
              <img class="mainOpItem_img_end" src="static/img/link@2x.png"/>
            </div>
            <div v-if="user!==null" style="flex-direction: row">
              <span style="text-align: left;margin-left: 1px;color: #999">剩余</span>
              <span style="text-align: left;margin-left: 1px;color: #FA8144">10000</span>
            </div>
          </div>
        </router-link>
        <div class="mainOpItem">
          <img class="mainOpItem_img" src="static/img/deal@2x.png"/>
          <div style="margin-left: 17px">
            <div style="flex-direction: row;align-items: center">
              <span class="mainOpItem_text">我的待办(条)</span>
              <img class="mainOpItem_img_end" src="static/img/link@2x.png"/>
            </div>
            <div v-if="user!==null">
              <span class="number" style="text-align: left;margin-left: 1px">2</span>
            </div>
          </div>
        </div>
        <div class="mainOpItem">
          <img class="mainOpItem_img" src="static/img/vip@2x.png"/>
          <div style="margin-left: 17px">
            <div style="flex-direction: row;align-items: center">
              <span class="mainOpItem_text">我的特权(元)</span>
              <img class="mainOpItem_img_end" src="static/img/link@2x.png"/>
            </div>
            <div v-if="user!==null" style="flex-direction: row">
              <span style="text-align: left;margin-left: 1px;color: #999">剩余</span>
              <span style="text-align: left;margin-left: 1px;color: #333">10000</span>
            </div>
          </div>
        </div>
        <div class="rowLine"></div>
        <div class="verLine"></div>
      </div>
      <div class="cell_list">
         <my-cell title="采购意向" @cellClick="routerTo('/my/buyintention')">
           <div class="right" slot="right">
              <span class="hot">HOT</span>
           </div>
         </my-cell>
        <my-cell title="最新报价" @cellClick="routerTo('/my/price')">
          <div class="right" slot="right">
            <span class="right_text">甲醇2073.00元／吨</span>
          </div>
        </my-cell>
         <my-cell title="我的结算单"/>
         <my-cell title="我的合同"/>
         <my-cell title="汽车发运"/>
         <my-cell title="我的发票"/>
         <my-cell @cellClick="routerTo('/my/feedback')" title="意见反馈"/>
         <my-cell title="调查问卷"/>
      </div>
    </div>
</template>

<script>
    import MyCell from "../../components/myCell";

    export default {
      components: {MyCell},
      data() {
        return {
           user:{},

        }
      },
      methods:{
        routerTo(path){
          console.log(path);
          this.$router.push(path)
        }
      }
    }
</script>

<style scoped>
  .right{
    position: relative;
    right:50px;
    /*top: 10px;*/
  }
  .right_text{
    height:13px;
    font-size:13px;
    font-family:PingFangSC-Regular,serif;
    font-weight:200;
    color:rgba(51,51,51,1);
    line-height:15px;
  }
  .hot{
    height: 20px;
    width: 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color:#FA8144;
    text-align: center;
    color: white;
  }
  .renzheng{
    flex-direction: row;width: 53px;height: 15px;align-items: center;
    border:1px solid rgba(255,255,255,1);border-radius:14px;
    justify-content: center;
  }
  .star{
    width: 12px;
    height: 10px;
  }
  .rowLine{
    position: absolute;
    width:355px;
    height:1px;
    background:rgba(238,238,238,1);
  }
  .verLine{
    position: absolute;
    width:1px;
    height:137px;
    background:rgba(238,238,238,1);
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .container{
    width: 100%;
    /*height: 100%;*/
    background-color: #eee;
  }
  .cell_list{
    margin-top: 10px;
    background-color: white;
    width: 96%;
    padding-left: 2%;
    padding-right: 2%;
  }
  .mainInfo{
     height: 120px;
     width: 100%;
     padding: 0;
     margin-top: 49px;
     background-color:#3598FF;
     display: flex;
    flex-direction: row;
    align-items: center;
  }
  .headImg{
     height: 50px;
    width: 50px;
    margin-left: 30px;
  }
  .headText{
    font-size:18px;
    color: #ffffff;
    font-weight: bold;
  }
  .mainOp{
    height: 137px;
    width: 96%;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .mainOpItem{
    width:50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .mainOpItem_img{
     height: 26px;
    width: 23px;
  }
  .mainOpItem_text{
      font-size: 15px;

  }
  .mainOpItem_img_end{
    margin-top: 2px;
    margin-left: 17px;
    height: 10px;
    width: 6px;
  }
</style>
