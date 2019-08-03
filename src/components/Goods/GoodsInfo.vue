<template>
  <div class="goodsInfo">
    <!--轮播图-->
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <div class="ball" ref="ball" v-show="ballFlag"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner word">
          <p>
            市场价：
            <span class="market-price">￥{{goodsInfo.market_price}}</span>
            销售价：
            <span class="sell-price">￥{{goodsInfo.sell_price}}</span>
          </p>
          <div class="toRow">
            <p class="number-title">购买数量：</p>
            <muchbox :max="goodsInfo.stock_quantity" @getcount="getSelectCount"></muchbox>
          </div>
          <div class="toRow">
            <mt-button size="small" type="primary">立即购买</mt-button>
            <mt-button @click="addTocart" size="small" type="danger">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div> 

{{$store.getters.getAllCount}}

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner toLeft">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsInfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer warp">
        <mt-button @click="goIntro(imgid)" class="btn" size="large" type="primary" plain>图文介绍</mt-button>
        <mt-button @click="goComm(imgid)" class="btn" size="large" type="danger" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../../components/swiper/swiper.vue";
import muchbox from "../much-box/much-box.vue";
import axios from "axios";
export default {
  name: "goodsInfo",
  data() {
    return {
      lunbotuList: [],
      imgid: this.$route.params.id,
      goodsInfo: {},
      ballFlag: false,
      selectCount:1
    };
  },
  created() {
    this.getLunboTu();
    this.getGoodsInfo();
    console.log("store：",this.$store.getters.getAllCount)
  },
  components: {
    swiper,
    muchbox
  },
  methods: {
    goComm(id) {
      this.$router.push({
        name: "goodsComm",
        params: id,
        path: "/home/goodsComm/" + id
      });
    },
    goIntro(id) {
      this.$router.push({
        name: "goodsIntro",
        params: id,
        path: "/home/goodsIntro/" + id
      });
    },

    getLunboTu() {
      axios
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.imgid)
        .then(result => {
          console.log(result.data);
          this.lunbotuList = result.data.message;
          console.log(this.lunbotuList);
        });
    },
    getGoodsInfo() {
      axios
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.imgid)
        .then(result => {
          console.log(result.data);
          this.goodsInfo = result.data.message[0];
          console.log("goodsinfo:", this.goodsInfo);
        });
    },
    addTocart() {
      this.ballFlag = !this.ballFlag;
      var goods ={
        id:this.imgid,
        price:this.goodsInfo.sell_price,
        count:this.selectCount,
        selected:true
      }
      this.$store.commit("addToCart",goods)
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      var ballPosition = this.$refs.ball.getBoundingClientRect();
      var badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      var xdiff = badgePosition.left - ballPosition.left;
      var ydiff = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xdiff}px,${ydiff}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = false;
    },
    getSelectCount(count){
      console.log("子组件传来的值啊：",count)
      this.selectCount = count
    }
  }
};
</script>
<style scope>
.ball {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  left: 10rem;
  top: 24.5rem;
  z-index: 99;
}
.number-title {
  margin-top: 4px;
}
.goodsInfo {
  text-align: center;
}
.word {
  color: rgb(122, 118, 118);
  text-align: left;
}
.market-price {
  text-decoration: line-through;
}
.sell-price {
  font-size: 16px;
  color: red;
  font-weight: bolder;
}
.toRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}
.warp {
  display: flex;
  flex-wrap: wrap;
}
.toLeft {
  text-align: left;
}
.btn {
  margin: 10px 0px;
}
</style>
