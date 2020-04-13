import {
    shallowMount
} from '@vue/test-utils';
import Vuetify from 'vuetify'
import Vue from 'vue';
import MealRecipeDetails from '@/views/MealRecipeDetails.vue';
describe('In App Component', () => {
    let mealRecipeDetailsWrapper;
    const paramName ='vegan'
    beforeEach(() => {
        Vue.use(Vuetify);
        mealRecipeDetailsWrapper = shallowMount(MealRecipeDetails, {
            Vue,
            propsData: {
                paramName: paramName
            }
        });
    });

    afterEach(() => {
        mealRecipeDetailsWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(mealRecipeDetailsWrapper.isVueInstance).toBeTruthy();
    });

});