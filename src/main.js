import Vue from 'vue'
import App from './App.vue'
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
Vue.component(Header.name, Header);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
