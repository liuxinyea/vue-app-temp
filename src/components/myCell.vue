<template>
  <div class="cell_style" @click="cellClick" :style="{height:height}">
    <slot name="title">
      <span class="mint_cell_text" v-text="title"></span>
    </slot>
    <slot name="lable">
      <span v-if="label" class="mint_cell_label" v-text="label"></span>
    </slot>
    <div  style="position: absolute;right: 25px">
      <slot name="right">
      </slot>
    </div>
    <img v-if="is_link" class="mint_cell_link" :src="imgUrl"/>
  </div>
</template>

<script>

    export default {
      name: "myCell",
      props:{
          title:{
            default:"标题",
            type:String
          },
          label:{
            default:"",
            type:String
          },
          is_link:{
            default:true,
            type:Boolean
          },
          height:{
            default:'50px',
            type:String
          },
      },
      data(){
        return{
          imgUrl:"static/img/link@2x.png"
        }
      },
      methods:{
        cellClick(){
          this.$emit("cellClick",{});
        }
      }
    }
</script>

<style scoped>
  .cell_style{
    flex-direction: row;
    width: 94%;
    padding-left: 3%;
    padding-right: 3%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .mint_cell_text{
    font-size: 13px;
    width: 130px;
  }
  /*.cell_style :active{*/
    /*flex-direction: row;*/
    /*width: 100%;*/
    /*align-items: center;*/
    /*justify-content: space-between;*/
    /*background-color: #eee;*/
    /*border-bottom: 1px solid #eee;*/
  /*}*/
  .mint_cell_link{
    height: 13px;
    width: 9px;
    margin-top: 3px;
  }

</style>
