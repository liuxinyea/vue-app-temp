<template>
    <div style="background-color: #eee">
      <mt-header style="height:50px;background-color: #3598FF;font-size:18px" :fixed="true" title="最新报价" >
        <router-link to="/my" slot="left">
          <mt-button icon="back" style="color: white"/>
        </router-link>
        <mt-button icon="more" slot="right"/>
      </mt-header>
      <div class="list_area">
        <div v-for="item in listData">
          <div style="width: 100%;align-items: center;justify-content: center">
            <span style="font-size: 12px;color: #999;margin-top: 5px;margin-bottom: 5px">更新于2019-05-28  7:00</span>
          </div>
          <div class="list_item">
            <div class="list_item_head">
              <span class="list_item_head_text">甲醇</span>
              <!--<span class="list_item_head_text">¥ 20000</span>-->
            </div>
            <div  class="list_item_content">
              <span class="list_content_text">单价：2098元/吨</span>
              <span class="list_content_text">年产量：300万吨</span>
            </div>
            <div class="list_item_foot">
              <div class="link_btn">
                <span class="list_item_foot_text">我要采购</span>
              </div>
              <!--<span class="list_item_head_text">¥ 20000</span>-->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "price",
        data(){
          return{
             listData:[1,2,3,4,5,6]
          }
        },
      methods:{

      },
      mounted(){

      },
      created(){

      }
    }
</script>

<style scoped>
  .link_btn{
    width:110px;
    height:33px;
    background:rgba(53,152,255,1);
    border-radius:4px;
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
    height: 44px;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(238,238,238,1);
  }
  .list_item_foot_text{
    font-size:15px;
    color:#fff;
    line-height:25px;
  }
  .list_area{
      width: 100%;
    margin-top: 50px;
  }
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
  .list_head_title{
    font-size:15px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:42px;
    margin-left: 3px;
  }
</style>
