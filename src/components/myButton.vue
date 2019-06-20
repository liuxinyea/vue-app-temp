<template>
    <div class="btn_area" @click="btnClick" :style="{height:height+'rem',
    width:width+'rem',
    borderRadius:height+'rem',
    backgroundColor:type==='confirm'?'#268CF0':'#ffffff'
    }">
        <span class="btn_text" :style="{color:type==='confirm'?'#ffffff':'#268CF0'}" v-if="text.value==='null'">{{type==='confirm'?'确定':'取消'}}</span>
        <span class="btn_text" :style="{color:type==='confirm'?'#ffffff':'#268CF0'}" v-else>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "myButton",
      props:{
          type:{
            default:"confirm",
            type:String
          },
          width:{
            default:3.2,
            type:Number
          },
        height:{
          default:.86,
          type:Number
        },
        text:{
          default:function () {
            return {
              value:"null",
              color:"#ffffff"
            }
          },
          type:Object
        }
      },
      methods:{
        btnClick(){
          this.$emit("btnClick",{})
        }
      }
    }
</script>

<style scoped>
  .btn_area{
      background-color: #268CF0;
      align-items: center;
      justify-content: center;
      border:1px solid rgba(38,140,240,1);
  }
  .btn_text{
     font-size: .30rem;
  }

</style>
