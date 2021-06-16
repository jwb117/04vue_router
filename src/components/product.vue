<template>
  <h2>product</h2>
   <ul>
       <li v-for="(jwb, i) in listData" :key="i">
           <router-link :to="`/detail/${listData[i].id}`">{{listData[i].title}}</router-link>
       </li>
   </ul>
</template>

<script>
export default {
    name:"product",
    props:['listData']

}
</script>

<style>

</style>