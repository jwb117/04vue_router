<template>

  <div v-if="pView==true">
    1
  </div>

  <jwb-header/>
  <router-view :listData="listData"></router-view>
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
    }
  }

}
</script>

<style>

</style>