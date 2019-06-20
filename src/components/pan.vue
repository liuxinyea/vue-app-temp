<template>
    <div class="area" :style="{width:radius*2+'rem',height:radius+0.2+'rem'}">
      <slot/>
      <div class="little_line" v-for="item in lines"
           :style="{left:item.x+'rem',bottom:item.y+'rem',
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
        },
        percent:{
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
      watch:{
        percent: function () {
           this.getLines()
        }
      },
      methods:{
        // async函数返回一个Promise对象
        async getLines(){
          let self=this;
          this.lines=[];
          let lineNum=25;
          let verAngel=180/25;
          for(let i=0;i<=lineNum;i++){
            let dx=this.radius-this.radius*Math.cos(Math.PI/180*verAngel*i);
            let dy=this.radius*Math.sin(Math.PI/180*verAngel*i);
            let color="rgba(231,231,231,.2)";
            if(verAngel*i<this.percent/100*180){
              color="#ffffff";
            }
            //执行完此耗时操作再往下执行，支持返回Promise对象或者thenable对象的方法。
            await self.timeout(25);
             this.lines.push(
              { x:this.startX+dx,
                y:this.startY+dy,
                angle:verAngel*i,
                rotate:`rotate(${verAngel*i}deg)`,
                backgroundColor:color
              }
            )
          }
          // for(let i=0;i<=lineNum;i++){
          //
          //   if(this.lines[i].angle<self.percent/100*180){
          //     this.lines[i].backgroundColor="#ffffff"
          //   }
          // }
        },
        timeout(ms) {
         return new Promise((resolve) => {
           setTimeout(resolve, ms);
         });
       }


      },
      mounted () {
        let self=this;
        self.getLines().then(res=>{
          console.log(res);
        }).catch(error=>{
          console.log("error"+error);
        });

      },
    }
</script>

<style scoped>
  .area{
    align-items: center;
    position: relative;
    justify-content: center;
    /*background-color: aqua;*/
    /*overflow: hidden;*/
  }
  .little_line{
    position: absolute;
    /*z-index: ;*/
    height: .08rem;
    width: .20rem;
    border-radius:.04rem;
    box-shadow: 0 0 .1rem #fff;
  }
</style>
