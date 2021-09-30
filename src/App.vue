<template>
  <div>
    <!-- <Board></Board> -->
    <VueMaginGgrid></VueMaginGgrid>
  </div>
</template>

<script>
// import Board from './components/board.vue'
import VueMaginGgrid from './components/vue-magin-grid.vue'
export default {
  components:{
    // Board,
    VueMaginGgrid
  }
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
