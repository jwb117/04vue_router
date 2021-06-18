<template>
  <div>      
      <div class="container">    
          <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <a class="navbar-brand" href="/">LOGO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(jwb, i) in menu" :key="i">
                            <router-link :to="menu[i].link">{{menu[i].title}}</router-link>
                        </li>
                        
                    </ul>
                </div>
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
                {title:"HOME", link:'/'},
                {title:"COMPANY", link:'/company'},
                {title:"TOUR", link:'/tour'}
            ]
        }
    }
}
</script>

<style>

</style>