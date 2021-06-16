<template>
  <jwb-header/>
  <router-view></router-view>
  <jwb-footer/>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  name:"app",
  components:{
    'jwb-header':header,
    'jwb-footer':footer,
  }

}
</script>

<style>

</style>