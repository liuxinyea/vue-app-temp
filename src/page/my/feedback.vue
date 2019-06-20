<template>
    <div style="background-color: #eee">
      <mt-header  style="height:1rem;background-color: #3598FF;font-size:.36rem" :fixed="true" title="意见反馈" >
        <router-link to="/" slot="left">
          <mt-button icon="back" style="color: white"/>
        </router-link>
        <mt-button icon="more" slot="right"/>
      </mt-header>
      <div class="tip">
         <span class="tip_text">欢迎对我们提出意见</span>
      </div>
      <my-cell title="意见类型" style="background-color: #fff;" @cellClick="selectType">
        <div class="right" slot="right">
          <span class="right_text">{{data.type.name===''?'请选择意见类型':data.type.name}}</span>
        </div>
      </my-cell>
      <div class="content">
         <textarea class="content_text" v-model="data.content" placeholder="请输入意见反馈内容" maxlength="200"
         rows="10"></textarea>
        <div style="flex-direction: row">
          <div class="file" v-for="item in data.imgUrl">
            <img  :src="baseUrl+'/file/preview/'+item" class="upload_img"/>
          </div>
          <!--<span>{{baseUrl+fileShow+item}}</span>-->
          <div  class="file" >
            <input type="file" id="file" value="图片上传" multiple="multiple" accept="image/*"
                   @change='onUpload2($event)'
            >
            <img src="static/img/upload.png" srcset="static/img/upload.png 1x,static/img/upload@2x.png 2x" class="upload_img"/>
          </div>

        </div>
        <div class="submit_btn" @click="submit">
          <span class="submit_btn_text">提交</span>
        </div>
      </div>
      <mt-popup class="pop_area"
        v-model="popupVisible"
        position="bottom">
        <span style="margin-top: .20rem;margin-left: .20rem;font-size: .26rem;color: #333">选择意见类型</span>
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
    import {commonEnums,saveOpinion,fileUpload,fileShow} from "../../commonJs/api"
    export default {
      components: {
        MyButton,
        MyCell},
      name: "feedback",
      computed:{
         baseUrl(){
           return this.$baseUrl;
         }
      },
      data() {
        return {
          data:{
            type:{
              name:'',
              value:0
            },
            content:"",
            imgUrl:[]
          },
          selects:[

          ],
          popupVisible:false
        }
      },
      methods:{
        submit(){
          let self=this;
          if (this.data.type.name==''){
            self.$message.alert('请选择意见类型')
            return;
          }
          if (this.data.content==''){
            self.$message.alert('请选择意见内容')
            return;
          }
          let postJson={
            "content": this.data.content,
            "opinionType":this.data.type.value,
            "pictures": [
            ]
          };
          self.data.imgUrl.forEach((item,index)=>{
            postJson.pictures.push({
              "pictureUrl": item,
              "seq": index
            })
          });
          this.$postJson(saveOpinion,
            postJson
          ).then(function (res) {
             self.$toast('提交成功');
             self.$router.back()
          }).catch(function (error) {
            self.$message.alert(error)
          })
        },
        onUpload2(e){
          let self=this;
          let fileTag = document.getElementById('file');
          let file = fileTag.files[0];
          if (!file){
            self.$message.alert("读取文件错误！")
            return;
          }
          this.$indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
          });
          let param = new FormData(); //创建form对象
          param.append('file',file);//通过append向form对象添加数据
          let headers = {'Content-Type':'multipart/form-data'}; //添加请求头
          self.$postJson(fileUpload,
            param,
            headers
          ).then(function (res) {
            // self.$message.alert(self.baseUrl+fileShow+res.data.data)
            self.data.imgUrl.push(res.data.data);
            self.$indicator.close();
          }).catch(function (error) {
            self.$message.alert(error);
            self.$indicator.close();
          });
          /*本地读取文件预览代码*/
          // let fileReader = new FileReader();
          // fileReader.onerror=function(){
          //    alert("读取文件错误！")
          // };
          // fileReader.onprogress=function(e){
          //   // console.log(e);
          // };
          // fileReader.onloadend = function () {
          //   if (fileReader.readyState == fileReader.DONE) {
          //     self.data.imgUrl.push(fileReader.result);
          //
          //
          //   }
          // };
          // //读取文件以base64格式返回
          // fileReader.readAsDataURL(file);
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
          this.popupVisible=false;
          if(type===1){
            this.selects.forEach(item1=>{
                if(item1.select){
                  self.data.type=item1;
                }
            });
          }

        }
      },
      mounted(){
        let self=this;
        this.$post(commonEnums,
         {
          code:'OpinionTypeEnum'
         }
        ).then(function (res) {
          // console.log(res.data.data);
          let data=res.data.data;
          for(let key in data){
             self.selects.push({
               value:key,
               name:data[key],
               select:false
             })
          }
        }).catch(function (error) {
          self.$message.alert(error);
        })
      }
    }
</script>

<style scoped>
  .file {
    position: relative;
    height: 1.62rem;
    width:1.62rem;
    margin-left: 2%;
    margin-top: .40rem;
    overflow: hidden;
  }
  .file input {
    position: absolute;
    font-size: 2rem;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .button_group{
    position: absolute;bottom: 0;left:0;width: 100%;align-items: center;
    justify-content: space-around;
    margin-bottom:.40rem;
    flex-direction: row;
  }
  .select_item_text{
    font-size:.26rem;
    color: #268cf0;
  }
  .select_area{
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: .40rem;
  }
  .select_item{
     width: 2rem;
    height: .60rem;
    align-items: center;
    justify-content: center;
    border:1px solid rgba(38,140,240,1);
    border-radius:.10rem;
    position: relative;
  }
  .select_item_no{
    width: 2rem;
    height: .60rem;
    align-items: center;
    justify-content: center;
    border:1px solid rgba(221,221,221,1);
    border-radius:.10rem;
    position: relative;
  }
  .pop_area{
     height: 6.6rem;
     width:100%;
     background:rgba(255,255,255,1);
     border-radius:.20rem .20rem 0 0;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .tip{
    margin-top:1rem;
    padding:.26rem;
  }
  .tip_text{
    font-size: .26rem;
    color: #999;
  }
  .right{
     margin-left:1.8rem;
  }
  .right_text{
    font-size: .26rem;
    color: #666;
  }
  .content{
    width: 100%;
    background-color: white;
    margin-top: .20rem;
  }
  .content_text{
     width: 90%;
     margin-left:2%;
     padding:3%;
    font-size: .24rem;
    margin-top: .20rem;
    border:1px solid rgba(221,221,221,1);
    border-radius:.10rem;
  }
  .upload_img{
     height: 1.62rem;
     width:1.62rem;
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

</style>
