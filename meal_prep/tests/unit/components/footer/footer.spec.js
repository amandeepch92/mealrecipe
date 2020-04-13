import {
    shallowMount
} from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import AppFooter from '@/components/footer/footer.vue';

describe('In app-header Component', () => {
    let appFooterWrapper;
    beforeEach(() => {
        const footerDescription = 'Meal Recipes'
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        appFooterWrapper = shallowMount(AppFooter, {
            Vue,
            propsData: {
                footerDescription: footerDescription
            }
        });
    });

    afterEach(() => {
        appFooterWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appFooterWrapper.isVueInstance).toBeTruthy();
    });
    it('it shoud have <v-footer> element',()=>{
        expect(appFooterWrapper.contains('v-footer-stub')).toBe(true);
    })
    it('it shoud have <v-flex> element',()=>{
        expect(appFooterWrapper.contains('v-flex-stub')).toBe(true);
    })
    it('it renders the correct text', () => {
        const expected = "2020 —";
        expect(appFooterWrapper.text()).toContain(expected);
    });
    it('it should have a <v-layout> element', () => {
        expect(appFooterWrapper.contains('v-layout-stub')).toBe(true);
    });
    it('it should have a <strong> element', () => {
        expect(appFooterWrapper.contains('strong')).toBe(true);
    });
    it('Checks the Props Value', () => {
        expect(appFooterWrapper.vm.footerDescription).toMatch('Meal Recipes')
    })
    it('Checks the Strong Value', () => {
        expect(appFooterWrapper.find('strong').text()).toMatch('Meal Recipes')
    })
});