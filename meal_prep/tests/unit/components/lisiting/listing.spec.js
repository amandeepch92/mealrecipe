import {
    shallowMount
} from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import AppListing from '@/components/listing/listing.vue';

describe('In app-lisitng Component', () => {
    let appListingWrapper;
    beforeEach(() => {
        const item = 'Meal Recipes'
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        appListingWrapper = shallowMount(AppListing, {
            Vue,
            propsData: {
                item: item
            }
        });
    });

    afterEach(() => {
        appListingWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appListingWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a <li> element', () => {
        expect(appListingWrapper.contains('li')).toBe(true);
    });
    it('it should match props element', () => {
        expect(appListingWrapper.find('li').text()).toMatch('Meal Recipes')
    });

});