import home from '../src/components/Home/Home.vue'
import member from '../src/components/Member/Member.vue'
import shopcart from '../src/components/Shopcart/Shopcart.vue'
import search from '../src/components/Search/Search.vue'
import newslist from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/PhotoList/PhotoList.vue'
import VueRouter from 'vue-router'
import photoInfo from './components/PhotoList/PhotoInfo.vue'
import goodsList from './components/Goods/GoodList.vue'
import goodsInfo from "./components/Goods/GoodsInfo.vue"
import goodsIntro from "./components/Goods/goodsIntro.vue"
import goodsComm from "./components/Goods/goodsComm.vue"

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
        },{
            path:'/home/photolist',
            component:photoList
        },{
            path:'/photolist/photoinf/:id',
            component:photoInfo
        },{
            path:'/home/goodslist',
            component:goodsList
        },{
            path:'/home/goodslist/:id',
            component:goodsInfo,
            name:'goodsinfo'
        },{
            path:'/home/goodsIntro/:id',
            name:'goodsIntro',
            component:goodsIntro 
        },{
            path:'/home/goodsComm/:id',
            name:'goodsComm',
            component:goodsComm
        }
    ],
    linkActiveClass: 'mui-active'

})
export default router