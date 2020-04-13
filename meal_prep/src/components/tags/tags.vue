<template>
  <v-chip color="green  ma-2" dark>{{item}}</v-chip>
</template>

<script>
export default {
  name: "app-tags",
  data() {
    return {};
  },
  props:{
      item:{
          type: String,
          required:true
      }
  }
};
</script>

<style scoped>
</style>