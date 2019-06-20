<template>
    <div class="container">
      <mt-header style="height:50px;background-color: #3598FF;font-size:.36rem" :fixed="true" title="客户认证" >
        <router-link to="/" slot="left">
          <mt-button icon="back" style="color: white"/>
        </router-link>
        <!--<mt-button icon="more" slot="right"/>-->
      </mt-header>
      <div style="align-items: center;justify-content: center;width: 100%;height: 200px">
        <img class="head_img" src="static/img/head.png" srcset="static/img/head.png 1x,static/img/head@2x.png 2x"/>
      </div>
      <div class="">
        <div class="input_area">
          <input class="input_s" v-model="tel" ref="phone" type="tel" placeholder="输入手机号码"/>
        </div>
        <div class="input_area">
          <input class="input_s" v-model="smsCode"  type="number" placeholder="短信验证码"/>
          <div class="verify_code" @click="sendCode">
             <span class="verify_code_text">{{secondNumber===60?'发送验证码':secondNumber}}</span>
          </div>
        </div>
        <div class="tip">
          <img style="height: .24rem;width: .24rem" src="static/img/icon.png" srcset="static/img/icon.png 1x,static/img/icon@2x.png 2x"/>
          <span class="verify_code_text" style="margin-left: 10px">认证后我们会为您提供更精准的服务！</span>
        </div>
      </div>
      <div class="submit_btn" @click="logIn">
        <span class="submit_btn_text">客户认证</span>
      </div>
    </div>
</template>

<script>
    // let toPath='';
    import {queryUserByMobile,sendSms,auth} from "../commonJs/api";
    export default {
        name: "identify",
        data() {
          return {
            secondNumber:60,
            toPath:'',
            tel:'',
            smsCode:''
          }
        },
      watch:{
        // '$route':(to, from, next)=>{
        //
        // }
      },
      methods:{
          sendCode(){
              let self=this;
              this.$indicator.open({
                text: '发送中...',
                spinnerType: 'triple-bounce'
              });
              this.checkTel().then(function (res) {
                self.sendSms().then(function (res) {
                  self.reTime();
                }).catch(function (error) {
                  self.$message.alert(error)
                }).finally(function () {
                  self.$indicator.close();
                });
              }).catch(function (error) {
                 self.$message.alert(error)
              }).finally(function () {
                self.$indicator.close();
              });
          },
        reTime(){
          let self=this;
          setTimeout(()=>{
            self.secondNumber--;
            if (self.secondNumber>0){
              self.reTime();
            }else{
              self.secondNumber=60;
            }
          },1000)
        },
        checkTel(){
            let self=this;
            return new Promise((resolve,reject) => {
              if(self.tel===''){
                reject("手机号码不能为空！");
                return;
              }
              let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
              if (!myreg.test(self.tel)) {
                reject("手机号码格式错误！");
                return;
              }
              self.$get(queryUserByMobile,
                {mobile:self.tel})
                .then(function (res) {
                  console.log(res);
                  resolve(res)
                }).catch(function (error) {
                  reject(error)
              })
            });

        },
        sendSms(){
          let self=this;
          return new Promise((resolve,reject) => {
            self.$get(sendSms,
              {mobile:self.tel})
              .then(function (res) {
                resolve(res)
              }).catch(function (error) {
                reject(error)
            })
          });
        },
        logIn(){
          let self=this;
          if(self.tel===''){
            self.$message.alert("手机号码不能为空！");
            return;
          }
          let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if (!myreg.test(self.tel)) {
            self.$message.alert("手机号码格式错误！");
            return;
          }
          if(self.smsCode===''){
            self.$message.alert("验证码不能为空！");
            return;
          }
          this.$indicator.open({
            text: '发送中...',
            spinnerType: 'triple-bounce'
          });
          self.$post(auth,
            {
              mobile:self.tel,
              vCode:self.smsCode,
              openid:localStorage.getItem("openid")
            })
            .then(function (res) {
              self.$toast("认证成功");
              // let path=self.$query();
              self.$indicator.close();
              self.$router.back();
              this.$bus.$emit("refreshOpenId","1")
            }).catch(function (error) {
              self.$message.alert(error);
              self.$indicator.close();
          }).finally(function () {
            self.$indicator.close();
          })
        }
      },
      // beforeRouteEnter(to,from,next){
      //   // alert(to);
      //   // toPath=from.fullPath;
      // }
    }
</script>

<style scoped lang="less">
  @background:#ffffff;
  div{
    background-color: @background;
    display: flex;
    flex-direction: column;
  }
  .container{
    height: 100%;
    width: 100%;
  }
  .head_img{
    margin-top:1rem;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: .9rem;

  }
  .input_area{
    width: 90%;
    height: 1rem;
    margin-left: 5%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-bottom: 1px solid #DDD;
  }
  .tip{
    width: 90%;
    margin-top: .20rem;
    margin-left: 5%;
    align-items: center;
    flex-direction: row;
  }
  .input_s{
    border: 0 solid white;
    width: 100%;
    font-size: .30rem;
    color: #333;
  }
  .verify_code{
    width:30%;
    height:60%;
    align-items: center;
    justify-content: center;
    background:rgba(244,244,244,1);
    border-radius:2rem;
  }
  .verify_code_text{
    font-size:.26rem;
    font-family:PingFangSC-Regular,serif;
    font-weight:400;
    color:rgba(53,152,255,1);
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
