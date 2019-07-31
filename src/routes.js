import home from '../src/components/Home/Home.vue'
import member from '../src/components/Member/Member.vue'
import shopcart from '../src/components/Shopcart/Shopcart.vue'
import search from '../src/components/Search/Search.vue'
import VueRouter from 'vue-router'

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home
        }, {
            path: '/member',
            component: member
        }, {
            path: '/shopcart',
            component: shopcart
        }, {
            path: '/search',
            component: search
        }
    ],
    linkActiveClass: 'mui-active'

})
export default router