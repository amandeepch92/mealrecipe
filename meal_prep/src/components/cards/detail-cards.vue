<template>
  <v-card class="mx-auto">
    <v-img class="white--text align-end" height="400px" :src="meal.strMealThumb"></v-img>
    <v-card-text
      class="display-1 text-capitalize text-no-wrap d-inline-block text-truncate"
    >{{ meal.strMeal }}</v-card-text>
    <v-col v-if="meal.strTags" cols="12" class="pa-0">
      <app-tags v-for="(tagItem,index) in tagItems" :key="index" :item="tagItem"></app-tags>
    </v-col>
    <v-col cols="12" class="pa-0">
      <v-chip v-if="meal.strArea" color="primary ma-2" dark>
        {{meal.strArea}} &nbsp;
        <v-icon>place</v-icon>
      </v-chip>
      <v-chip v-if="meal.strCategory" color="primary ma-2" dark>
        {{meal.strCategory}} &nbsp;
        <v-icon>favorite_border</v-icon>
      </v-chip>
    </v-col>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6" lg="3">
          <div class="title font-weight-black">Ingredients</div>
          <ul>
            <app-listing
              v-for="(n, index) in 20"
              :key="index"
              :item="mealLisitingType('strIngredient',n)"
            ></app-listing>
          </ul>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <div class="title font-weight-black">Measure</div>
          <ul>
            <app-listing
              v-for="(n, index) in 20"
              :key="index"
              :item="mealLisitingType('strMeasure',n)"
            ></app-listing>
          </ul>
        </v-col>
        <v-col cols="12" md="12" lg="6">
          <div class="title font-weight-black">Instructions</div>
          <div v-if="meal.strInstructions">{{ meal.strInstructions }}</div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { AppTags, AppListing } from "@/components";
export default {
  name: "AppDetailCard",
  components: {
    AppTags,
    AppListing
  },
  data() {
    return {};
  },
  props: {
    meal: {
      type: Object
    },
    items: {
      type: [Array, Object]
    }
  },
  methods: {
    mealLisitingType(type, number) {
      var recipeResult = this.items[0];
      var ingredient = type + number;
      if (this.isEmptyOrSpaces(recipeResult[ingredient])) {
        return "";
      }
      return recipeResult[ingredient];
    },
    tagItems() {
      var recipeResult = this.items[0];
      if (recipeResult.strTags) {
        return recipeResult.strTags.split(",");
      }
    },
    isEmptyOrSpaces(str) {
      return str === null || str.match(/^ *$/) !== null;
    }
  }
};
</script>

<style>
</style>
