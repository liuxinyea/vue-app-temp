<template>
  <div style="background-color: #eee;">
    <div class="darkBackground">
    </div>
    <mt-header style="height:1rem;background-color: #3598FF;font-size:.36rem" :fixed="true" title="采购意向" >
      <mt-button icon="back" slot="left" @click="back" style="color: white"/>
      <mt-button icon="more" slot="right"/>
    </mt-header>
    <div class="tip">
    </div>
    <my-cell title="公司名称" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
           <input class="cell_nput" v-model="data.companyName" type="text" placeholder="请输入公司名称" />
      </div>
    </my-cell>
    <my-cell title="联系人" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
        <input class="cell_nput" v-model="data.contact" type="text" placeholder="请输入联系人" />
      </div>
    </my-cell>
    <my-cell title="手机号码" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
        <input class="cell_nput" type="tel" v-model="data.phoneNumber" placeholder="请输入手机号码" />
      </div>
    </my-cell>
    <my-cell title="产品名称" style="background-color: #fff;" @cellClick="selectType">
      <div class="right" slot="right">
        <span class="right_text">{{data.product.productName===''?'选择产品名称':data.product.productName}}</span>
      </div>
    </my-cell>
    <my-cell title="产品用量(吨)" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
        <input class="cell_nput" type="number" v-model="data.productNumber" placeholder="请输入产品用量" />
      </div>
    </my-cell>
    <div class="content" @click="submit">
      <div class="submit_btn">
        <span class="submit_btn_text">确定提交</span>
      </div>
    </div>
    <mt-popup class="pop_area"
              v-model="popupVisible"
              position="bottom">
      <span style="margin-top: .20rem;margin-left: .20rem;font-size: .26rem;color: #333">选择意见类型</span>
      <div class="select_area">
        <div  v-for="item in selects" :class="item.select?'select_item_active':'select_item_no'" @click="itemSelect(item)">
          <span class="select_item_text" :style="{color:item.select?'#268cf0':'#666'}">{{item.productName}}</span>
          <img v-show="item.select" src="static/img/selected.png"
               srcset="static/img/selected.png 1x,static/img/selected@2x.png 2x" style="width: .30rem;height: .30rem;position:absolute;bottom: 0;right: 0"/>
        </div>
      </div>
      <div class="button_group" >
        <my-button type="cancel" @btnClick="btnClick(0)"></my-button>
        <my-button type="confirm" @btnClick="btnClick(1)"></my-button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import MyCell from "../../components/myCell";
  import MyButton from "../../components/myButton";
  import { Indicator } from 'mint-ui';
  import {queryProductType,savePurchase} from '../../commonJs/api'
  export default {
    components: {
      MyButton,
      MyCell},
    name: "feedback",
    data() {
      return {
        data:{
          companyName:'',
          contact:'',
          phoneNumber:'',
          product:{
            productName:'',
            productCode:'',
            select:false
          },
          productNumber:''
        },
        selects:[

        ],
        popupVisible:false
      }
    },
    methods:{
      back(){
        this.$router.back()
      },
      selectType(){
        this.popupVisible=true;
      },
      itemSelect(item){
        this.selects.forEach(item1=>{
          item1.select=false;
        });
        item.select=true;
      },
      btnClick(type){
        // alert(type);
        let self=this;
        if(type){
          this.selects.forEach(item=>{
             if(item.select){
               self.data.product=item;
             }
          });
        }
        this.popupVisible=false;
      },
      submit(){
        let self=this;
        if(this.data.companyName===''){
          this.$message.alert("公司名称不能为空");
          return;
        }
        if(this.data.contact===''){
          this.$message.alert("联系人不能为空");
          return;
        }
        if(this.data.phoneNumber===''){
          this.$message.alert("手机号码不能为空");
          return;
        }
        if(this.data.product.productCode===''){
          this.$message.alert("产品名称不能为空");
          return;
        }
        if(this.data.productNumber===''){
          this.$message.alert("产品用量不能为空");
          return;
        }
        let postJson={
          "companyName":this.data.companyName,
          "consumption": this.data.productNumber,
          "contacts": this.data.contact,
          "itEnabled": true,
          "phoneNumber": this.data.phoneNumber,
          "productCode": this.data.product.productCode,
          "productName": this.data.product.productName,
        };
        this.$postJsonProgress(savePurchase,postJson)
          .then(function (res) {
            self.$toast(res.data.msg);
            self.$router.back()
          }).catch(function (res) {
            self.$message.alert(res);
        })
      }
    },
    mounted(){
      let self=this;
      let params=this.$route.params;
      let userInfo=JSON.parse(localStorage.getItem("userInfo"));
      if(userInfo!==undefined&&userInfo!=null){
        this.data.contact=userInfo.userName;
        this.data.phoneNumber=userInfo.userMobilePhone;
        this.data.companyName=userInfo.orgName;
      }
      this.$getProgress(queryProductType)
        .then(function (res) {
           let data=res.data.data;
          data.forEach(item=>{
            let product={
              productCode:item.productCode,
              productName: item.productName,
              select:false
            };
            if(item.productCode==params.productCode){
               product.select=true;
               self.data.product=product;
            }
             self.selects.push(product)
           })
        }).catch(function (res) {
        console.log(res);
      })
    },
    created(){

    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  div{
    display: flex;
    flex-direction: column;
  }
  .tip{
    margin-top: 1rem;
  }
  .right{
  }
  .right_text{
    font-size: .26rem;
    color: #666;
    width: 2rem;
    text-align: right;
    /*background-color: aqua;*/
  }
  .content{
    width: 100%;
    /*background-color: white;*/
    margin-top: .20rem;
  }
  .content_text{
    width: 90%;
    margin-left:2%;
    padding:3%;
    margin-top: .20rem;
    border:1px solid rgba(221,221,221,1);
    border-radius:.10rem;
  }
  .submit_btn{
    width: 90%;
    height:.90rem;
    margin-top: 1.4rem;
    margin-left: 5%;
    border-radius:1rem;
    align-items: center;
    justify-content: center;
    background-color:#268CF0 ;
  }
  .submit_btn_text{
    font-size:.36rem;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .cell_nput{
    border-width: 0;
    text-align: right;
    font-size: .26rem;
    /*background-color: aqua;*/
    width: 3rem;
    height: .60rem;
  }

</style>
