<template>
  <v-container>
    <h1 v-if="categories.length">Categories</h1>
    <v-row v-if="categories.length">
      <v-col v-for="(category,index) in categories" :key="`${index}`" cols="12" md="6" lg="3">
        <app-card
          :imageSource="category.strCategoryThumb" :title="'Category'" :paramvalue="category.strCategory" :tags="category.strCategory" :description="category.strCategoryDescription" :actionBtn="'Explore'" :routeName="'CategoryDetails'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getAllMealsCategories} from "@/services/meal-recipes/meal-recipes.js";
import {AppCard} from '@/components'
export default {
  name: "Categories",
  components: {
    AppCard
  },
  data(){
      return{
          categories:'',
          error:''
      }
  },
  async mounted() {
    const result = await getAllMealsCategories().catch(err => {
      this.error = err;
    });
    if (result) {
      this.categories = result.categories;
    }
  }
};
</script>

<style>
</style>


