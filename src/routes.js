import home from '../src/components/Home/Home.vue'
import member from '../src/components/Member/Member.vue'
import shopcart from '../src/components/Shopcart/Shopcart.vue'
import search from '../src/components/Search/Search.vue'
import newslist from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
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
        },{
            path:'/home/newslist',
            component:newslist
        },{
            path:'/home/newsList/:id',
            component:newsInfo
        }
    ],
    linkActiveClass: 'mui-active'

})
export default router