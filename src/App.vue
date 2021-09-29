<template>
  <div>
    <Board></Board>
  </div>
</template>

<script>
import Board from './components/board.vue'
export default {
  components:{
    Board
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
