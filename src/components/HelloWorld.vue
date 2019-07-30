<template>
  <div class="hello">
    <mt-button type="default" @click="show">default</mt-button>
    <mt-button class="my" @click="show">default</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "HelloWorld",
  data() {
    return {
      toastItem: null
    };
  },
  props: {
    msg: String
  },
  created() {
    this.show();
    setTimeout(() => {
      this.toastItem.close();
    }, 3000);
  },
  methods: {
    show() {
      this.toastItem = Toast({
        message: "Upload Complete",
        position: "bottom",
        duration: -1
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-button--default {
  background-color: antiquewhite;
}
.my{
  background-color: rgb(117, 105, 89);
  color: white;
}
</style>
