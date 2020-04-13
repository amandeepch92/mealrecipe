import {
    shallowMount
} from '@vue/test-utils';
import Vuetify from 'vuetify'
import Vue from 'vue';
import Categories from '@/views/Categories.vue';
describe('In App Component', () => {
    let categoriesWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        categoriesWrapper = shallowMount(Categories, {
            Vue
        });
    });

    afterEach(() => {
        categoriesWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(categoriesWrapper.isVueInstance).toBeTruthy();
    });

});