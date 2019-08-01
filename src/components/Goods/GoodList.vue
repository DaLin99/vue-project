<template>
  <div class="goodsList">
    <div class="goods-item">
      <div>
        <img class="goods-item-img" src="../../img/menu1.png" alt />
        <p class="item-name">华为据大家大家按时的</p>
      </div>
      <div class="gray">
        <p>
          <span class="new-price">￥871</span>
          <span class="old-price">￥122</span>
        </p>

        <div class="hot-much">
          <span class="hotsell">撒谎的啊</span>
          <span class="much">sjadhahs</span>
        </div>
      </div>
    </div>

    <div class="goods-item">
      <div>
        <img class="goods-item-img" src="../../img/menu1.png" alt />
        <p class="item-name">华为小米地级234444444443fsdffd市啊大数据大家大家按时的</p>
      </div>
      <div class="gray">
        <p>
          <span class="new-price">￥871</span>
          <span class="old-price">￥122</span>
        </p>

        <div class="hot-much">
          <span class="hotsell">撒谎的啊</span>
          <span class="much">sjadhahs</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsList",
  data() {
    return {};
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
  width: 5rem;
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
