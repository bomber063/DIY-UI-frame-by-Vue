<template>
        <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]:true}">
            <svg v-if="icon" class="icon"  aria-hidden="true">
                <use :xlink:href="`#i-${icon}`"></use>
            </svg>
            <div class="content">
                <slot ></slot>
            </div>
        </button>
</template>
<script>
    export default {
        props:['icon','icon-position']
    }
</script>
<style lang="scss">
    .g-button{
        vertical-align: top;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size);
        height:var(--button-height);
        padding: 0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background: var(--button-active-bg);
        }
        &:focus{
            outline: none;//这里是不显示默认蓝色的边框，后续在加focus的样式
        }
        & .icon{
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            order:1;
            margin-right:.1em;
            /*fill: currentColor;*/
            /*overflow: hidden;*/
        }
        & .content{
            order:2;
        }
        &.icon-right{
            & .icon{
                order:2;
                margin-left:.1em;
                margin-right:0;
            }
            & .content{
                order:1;
            }
        }
    }

</style>