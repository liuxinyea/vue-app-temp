<template>
    <div class="container">
      <mt-header style="height:50px;background-color: #3598FF;font-size:18px" :fixed="true" title="客户认证" >
        <router-link to="/" slot="left">
          <mt-button icon="back" style="color: white"/>
        </router-link>
        <!--<mt-button icon="more" slot="right"/>-->
      </mt-header>
      <div style="align-items: center;justify-content: center;width: 100%;height: 200px">
        <img class="head_img" src="static/img/head@2x.png"/>
      </div>
      <div class="">
        <div class="input_area">
          <input class="input_s" type="tel" placeholder="输入手机号码"/>
        </div>
        <div class="input_area">
          <input class="input_s" type="tel" placeholder="短信验证码"/>
          <div class="verify_code">
             <span class="verify_code_text">发送验证码</span>
          </div>
        </div>
        <div class="tip">
          <img style="height: 12px;width: 12px" src="static/img/icon@2x.png"/>
          <span class="verify_code_text" style="margin-left: 10px">认证后我们会为您提供更精准的服务！</span>
        </div>
      </div>
      <router-link to="my" tag="div">
        <div class="submit_btn">
          <span class="submit_btn_text">客户认证</span>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "identify"
    }
</script>

<style scoped>
  div{
    display: flex;
    flex-direction: column;
  }
  .container{
    height: 100%;
    width: 100%;
  }
  .head_img{
    margin-top: 50px;
    width: 85px;
    height: 85px;
    border-radius: 45px;

  }
  .input_area{
    width: 90%;
    height: 50px;
    margin-left: 5%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-bottom: 1px solid #DDD;
  }
  .tip{
    width: 90%;
    margin-top: 10px;
    margin-left: 5%;
    align-items: center;
    flex-direction: row;
  }
  .input_s{
    border: 0 solid white;
    width: 100%;
    font-size: 15px;
    color: #333;
  }
  .verify_code{
    width:30%;
    height:60%;
    align-items: center;
    justify-content: center;
    background:rgba(244,244,244,1);
    border-radius:100px;
  }
  .verify_code_text{
    font-size:13px;
    font-family:PingFangSC-Regular,serif;
    font-weight:400;
    color:rgba(53,152,255,1);
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

</style>
