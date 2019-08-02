<template>
  <div class="much-box">
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input @change="getcount" ref="myinput" id="test" class="mui-input-numbox" type="number" value="1" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../../lib/js/mui.min.js"
export default {
  name: "much-box",
  data() {
    return {};
  },
  props:["max"],
  mounted(){
      mui(".mui-numbox").numbox();
  },
  methods:{
    getcount(){
      this.$emit("getcount",parseInt( this.$refs.myinput.value))
    }
  },
  watch:{
    max:function(newVal,oldVal){
      mui(".mui-numbox").numbox().setOption("max",newVal)
    }
  }
};
</script>
<style scope>
</style>
