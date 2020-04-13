<template>
  <li v-if="item">{{item}}</li>
</template>

<script>
export default {
  name: "app-listing",
  data() {
    return {};
  },
  props:{
      item:{
          type: String
      }
  }
};
</script>

<style scoped>
</style>