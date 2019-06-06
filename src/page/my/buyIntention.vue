<template>
  <div style="background-color: #eee;">
    <div style="position: fixed;height: 1500px;width: 750px;background: #eee;z-index: -1">
    </div>
    <mt-header style="height:50px;background-color: #3598FF;font-size:18px" :fixed="true" title="采购意向" >
      <router-link to="/my" slot="left">
        <mt-button icon="back" style="color: white"/>
      </router-link>
      <mt-button icon="more" slot="right"/>
    </mt-header>
    <div class="tip">
    </div>
    <my-cell title="公司意向" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
           <input class="cell_nput" type="text" placeholder="请输入公司意向" />
      </div>
    </my-cell>
    <my-cell title="联系人" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
        <input class="cell_nput" type="text" placeholder="请输入联系人" />
      </div>
    </my-cell>
    <my-cell title="手机号码" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
        <input class="cell_nput" type="tel" placeholder="请输入手机号码" />
      </div>
    </my-cell>
    <my-cell title="产品名称" style="background-color: #fff;" @cellClick="selectType">
      <div class="right" slot="right">
        <span class="right_text">选择产品名称</span>
      </div>
    </my-cell>
    <my-cell title="产品用量(吨)" :is_link="false" style="background-color: #fff;" >
      <div class="right" slot="right">
        <input class="cell_nput" type="number" placeholder="请输入产品用量" />
      </div>
    </my-cell>
    <div class="content">
      <div class="submit_btn">
        <span class="submit_btn_text">确定提交</span>
      </div>
    </div>
    <mt-popup class="pop_area"
              v-model="popupVisible"
              position="bottom">
      <span style="margin-top: 10px;margin-left: 10px;font-size: 13px;color: #333">选择意见类型</span>
      <div class="select_area">
        <div  v-for="item in selects" :class="item.select?'select_item':'select_item_no'" @click="itemSelect(item)">
          <span class="select_item_text" :style="{color:item.select?'#268cf0':'#666'}">{{item.name}}</span>
          <img v-show="item.select" src="static/img/selected.png" style="width: 15px;height: 15px;position:absolute;bottom: 0;right: 0"/>
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
  export default {
    components: {
      MyButton,
      MyCell},
    name: "feedback",
    data() {
      return {
        data:{
          type:"",
          content:"",
          imgUrl:""
        },
        selects:[
          {
            name:"客户投诉",
            select:true
          },
          {
            name:"意见反馈",
            select:false
          },
          {
            name:"表扬感谢",
            select:false
          }
        ],
        files:[],
        imgUrls:[],
        popupVisible:false
      }
    },
    methods:{
      onUpload2(e){
        // console.log(e);
        let self=this;
        let fileTag = document.getElementById('file');
        // console.log(fileTag.files);
        let file = fileTag.files[0];
        if (!file){
          return;
        }
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        });
        let fileReader = new FileReader();
        fileReader.onerror=function(){
          MessageBox.alert("读取文件错误！")
        };
        fileReader.onprogress=function(e){
          console.log(e);
        };
        fileReader.onloadend = function () {
          if (fileReader.readyState == fileReader.DONE) {
            self.imgUrls.push(fileReader.result);
            self.files.push(file);
            Indicator.close();
          }
        };
        //读取文件以base64格式返回
        fileReader.readAsDataURL(file);
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
        this.popupVisible=false;
      }
    },
    mounted(){

    },
    created(){

    }
  }
</script>

<style scoped>
  .button_group{
    position: absolute;bottom: 0;left:0;width: 100%;align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    flex-direction: row;
  }
  .select_item_text{
    font-size:13px;
    color: #268cf0;
  }
  .select_area{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
  }
  .select_item{
    width: 100px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border:1px solid rgba(38,140,240,1);
    border-radius:5px;
    position: relative;
  }
  .select_item_no{
    width: 100px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border:1px solid rgba(221,221,221,1);
    border-radius:5px;
    position: relative;
  }
  .pop_area{
    height: 330px;
    width:100%;
    background:rgba(255,255,255,1);
    border-radius:10px 10px 0 0;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .tip{
    margin-top: 50px;
  }
  .right{
  }
  .right_text{
    font-size: 13px;
    color: #666;
    width: 100px;
    text-align: right;
    /*background-color: aqua;*/
  }
  .content{
    width: 100%;
    /*background-color: white;*/
    margin-top: 10px;
  }
  .content_text{
    width: 90%;
    margin-left:2%;
    padding:3%;
    margin-top: 10px;
    border:1px solid rgba(221,221,221,1);
    border-radius:5px;
  }
  .submit_btn{
    width: 90%;
    height:45px;
    margin-top: 70px;
    margin-left: 5%;
    border-radius:50px;
    align-items: center;
    justify-content: center;
    background-color:#268CF0 ;
  }
  .submit_btn_text{
    font-size:18px;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .cell_nput{
    border-width: 0;
    text-align: right;
    font-size: 13px;
    /*background-color: aqua;*/
    width: 150px;
    height: 30px;
  }

</style>
