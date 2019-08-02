<template>
  <div class="home">
    <!--轮播图-->
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.index">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe> -->

    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

    <!--六宫格-->
    <div class="menu-img-row">
      <router-link to="/home/newslist">
        <img class="menu-img" src="../../img/menu1.png" alt />
      </router-link>

      <router-link to="/home/photolist">
        <img class="menu-img" src="../../img/menu2.png" alt />
      </router-link>

      <router-link to="/home/goodslist">
        <img class="menu-img" src="../../img/menu3.png" alt />
      </router-link>
    </div>
    <div class="menu-img-row">
      <router-link to="/home/newslist">
        <p>新闻资讯</p>
      </router-link>
      <router-link to="/home/photolist">
        <p>图片分享</p>
      </router-link>
      <router-link to="/home/goodslist">
        <p>商品分类</p>
      </router-link>
    </div>
    <div class="menu-img-row">
      <img class="menu-img" src="../../img/menu4.png" alt />
      <img class="menu-img" src="../../img/menu5.png" alt />
      <img class="menu-img" src="../../img/menu6.png" alt />
    </div>
    <div class="menu-img-row">
      <p>留言反馈</p>
      <p>视频分区</p>
      <p>联系我们</p>
    </div>

  </div>
</template>
<script>
import swiper from "../swiper/swiper.vue"
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  name: "home",
  data() {
    return {
      lunbotuList: []
    }
  },
  components:{
    swiper
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

.menu-img {
  width: 2rem;
  margin: 20px 0;
}
.menu-img-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
html,
body {
  background-color: white;
}
</style>
