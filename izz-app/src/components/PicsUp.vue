<template>
  <div class="picsup">
    <mt-header :title="vtitle">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

export default {
  name: 'picsup',
  data () {
    return {
      vtitle: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
