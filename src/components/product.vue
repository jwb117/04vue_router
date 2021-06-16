<template>
  <h2>product</h2>
   <ul>
       <li>
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