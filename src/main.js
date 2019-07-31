import Vue from 'vue'
import router from './routes.js'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import VueResource from 'vue-resource'
import moment from 'moment'
import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';
Vue.component(Header.name, Header,);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button);

Vue.filter("dataFormat",function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
