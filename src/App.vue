<template>
  <div id="app" class="app-container">
    <mt-header fixed title="固定在顶部">
      <span  v-show="flag" @click="goBack" slot="left">
    <mt-button icon="back">back</mt-button>
      </span>
    </mt-header>
        
    <!--路由显示内容-->
    <transition>
      <router-view></router-view>
    </transition>
    <!--导航栏-->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="shopcart" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="search" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return{
       flag:false
    }
  },
  created(){
   this.flag = this.$route.path === '/'?false:true
  },
  watch:{
 '$route.path':function(newval){
  if(newval ==='/'){
    this.flag = false
    console.log( this.flag)
    console.log(this.$route.path)
  }else{
    this.flag = true
      console.log( this.flag)
      console.log("this.$route.path:",this.$route.path)
  }
 }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
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
 
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
