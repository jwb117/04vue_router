<template>
  <div>
      <h1 class=" text-center">logo</h1>
      <div class="container">
          
              <nav>
                  <ul class="gnb clearfix">
                      <li v-for="(jwb, i) in menu" :key="i" >
                        <router-link :to="menu[i].link">{{menu[i].title}}</router-link>
                      </li>
                  </ul>
              </nav>
          
      </div>
  </div>
</template>

<script>
export default {
    name:'header',
    data(){
        return{
            menu:[
                {title:"HOME", link:'/home'},
                {title:"COMPANY", link:'/company'},
                {title:"PRODUCT", link:'/product'}
            ]
        }
    }
}
</script>

<style>

</style>