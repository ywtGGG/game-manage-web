
<template>
  <div id="myApp">
    <img :src="src">
    	<!--<img src="../assets/logo.png" />-->
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Yes!</el-button>
  </div>
</template>

<script>
import imgUrl from "~/assets/logo.png"
import img from "~/assets/2333.gif"
export default {
  data () {
    return {
      msg: 'sb?',
      src: imgUrl
    }
  },

  methods: {
    startHacking () {
    	  this.src = img;
      this.$notify({
        title: 'hhhh',
        message: 'you are so stupid...',
        duration: 6000
      })
    }
  }
}
</script>

<style>
#myApp {
  font-family: Helvetica, sans-serif;
  text-align:center;
}
</style>
