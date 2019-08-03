<template>
  <div class="shopcart">
    <div class="mui-card" v-for="(item,index) in shopcart" :key="item.index">
      <div class="mui-card-content">
        <div class="mui-card-content-inner toRow-center">
            <div>
                <mt-switch @change="selectChange(item.id,$store.getters.getGoodsSelect[item.id])" 
                v-model="$store.getters.getGoodsSelect[item.id]"
                :value="$store.getters.getGoodsSelect[item.id]"></mt-switch>
            </div>
            <div>
                <img class="my-img" :src="item.thumb_path" alt="">
            </div>
            <div>
             
                <p class="title">{{item.title}}</p>
               <div class="toRow">
                   <span class="price">￥{{item.sell_price}}</span>
                   <shopBox :init="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></shopBox>
                   <span class="del" @click="delGoods(item.id,index)"> 删除</span>
               </div>
            </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner toRow-Center">
          <div>
            <p>总计(不含运费)</p>
            <p>已购选商品<span class="red">{{$store.getters.getGoodCountAllprice.count}}</span>件，总价￥<span class="red">{{$store.getters.getGoodCountAllprice.aPrice}}</span></p>
          </div>
          <div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shopBox from "../Shopcart/shopBox.vue"
import axios from "axios"
export default {
  name: "shopcart",
  data() {
    return {
      value:true,
      shopcart:[]
    };
  },
  created(){
    this.getCartById()
   console.log(this.$store.getters.getGoodsCount)
  },
  components:{
      shopBox
  },
  methods:{
    getCartById(){
      var idArr =[ ]
      this.$store.state.cart.forEach(item=>{
        idArr.push(item.id)
      })
     if(idArr.length <= 0){
       return
     }
      console.log("idarr:",idArr.join(","))
    axios.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/"+idArr.join(","))
    .then(result=>{
      console.log(result.data)
      this.shopcart = result.data.message
    })
    },
    delGoods(id,index){
     this.shopcart.splice(index,1);
     this.$store.commit("removeForCart",id)
     
    },
    selectChange(id,val){
      console.log("selectchange:",id,val)
      this.$store.commit("updataSelect",{
        id:id,
        selected:val
      })
    }

  }
};
</script>
<style scope>
.shopBox{
  margin: 0px 10px;
}
.my-img{
    width: 100%;
}
.title{
    font-size: 15px;
    font-weight: bolder;
    color: black;
}
.price{
 color: red;
 font-size: 14px;
 font-weight: bolder;
}
.toRow{
 display: flex;
 align-items: center;
 
}
.del{
  color:rgb(44, 135, 240);
}
.toRow-center{
  display: flex;
  align-items: center;
}
.toRow-Center{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.red{
  color:red;
  font-size: 16px;
  font-weight: bolder;
}
</style>
