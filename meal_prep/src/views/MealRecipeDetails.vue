<template>
  <v-container>
    <h1>Meal Recipe Details</h1>
    <v-row>
      <v-col v-for="(meal,index) in mealItems" :key="`${index}`"  cols="12" md="12">
        <app-detail-card :meal="meal" :items="mealItems"></app-detail-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  getMealByName
} from "@/services/meal-recipes/meal-recipes.js";
import {AppDetailCard} from "@/components";
export default {
  name: "MealRecipeDetails",
  components: {
    AppDetailCard
  },
  data() {
    return {
      result: "",
      error: "",
      mealItems:""
    };
  },
  props: {
    paramName: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    const result = await getMealByName(this.paramName).catch(err => {
      this.error = err;
    });
    if (result) {
      this.mealItems = result.meals;
    }
  }
};
</script>
