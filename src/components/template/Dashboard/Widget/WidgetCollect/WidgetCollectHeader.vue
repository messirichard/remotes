<template>
    <div class="m-subheader">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="m-subheader__title ">Widget Collection</h3>
                <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
                    <li class="m-nav__item m-nav__item--home">
                        <a href="#" class="m-nav__link m-nav__link--icon">
                            <v-icon>mdi-home</v-icon>
                        </a>
                    </li>
                    <li class="m-nav__separator">-</li>
                    <WidgetDefaultTxtHeader />
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import WidgetDefaultTxtHeader from '@/components/molecules/Dashboard/Widget/WidgetDefaultTxtHeader.vue'

    export default Vue.extend({
        components: {
            WidgetDefaultTxtHeader
        }
    })
</script>

<style lang="scss">
  @import "@/assets/sass/insidetables.scss";
</style>