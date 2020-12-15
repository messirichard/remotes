<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper mt-5">
        <div class="m-content">
            <div class="m-portlet">
                <div class="m-portlet__body m-portlet__body--no-padding">
                    <div class="m-pricing-table-2">
                        <div class="m-pricing-table-2__head">
                            <div class="m-pricing-table-2__title m--font-light">
                                <h1>Pricing</h1>
                            </div>
                            <div class="btn-group nav m-btn-group m-btn-group--pill m-btn-group--air" role="group">
                                <button type="button"
                                    class="btn m-btn--pill  active m-btn--wide m-btn--uppercase m-btn--bolder"
                                    data-toggle="tab" href="#m-pricing-table_content1" role="tab" aria-expanded="true">
                                    Monthly
                                </button>
                                <button type="button"
                                    class="btn m-btn--pill  m-btn--wide m-btn--uppercase m-btn--bolder"
                                    data-toggle="tab" href="#m-pricing-table_content2" role="tab" aria-expanded="false">
                                    Annual Save 20%
                                </button>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane active" id="m-pricing-table_content1" aria-expanded="true">
                                <div class="m-pricing-table-2__content">
                                    <div class="m-pricing-table-2__container upgrade-window">
                                        <div class="m-pricing-table-2__items row">
                                            <JustLanded />
                                            <Beginner />
                                            <Professional />
                                            <Industrial />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
    import Beginner from '@/components/organism/Dashboard/Subcription/Beginner.vue';
    import Industrial from '@/components/organism/Dashboard/Subcription/Industrial.vue';
    import JustLanded from '@/components/organism/Dashboard/Subcription/JustLanded.vue';
    import Professional from '@/components/organism/Dashboard/Subcription/Professional.vue';

    export default Vue.extend({
        components: {
            Beginner,
            Industrial,
            JustLanded,
            Professional,
        }
    })
</script>

<style lang="scss">
    @import '@/assets/sass/Subcription.scss';
</style>