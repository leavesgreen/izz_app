<template>
  <div class="picsup">
    <mt-header :title="vtitle">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
      <div class="file-list">
        <div v-for="item in imgList" class="img-div"><img class="img-flex"></img>
        </div>
        <div class="div-upload">
            <vue-core-image-upload
            :class="['btn','img-upload']"
            :crop="false"
            :text="deftxt"
            @imageuploaded="imageuploaded"
            :multiple="true"
            :multiple-size="8"
            :max-file-size="5242880"
            url="http://localhost:3000/" >
          </vue-core-image-upload>
        </div>
        <div  class="img-div">
        aaa
        </div>
    </div>
  </div>


</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
import VueCoreImageUpload from 'vue-core-image-upload'

Vue.component(Header.name, Header);

export default {
  name: 'picsup',
  components: {
    VueCoreImageUpload,
  },
  data () {
    return {
      vtitle: 'Welcome to Your Vue.js App',
      imgList: [],
      deftxt:'+'
    }
  },
  methods: {
    imageuploaded(res) {
      if(res.errcode == 0) {
        this.fileList = res.data
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.file-list{
   display: -webkit-flex;
   display: flex;
   align-items:center;
   flex-wrap:wrap;
}

.img-div{
  margin:10px;
  border: none;  
  height:80px;
  width:80px;
}

.img-flex{
   weith:100%;
   height:100%;
   align-self:center;
}

.div-upload{
  border:1px dotted #aaa;  
  margin:10px;
  height:80px;
  width:80px;
}

.img-upload{
  text-align:center;
  align-self:center;
  font-size:70px;
  width: 100%;
  height:100%;
}




</style>
