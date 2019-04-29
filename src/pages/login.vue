<template>
    <div class="container">
      <a-row>
        <a-col :span="24" style="display: flex;align-items: center;justify-content: center;margin-top: 50px">
          <div class="logo">
            <!--<img class="logo_img" src="../assets/logo.png"/>-->
            <h3></h3>
          </div>
        </a-col>
      </a-row>
      <a-row style="margin-top: 50px">
        <a-col :span="24">
          <a-radio-group :defaultValue="type" @change="changes" buttonStyle="solid">
            <a-radio-button :value="1" >登录</a-radio-button>
            <a-radio-button :value="2">注册</a-radio-button>
          </a-radio-group>
          <!--<router-link to="login">-->
            <!--<a-button>-->
              <!--登录-->
            <!--</a-button>-->
          <!--</router-link>-->
          <!--<router-link to="register">-->
            <!--<a-button>-->
              <!--注册-->
            <!--</a-button>-->
          <!--</router-link>-->
        </a-col>
      </a-row>
      <div class="content">
        <transition  name="fade" mode="out-in">
          <keep-alive >
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
</template>

<script>
    import ACard from "ant-design-vue/es/card/Card";
    import AButton from "ant-design-vue/es/button/button";
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";

    export default {
      data:()=>{
        return{
          transitionName:"",
          type:1
        };
      },
      // watch $route 决定使用哪种过渡
      watch: {
        '$route' (to, from) {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'fade-in' : 'fade-out'
        }

      },
      components: {
        ARow,
        ACol,
        AButton,
        ACard},
      methods:{
        changes(e){
          this.type=e.target.value;
           if (this.type==1){
              this.$router.push('login_in')
           }else{
             this.$router.push('register')
           }
        }
      },
      name: "login"
    }
</script>

<style scoped>
  .content {
    width: auto;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .container{
    height: 100%;
    width: 100%;
    background-color: white;
  }
  .logo{
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #999999;
    border-radius: 10px;

  }
  .logo_img{
     height: 80px;
     width: 80px;
  }
</style>
