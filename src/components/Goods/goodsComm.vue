<template>
<div class="goodsComm">
    <comment :id="id"></comment>
</div>
</template>
<script>
import comment from "../comment/comment.vue"
 export default {
     name: 'goodsComm',
     data(){
         return{
           id:this.$route.params.id
         }
     },
     components:{
         comment
     }
     
 }
</script>
<style scope>

</style>
