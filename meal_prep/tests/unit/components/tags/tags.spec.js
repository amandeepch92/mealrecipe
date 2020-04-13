import {
    shallowMount
} from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import AppTags from '@/components/tags/tags.vue';

describe('In app-tag Component', () => {
    let appTagsWrapper;
    beforeEach(() => {
        const item = 'Vegeterian'
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        appTagsWrapper = shallowMount(AppTags, {
            Vue,
            propsData: {
                item: item
            }
        });
    });

    afterEach(() => {
        appTagsWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appTagsWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a <v-chip> element', () => {
        expect(appTagsWrapper.contains('v-chip-stub')).toBe(true);
    });
    it('it should match props element', () => {
        expect(appTagsWrapper.find('v-chip-stub').text()).toMatch('Vegeterian')
    });

});