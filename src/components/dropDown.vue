<template>
  <transition name="fade">
   <div v-if="showWindowPop"   @click="$emit('modalClick',!showWindowPop)">
      <div class="mask" :style="{backgroundColor:showMask?'rgba(1,1,1,.3)':'rgba(1,1,1,0)'}">
          <canvas id="canvas" class="sanjiao" :style="{top:(this.top)+'rem',
          left:(this.left+offSetPosition)+'rem'}">
          </canvas>
          <div class="content" id="content"
               :style="{top:(this.top+.23)+'rem',left:(this.left)+'rem',
               minWidth:size.width+'rem',minHeight:size.height+'rem',borderRadius:size.height/6+'rem'}">
               <slot name="content">

               </slot>
          </div>
      </div>
   </div>
  </transition>
</template>

<script>
    /*带箭头的弹窗组件*/
    export default {
        name: "drop-down",
        //将showWindowPop设置为model值，并与时间modalClick绑定
        model: {
          prop: 'showWindowPop',
          event: 'modalClick'
        },
        props:{
          //是否显示弹窗
          showWindowPop:{
             default:true,
             type:Boolean
          },
          //是否显示遮罩
          showMask:{
            default:false,
            type:Boolean
          },
          //弹窗距离顶部的距离，使用rem单位
           top:{
             default:0,
             type:Number
           },
          //弹窗距离左边的距离，使用rem单位
          left:{
            default:0,
            type:Number
          },
          //三角箭头的位置，center,left,right
          position:{
            default:"center",
            type:String
          },
          //弹窗的默认大小，使用rem单位
          size:{
            default: function () {
              return {
                width:2,
                height:.4
              }
            },
            type:Object
          }
        },
        computed:{
          //计算弹窗三角箭头的偏移量
          offSetPosition(){
            if(this.position==='left'){
              return .2
            }else if(this.position==='right'){
              return this.size.width-.2
            }else{
              return this.size.width/2
            }
          }
        },
        watch:{
          //监听showWindowPop变量，并绘制三角形
          //这里短暂的延迟是为了等待界面dom节点创建完成
          showWindowPop:function () {
            if(this.showWindowPop){
              setTimeout(()=>{
                 this.draw();
              },50);
            }
          }
        },
        data() {
          return {
            contentWidth:0
          }
        },
        methods:{
           //绘制三角形
           draw(){
             let canvas= document.getElementById('canvas');
             let ctx=canvas.getContext('2d');
             let content=document.getElementById("html");
             ctx.fillStyle='#fff';
             ctx.translate(0.5, 0.5);
             ctx.imageSmoothingEnabled=true
             ctx.beginPath();
             ctx.moveTo(150,0);
             ctx.lineTo(300,150);
             ctx.lineTo(0,150);
             ctx.fill();
           }
        },
        mounted(){
          // let img=new Image()
          // img.src=require('../assets/logo.png')
          // ctx.drawImage(img,0,0);
          if(this.showWindowPop){
            setTimeout(()=>{
              this.draw();
            },50);
          }
        }
    }
</script>

<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .sanjiao{
     width:.40rem;
    position: absolute;
     height:.25rem;
     /*background-color: red;*/
  }
  .content{
    position: absolute;
    background-color: white;
    padding: .20rem;
  }
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
</style>
