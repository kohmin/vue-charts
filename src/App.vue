<template>
  <div id="app">
    <FirebaseData></FirebaseData>
  </div>
</template> 

<script>
import FirebaseData from './components/FirebaseData.vue'
export default {
  name: 'app',
  components: {
    FirebaseData
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
