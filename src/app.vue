<template>
  <div id="app">
  	hello world!
  	<div class="content">
        <router-link to="/recharge">充值</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>



<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>