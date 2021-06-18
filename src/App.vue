<template>

  <div v-if="pView==true" class="black-bg" v-on:click="pView=false">
    <div class="pPop" v-on:click.stop.prevent="pView">
      <img :src="listData[pNum].image" alt="" class="w-100">
      <p class="text-center">{{listData[pNum].title}}</p>
      <button class="btn btn-primary d-block m-auto" @click="pView=false">닫기</button>
    </div>
  </div>

  <jwb-header/>
  <router-view :listData="listData" @pOpen="pView=true; pNum=$event"></router-view>
  <jwb-footer/>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import listData from './pdata.js'


export default {
  name:"app",
  components:{
    'jwb-header':header,
    'jwb-footer':footer,
    
  },
  data(){
    return{
      listData:listData,
      pView:false,
      pNum:0,
    }
  }

}
</script>

<style>
  .black-bg{position: fixed; z-index: 10; background: rgba(0 , 0, 0, 0.7); width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;}
  .pPop{overflow: hidden; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.5); background: #fff;}

  @media screen and (min-width:900px) {
    .pPop{width:800px; }
  }
</style>