<template>
    <div class="sidebar">
        <div class="sidebar__backdrop"
            @click="closeSidebarPanel"
            v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen" class="sidebar__panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import { store, mutations } from '@/store.js'
export default {
    methods: {
        closeSidebarPanel: mutations.toggleNav
    },
    computed: {
        isPanelOpen() {
            return store.isMenuOpen
        }
    }
}
</script>

<style lang='scss'>
slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease;
}
.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}
.sidebar {
    &__backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 45px;
        left: 0;
        cursor: pointer;
    }
    &__panel {
        overflow-y: auto;
        background-color: #73b0d6;
        position: fixed;
        left: 0;
        top: 45px;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
        font-weight: bold;
        a:hover {
            color: #1564a5
        }
        li:hover {
            background-color: #fff;
        }
    }
}
</style>