<template>
  <div class="card large">
    <div class="card-image">
      <img src="@/assets/ava.png" alt="Image" />
    </div>

    <div class="card-content content">
      <h4>{{ title }}</h4>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scope>
.card {
  box-shadow: 0px 0px 5px #888888;
  padding: 12px 5px;
}
.card-image {
  text-align: center;
}
img {
  width: 40px;
}
</style>
