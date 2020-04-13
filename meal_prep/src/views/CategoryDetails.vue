<template>
  <v-container>
    <h1 v-if="categoryDetails.length">Category Details</h1>
    <v-row v-if="categoryDetails.length">
      <v-col v-for="(category,index) in categoryDetails" :key="`${index}`" cols="12" md="6" lg="3">
        <app-card
          :imageSource="category.strMealThumb" :paramvalue="category.strMeal" :title="category.strMeal" :actionBtn="'Explore Recipe'" :routeName="'MealRecipeDetails'"
         />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getCategoryDetails} from "@/services/meal-recipes/meal-recipes.js";
import {AppCard} from '@/components'
export default {
  name: "CategoryDetails",
  components: {
    AppCard
  },
  data(){
      return{
          categoryDetails:'',
          error:''
      }
  },
  props: {
    paramName: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    const result = await getCategoryDetails(this.paramName).catch(err => {
      this.error = err;
    });
    if (result) {
      this.categoryDetails = result.meals;
    }
  }
};
</script>

<style>
</style>


