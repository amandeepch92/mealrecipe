<template>
  <v-app>
    <app-header
      :showNavLink="showNavLink"
      :footerDescription="footerDescription"
      :links="navLinkUrl"
      :defaultPageUrl="defaultPageUrl"
      :headerMainTitle="headerMainTitle"
    />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer v-bind:footerDescription="footerDescription" />
  </v-app>
</template>


<script>
import { AppHeader, AppFooter } from "@/components";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      showNavLink: true,
      footerDescription: "Meal Recipes",
      headerMainTitle: "Meal Recipes",
      navLinkUrl: [
        {
          label: "Dashboard",
          url: "/"
        },{
          label:"Categories",
          url:"/categories"
        }
      ],
      defaultPageUrl:"/"
    };
  }
};
</script>