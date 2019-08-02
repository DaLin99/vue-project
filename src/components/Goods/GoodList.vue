<template>
  <div class="goodsList" >
    <div class="goods-item" @click="goTogoodInfo(item.id)" v-for="item in goodsList" :key="item.index">
      <div>
        <img class="goods-item-img" :src="item.img_url" alt />
        <p class="item-name">{{item.title}}</p>
      </div>
      <div class="gray">
        <p>
          <span class="new-price">￥{{item.sell_price}}</span>
          <span class="old-price">￥{{item.market_price}}</span>
        </p>

        <div class="hot-much">
          <span class="hotsell">热卖中</span>
          <span class="much">剩余{{item.stock_quantity}}件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "goodsList",
  data() {
    return {
      pageIndex:1,
      goodsList:[]
    };
  },
  created(){
   this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      axios.get("http://www.liulongbin.top:3005/api/getgoods?pageindex="+this.pageIndex)
      .then(result=>{
        console.log(result.data)
        this.goodsList = this.goodsList.concat(result.data.message)
      }).catch(err=>{
        console.log(err)
      })
    },
    goTogoodInfo(id){
      this.$router.push({
        path:'/home/goodslist/'+id,
        name:'goodsinfo',
        params:{
          id:id
        }
      })
    }
  }
};
</script>
<style scope>
.item-name {
  color: black;
  font-size: 14px;
  font-weight: bolder;
}
span {
  display: inline-block;
}
.gray {
  background-color: #ddd;
  margin: 0px;
}
.goodsList {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
}

.goods-item {
  width: 49%;
  display: flex;
  flex-direction: column;
  border: solid 1px #ccc;
  margin-bottom: 8px;
  padding: 2px;
  justify-content: space-between;
  min-height: 295px;
}
.goods-item-img {
  width: 100%;
  height: 100%;
}
.new-price {
  color: red;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 3px;
}
.old-price {
  color: rgb(145, 138, 138);
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 10px;
  margin-top: 3px;
}
.hot-much {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  background-color: #ddd;
  padding: 0px 5px 8px 2px;
}
</style>
