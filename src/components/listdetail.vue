<template>
  <div class="container">
   
    <router-link to="/tour" class="btn btn-secondary text-white float-right">뒤로가기</router-link>
    <h2>여행상품 목록</h2>
      <div >
          <h3>{{listData[$route.params.id].title}}</h3>
           <img :src="listData[$route.params.id].image" alt="">
          <p>{{listData[$route.params.id].content}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'detail',
    props:['listData']
}
</script>

<style>

</style>