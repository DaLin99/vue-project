import Vue from 'vue'
import router from './routes.js'
import VueRouter from 'vue-router'
import App from './App.vue'
import { Header,Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import VueResource from 'vue-resource'
Vue.component(Header.name, Header,);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
