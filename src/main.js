import Vue from 'vue'

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
import 'mint-ui/lib/style.css'

// with parameters install
Vue.use(preview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

//import moment from "../lib/js/moment.js"
// import { Header,Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header,);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button);

Vue.filter("dataFormat",function(dataStr){
  var t = new Date(dataStr)
          var y = t.getFullYear()
          var m = t.getMonth()+1
          var d = t.getDay()
          return `${y}-${m}-${d}`
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Lazyload);
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
