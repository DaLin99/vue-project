<template>
  <div class="swiper">
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.index">
        <img :src="item.img||item.src" :class="{full:isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
     
    };
  },
  props:{
      'lunbotuList':{
          type:Array
      },
      'isfull':{
          type:Boolean
      }
  }
};
</script>
<style scope>
.mint-swipe {
  height: 200px !important;
}
img {
  width: auto;
  height: 100%;
}
.full{
    width: 100%
}
</style>
