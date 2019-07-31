<template>
  <div class="newInfo">
    <p class="title">{{news.title}}</p>
    <div class="time">
      <span>发表时间:{{news.add_time|dataFormat}}</span>
      <span>点击{{news.click}}次</span>
    </div>
    <hr />
    <div class="news-content" v-html="news.content"></div>
    <comment :id="this.id"></comment>
  </div>
</template>
<script>
import axios from "axios";
import comment from "../comment/comment.vue";
export default {
  name: "newInfo",
  data() {
    return {
      id: this.$route.params.id,
      news: {}
    };
  },
  components: {
    comment
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      axios
        .get("http://www.liulongbin.top:3005/api/getnew/" + this.id)
        .then(result => {
          if (result.data.status == 0) {
            this.news = result.data.message[0];
            console.log(this.news);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scope>
.title {
  font-size: 16px;
  text-align: center;
  color: red;
  margin: 15px 0;
  font-weight: bold;
}
.time {
  display: flex;
  justify-content: space-between;
  color: rgb(71, 181, 245);
  margin: 15px 0;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
}
hr {
  color: rgb(175, 185, 185);
}
html,
body {
  background-color: white !important;
}
.news-content {
  padding: 8px;
}
</style>
