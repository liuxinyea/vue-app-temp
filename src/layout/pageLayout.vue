<template>
    <div>
      <div class="darkBackground" :style="{backgroundColor:background} ">
      </div>
       <slot name="head">
         <mt-header style="height:1rem;background-color: #3598FF;font-size:.36rem;z-index: 0" :fixed="true" :title="title" >
           <div v-if="showLeft" slot="left">
             <slot name="left">
               <mt-button icon="back" @click="back" style="color: white"/>
             </slot>
           </div>
            <div slot="right">
               <slot name="right"/>
            </div>
         </mt-header>
       </slot>
       <slot name="pageContent"/>
    </div>
</template>

<script>
    export default {
        name: "page-layout",
        props:{
          title:{
            default:"标题",
            type:String
          },
          fixed:{
            default:true,
            type:Boolean
          },
          headStyle:{

          },
          showLeft:{
            default:true,
            type:Boolean
          },
          background:{
            default:"#fff",
            type:String
          },
        },
      methods:{
        back(){
          this.$router.back();
        }
      }
    }
</script>

<style scoped lang="less">
  .darkBackground{
    position: fixed;
    height:30rem;
    width:12rem;
    background: #eee;
    z-index: -1
  }
</style>
