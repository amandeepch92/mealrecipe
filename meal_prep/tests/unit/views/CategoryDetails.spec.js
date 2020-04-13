import {
    shallowMount
} from '@vue/test-utils';
import Vuetify from 'vuetify'
import Vue from 'vue';
import CategoryDetails from '@/views/CategoryDetails.vue';
describe('In App Component', () => {
    let categoryDetailsWrapper;
    const paramName ='vegan'  
    beforeEach(() => {
        Vue.use(Vuetify);
        categoryDetailsWrapper = shallowMount(CategoryDetails, {
            Vue,
            propsData: {
                paramName: paramName
            }
        });
    });

    afterEach(() => {
        categoryDetailsWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(categoryDetailsWrapper.isVueInstance).toBeTruthy();
    });

});