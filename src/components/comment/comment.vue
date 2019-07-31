<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入BB的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button size="large" type="primary">发表评论</mt-button>
    <div v-for="(item,index) in comment_list" :key="item.index">
      <div class="comment-content">
        <span>第{{index+1}}楼&nbsp&nbsp用户{{item.user_name}}</span>
        <span>发表时间:{{item.add_time|dataFormat}}</span>
      </div>
      <div class="user">{{item.content === ''?'此用户很懒，什么都没留下':item.content}}</div>
    </div>
    <mt-button size="large" type="danger" plain
    @click="moreComment"
    >加载更多</mt-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "comment",
  data() {
    return {
      pageIndex: 1,
      comment_list: []
    };
  },
  props: ["id"],
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      axios
        .get(
          "http://www.liulongbin.top:3005/api/getcomments/" +
            this.id +
            "?pageindex=" +
            this.pageIndex
        )
        .then(result => {
          console.log(result.data);
          console.log(111);
          if (result.data.status == 0) {
            this.comment_list = this.comment_list.concat(result.data.message);
            console.log(this.comment_list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    moreComment(){
       this.pageIndex++;
       this.getComment()
    }
  }
};
</script>
<style scope>
.comment-content {
  width: 100%;
  height: 35px;
  background-color: #ccc;
  line-height: 35px;
  
  display: flex;
  font-size: 15px;
  justify-content: space-around;
}
.user {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-indent: 2em;
  font-size: 15px;
}
h3 {
  font-size: 18px;
}
textarea {
  margin: 0px;
  font-size: 15px;
}
</style>
