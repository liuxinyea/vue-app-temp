<template>
  <a-spin :spinning="spinning">
    <div class="content">
      <a-button type="primary" @click="login">登录</a-button>
    </div>
  </a-spin>
</template>

<script>
    import AButton from "ant-design-vue/es/button/button";

    export default {
      components: {AButton},
      data(){
        return{
          spinning: false
        }
      },
      name: "login_layout",
      methods:{
        login(){
           this.spinning=true;
           let self=this;
           setTimeout(function () {
             self.spinning=true;
             self.$router.push('host')
           },1000);

        }
      }
    }
</script>

<style scoped>
  .content{
     height:300px;
     width: 100%;
    background-color: orange;
     display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
