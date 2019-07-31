<template>
  <div class="home">
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.index">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>

 <!--六宫格-->
 <div class="menu-img-row">
   <router-link to="/home/newslist">
        <img class="menu-img" src="../../img/menu1.png" alt="">
   </router-link>
 
    <img class="menu-img" src="../../img/menu2.png" alt="">
    <img class="menu-img" src="../../img/menu3.png" alt="">
 </div>
 <div class="menu-img-row">
   <router-link to="/home/newslist">
      <p>新闻资讯</p>
   </router-link>
    <p>影片分享</p>
    <p>商品分类</p>
 </div>
  <div class="menu-img-row">
    <img class="menu-img" src="../../img/menu4.png" alt="">
    <img class="menu-img" src="../../img/menu5.png" alt="">
    <img class="menu-img" src="../../img/menu6.png" alt="">
 </div>
 <div class="menu-img-row">
    <p>留言反馈</p>
    <p>视频分区</p>
    <p>联系我们</p>
 </div>
   <!--MUI九宫格不能实现自适应布局
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">Home</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">location</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">Search</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </a>
        </li>
      </ul>-->

  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  name: "home",
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    axios
      .get("http://www.liulongbin.top:3005/api/getlunbo")
      .then(response => {
        console.log(response.data);
        if (response.data.status === 0) {
          this.lunbotuList = response.data.message;
          console.log(this.lunbotuList);
        } else {
          Toast("加载图片失败");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scope>
* {
  margin: 0px;
  padding: 0px;
}
.mint-swipe {
  height: 200px !important;
}
img {
  width: 100%;
  height: 100%;
}
.menu-img{
  width: 2rem;
  margin:20px 0; 
}
.menu-img-row{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
html,body{
   background-color: white;
}
</style>
