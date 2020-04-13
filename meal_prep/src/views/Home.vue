<template>
  <v-container>
    <h1>Meal Recipe Details</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-autocomplete
          v-model="search"
          :items="mealOptions"
          :loading="isLoading"
          :search-input.sync="searchMeal"
          cache-items
          hide-no-data
          hide-selected
          item-text="strMeal"
          item-value="idMeal"
          append-icon="search"
          placeholder="Search Meal Recipe"
          return-object
        ></v-autocomplete>
        <span v-if="error">{{error}}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(meal,index) in mealItems" :key="`${index}`"  cols="12" md="12">
        <app-detail-card :meal="meal" :items="mealItems"></app-detail-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  getRandomMealRecipe,
  getAllMealsByInitial
} from "@/services/meal-recipes/meal-recipes.js";
import {AppDetailCard} from "@/components";
import debounce from "debounce";
export default {
  name: "Home",
  components: {
    AppDetailCard
  },
  data() {
    return {
      result: "",
      error: "",
      search: "",
      mealOptions: [],
      isLoading: false,
      searchMeal: null
    };
  },
  watch: {
    searchMeal(value) {
      if (!value) {
        return;
      }
      // Debounce the input and wait for a pause of at least 200 milliseconds.
      debounce(this.makeSearch, 500)(value, this);
    }
  },
  computed: {
    mealItems() {
      let mealArray = [];
      if (!this.search) return this.result;
      mealArray.push(this.search);
      return mealArray;
    }
  },
  async mounted() {
    const result = await getRandomMealRecipe().catch(err => {
      this.error = err;
    });
    if (result) {
      this.result = result.meals;
    }
  },
  methods: {
    makeSearch: async (value, self) => {
      if (!value) {
        self.mealOptions = [];
        self.search = "";
      }
      if (self.isLoading) {
        return;
      }
      self.isLoading = true;
      await getAllMealsByInitial(value)
        .then(response => {
          self.mealOptions = response.meals;
        })
        .catch(error => {
          self.error = `Unknown Error. Please check details and try again.${error}`;
        })
        .finally(() => (self.isLoading = false));
    }
  }
};
</script>
