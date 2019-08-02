<template>
<div class="goodsIntro">
   <p class="title">{{goodsIntro.title}}</p>
   <hr/>
   <div class="content" v-html="goodsIntro.content"></div>
</div>
</template>
<script>
import axios from "axios"
 export default {
     name: 'goodsIntro',
     data(){
         return{
           id:this.$route.params.id,
           goodsIntro:{}
         }
     },
     created(){
        this.getIntro()
     },
     methods:{
         getIntro(){
         axios.get("http://www.liulongbin.top:3005/api/goods/getdesc/"+this.id)
         .then(result=>{
             console.log(result.data);
             this.goodsIntro = result.data.message[0],
             console.log(this.goodsIntro)
         })
         }
     }
     
 }
</script>
<style scope>
 .title{
     color: rgb(0, 217, 255);
     text-align: center;
     margin: 15px 0;
 }
 .content img{
    width: 100%;
    height: 100%;
 }
</style>
