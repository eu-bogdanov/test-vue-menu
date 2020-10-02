<template>
    <div class='main-page'>
        <div class='main-page__container'>
            <div class='main-page__burger-menu'>
                <nav class="main-nav">
                    <Burger />
                </nav>
                <Sidebar>
                    <ul class="sidebar-panel">
                        <li
                            v-for='item in navigationMenu'
                            :key='item.id'
                            @click="closeSidebarPanel"
                        >
                            <a href='#'>{{item.title}}</a>
                        </li>
                    </ul>
                </Sidebar>
            </div>
            <Header :navMenu="navigationMenu" :menuList="menuList" />
        </div>
    </div>
</template>

<script>
import Header from './Header';
import Burger from './menu/Burger';
import Sidebar from './menu/Sidebar';
import { mutations } from '@/store.js'

export default {
    name: 'mainPage',
    components: { Header, Burger, Sidebar },
     methods: {
        closeSidebarPanel: mutations.toggleNav
    },
    data() {
        return {
            navigationMenu: [
                {
                    id: 1,
                    title: 'Menu 1',
                    url: '/menu1'
                },
                {
                    id: 2,
                    title: 'Menu 2',
                    url: '/menu2'
                },
                {
                    id: 3,
                    title: 'Menu 3',
                    url: '/menu3'
                }
            ],
            menuList: [
                {
                    id: 111,
                    navId: 1,
                    mainSubMenu: [
                        {
                            id: 1111,
                            title: 'Home',
                            url: '/home/menu1'
                        },
                        {
                            id: 1112,
                            title: 'News',
                            url: '/news/menu1'
                        },
                        {
                            id: 1113,
                            title: 'Items',
                            url: '/items/menu1'
                        },
                        {
                            id: 1114,
                            title: 'Apps',
                            url: '/apps/menu1'
                        },
                        {
                            id: 1115,
                            title: 'About Us',
                            url: '/about/menu1'
                        },
                    ],
                    secondarySubMenu: [
                        {
                            id: 1116,
                            title: 'Item 1',
                            icon: 'info-circle'
                        },
                        {
                            id: 1117,
                            title: 'Item 2',
                            icon: 'dribbble'
                        },
                        {
                            id: 1118,
                            title: 'Item 3',
                            icon: 'bug'
                        },
                        {
                            id: 1119,
                            title: 'Item 4',
                            icon: 'star'
                        },
                          {
                            id: 1120,
                            title: 'Item 1',
                            icon: 'smile'
                        },
                        {
                            id: 1121,
                            title: 'Item 2',
                            icon: 'like'
                        },
                        {
                            id: 1122,
                            title: 'Item 3',
                            icon: 'fire'
                        },
                        {
                            id: 1123,
                            title: 'Item 4',
                            icon: 'insurance'
                        }
                    ]
                },
                {
                    id: 222,
                    navId: 2,
                    mainSubMenu: [
                        {
                            id: 2221,
                            title: 'Home',
                            url: '/home/menu2'
                        },
                        {
                            id: 2222,
                            title: 'Our works',
                            url: '/works/menu2'
                        },
                        {
                            id: 2223,
                            title: 'Our team',
                            url: '/team/menu2'
                        },
                        {
                            id: 2224,
                            title: 'Apps',
                            url: '/apps/menu2'
                        }
                    ],
                    secondarySubMenu: [
                        {
                            id: 2226,
                            title: 'Title 1',
                            icon: 'bug'
                        },
                        {
                            id: 2227,
                            title: 'Title 2',
                            icon: 'star'
                        },
                        {
                            id: 2228,
                            title: 'Title 3',
                            icon: 'insurance'
                        },
                        {
                            id: 2229,
                            title: 'Title 4',
                            icon: 'like'
                        },
                        {
                            id: 2230,
                            title: 'Title 1',
                            icon: 'bug'
                        },
                        {
                            id: 2231,
                            title: 'Title 2',
                            icon: 'robot'
                        },
                        {
                            id: 2232,
                            title: 'Title 3',
                            icon: 'monitor'
                        },
                        {
                            id: 2233,
                            title: 'Title 4',
                            icon: 'reload'
                        }
                    ]
                },
                {
                    id: 333,
                    navId: 3,
                    mainSubMenu: [
                        {
                            id: 3331,
                            title: 'Home',
                            url: '/home/menu1'
                        },
                        {
                            id: 3332,
                            title: 'Shedule',
                            url: '/shedule/menu1'
                        },
                        {
                            id: 3333,
                            title: 'Items',
                            url: '/items/menu1'
                        },
                        {
                            id: 3334,
                            title: 'Apps',
                            url: '/apps/menu1'
                        },
                        {
                            id: 3335,
                            title: 'About Us',
                            url: '/about/menu1'
                        },
                        {
                            id: 3336,
                            title: 'About Us',
                            url: '/about/menu1'
                        },
                    ],
                    secondarySubMenu: [
                        {
                            id: 3337,
                            title: 'Title 1',
                            icon: 'bug'
                        },
                        {
                            id: 3338,
                            title: 'Title 2',
                            icon: 'star'
                        },
                        {
                            id: 3339,
                            title: 'Title 3',
                            icon: 'insurance'
                        },
                        {
                            id: 33310,
                            title: 'Title 4',
                            icon: 'like'
                        },
                        {
                            id: 33311,
                            title: 'Title 5',
                            icon: 'smile'
                        },
                        {
                            id: 3312,
                            title: 'Title 1',
                            icon: 'sound'
                        },
                        {
                            id: 3313,
                            title: 'Title 2',
                            icon: 'coffee'
                        },
                        {
                            id: 3314,
                            title: 'Title 3',
                            icon: 'bug'
                        },
                        {
                            id: 33315,
                            title: 'Title 4',
                            icon: 'trademark'
                        },
                        {
                            id: 33316,
                            title: 'Title 5',
                            icon: 'robot'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang='scss'>
.main-page {
    height: 100vh;
    &__container {
        position: relative;
        height: 100%;
    }
}
html {
   height: 100%;
   overflow:hidden;
}
body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(101,31,87);
}
.main-nav {
   display: flex;
   padding: 0.5rem 0.8rem;
   background-color: #2B2C2D;
   box-shadow: 0 2px 8px #f0f1f2;
}
ul.sidebar-panel {
    padding-left: 0;
    list-style-type: none;
}
ul.sidebar-panel > li > a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding: 0.5em 0 0.5em 0.5em;
}
.main-page__burger-menu {
    display: none;
}
@media screen and (max-width: 768px) {
    .main-page__burger-menu {
        display: block;
    }
}
</style>