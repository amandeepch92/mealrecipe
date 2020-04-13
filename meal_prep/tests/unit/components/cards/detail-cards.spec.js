import {
    shallowMount
} from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import AppDetailCard from '@/components/cards/detail-cards.vue';

describe('In app-card Component', () => {
    let appDetailCardWrapper;
    beforeEach(() => {
        const meal = {
            "idMeal": "52771",
            "strMeal": "Spicy Arrabiata Penne",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "Italian",
            "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg",
            "strTags": "Pasta,Curry",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=1IszT_guI08",
            "strIngredient1": "penne rigate",
            "strIngredient2": "olive oil",
            "strIngredient3": "garlic",
            "strIngredient4": "chopped tomatoes",
            "strIngredient5": "red chile flakes",
            "strIngredient6": "italian seasoning",
            "strIngredient7": "basil",
            "strIngredient8": "Parmigiano-Reggiano",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": null,
            "strIngredient17": null,
            "strIngredient18": null,
            "strIngredient19": null,
            "strIngredient20": null,
            "strMeasure1": "1 pound",
            "strMeasure2": "1\/4 cup",
            "strMeasure3": "3 cloves",
            "strMeasure4": "1 tin ",
            "strMeasure5": "1\/2 teaspoon",
            "strMeasure6": "1\/2 teaspoon",
            "strMeasure7": "6 leaves",
            "strMeasure8": "spinkling",
            "strMeasure9": "",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": null,
            "strMeasure17": null,
            "strMeasure18": null,
            "strMeasure19": null,
            "strMeasure20": null,
            "strSource": null,
            "dateModified": null
        };
        const items = [{
            "idMeal": "52771",
            "strMeal": "Spicy Arrabiata Penne",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "Italian",
            "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg",
            "strTags": "Pasta,Curry",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=1IszT_guI08",
            "strIngredient1": "penne rigate",
            "strIngredient2": "olive oil",
            "strIngredient3": "garlic",
            "strIngredient4": "chopped tomatoes",
            "strIngredient5": "red chile flakes",
            "strIngredient6": "italian seasoning",
            "strIngredient7": "basil",
            "strIngredient8": "Parmigiano-Reggiano",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": null,
            "strIngredient17": null,
            "strIngredient18": null,
            "strIngredient19": null,
            "strIngredient20": null,
            "strMeasure1": "1 pound",
            "strMeasure2": "1\/4 cup",
            "strMeasure3": "3 cloves",
            "strMeasure4": "1 tin ",
            "strMeasure5": "1\/2 teaspoon",
            "strMeasure6": "1\/2 teaspoon",
            "strMeasure7": "6 leaves",
            "strMeasure8": "spinkling",
            "strMeasure9": "",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": null,
            "strMeasure17": null,
            "strMeasure18": null,
            "strMeasure19": null,
            "strMeasure20": null,
            "strSource": null,
            "dateModified": null
        }];
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        appDetailCardWrapper = shallowMount(AppDetailCard, {
            Vue,
            propsData: {
                meal: meal,
                items: items
            }
        });
    });

    afterEach(() => {
        appDetailCardWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appDetailCardWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a <v-card> element', () => {
        expect(appDetailCardWrapper.contains('v-card-stub')).toBe(true);
    });
    it('it should have a <v-img> element', () => {
        expect(appDetailCardWrapper.contains('v-img-stub')).toBe(true);
    });
    it('it should have a <v-card-text> element', () => {
        expect(appDetailCardWrapper.contains('v-card-text-stub')).toBe(true);
    });
    it('it should have a <v-chip> element', () => {
        expect(appDetailCardWrapper.contains('v-chip-stub')).toBe(true);
    });
    it('it should have a <v-icon> element', () => {
        expect(appDetailCardWrapper.contains('v-icon-stub')).toBe(true);
    });
    it('it should have a <app-listing> element', () => {
        expect(appDetailCardWrapper.contains('app-listing-stub')).toBe(true);
    });
    it('it should have a <v-col> element', () => {
        expect(appDetailCardWrapper.contains('v-col-stub')).toBe(true);
    });
    it('check image props', () => {
        expect(appDetailCardWrapper.vm.meal.strMealThumb).toBe('https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg')
    })
    it('check Title props', () => {
        expect(appDetailCardWrapper.vm.meal.strMeal).toBe('Spicy Arrabiata Penne')
    })

});