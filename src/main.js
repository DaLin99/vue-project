import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes.js'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import preview from 'vue-preview'
Vue.use(preview)
Vue.use(MintUI)
Vue.use(Vuex)
import 'mint-ui/lib/style.css'

// with parameters install
Vue.use(preview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {
    top: 0,
    bottom: 0
  },
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

var cart = JSON.parse(localStorage.getItem("cart") || '[]')

var store = new Vuex.Store({
  state: {
    cart: cart,
  },
  mutations: {
    addToCart: function (state, goods) {
      var cartFlag = false
      //判断之前的购物车有没有这个物品
      state.cart.some(item => {
        if (item.id === goods.id) {
          cartFlag = true
          item.count += parseInt(goods.count)
          return true
        }
      })

      if (!cartFlag) {
        state.cart.push(goods)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
      console.log("localStorage:", JSON.parse(localStorage.getItem("cart")))
      console.log("state:", state.cart)
    },

    updateCount(state, goods) {
      state.cart.some(item => {
        if (item.id == goods.id) {
          item.count = parseInt(goods.count)
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    removeForCart(state,id){
       state.cart.some((item,i)=>{
         if(item.id == id){
           state.cart.splice(i,1)
           return true
         }
       })
       localStorage.setItem('cart', JSON.stringify(state.cart))
    },

   updataSelect(state,goods){
     state.cart.some(item=>{
       if(item.id == goods.id){
         item.selected = goods.selected
         return true
       }
     })
     localStorage.setItem('cart', JSON.stringify(state.cart))
   }
  },
  getters: {
    getAllCount(state) {
      var c = 0
      state.cart.forEach(item => {
      if(item.selected == true){
        c +=item.count
      }
        return c
      })
    },
    getGoodsCount(state) {
      var o = {}
      state.cart.forEach(item => {
        o[item.id] = item.count
      })
      return o;
    },
    getGoodsSelect(state){
      var o={}
      state.cart.forEach(item=>{
        o[item.id] = item.selected 
      })
      return o
    },
    getGoodCountAllprice(state){
      var o = {
        count:0,
        aPrice:0
      }
     state.cart.forEach(item=>{
       if(item.selected == true){
         o.count += item.count
         o.aPrice += item.count * item.price
       }
     })
     return o
    }
  }
})
//import moment from "../lib/js/moment.js"
// import { Header,Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header,);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button);

Vue.filter("dataFormat", function (dataStr) {
  var t = new Date(dataStr)
  var y = t.getFullYear()
  var m = t.getMonth() + 1
  var d = t.getDay()
  return `${y}-${m}-${d}`
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Lazyload);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');