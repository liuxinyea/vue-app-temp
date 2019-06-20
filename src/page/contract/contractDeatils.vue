<template>
   <page-layout title="合同详情" background="#eee">
      <mt-button icon="more" @click="showModal()" slot="right"/>
       <div slot="pageContent"  style="margin-top: 1rem">
           <div class="contract_content">
             <span>
               新能能源有限公司
             </span>
             <span>
               甲醇销售合同
             </span>
             <span>
               卖      方：新能能源有限公司
               买      方：霸州市胜芳联合化工有限公司
               签订地点：内蒙古达拉特旗新奥工业园区 签订时
             </span>
             <span class="text_content">
               根据《中华人民共和国合同法》及相关法律、法规规定，买卖双方充分协商，买方自愿从卖方购买、卖方愿意向买方销售本合同约定的甲醇产品
             </span>
           </div>
           <drop-down :showMask="false" position="right" :left="5.1" :top=".7" v-model="showWindowPop">
               <div @click.stop @click="doDelay" class="windowContent" slot="content">
                 <img class="img" src="static/img/yanqi.png"
                      srcset="static/img/yanqi.png 1x,static/img/yanqi@2x.png 2x"/>
                 <span style="font-size: .26rem" >申请延期</span>
               </div>
           </drop-down>
         <mt-popup class="pop_area"
                   v-model="popupVisible"
                   position="bottom">
           <span style="margin-top: .20rem;margin-left: .20rem;font-size: .26rem;color: #333;height: .40rem">申请延期</span>
           <div class="pop_area">
               <div class="area_cell">
                 <span class="label">合同有效期：</span>
                 <input class="input"  v-bind:readonly="true" v-model="date"/>
               </div>
               <div class="area_cell">
                 <span class="label">期望有效期：</span>
                 <input class="input" v-model="sdate" type="date" placeholder="输入期望合同有效期"/>
               </div>
               <div class="area_cell" style="flex-direction: column;margin-right: .55rem">
                 <span class="label">延 期 原 因：</span>
                 <textarea class="textarea" rows="5" placeholder="请输入驳回原因原因原因"/>
               </div>
           </div>
           <div class="button_group" >
             <my-button type="cancel" @btnClick="btnClick(0)"/>
             <my-button type="confirm" @btnClick="btnClick(1)"/>
           </div>
         </mt-popup>
         <mt-popup v-model="centerPop"
                   position="center"
           style="border-radius:.10rem .10rem .10rem .10rem">
              <div class="middle_area">
                <div class="middle_top">
                  <img class="middle_img" src="static/img/success.png"
                       srcset="static/img/success.png 1x,static/img/success@2x.png 2x"/>
                  <span class="middle_text">合同延期成功</span>
                  <span class="middle_text_date">最新有效期为：2020年12月30日</span>
                </div>
                <div @click="close()" class="middle_bottom">
                   <span>我知道了</span>
                </div>
                <img @click="close()" class="close_img" src="static/img/close.png" srcset="static/img/close.png 1x,static/img/close@2x.png 2x"/>
              </div>
         </mt-popup>
       </div>
   </page-layout>
</template>

<script>
    import PageLayout from "../../layout/pageLayout";
    import DropDown from "../../components/dropDown";
    import MyButton from "../../components/myButton";
    import MyCell from "../../components/myCell";

    export default {
      components: {
        MyCell,
        MyButton,
        DropDown,
        PageLayout},
      name: "contract-deatils",
      data() {
        return {
          date:'2017-07-09',
          sdate:'',
          reson:'',
          showWindowPop:false,
          popupVisible:false,
          centerPop:false
        }
      },
      methods:{
        showModal(){
          this.showWindowPop=true;
        },
        doDelay(){
           this.popupVisible=true;
          this.showWindowPop=false;
        },
        btnClick(type){
          this.popupVisible=false;
          this.centerPop=true;
        },
        close(){
          this.centerPop=false;
        }
      }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common";
  div{
    display: flex;
    flex-direction: row;
  }
  .pop_area{
    flex-direction: column;

  }
  .img{
    height: .35rem;
    width: .34rem;
  }
  .windowContent{
    justify-content: space-around;
  }
  .contract_content{
    flex-direction: column;
     span{
       font-size: .26rem;
     }
  }
  .area_cell{
     margin-top: .33rem;
     margin-left: .55rem;
     .label{
       font-size: .25rem;
       color: #999999;
     }
    .input{
      width: 3.5rem;
       font-size: .25rem;
       border : 0;
       color: #333333;
       border-bottom: 1px solid #aaa;
    }
    .textarea{
      margin-top: .23rem;
      font-size: .25rem;
      color: #333333;
      border: 1px solid #aaa;
      padding: .10rem;
    }
  }
</style>
