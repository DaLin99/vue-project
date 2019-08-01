<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr />

    <textarea v-model="addComment" placeholder="请输入BB的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button @click="addCommentFun" size="large" type="primary">发表评论</mt-button>
    <div v-for="(item,index) in comment_list" :key="item.index">
      <div class="comment-content">
        <span>第{{index+1}}楼&nbsp&nbsp用户{{item.user_name}}</span>
        <span>发表时间:{{item.add_time|dataFormat}}</span>
      </div>
      <div class="user">{{item.content === ''?'此用户很懒，什么都没留下':item.content}}</div>
    </div>
    <mt-button size="large" type="danger" plain @click="moreComment">加载更多</mt-button>
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  name: "comment",
  data() {
    return {
      pageIndex: 1,
      comment_list: [],
      addComment: ""
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
    moreComment() {
      this.pageIndex++;
      this.getComment();
    },
    addCommentFun() {
      if (this.addComment.trim().length === 0) {
        Toast("输入点什么再发表呗");
      } else {
        console.log(this.addComment);

        // 发送 POST 请求
        axios({
          method: "post",
          url:
            "http://www.liulongbin.top:3005/api/postcomment/" +
            this.$route.params.id,
          data: {
            artid: this.$route.params.id,
            content: this.addComment.trim()
          }
        })
          .then(result => {
            console.log(result);
            console.log(result.data.status)
            if (result.data.status === 0) {
              var cmt = {
                user_name: "匿名用户",
                add_time: new Date(),
                content: this.addComment.trim()
              };
              console.log(cmt)
              this.comment_list.unshift(cmt);
              this.addComment = "";
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
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
