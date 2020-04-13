import {
    shallowMount
} from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import AppCard from '@/components/cards/cards.vue';

describe('In app-card Component', () => {
    let appCardWrapper;
    beforeEach(() => {
        const actionBtn ='actionBtn';
        const routeName='CategoryDetails';
        const description='Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.';
        const tags='vegeterian';
        const title='Category';
        const imageSource='https://www.themealdb.com/images/category/vegan.png';
        const paramvalue='vegeterian';
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        appCardWrapper = shallowMount(AppCard, {
            Vue,
            propsData: {
                actionBtn: actionBtn,
                  description:description,
                  tags:tags,
                  title:title,
                  imageSource:imageSource,
                  routeName:routeName,
                  paramvalue:paramvalue
            }
        });
    });

    afterEach(() => {
        appCardWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appCardWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a <v-card> element', () => {
        expect(appCardWrapper.contains('v-card-stub')).toBe(true);
    });
    it('it should have a <v-img> element', () => {
        expect(appCardWrapper.contains('v-img-stub')).toBe(true);
    });
    it('it should have a <v-card-text> element', () => {
        expect(appCardWrapper.contains('v-card-text-stub')).toBe(true);
    });
    it('it should have a <v-card-actions> element', () => {
        expect(appCardWrapper.contains('v-card-actions-stub')).toBe(true);
    });
    it('it should have a <v-btn> element', () => {
        expect(appCardWrapper.contains('v-btn-stub')).toBe(true);
    });

    it('check props', ()=>{
        expect(appCardWrapper.vm.imageSource).toBe('https://www.themealdb.com/images/category/vegan.png')
      })
});