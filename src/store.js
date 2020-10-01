import Vue from "vue";

export const store = Vue.observable({
    isMenuOpen: false
});

export const mutations = {
    toggleNav() {
        store.isMenuOpen = !store.isMenuOpen
    }
};