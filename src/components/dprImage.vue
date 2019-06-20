<template>
    <div>
       <img :class="" :src="src" :style="style" :srcset="src+'.png 1x',src+'',src+'@2x.png 2x'" />
    </div>
</template>

<script>
    export default {
        name: "dpr-image",
        props:{
          src:{
            default:"",
            type:String
          },
          style:{
            default:{

            },
            type:Object
          }
        },
       mounted(){
          // let dpr=window.devicePixelRatio||1;
          // if(dpr===1){
          //
          // }
       }
    }
</script>

<style scoped>

</style>
