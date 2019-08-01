<template>
  <div class="photoInfo">
    <div>
      <p class="photoInfo-title">{{photoInfo.title}}</p>
    </div>
    <div class="photoInfo-submit">
      <span>发布时间:{{photoInfo.add_time}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </div>
    <hr />
  
         <vue-preview :slides="list" @close="handleClose"></vue-preview>
   
    <div class="photoInfo-content" v-html="photoInfo.content"></div>
    <div>
        <comment :id="imgid"></comment>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import comment from "../comment/comment.vue";
export default {
  name: "photoInfo",
  data() {
    return {
      imgid: this.$route.params.id,
      photoInfo: {},
      list:[]
    };
  },
  components: {
    'comment':comment 
  },
  created() {
    this.getPhotoInfo();
    this. getThumbus();
  },
  methods: {
    getPhotoInfo() {
      axios
        .get("http://www.liulongbin.top:3005/api/getimageInfo/" + this.imgid)
        .then(result => {
          console.log(result.data);
          this.photoInfo = result.data.message[0];
          console.log(this.photoInfo);
        }).catch(err=>{
            console.log(err)
        })
    }
  ,
    getThumbus() {
      axios
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.imgid)
        .then(result => {
          console.log(result.data);
           result.data.message.forEach(item=>{
               item.w = 600,
               item.h = 400,
               item.msrc = item.src
           })
          this.list = result.data.message
        }).catch(err=>{
            console.log(err)
        })
    },
    handleClose () {
        console.log('close event')
      }
  }
};
</script>

<style scope>
.small-image{
    width: 100px;
    height: 100px;
}
.photoInfo-title {
  color: #26a2ff;
  font-size: 15px;
  font-weight: bolder;
  text-align: center;
  margin-top: 10px;
}

.photoInfo-submit {
     padding: 10px;
  color: gray;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.photoInfo-content {
  font-size: 13px;
  line-height: 30px;
    padding: 10px;
}
</style>
