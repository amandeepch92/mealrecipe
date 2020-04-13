<template>
  <v-card class="mx-auto" max-width="400">
    <v-img v-if="imageSource" class="white--text align-end" height="200px" :src="imageSource"></v-img>
    <v-card-title class="text-no-wrap d-block text-truncate" v-if="title">{{title}}</v-card-title>
    <app-tags v-if="tags" :item="tags"></app-tags>
    <v-divider class="mx-4"></v-divider>
    <v-layout v-if="description">
    <v-flex>
    <v-card-text class="scroll">{{description}}</v-card-text>
    </v-flex>
    </v-layout>
    <v-card-actions v-if="actionBtn">
      <v-btn v-if="routeName" :to="{ name: routeName, params: { paramName: paramvalue }}" color="orange" text>{{actionBtn}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { AppTags } from "@/components";
export default {
  name: "AppCard",
  components: {
    AppTags
  },
  props: {
    actionBtn: {
      type: String
    },
    description:{
        type:String
    },
    tags:{
        type:String
    },
    title:{
        type:String
    },
    imageSource:{
        type:String
    },
    routeName:{
        type:String
    },
    paramvalue:{
        type:String
    }
    
  }
};
</script>   

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
  height: 150px;
}
</style>
