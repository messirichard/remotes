<template>
    <div class="m-subheader">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="m-subheader__title ">API</h3>
                <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
                    <li class="m-nav__item m-nav__item--home">
                        <a href="#" class="m-nav__link m-nav__link--icon">
                            <v-icon>mdi-home</v-icon>
                        </a>
                    </li>
                    <li class="m-nav__separator">-</li>
                    <ApiTxtHeader />
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ApiTxtHeader from '@/components/molecules/Dashboard/Api/ApiTxtHeader.vue'
    export default Vue.extend({
        components: {
            // ApisIconHeader,
            ApiTxtHeader
        }
    })
</script>

<style lang="scss">
    @import "@/assets/sass/insidetables.scss";
</style>