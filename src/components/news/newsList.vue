<template>
  <div class="newlist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.index">
       <router-link :to="'/home/newsList/'+item.id">
        
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
                <span>发布时间:{{item.add_time|dataFormat}}</span>
                <span>点击次数:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "newlist",
  data() {
    return {
        newsList:[]
    };
  },
  created(){
      this.getNewsList()
  },
  methods:{
      getNewsList(){
          axios.
          get('http://www.liulongbin.top:3005/api/getnewslist').
          then(result=>{
               console.log(result.data)
              if(result.data.status === 0){
                  this.newsList = result.data.message
                  console.log(this.newsList)
              }              
          }).
          catch(err=>{
              console.log(err)
          })
      }
  }
};
</script>
<style scope>
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
    color: #226aff;
    font-size: 12px;
}
.mui-media-body{
    font-size: 15px;
}
</style>
