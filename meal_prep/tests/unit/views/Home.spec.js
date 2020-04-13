import {
    shallowMount
} from '@vue/test-utils';
import Vuetify from 'vuetify'
import Vue from 'vue';
import Home from '@/views/Home.vue';
describe('In App Component', () => {
    let homeWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        homeWrapper = shallowMount(Home, {
            Vue
        });
    });

    afterEach(() => {
        homeWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(homeWrapper.isVueInstance).toBeTruthy();
    });

});