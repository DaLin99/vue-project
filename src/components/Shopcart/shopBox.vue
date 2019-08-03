<template>
  <div class="shopBox">
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        @change="getCount"
        ref="myinput"
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="init"
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../../lib/js/mui.min.js";

export default {
  name: "shopBox",
  data() {
    return {
      value: true
    };
  },
  props: ["init", "goodsid"],
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getCount() {
      console.log(this.$refs.myinput.value);
      //商品数量发生改变
      this.$store.commit("updateCount", {
        id: this.goodsid,
        count: this.$refs.myinput.value
      });
    }
  }
};
</script>
<style scope>
</style>
