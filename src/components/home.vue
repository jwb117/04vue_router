<template>
  <swiper :pagination="true" class="mySwiper" >
    <swiper-slide><img src="image/slide01.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="image/slide02.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="image/slide03.jpg" alt=""></swiper-slide>
  </swiper>

  <div class="best">
    <div class="container">
      <h2 class="text-center">싱가포르 여행 개별 추천상품</h2>
      <p>가장 인기많은 싱가포르 베스트 여행 상품을 소개합니다.</p>
      <div class="row">
        <div class="col-md-3 col-sm-6" v-for="(jwb, i) in 4" :key="i">
           <!-- <router-link :to="`/detail/${listData[i].id}`"> -->
            <img :src="listData[i].image" alt="" class="w-100" @click="$emit('pOpen', listData[i].id)">
            <div @click="$emit('pOpen', listData[i].id)">{{listData[i].title}}</div>
            
              <!-- <p class="text-center">{{listData[i].title}}</p> -->
            
           <!-- </router-link> -->
        </div>
      </div>

     
        <div class="btn btn-primary m-auto d-block" style="width:100px">
           <router-link to="/tour" class="d-block">more</router-link>
        </div>
      
    </div>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/components/pagination/pagination.min.css"
import 'swiper/swiper.scss';

import SwiperCore, { Pagination } from 'swiper/core';
SwiperCore.use([Pagination]);

export default {
  props: ['listData'],
components: {
      Swiper,
      SwiperSlide,
     
    },
}
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>