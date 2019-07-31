<template>
  <div id="app" class="app-container">
    <mt-header fixed title="固定在顶部"></mt-header>

    <!--路由显示内容-->
    <transition>
      <router-view></router-view>
    </transition>
    <!--导航栏-->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="shopcart" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style scoped>
.app-container{
  overflow-x: hidden;
  padding-top:40px;
  padding-bottom: 50px;
}
.v-enter,.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s ease;
  position: absolute;
}

</style>
