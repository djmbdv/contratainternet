/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('companies-gestion', require('./components/companies/gestion/CompaniesGestion.vue').default);

Vue.component('company-creation', require('./components/companies/creation/CreationForm.vue').default);

Vue.component('test-page', require('./components/companies/gestion/TestAutocomplete.vue').default);
Vue.component('autocomplete-test', require('./components/companies/creation/AutoCompleteTest1.vue').default);

import AutocompleteVue from 'autocomplete-vue';
Vue.component('autocomplete-vue', AutocompleteVue);

import VueResource from 'vue-resource';
Vue.use(VueResource);
/**

 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components:{
        /** */
    }
});
