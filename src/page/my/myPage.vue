<template>
    <div class="container">
      <mt-header id="head" style="height:50px;background-color: #3598FF;font-size: .36rem;" :fixed="true" title="新奥股份用户服务系统" >
        <router-link to="/" slot="left">
        <mt-button icon="back" style="color: white"/>
        </router-link>
        <mt-button icon="more" slot="right"/>
      </mt-header>
      <div id="head_bottom" class="mainInfo">
         <img class="headImg" @click="routerTo('identify')"
              src="static/img/head.png" srcset="static/img/head.png 1x,static/img/head@2x.png 2x"/>
         <div style="margin-left: .26rem" @click="routerTo('identify')" v-if="userInfo===null">
           <span class="headText">用户认证>></span>
         </div>
        <div v-else style="width:60%">
          <div style="flex-direction: row;align-items: center;margin-left: .26rem">
            <span class="headText">{{userInfo.userName}}</span>
            <span style="color: white;font-size: .28rem;margin-left: .26rem">{{userInfo.userMobilePhone}}</span>
          </div>
          <div style="flex-direction: row;align-items: center;margin-left: .26rem;margin-top:.20rem;width: 100%;justify-content: space-between;">
            <span style="color: white;font-size: .26rem">{{userInfo.orgName}}</span>
            <div class="renzheng">
               <img style="height: .18rem;width: .18rem;" src="static/img/renzheng.png"
                    srcset="static/img/renzheng.png 1x,static/img/renzheng@2x.png 2x"/>
               <span style="color: white;font-size:.2rem">已认证</span>
            </div>
          </div>
          <!--<div>-->
             <!--<div style="flex-direction: row;margin-left: 10px;margin-top: 10px">-->
                <!--<img v-for="a in 5" class="star" src="static/img/XXing@2x.png"/>-->
             <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <div class="mainOp" id="content">
        <router-link class="mainOpItem" to="/my/balance" tag="div">
          <img class="mainOpItem_img" src="static/img/userRen.png"
               srcset="static/img/userRen.png 1x,static/img/userRen@2x.png 2x"/>
          <div style="margin-left: .34rem">
            <div style="flex-direction: row;align-items: center">
              <span class="mainOpItem_text">我的余额(元)</span>
              <img class="mainOpItem_img_end" src="static/img/link.png"
                   srcset="static/img/link.png 1x,static/img/link@2x.png 2x"/>
            </div>
            <div v-if="userInfo!==null">
              <span class="number" style="margin-left: 1px">20000</span>
            </div>
          </div>
        </router-link>

        <router-link class="mainOpItem"  to="/my/creditGranting" tag="div">
          <img class="mainOpItem_img" src="static/img/shouxin.png"
               srcset="static/img/shouxin.png 1x,static/img/shouxin@2x.png 2x"/>
          <div style="margin-left: .34rem">
            <div style="flex-direction: row;align-items: center">
              <span class="mainOpItem_text">我的授信(元)</span>
              <img class="mainOpItem_img_end" src="static/img/link.png"
                   srcset="static/img/link.png 1x,static/img/link@2x.png 2x"/>
            </div>
            <div v-if="userInfo!==null" style="flex-direction: row">
              <span style="text-align: left;margin-left: 1px;color: #999;font-size: 13px">剩余</span>
              <span class="number" style="color: #FA8144;">10000</span>
            </div>
          </div>
        </router-link>

        <div class="mainOpItem">
          <img class="mainOpItem_img" src="static/img/deal.png"
               srcset="static/img/deal.png 1x,static/img/deal@2x.png 2x"/>
          <div style="margin-left: .34rem">
            <div style="flex-direction: row;align-items: center">
              <span class="mainOpItem_text">我的待办(条)</span>
              <img class="mainOpItem_img_end" src="static/img/link.png"
                   srcset="static/img/link.png 1x,static/img/link@2x.png 2x"/>
            </div>
            <div v-if="userInfo!==null">
              <span class="number" style="text-align: left;margin-left: 1px">2</span>
            </div>
          </div>
        </div>
        <!--<div class="mainOpItem">-->
          <!--<img class="mainOpItem_img" src="static/img/vip@2x.png"/>-->
          <!--<div style="margin-left: .34rem">-->
            <!--<div style="flex-direction: row;align-items: center">-->
              <!--<span class="mainOpItem_text">我的特权(元)</span>-->
              <!--<img class="mainOpItem_img_end" src="static/img/link@2x.png"/>-->
            <!--</div>-->
            <!--<div v-if="userInfo!==null" style="flex-direction: row">-->
              <!--<span style="text-align: left;margin-left: 1px;color: #999;font-size: 13px">剩余</span>-->
              <!--<span class="number" style="margin-left: 1px;">10000</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="rowLine"></div>-->
        <div class="verLine"></div>
      </div>
      <div class="cell_list">
         <my-cell title="采购意向" @cellClick="routerTo('buyIntention')">
           <div class="right" slot="right">
              <span class="hot">HOT</span>
           </div>
         </my-cell>
        <my-cell title="最新报价" @cellClick="routerTo('price')">
          <div class="right" slot="right">
            <span v-if="newPrice.productName!==undefined"
                  class="right_text">{{newPrice.productName}}{{newPrice.currentPrice}}元／吨</span>
          </div>
        </my-cell>
         <my-cell title="我的结算单"/>
         <my-cell title="我的合同" @cellClick="routerTo('contract')"/>
         <my-cell title="汽车发运"/>
         <my-cell title="我的发票"/>
         <my-cell @cellClick="routerTo('feedback')" title="意见反馈"/>
         <my-cell title="调查问卷"/>
      </div>
    </div>
</template>

<script>
    import MyCell from "../../components/myCell";
    import {queryProductPrice} from "../../commonJs/api";
    export default {
      name: "myPage",
      components: {MyCell},
      data() {
        return {
           code:"",
           userInfo:null,
           newPrice:this.$store.state.newPrice
        }
      },
      methods:{
        routerTo(path){
          if(path==='identify'&&this.userInfo!==null){
               // alert(JSON.stringify(this.userInfo))
               return;
          }
          this.$router.push({name:path})
        },
        getOpenId(){
          let self=this;
          this.$indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
          });
          self.$axios.get(this.$baseUrl+"/wxLogin/getOpenId?code="+this.code)
            .then(function (res) {
              self.userInfo=res.data.data.userInfoVo;
              // alert(JSON.stringify(res.headers));
              localStorage.setItem("token",res.headers['x-auth-token']);
              localStorage.setItem("openid",res.data.data.openid);
              localStorage.setItem("userInfo",JSON.stringify(self.userInfo));
              self.$indicator.close()
            }).catch(function (error) {
              self.$indicator.close();
              self.$message.alert(error);
            });
        }
      },
      mounted(){
        let self=this;
        let url=window.location.href;
        let params=url.split("?")[1];
        if(params===undefined)
          return;
        this.code=params.split("&")[0].split("=")[1];
        this.getOpenId();
        this.$bus.$on("refreshOpenId",function () {
          self.getOpenId();
        })
      }
    }
</script>

<style scoped lang="less">
   @import "../../assets/css/common";
  .right{
    position: relative;
    right:.50rem;
    /*right:50px;*/
    /*top: 10px;*/
  }
  .right_text{
    height:.26rem;
    /*font-size:13px;*/
    font-size: .26rem;
    font-family:PingFangSC-Regular,serif;
    font-weight:200;
    color:rgba(51,51,51,1);
    line-height:.30rem;
  }
  .hot{
    height: .40rem;
    width: 1rem;
    padding-top: .02rem;
    border-radius: 10px;
    background-color:#mainColor[orange];
    text-align: center;
    color: white;
    font-size: .26rem;
    line-height: .40rem;
  }
  .renzheng{
    flex-direction: row;width: 1.06rem;height: .28rem;align-items: center;
    border:1px solid rgba(255,255,255,1);border-radius:14px;
    justify-content: center;
  }
  .star{
    width: 12px;
    height: 10px;
  }
  /*.rowLine{*/
    /*position: absolute;*/
    /*width:90%;*/
    /*height:1px;*/
    /*background:rgba(238,238,238,1);*/
  /*}*/
  .verLine{
    position: absolute;
    width:1px;
    height:100%;
    margin-left:49%;
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
     height: 2.5rem;
     width: 100%;
     padding: 0;
     margin-top: 49px;
     background-color:#3598FF;
     display: flex;
    flex-direction: row;
    align-items: center;
  }
  .headImg{
    height: 1rem;
    width:  1rem;
    margin-left: 30px;
  }
  .headText{
    font-size:.36rem;
    color: #ffffff;
    font-weight: bold;
  }
  .mainOp{
    /*height: 137px;*/
    width: 96%;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    /*justify-content: center;*/
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .mainOpItem{
    width:46%;
    flex-direction: row;
    align-items: center;
    padding:5% 2% 5% 2%;
    justify-content: center;
    border-bottom: 1px solid  rgba(238,238,238,1);
    /*box-shadow: #mainColor[shadow];*/
  }
  .mainOpItem_img{
     height: .52rem;
     width: .46rem;
  }
  .mainOpItem_text{
      font-size: .3rem;
      /*background-color: aqua;*/
  }
  .mainOpItem_img_end{
    margin-top: .04rem;
    margin-left: .34rem;
    height: .21rem;
    width: .12rem;
  }
  .number{
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:21px;
    margin-left: 1px;
  }
</style>
