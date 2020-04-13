### meal_prep ------------
```
Description: This app will be useful for preparing meal of your choice.
This app has been implemented using Meal Db API which fetch all the meal details available on server.
This Application is build using VueJS as front end Js framework with possible best practices.
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large application.
It uses vue cli as a Standard Tooling for Vue.js Development.
```

### Installations -------------
## Vue CLI
```
This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Project setup (loading/importing all required packages)
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

## Setting up vue/cli
```
npm install -g @vue/cli

Note: You can check you have the right version with this command:
vue --version
```

## Installation of all required packages
```
npm install
Note: Run in a separate terminal or cmd.
```

## Compiles and hot-reloads for frontend development
```
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Unit test cases
```
npm run test:unit
```

## end to end test cases
```
npm run test:e2e
```

## Lints and fixes files
```
npm run lint
```

### Project Guidelines ------------

1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : CategoryDetails, getCategoryDetails(), MealRecipeDetails etc. 

2) Folder Naming Convention, Components directives in vue : kabab-case
   Example : app-header, <app-header />

3) Coding Standards  
   a. kabab-case:
      folder names, vue component directives, css classes etc.
   b. camelCase:
      vue component file names, js variables, objects, functions etc
   c. PascalCase:
      importing npm packages etc. 


### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. vuetify:
   Vuetify is a Vue UI Library with beautifully handcrafted Material Components. we can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Material Design Component Framework. Release cadence : Weekly
   Please refer below url for more details:
   https://vuetifyjs.com/en/getting-started/quick-start

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, coverageThreshold etc
   for getting exact code coverage with reports.

4. @vue/cli-plugin-e2e-cypress:
   This adds E2E testing support using Cypress.
   Cypress offers a rich interactive interface for running E2E tests, but currently only supports running the tests in Chromium.
   We can see colorful coverage report by opeing ../coverage/lcov-report/index.html via any browser.
   
   Please refer below url for more details:
   https://www.npmjs.com/package/@vue/cli-plugin-e2e-cypress



