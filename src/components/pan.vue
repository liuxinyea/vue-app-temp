<template>
    <div class="area" :style="{width:radius*2+'px',height:radius+10+'px'}">
      <slot/>
      <div class="little_line" v-for="item in lines"
           :style="{left:item.x+'px',bottom:item.y+'px',
               transform:item.rotate,backgroundColor:item.backgroundColor}">
      </div>
    </div>
</template>

<script>
    export default {
        name: "pan",
      props:{
        radius:{
          default:0,
          type:Number
        }
      },
        data() {
          return {
            lines:[],
            startX:0,
            startY:0,
            rotate:"rotate(0deg)"
          }
        },
      methods:{
        getLines(){
          let lineNum=25;
          let verAngel=180/25;
          for(let i=0;i<=lineNum;i++){
            let dx=this.radius-this.radius*Math.cos(Math.PI/180*verAngel*i);
            let dy=this.radius*Math.sin(Math.PI/180*verAngel*i);
            let color="rgba(231,231,231,.2)";
            if(verAngel*i<120){
              color="#ffffff"
            }
            this.lines.push(
              { x:this.startX+dx,
                y:this.startY+dy,
                rotate:`rotate(${verAngel*i}deg)`,
                backgroundColor:color,

              }
            )
          }
        }
      },
      mounted () {
        this.getLines();
      },
    }
</script>

<style scoped>
  .area{
    align-items: center;position: relative;
    justify-content: center;
    /*background-color: aqua;*/
    /*overflow: hidden;*/
  }
  .little_line{
    position: absolute;
    height: 4px;
    width: 10px;
    /*border-radius: 10px;*/
  }
</style>
