<template>
  <div id="app">
    <img src={src}>
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Yes!</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Want something new?',
      src: '/static/logo.png'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'Shhh',
        message: 'Just be patient...',
        duration: 6000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
