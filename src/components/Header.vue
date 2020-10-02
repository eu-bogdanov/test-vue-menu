<template>
    <div class='header'>
        <div class='header__container'>
            <div class='header__menu'>
                <div
                    class='header__menu-item'
                    v-for='item in navMenu'
                    :key='item.id'
                    @mouseenter="onTabHover(item)"
                >
                    <a-dropdown
                        :overlayClassName="`${!!selectedTab && +selectedTab.navId === +item.id ? `drop-down`:''}`"
                    >
                        <a class="ant-dropdown-link"
                            @click="e => e.preventDefault()" 
                        >
                            {{item.title}}
                        </a>
                        <a-menu slot="overlay" v-if="!!selectedTab && +selectedTab.navId === +item.id">
                            <a-row class='header__menu-content'>
                                <a-col :span="10" class='header__menu-left'>
                                    <a-menu-item
                                        v-for="tab of selectedTab.mainSubMenu"
                                        :key="tab.id"
                                    >
                                        <a rel="noopener noreferrer" :href="tab.url">{{tab.title}}</a>
                                    </a-menu-item>
                                </a-col>
                                <a-col :span="14" class='header__menu-right'>
                                    <a-menu-item
                                        v-for="tab of selectedTab.secondarySubMenu"
                                        :key="tab.id"
                                    >
                                        <a rel="noopener noreferrer" href="#"><a-icon :type="tab.icon" :style="{fontSize: '19px', marginRight: '5px'}" />{{tab.title}}</a>
                                    </a-menu-item>
                                </a-col>
                            </a-row>
                        </a-menu>
                    </a-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        navMenu: {
            type: Array
        },
        menuList: {
            type: Array
        }
    },
    data() {
        return {
            currentTab: null,
            selectedTab: []
        }
    },
    watch: {
        currentTab: function () {
            this.selectedTab = !!this.menuList && this.menuList.find(el => el.navId === this.currentTab);
        }
    },
    methods: {
        onTabHover(item) {
            this.currentTab = item.id;
            this.selectedTab = !!this.menuList && this.menuList.find(el => el.navId === this.currentTab);
        },
    }
}
</script>

<style lang='scss'>
.header {
    background-color: #2B2C2D;
    box-shadow: 0 2px 8px #f0f1f2;
    &__container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 50px;
    }
    &__menu {
        width: 100%;
        height: 50px;
        display: flex;
    }
    &__menu-item {
        padding: 0 5px;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 1rem;
        a {
            color: #fff;
        }
    }
    &__menu-left,
    &__menu-right {
        a {
            color: #000;
        }
        a:hover {
            color: #1564a5;
        }
        li {
            margin-bottom: 5px;
        }
        li:last-child {
            margin-bottom: 0;
        }
    }
    &__menu-right {
        background:#fff;
        border-radius: 5px;
        display: flex !important;
        flex-wrap: wrap !important;
        flex-direction: column;
        max-height: 150px;
        padding: 10px 0;
        padding-left: 10px !important;
        padding-right: 10px !important;
        a {
            padding: 0 0 0 5px;
            display: flex;
            align-items: center;
        }
    }
}
.ant-dropdown-menu {
    width: auto;
    min-width: 500px !important;
    padding: 10px !important;
}
.ant-dropdown.ant-dropdown-placement-bottomLeft {
    top: 30px !important;
    margin-top: 20px;
}
ul.ant-dropdown-menu.ant-dropdown-menu-vertical.ant-dropdown-menu-root.ant-dropdown-menu-light.ant-dropdown-content {
    background-color: #73b0d6;
}
.drop-down:after,
.drop-down:before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 19px;
  border: 11px solid transparent;
  border-bottom-color: #dddddd;
}
.drop-down:after {
    left: 9px;
    border: 10px solid transparent;
    border-bottom-color: #73b0d6;
}
@media screen and  (max-width: 768px) {
    .header {
        display: none;
    }
}
</style>