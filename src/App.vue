<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <first-page /> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import firstPage from './components/pages/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    firstPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
