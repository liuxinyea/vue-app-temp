<template>
    <page-layout title="我的合同" background="#eee">
        <!--<router-link slot="right" :to="{name:'contractDetails'}">-->
          <!--<mt-button icon="more" />-->
        <!--</router-link>-->
        <div class="list_area"  slot="pageContent">
           <div class="list_item" @click="routerTo('contractDetails')" v-for="item in list">
               <div class="item_head">
                 <div>
                   <span class="text">{{item.title}}</span>
                   <div class="circle"></div>
                   <span class="text_little" v-if="item.status===1">执行中</span>
                   <span class="text_little" v-if="item.status===2">已完成</span>
                   <span class="text_little" v-if="item.status===3">已延期</span>
                 </div>
                 <div class="line"></div>
               </div>
               <div class="item_content">
                 <span class="normal_text">{{item.number}}</span>
                 <span class="small_text">{{item.dateTime}}</span>
               </div>
           </div>
        </div>
    </page-layout>
</template>

<script>
    import PageLayout from "../../layout/pageLayout";
    export default {
      components: {PageLayout},
      name: "contract-list",
      data() {
        return {
          list: [{
            title: "2019新奥新能源有限公司合同",
            number: '¥ 200000.00',
            dateTime: '2019-05-01   12:00',
            status: 1
          },{
            title: "2019新奥新能源有限公司合同",
            number: '¥ 200000.00',
            dateTime: '2019-05-01   12:00',
            status: 1
          }]
        }
      },
      methods:{
        routerTo(path){
          this.$router.push({name:path})
        },
      }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common";
  div{
    display: flex;
    flex-direction: column;
  }
  .list_area{
    width: 100%;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
  }
  .list_item{
    margin: auto;
    background-color: #fff;
    border-radius:.05rem;
    /*width: 7rem;*/
    margin-top: .2rem;
    padding-left: .21rem;
    padding-right: .21rem;
    box-shadow: @cardShadow;
    .item_head{
      div{
        height: .86rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .circle{
        width: .1rem;
        height: .1rem;
        border-radius: .05rem;
      }
      .line{
        width:6.7rem;
        height:1px;
        background:rgba(238,238,238,1);
      }
      .text{
        font-size: .26rem;
        line-height: .26rem;
        font-weight:bold;
        color: #333333;
      }
      .text_little{
        font-size: .23rem;
        line-height: .23rem;
        color: #77D058;
      }
    }
    .item_content{
      padding-top: .3rem;
      padding-bottom: .3rem;
      flex-direction: row;
      justify-content: space-between;
      .normal_text{
        font-size: .32rem;
      }
      .small_text{
        font-size: .26rem;
      }
    }
  }
</style>
