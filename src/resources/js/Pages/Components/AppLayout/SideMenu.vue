<template>
    <div>
        <aside id="menu_side" data-state="none">
            <div class="left">
                <ul id="menu_links">
                    <li><inertia-link>ROUPAS</inertia-link></li>
                    <hr/>
                    <li><inertia-link>ACESSÓRIOS</inertia-link></li>
                    <hr/>
                    <li><inertia-link>JOIAS</inertia-link></li>
                    <hr/>
                    <li><inertia-link>CONTATO</inertia-link></li>
                    <hr/>
                    <li><inertia-link>SOBRE NÓS</inertia-link></li>
                    <hr/>
                </ul>
            </div>
            <div class="right">
                <button id="pushButton" @click="showSideMenu()">
                    <Arrow2 id="pushIcon" data-arrowflip="none"/>
                </button>
            </div>
        </aside>
    </div>
</template>

<script>
import Arrow2 from "../SVGs/Arrow2";
export default {
    methods:{
        showSideMenu(){
            var sideMenu = document.querySelector('#menu_side'),
                arrow = document.querySelector('#pushIcon'),
                stateNow = sideMenu.getAttribute('data-state');
            
            if(stateNow == "none" || stateNow == "hide"){
                sideMenu.dataset.state = "show";
                arrow.dataset.arrowflip = "left";
            }
            else{
                sideMenu.dataset.state = "hide";
                arrow.dataset.arrowflip = "right";
            }
        },
    },
    components: {
        Arrow2,
    },
};
</script>

<style lang="scss" scoped>
@import "resources/css/sass/allImports";

//+----------------------------------------+
//|             ESTILO GERAL               |
//+----------------------------------------+
#menu_side {
    display: none;
}

//+----------------------------------------+
//|                ANIMAÇÕES               |
//+----------------------------------------+
@import 'resources/css/sass/sectionanims';
@include sideMenu_anim();

[data-state]{
    // 
}
[data-state="show"]{
    animation: toRight 200ms ease-out 0ms 1 normal both;
}
[data-state="hide"]{
    animation: toLeft 200ms ease-in 0ms 1 normal both;
}


[data-arrowflip]{

}
[data-arrowflip="right"]{
    animation: arrowRight 300ms ease-out 0ms 1 normal both;

}
[data-arrowflip="left"]{
    animation: arrowLeft 300ms ease-out 0ms 1 normal both;

}

//+----------------------------------------+
//|            RESPONSIVIDADE              |
//+----------------------------------------+
@media (max-width: 500px) {
    #menu_side {
        display: flex;

        position: fixed;

        top: 0;
        bottom: 0;
        left: 0;

        transform: translateX(-82%);

        .left {
            padding-top: 14vw;
            width: 45vw;
            background-color: $black;

            z-index: 100;

            border-right: 1px solid $notwhite;
            #menu_links{
                li{
                    margin-left: 1vw;

                    font-size: 3vw;
                    a{
                        color: $white;
                    }
                }
                hr{
                    border: none;
                    outline: none;

                    height: 1px;
                    background-color: $notwhite;

                    margin: 1vw 0 1vw 0;
                }
            }
            
        }
        .right {
            padding-top: 36.5vw;

            z-index: 10;
            #pushButton {
                background-color: $black;
                border: none;
                cursor: pointer;

                height: 10vw;
                width: 10vw;

                padding: 1.5vw 1.5vw 1.5vw 2vw;

                border-radius: 0 1.5vw 1.5vw 0;

                transform: translateX(-3px);

                -webkit-tap-highlight-color: transparent;
                
                #pushIcon {
                    height: 100%;
                    width: 100%;
                    transform: rotateZ(-90deg);
                }
            }
        }
    }
}
@media (max-width: 350px) {
    #menu_side {
        .left {
            padding-top: 19vw;
            width: 45vw;

            #menu_links{
                li{
                    margin-left: 1.4vw;

                    font-size: 4.2vw;
                }
                hr{
                    margin: 2vw 0 2vw 0;
                }
            }
            
        }
        .right {
            z-index: 10;

            #pushButton {
                background-color: $black;
                border: none;
                cursor: pointer;

                height: 10vw;
                width: 10vw;

                padding: 1.5vw 1.5vw 1.5vw 2vw;

                border-radius: 0 1.5vw 1.5vw 0;

                transform: translateX(-3px);

                -webkit-tap-highlight-color: transparent;
                
                #pushIcon {
                    height: 100%;
                    width: 100%;
                    transform: rotateZ(-90deg);
                }
            }
        }
    }
}
</style>
