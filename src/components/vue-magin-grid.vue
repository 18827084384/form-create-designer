<template>
  <div>
    <magic-grid :gap="20" :maxColWidth="maxColWidth" :animate="true" :maxCols="maxCols">
      <card v-for="(post, i) in posts" :key="i" :title="post.title" :body="post.body" />
    </magic-grid>
  </div>
</template>

<script>
import Card from './card.vue';
export default {
  components: {
    Card,
  },
  data() {
    return {
      posts: [],
      maxCols: null,
      maxColWidth: 200
    };
  },
  methods: {
      calcColWidth() {
        this.maxCols = Math.floor(document.body.clientWidth / this.maxColWidth)
      }
  },
  mounted() {
    fetch('//jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.posts = json.slice(0, 20);
      });
    this.calcColWidth()
  },
};
</script>

<style scoped></style>
