<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <div class="m-subheader ">
            <ConfigHeaderTxt />
        </div>
        <div class="m-content">
            <div class="row">
                <div class="col-md-6">
                    <ConfigLeft />
                </div>
                <div class="col-md-6">
                    <ConfigRight />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ConfigRight from '@/components/template/Dashboard/Config/ConfigRight.vue'
    import ConfigLeft from '@/components/template/Dashboard/Config/ConfigLeft.vue'
    import ConfigHeaderTxt from '@/components/molecules/Dashboard/Config/ConfigHeaderTxt.vue'

    export default Vue.extend({
        components: {
            ConfigLeft,
            ConfigRight,
            ConfigHeaderTxt
        },
    })
</script>