<template>
  <div class="photoList">
    <!--顶部滚动栏-->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            @click="getPhotoListById(item.id)"
            v-for="item in  allCategory"
            :key="item.index"
            :class="['mui-control-item',item.id==0?'mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!--图片懒加载-->
    <div id="container">
      <ul class="photo-list" v-for="item in list" :key="item.index">
        <router-link :to="'/photolist/photoinf/'+item.id" tag="li">
          <img v-lazy.container="item.img_url" />
          <div class="info">
            <p class="info-title">{{item.title}}</p>
            <p class="info-body">{{item.zhaiyao}}</p>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import mui from "../../../lib/js/mui.min.js";
import axios from "axios";
export default {
  name: "photoList",
  data() {
    return {
      allCategory: [],
      list: []
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  created() {
    this.getCategory();
    this.getPhotoListById(0);
  },
  methods: {
    getCategory() {
      axios
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          console.log(result.data);
          this.allCategory = result.data.message;
          this.allCategory.unshift({
            id: 0,
            title: "全部"
          });
          console.log("all:", this.allCategory);
        });
    },
    getPhotoListById(cardId) {
      axios
        .get("http://www.liulongbin.top:3005/api/getimages/" + cardId)
        .then(result => {
          console.log("photo:", result);
          this.list = result.data.message;
          console.log("this.list:", this.list);
        });
    }
  }
};
</script>
<style scope>
.mui-segmented-control.mui-scroll-wrapper .mui-scroll {
  width: auto;
  height: 40px;
  white-space: nowrap;
  position: fixed;
  z-index: 66;
  background-color: white;
}
* {
  touch-action: pan-y;
}
.photo-list li {
  background-color: #cccc;
  position: relative;
  text-align: center;
  padding: 10px;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info {
  position: absolute;
  bottom: 0px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 70px;
}
.info-title {
  color: white;
  font-size: 14px;
}
.info-body {
  color: white;
  font-size: 12px;
}
</style>
