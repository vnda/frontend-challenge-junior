<template>
    <div :class="layout">
        <nav>
            <div class="left">
                <inertia-link><LogoRose /></inertia-link>
            </div>
            <div class="center">
                <ul id="menu_links">
                    <li><inertia-link>ROUPAS</inertia-link></li>
                    <li><inertia-link>ACESSÓRIOS</inertia-link></li>
                    <li><inertia-link>JOIAS</inertia-link></li>
                    <li><inertia-link>CONTATO</inertia-link></li>
                    <li><inertia-link>SOBRE NÓS</inertia-link></li>
                </ul>
            </div>
            <div class="right">
                <button @click="searchField()"><Search class="icons" /></button>
                <inertia-link><User class="icons" /></inertia-link>
                <inertia-link><Cart class="icons" /></inertia-link>
            </div>
        </nav>
        <div
            id="search_container"
            data-searchstate="none"
            style="display: none"
        >
            <form action="busca" method="get">
                <input type="text" name="search" id="searchInput" />
                <button type="submit" id="searchButton">
                    <Search id="searchIcon" />
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import LogoRose from "../SVGs/LogoRose";

import Cart from "../SVGs/Cart";
import User from "../SVGs/User";
import Search from "../SVGs/Search";
import Arrow from "../SVGs/Arrow";
export default {
    data() {
        return {
            searchFieldState: false,
        };
    },
    methods: {
        searchField() {
            var state = this.searchFieldState,
                searchButton = document.querySelector("#search_container");

            if (state) {
                searchButton.dataset.searchstate = "hide";
                searchButton.style.display = "none";

                this.$data.searchFieldState = false;
            } else {
                searchButton.style.display = "block";
                searchButton.dataset.searchstate = "show";

                this.$data.searchFieldState = true;
            }
        },
    },
    components: {
        LogoRose,
        Cart,
        User,
        Search,
        Arrow,
    },
    props: {
        layout: String,
    },
};
</script>

<style lang="scss" scoped>
@import "resources/css/sass/allImports";
@import "resources/css/sass/components/Menu/mixins";

//+----------------------------------------+
//|             ESTILO GERAL               |
//+----------------------------------------+
.block {
    nav {
        display: grid;
        grid-template-columns: 4fr 9fr 4fr;
        justify-items: center;
        align-items: center;

        padding: 0.7vw 1vw 0.7vw 1vw;
        background-color: $black;

        z-index: 100;

        .left {
            width: 12vw;
        }
        .center {
            #menu_links {
                li {
                    display: inline-block;
                    margin: 0 1.2vw 0 1.2vw;

                    @include anchor();
                    font-size: 1.4vw;
                }
            }
        }
        .right {
            display: flex;
            justify-content: space-between;

            width: 6vw;

            .icons {
                width: 1.5vw;
                height: 1.5vw;
            }
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
        }
    }

    #search_container {
        padding: 0.7vw 1vw 0.4vw 1vw;

        background-color: $notblack;

        form {
            display: grid;
            grid-template-columns: 18fr 1fr;
            grid-template-rows: 2.4vw;

            width: 100%;
            height: 100%;

            #searchInput {
                flex-grow: 1;

                background-color: transparent;
                border: none;
                border-bottom: 1px solid $white;

                @include Font2_SS();
                font-size: 1.4vw;
                color: $notwhite;
            }
            #searchButton {
                background-color: transparent;
                border: none;

                cursor: pointer;

                #searchIcon {
                    width: 2vw;
                    height: 2vw;
                }
            }
        }
    }
}

//+----------------------------------------+
//|           ESTILO QUANDO SCROLL         |
//+----------------------------------------+

.fixed {
    position: fixed;
    left: 0;
    right: 0;

    nav {
        text-align: center;

        padding: 1vw 1vw 1vw 1vw;
        background-color: $black;

        z-index: 100;

        .left {
            display: none;
        }
        .center {
            #menu_links {
                li {
                    display: inline-block;
                    margin: 0 2vw 0 2vw;

                    @include anchor();
                    font-size: 1.4vw;
                }
            }
        }
        .right {
            display: none;
        }
    }
}

//+----------------------------------------+
//|                ANIMAÇÕES               |
//+----------------------------------------+

// [data-searchState] {
// //
// }
[data-searchState="none"] {
    transform: translateY(-100%) translateZ(-1vw);
    opacity: 0;
}
[data-searchState="hide"] {
    transform: translateY(-100%) translateZ(-1vw);
    opacity: 0;
}
[data-searchState="show"] {
    transform: translateY(0) translateZ(-1vw);
    opacity: 1;
}

//+----------------------------------------+
//|            RESPONSIVIDADE              |
//+----------------------------------------+
@media (max-width: 800px) {
    .block {
        transform-style: preserve-3d;

        nav {
            grid-template-columns: 1fr 4fr 1fr;

            padding: 0.8vw 0.8vw 0.8vw 0.8vw;

            z-index: 100;

            .left {
                width: 14vw;
            }
            .center {
                #menu_links {
                    li {
                        margin: 0 1vw 0 1vw;
                        font-size: 2vw;
                    }
                }
            }
            .right {
                width: 10vw;

                .icons {
                    width: 2.5vw;
                    height: 2.5vw;
                }
            }
        }

        #search_container {
            padding: 0.7vw 2.5vw 0.4vw 2.5vw;

            form {
                grid-template-columns: 19fr 1fr;
                grid-template-rows: 4.3vw;

                #searchInput {
                    @include Font2_SS();
                    font-size: 2vw;
                }
                #searchButton {
                    #searchIcon {
                        width: 3vw;
                        height: 3vw;
                    }
                }
            }
        }
    }

    .fixed {
        nav {
            padding: 1vw 0.8vw 0.8vw 1vw;

            .center {
                #menu_links {
                    li {
                        margin: 0 2.5vw 0 2.5vw;
                        font-size: 2.5vw;
                    }
                }
            }
        }
    }
}

@media (max-width: 600px) {
    .block {
        nav {
            grid-template-columns: 4fr 15fr 4fr;

            padding: 1vw 1.2vw 1vw 1.2vw;

            .left {
                width: 16vw;
            }
            .center {
                #menu_links {
                    li {
                        margin: 0 1.2vw 0 1.2vw;
                        font-size: 2.2vw;
                    }
                }
            }
            .right {
                .icons {
                    width: 2.7vw;
                    height: 2.7vw;
                }
            }
        }
    }
}

@media (max-width: 500px) {
    .block,
    .fixed {
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 1.5vw 3vw 1.5vw 3vw;

            .left {
                display: block;
                width: 24vw;
            }
            .center {
                display: none;
            }
            .right {
                display: flex;
                justify-content: space-between;

                width: 20vw;

                .icons {
                    width: 5vw;
                    height: 5vw;
                }
                button {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }
            }
        }
        #search_container {
            padding: 0.7vw 2.5vw 0.4vw 2.5vw;

            background-color: $notblack;

            form {
                display: grid;
                grid-template-columns: 19fr 1fr;
                grid-template-rows: 4.3vw;

                width: 100%;
                height: 100%;

                #searchInput {
                    flex-grow: 1;

                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid $white;

                    @include Font2_SS();
                    font-size: 2vw;
                    color: $notwhite;
                }
                #searchButton {
                    background-color: transparent;
                    border: none;

                    cursor: pointer;

                    #searchIcon {
                        width: 3vw;
                        height: 3vw;
                    }
                }
            }
        }
    }
}

@media (max-width: 350px) {
    .block,
    .fixed {
        nav {
            padding: 2.4vw 5vw 2.4vw 5vw;

            .left {
                width: 28vw;
            }
            .right {
                width: 23vw;

                .icons {
                    width: 6vw;
                    height: 6vw;
                }
            }
        }
        #search_container {
            padding: 2vw 4vw 2vw 4vw;

            form {
                grid-template-columns: 19fr 3fr;
                grid-template-rows: 8vw;

                #searchInput {
                    flex-grow: 1;

                    font-size: 5vw;
                }
                #searchButton {
                    #searchIcon {
                        width: 6vw;
                        height: 6vw;
                    }
                }
            }
        }
    }
}
</style>
