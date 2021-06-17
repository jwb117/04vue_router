<template>
  <h2>product</h2>

<div class="best">
    <div class="container">
      <h2 class="text-center">싱가포르 여행 개별 추천상품</h2>
      <p>가장 인기많은 싱가포르 베스트 여행 상품을 소개합니다.</p>
      <div class="row ">
            <div class="col-md-4 col-sm-6" v-for="(jwb, i) in listData" :key="i">
            <img :src="listData[i].image" alt="" class="w-100">
            <router-link :to="`/detail/${listData[i].id}`">{{listData[i].title}}</router-link>
            </div>
        </div>
    </div>
</div>


   <!-- <ul>
       <li v-for="(jwb, i) in listData" :key="i">
           <router-link :to="`/detail/${listData[i].id}`">{{listData[i].title}}</router-link>
       </li>
   </ul> -->
</template>

<script>
export default {
    name:"product",
    props:['listData']

}
</script>

<style>

</style>