<template>
  <page-layout title="最新报价" background="#eee">
    <div class="list_area" slot="pageContent">
      <div v-for="item in listData">
        <div style="width: 100%;align-items: center;justify-content: center">
          <span style="font-size:.24rem;color: #999;margin-top: .1rem;margin-bottom: .1rem">更新于{{item.updateDate}}</span>
        </div>
        <div class="list_item">
          <div class="list_item_head">
            <span class="list_item_head_text">{{item.productName}}</span>
            <!--<span class="list_item_head_text">¥ 20000</span>-->
          </div>
          <div  class="list_item_content">
            <span class="list_content_text">单价：{{item.currentPrice}}元/吨</span>
            <span class="list_content_text">年产量：300万吨</span>
          </div>
          <div class="list_item_foot">
            <div class="link_btn" @click="goBuy(item)">
              <span class="list_item_foot_text">我要采购</span>
            </div>
            <!--<span class="list_item_head_text">¥ 20000</span>-->
          </div>
        </div>
      </div>
    </div>
  </page-layout>
</template>
<script>
  import {queryProductPrice} from "../../commonJs/api";
  import PageLayout from "../../layout/pageLayout";

  export default {
    components: {PageLayout},
    name: "price",
        data(){
          return{
             listData:[]
          }
        },
      methods:{
        goBuy(item){
          this.$router.push({ name: 'buyIntention',
            params:{productName:item.productName,productCode:item.productCode}})
        }
      },
      mounted(){

      },
      created(){
          let self=this;
        // console.log(this.$store.state.newPrice);
          this.$getProgress(queryProductPrice)
            .then(function (res) {
              // console.log(res);
              self.listData=res.data.data;
              self.$store.setState("newPrice",self.listData[0]);
            }).catch(function (error) {

          })
      }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  .link_btn{
    width:2.2rem;
    height:.66rem;
    background:rgba(53,152,255,1);
    border-radius:.08rem;
    align-items: center;
    justify-content: center;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .list_item_foot{
    width:90%;
    margin-left: 5%;
    flex-direction: row;
    height: .88rem;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(238,238,238,1);
  }
  .list_item_foot_text{
    font-size:.30rem;
    color:#fff;
    line-height:.50rem;
  }
  .list_area{
      width: 100%;
    margin-top: 1rem;
  }
  .list_content_text{
    font-size:.26rem;
    color:#666666;
    line-height:.50rem;
    margin-left: .20rem;
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
    margin-left: .20rem;
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
    margin-bottom: .26rem;
    border-radius:.1rem ;
    box-shadow: #mainColor[cardShadow];
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
  .list_head_title{
    font-size:.30rem;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:.84rem;
    margin-left: .06rem;
  }
</style>
